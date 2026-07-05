(function installSydneyTimetableHelper() {
  function normaliseWhitespace(text) {
    return String(text || "").replace(/\s+/g, " ").trim();
  }

  function looksLikeUnitCode(value) {
    return /^[A-Z]{4}\d{4}(?:-[A-Z0-9-]+)?$/.test(String(value || ""));
  }

  function findUnitCode(text) {
    const match = String(text || "").match(/[A-Z]{4}\d{4}(?:-[A-Z0-9-]+)?/);
    return match ? match[0] : "UNKNOWN_UNIT";
  }

  function inferActivityType(text) {
    const clean = String(text || "");
    const orderedMatches = [...clean.matchAll(/\b(Lecture|Tutorial|Laboratory|Lab|Workshop|Seminar|Practical)\b/gi)];

    if (orderedMatches.length === 0) return "Unknown";

    const last = orderedMatches[orderedMatches.length - 1][1].toLowerCase();
    if (last === "laboratory") return "Lab";
    return last.charAt(0).toUpperCase() + last.slice(1);
  }

  function getContextTextForTable(table) {
    const chunks = [];
    let node = table;

    for (let depth = 0; depth < 4 && node; depth += 1) {
      if (node.innerText) chunks.push(node.innerText);

      let sibling = node.previousElementSibling;
      let count = 0;
      while (sibling && count < 3) {
        if (sibling.innerText) chunks.push(sibling.innerText);
        sibling = sibling.previousElementSibling;
        count += 1;
      }

      node = node.parentElement;
    }

    return normaliseWhitespace(chunks.join("\n"));
  }

  function getUnitName(contextText, unitCode) {
    const lines = String(contextText || "")
      .split(/\n| {2,}/)
      .map(line => normaliseWhitespace(line))
      .filter(Boolean);
    const unitIndex = lines.findIndex(line => line.includes(unitCode));

    if (unitIndex < 0) return "";

    for (let i = unitIndex + 1; i < Math.min(unitIndex + 5, lines.length); i += 1) {
      const line = lines[i];
      if (
        line &&
        !looksLikeUnitCode(line) &&
        !/Lecture|Tutorial|Preference|Activity|Semester|Allocate|Allocated|Read Only/i.test(line)
      ) {
        return line;
      }
    }

    return "";
  }

  function parseDemand(value) {
    const match = String(value || "").match(/(\d+)\s*%/);
    return match ? Number(match[1]) : null;
  }

  function parseNumber(value) {
    const match = String(value || "").match(/\d+/);
    return match ? Number(match[0]) : null;
  }

  function parseDuration(durationText) {
    const match = String(durationText || "").match(/(\d+(?:\.\d+)?)\s*(?:hr|hour)/i);
    return match ? Number(match[1]) : 1;
  }

  function addHours(time, hours) {
    const [h, m] = String(time || "00:00").split(":").map(Number);
    const minutes = h * 60 + m + Math.round(hours * 60);
    const endHour = Math.floor(minutes / 60);
    const endMinute = minutes % 60;
    return `${String(endHour).padStart(2, "0")}:${String(endMinute).padStart(2, "0")}`;
  }

  function normalizeDay(value) {
    const day = normaliseWhitespace(value).slice(0, 3);
    const map = {
      Mon: "Mon",
      Tue: "Tue",
      Wed: "Wed",
      Thu: "Thu",
      Fri: "Fri",
      Sat: "Sat",
      Sun: "Sun"
    };
    return map[day] || "";
  }

  function normalizeTime(value) {
    const match = String(value || "").match(/\b(\d{1,2}):(\d{2})\b/);
    if (!match) return "";
    return `${match[1].padStart(2, "0")}:${match[2]}`;
  }

  function getHeaderIndexes(headerCells) {
    const wanted = {
      preference: /Preference/i,
      activity: /^Activity$/i,
      day: /^Day$/i,
      time: /^Time$/i,
      free: /^Free$/i,
      campus: /Campus/i,
      location: /Location|Room|Venue/i,
      duration: /Duration/i,
      weeks: /Weeks|Dates/i,
      description: /Description|Class/i
    };

    const indexes = {};

    for (const [key, regex] of Object.entries(wanted)) {
      indexes[key] = headerCells.findIndex(cell => regex.test(cell));
    }

    return indexes;
  }

  function findHeaderRow(rows) {
    return rows.find(row => {
      const cells = [...row.querySelectorAll("th,td")].map(cell => normaliseWhitespace(cell.innerText));
      const text = cells.join(" ");
      return /Activity/i.test(text) && /\bDay\b/i.test(text) && /\bTime\b/i.test(text);
    });
  }

  function getCell(cells, index) {
    return index >= 0 && index < cells.length ? cells[index] : "";
  }

  function makeActivityId(item) {
    return [
      item.unitCode,
      item.activityType,
      item.activity,
      item.day,
      item.time,
      item.location,
      item.campus
    ].map(value => String(value || "").replace(/\s+/g, "_")).join("-");
  }

  function extractActivitiesFromTables() {
    const tables = [...document.querySelectorAll("table")];
    const result = [];

    for (const table of tables) {
      const rows = [...table.querySelectorAll("tr")];
      const headerRow = findHeaderRow(rows);
      if (!headerRow) continue;

      const headerCells = [...headerRow.querySelectorAll("th,td")].map(cell => normaliseWhitespace(cell.innerText));
      const indexes = getHeaderIndexes(headerCells);

      if (indexes.activity < 0 || indexes.day < 0 || indexes.time < 0) continue;

      const contextText = getContextTextForTable(table);
      const unitCode = findUnitCode(contextText || document.body?.innerText || "");
      const activityType = inferActivityType(contextText);
      const unitName = getUnitName(contextText, unitCode);
      const headerIndex = rows.indexOf(headerRow);

      for (const row of rows.slice(headerIndex + 1)) {
        const cells = [...row.querySelectorAll("td")].map(cell => normaliseWhitespace(cell.innerText));
        if (cells.length < 3) continue;

        const day = normalizeDay(getCell(cells, indexes.day));
        const time = normalizeTime(getCell(cells, indexes.time));
        if (!day || !time) continue;

        const activity = getCell(cells, indexes.activity);
        const preferenceRaw = getCell(cells, indexes.preference);
        const freeRaw = getCell(cells, indexes.free);
        const campus = getCell(cells, indexes.campus);
        const location = getCell(cells, indexes.location) || campus;
        const duration = getCell(cells, indexes.duration) || "1 hr";
        const weeks = getCell(cells, indexes.weeks);
        const description = getCell(cells, indexes.description) || activityType;
        const demand = parseDemand(preferenceRaw);
        const freeSeats = indexes.free >= 0 ? parseNumber(freeRaw) : null;
        const durationHours = parseDuration(duration);
        const endTime = addHours(time, durationHours);

        const item = {
          unitCode,
          unitName,
          activityType,
          preference: preferenceRaw.replace(/\d+\s*%/, "").trim(),
          demand,
          demandText: demand === null ? "" : `${demand}%`,
          freeSeats,
          activity,
          day,
          time,
          endTime,
          campus,
          location,
          duration,
          durationHours,
          weeks,
          description,
          capturedAt: new Date().toISOString(),
          sourceUrl: window.location.href
        };

        item.id = makeActivityId(item);
        result.push(item);
      }
    }

    return result;
  }

  globalThis.__sydneyTimetableHelperExtract = function extractForPopup() {
    const activities = extractActivitiesFromTables();
    return {
      ok: true,
      activities,
      url: location.href,
      title: document.title
    };
  };

  if (globalThis.__sydneyTimetableHelperInstalled) return;
  globalThis.__sydneyTimetableHelperInstalled = true;

  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "READ_CURRENT_PAGE") {
      sendResponse(globalThis.__sydneyTimetableHelperExtract());
    }

    return true;
  });

})();
