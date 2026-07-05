const STORAGE_KEY = "sydney_timetable_activities_v1";
const LANGUAGE_KEY = "sydney_timetable_language_v1";
const IGNORE_CAPACITY_KEY = "sydney_timetable_ignore_capacity_v1";
const SUPPORT_URL = "https://buymeacoffee.com/edward_lee";
const FEEDBACK_URL = "https://forms.gle/b85QwGzyXchKVUpB6";

const messages = {
  zh: {
    appTitle: "USYD Timetable Planner",
    browserRecommendation: "建议使用 Chrome 或 Microsoft Edge 打开 Sydney Timetable。本插件主要按 Chromium 浏览器测试。",
    subtitle: "读取课程、避开冲突，帮你规划 USYD preference 顺序。",
    intro: "打开一门课的 Lecture 或 Tutorial 页面，然后点击读取当前页面。",
    stepOpen: "打开某门课的 Lecture 或 Tutorial preference 页面。",
    stepRead: "点击读取当前页面，录入当前表格。",
    stepRepeat: "每个 Lecture 和 Tutorial 都重复一次，最后生成方案。",
    readCurrent: "读取当前页面",
    generatePlan: "生成方案",
    exportExcel: "导出课表 CSV",
    clearAll: "新会话 / 清空数据",
    plannerSettings: "规划设置",
    language: "语言",
    ignoreCapacity: "忽略满员/百分比",
    strategy: "策略",
    randomStrategy: "随机无冲突",
    earlyStrategy: "尽早下课 + 优先空位",
    compactStrategy: "集中安排",
    availableDays: "可上课日期",
    capturedActivities: "已读取课程",
    plannerOutput: "规划结果",
    initialResult: "读取课程后点击生成方案。",
    emptySaved: "暂无读取记录。请打开 Lecture 或 Tutorial 页面后点击读取当前页面。",
    footerDonate: "如果这个工具帮到了你，可以随手支持一下后续维护。",
    feedbackTool: "反馈或报告问题",
    supportTool: "支持这个工具",
    footerPrivacy: "数据只保存在你的浏览器里。没有后端，没有账号。",
    exportNoData: "当前没有可导出的课程数据。",
    exportDone: "已导出课表 CSV。Excel 可以直接打开该文件。",
    duplicateRead: "当前页面之前已经读取过，没有新增课程选项。",
    readDelta: "新增 {newCount} 个选项，更新 {updatedCount} 个已有选项。",
    deleteCourse: "删除",
    deleteCourseDone: "已删除 {key}。",
    updatedAt: "更新于 {time}",
    exportPlanFirst: "请先读取课程数据；如果还没生成方案，导出时会按当前设置自动生成。",
    resultUpdated: "结果已更新，请查看下方“规划结果”。",
    captureUpdated: "读取完成，结果和已读取课程已更新。",
    planUpdated: "方案已生成，请查看下方课表和 preference 顺序。",
    exportUpdated: "导出已开始，请查看浏览器下载提示。",
    clearedUpdated: "已清空旧数据，可以开始新一轮读取。",
    primarySchedule: "主课表",
    preferenceList: "Preference 顺序",
    backupsReadable: "其他备用选择",
    readFailed: "读取失败。请确认当前标签页是 Sydney Timetable 页面，并且页面已加载完成。",
    noTable: "没有读到可用课程表格。当前版本会识别 preference 表格和 allocated/read-only 表格；如果表格是虚拟滚动，可能需要先滚动表格让行加载出来。",
    readSuccess: "已读取：{count} 个选项，来自 {frames} 个页面区域。",
    readHint: "已合并到本地缓存。请继续打开其他 Lecture / Tutorial 页面并点击读取当前页面。",
    needOneDay: "至少需要保留一天可上课。",
    noActivities: "还没有读取任何课程。请先打开课程页面并读取。",
    summary: "策略：{strategy} | 可上课日期：{days} | 满员处理：{capacity}",
    respectCapacity: "默认过滤已满",
    ignoreCapacityMode: "忽略满员",
    none: "无",
    manualReminder: "请确认已读取所有需要比较的 Lecture / Tutorial 页面。插件目前不会替你判断是否漏掉某门课。",
    disclaimer: "本工具生成的课表和 preference 顺序仅供参考。提交选课前，请回到 Sydney Timetable 人工二次确认时间、地点、名额、周次和最终 preference 顺序。",
    noAvailable: "{key}: 当前日期筛选下没有可推荐选项。",
    fullFiltered: "{key}: 有 {count} 个选项因满员或百分比过高被排除。可打开“忽略满员/百分比”查看。",
    unresolvedGroup: "{key}: 当前数据下无法放入主课表，通常是所有候选都与已选课程冲突，或被日期/满员规则过滤。",
    fullLectureFallback: "{key}: 为保证 lecture 有结果，已保留线上/无地点 lecture 选项，即使显示空位为 0。",
    lectureCapacityFallback: "{key}: 该 lecture 没有未满候选，已临时纳入满员 lecture 以保证主方案完整。",
    notEnough: "{key}: 需要至少 {required} 个 preferences，但当前只找到 {found} 个。",
    highDemand: "{key}: Activity {activity} demand 为 {demand}，竞争较高。",
    conflict: "时间冲突：{a} 与 {b} 重叠。",
    noConflict: "当前 first-choice 方案未发现硬时间冲突。",
    weeklyPreview: "周课表预览",
    recommended: "推荐偏好顺序",
    required: "需要",
    options: "个选项",
    noRecommended: "当前筛选条件下没有可推荐选项。",
    backupOptions: "备用选项",
    cleared: "已清空。",
    online: "Online / TBA"
  },
  en: {
    appTitle: "USYD Timetable Planner",
    browserRecommendation: "Recommended browser: Chrome or Microsoft Edge. This extension is mainly tested on Chromium browsers.",
    subtitle: "Capture classes, avoid clashes, and plan your USYD preferences.",
    intro: "Open one Lecture or Tutorial page, then click Read Current Page.",
    stepOpen: "Open a unit's Lecture or Tutorial preference page.",
    stepRead: "Click Read Current Page to capture that table.",
    stepRepeat: "Repeat for every Lecture and Tutorial, then generate a plan.",
    readCurrent: "Read Current Page",
    generatePlan: "Generate Plan",
    exportExcel: "Export Timetable CSV",
    clearAll: "New Session / Clear Data",
    plannerSettings: "Planner Settings",
    language: "Language",
    ignoreCapacity: "Ignore full classes / demand percentage",
    strategy: "Strategy",
    randomStrategy: "Random conflict-free",
    earlyStrategy: "Early finish + availability",
    compactStrategy: "Compact days",
    availableDays: "Available days",
    capturedActivities: "Captured Activities",
    plannerOutput: "Planner Output",
    initialResult: "Capture courses, then generate a plan.",
    emptySaved: "No captured activities yet. Open a Lecture or Tutorial page, then click Read Current Page.",
    footerDonate: "If this tool helped, you can support future maintenance.",
    feedbackTool: "Feedback or bug report",
    supportTool: "Support this tool",
    footerPrivacy: "All data stays in your browser. No backend. No account.",
    exportNoData: "No captured course data to export.",
    exportDone: "Timetable CSV exported. Excel can open this file directly.",
    duplicateRead: "This page was already captured; no new class options were added.",
    readDelta: "Added {newCount} new options and updated {updatedCount} existing options.",
    deleteCourse: "Delete",
    deleteCourseDone: "{key} deleted.",
    updatedAt: "Updated {time}",
    exportPlanFirst: "Capture courses first. If no plan has been generated yet, export will use the current settings.",
    resultUpdated: "Result updated. Check the Planner Output below.",
    captureUpdated: "Capture complete. Output and captured courses were updated.",
    planUpdated: "Plan generated. Check the timetable and preference order below.",
    exportUpdated: "Export started. Check your browser download prompt.",
    clearedUpdated: "Old data cleared. You can start a fresh capture.",
    primarySchedule: "Primary timetable",
    preferenceList: "Preference order",
    backupsReadable: "Other backup choices",
    readFailed: "Read failed. Please check that the active tab is Sydney Timetable and the page has loaded.",
    noTable: "No usable class table found. This version recognises preference tables and allocated/read-only tables. If the table is virtualised, scroll inside it first so rows load.",
    readSuccess: "Captured {count} options from {frames} page areas.",
    readHint: "Merged into local cache. Continue opening other Lecture / Tutorial pages and click Read Current Page.",
    needOneDay: "Keep at least one available day.",
    noActivities: "No courses captured yet. Open a course page and read it first.",
    summary: "Strategy: {strategy} | Available days: {days} | Capacity: {capacity}",
    respectCapacity: "Filter full classes",
    ignoreCapacityMode: "Ignore full classes",
    none: "None",
    manualReminder: "Please confirm that all required Lecture / Tutorial pages have been captured. The extension cannot yet detect missing courses for you.",
    disclaimer: "This timetable and preference order are for planning reference only. Before submitting choices, manually confirm times, locations, availability, weeks and final preference order in Sydney Timetable.",
    noAvailable: "{key}: no recommended options under the current day filter.",
    fullFiltered: "{key}: {count} options were excluded because they looked full. Turn on ignore capacity to include them.",
    unresolvedGroup: "{key}: could not be placed in the primary timetable with the current data, usually because all candidates conflict or were filtered by day/capacity rules.",
    fullLectureFallback: "{key}: online/no-room lecture options are kept even when free seats show 0, so the lecture can still be planned.",
    lectureCapacityFallback: "{key}: this lecture had no non-full candidates, so full lecture options were temporarily included to keep the primary plan complete.",
    notEnough: "{key}: needs at least {required} preferences, but only {found} were found.",
    highDemand: "{key}: Activity {activity} demand is {demand}, which is competitive.",
    conflict: "Time conflict: {a} overlaps with {b}.",
    noConflict: "No hard time conflict found for the current first-choice plan.",
    weeklyPreview: "Weekly Timetable Preview",
    recommended: "Recommended Preferences",
    required: "Required",
    options: "options",
    noRecommended: "No recommended options under the current filters.",
    backupOptions: "Backup options",
    cleared: "Cleared.",
    online: "Online / TBA"
  }
};

let currentLanguage = "en";
let planRandomScores = new Map();
let lastPlan = null;

function browserLanguage() {
  const language = chrome.i18n?.getUILanguage?.() || navigator.language || "en";
  return language.toLowerCase().startsWith("zh") ? "zh" : "en";
}

function t(key, values = {}) {
  const template = messages[currentLanguage][key] || messages.en[key] || key;
  return template.replace(/\{(\w+)\}/g, (_, name) => values[name] ?? "");
}

function getDemandClass(demand) {
  if (demand === null || demand === undefined) return "medium";
  if (demand <= 20) return "good";
  if (demand <= 70) return "medium";
  return "bad";
}

const COURSE_COLORS = [
  "#2563eb",
  "#16a34a",
  "#d97706",
  "#9333ea",
  "#dc2626",
  "#0891b2",
  "#4f46e5",
  "#65a30d"
];

function getUnitBaseCode(unitCode) {
  const match = String(unitCode || "").match(/[A-Z]{4}\d{4}/);
  return match ? match[0] : String(unitCode || "UNKNOWN");
}

function getCourseColor(unitCode) {
  const base = getUnitBaseCode(unitCode);
  let hash = 0;

  for (const char of base) {
    hash = ((hash << 5) - hash + char.charCodeAt(0)) | 0;
  }

  return COURSE_COLORS[Math.abs(hash) % COURSE_COLORS.length];
}

function groupKey(activity) {
  return `${activity.unitCode}-${activity.activityType}`;
}

async function getSavedActivities() {
  const data = await chrome.storage.local.get(STORAGE_KEY);
  return data[STORAGE_KEY] || [];
}

async function saveActivities(activities) {
  await chrome.storage.local.set({ [STORAGE_KEY]: activities });
}

function dedupeActivities(existing, incoming) {
  const map = new Map();

  for (const item of existing) map.set(item.id, item);
  for (const item of incoming) map.set(item.id, item);

  return [...map.values()];
}

function escapeHtml(value) {
  return String(value || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function setActionStatus(message, type = "info") {
  const status = document.getElementById("actionStatus");
  if (!status) return;

  status.textContent = message || "";
  status.className = `action-status ${message ? "visible" : ""} ${type}`;
}

function revealOutputPanel() {
  const outputPanel = document.getElementById("outputPanel");
  if (!outputPanel) return;

  outputPanel.classList.remove("attention");
  outputPanel.scrollIntoView({ behavior: "smooth", block: "start" });

  window.setTimeout(() => {
    outputPanel.classList.add("attention");
  }, 160);

  window.setTimeout(() => {
    outputPanel.classList.remove("attention");
  }, 1400);
}

function setResult(html, options = {}) {
  const {
    reveal = true,
    statusText = t("resultUpdated"),
    statusType = "info"
  } = options;

  document.getElementById("result").innerHTML = html;

  if (statusText) {
    setActionStatus(statusText, statusType);
  }

  if (reveal) {
    revealOutputPanel();
  }
}

async function readCurrentPage() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (!tab?.id) {
    setResult(`<p class="warning">${t("readFailed")}</p>`, { statusType: "warning" });
    return;
  }

  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      files: ["content.js"]
    });

    const frames = await chrome.scripting.executeScript({
      target: { tabId: tab.id, allFrames: true },
      func: () => {
        if (globalThis.__sydneyTimetableHelperExtract) {
          return globalThis.__sydneyTimetableHelperExtract();
        }

        return {
          ok: false,
          activities: [],
          url: location.href,
          title: document.title
        };
      }
    });

    const usefulFrames = frames
      .map(frame => frame.result)
      .filter(result => result?.ok && Array.isArray(result.activities) && result.activities.length > 0);
    const incoming = usefulFrames.flatMap(result => result.activities);

    if (incoming.length === 0) {
      setResult(`<p class="warning">${t("noTable")}</p>`, { statusType: "warning" });
      return;
    }

    const existing = await getSavedActivities();
    const existingIds = new Set(existing.map(item => item.id));
    const uniqueIncomingIds = new Set(incoming.map(item => item.id));
    const newCount = [...uniqueIncomingIds].filter(id => !existingIds.has(id)).length;
    const updatedCount = uniqueIncomingIds.size - newCount;
    const merged = dedupeActivities(existing, incoming);
    await saveActivities(merged);
    lastPlan = null;
    await renderSavedList();

    setResult(`
      <div class="warning-box">
        <p>${t("readSuccess", { count: incoming.length, frames: usefulFrames.length })}</p>
        <p>${newCount === 0 ? t("duplicateRead") : t("readDelta", { newCount, updatedCount })}</p>
        <p>${t("readHint")}</p>
      </div>
    `, { statusText: t("captureUpdated") });
  } catch (error) {
    setResult(`<p class="warning">${t("readFailed")}</p>`, { statusType: "warning" });
  }
}

function getSelectedDays() {
  return [...document.querySelectorAll(".days input:checked")].map(input => input.value);
}

function normalizeTimeToMinutes(time) {
  const [h, m] = String(time || "00:00").split(":").map(Number);
  return h * 60 + m;
}

function hasTimeOverlap(a, b) {
  if (a.day !== b.day) return false;
  return normalizeTimeToMinutes(a.time) < normalizeTimeToMinutes(b.endTime) &&
    normalizeTimeToMinutes(b.time) < normalizeTimeToMinutes(a.endTime);
}

function detectConflicts(selected) {
  const conflicts = [];

  for (let i = 0; i < selected.length; i += 1) {
    for (let j = i + 1; j < selected.length; j += 1) {
      if (isHardConflict(selected[i], selected[j])) {
        conflicts.push([selected[i], selected[j]]);
      }
    }
  }

  return conflicts;
}

function getRequiredPreferenceCount() {
  return 3;
}

function isOnlineActivity(activity) {
  const text = `${activity.location || ""} ${activity.campus || ""} ${activity.description || ""}`;
  return !activity.location || activity.location === "-" || /online|remote|web|record/i.test(text);
}

function isTutorialLike(activity) {
  return /Tutorial|Lab|Practical|Workshop|Seminar/i.test(activity.activityType || "");
}

function isLectureLike(activity) {
  return /Lecture/i.test(activity.activityType || "");
}

function isHardConflict(a, b) {
  if (!hasTimeOverlap(a, b)) return false;

  const bothOnlineLectures =
    !isTutorialLike(a) &&
    !isTutorialLike(b) &&
    isOnlineActivity(a) &&
    isOnlineActivity(b);

  return !bothOnlineLectures;
}

function getAvailabilityScore(activity) {
  const freeSeats = activity.freeSeats ?? null;
  const demand = activity.demand ?? null;
  const freeScore = freeSeats === null ? 0 : Math.min(freeSeats, 120);
  const demandScore = demand === null ? 0 : Math.max(0, 100 - demand);
  return freeScore * 2 + demandScore;
}

function isCapacityAvailable(activity) {
  if (isLectureLike(activity) && isOnlineActivity(activity)) {
    return true;
  }

  if (activity.freeSeats !== null && activity.freeSeats !== undefined && activity.freeSeats <= 0) {
    return false;
  }

  if (activity.demand !== null && activity.demand !== undefined && activity.demand >= 100) {
    return false;
  }

  return true;
}

function getActivityDurationMinutes(activity) {
  return Math.max(0, normalizeTimeToMinutes(activity.endTime) - normalizeTimeToMinutes(activity.time));
}

function resetPlanRandomScores() {
  planRandomScores = new Map();
}

function getPlanRandomScore(activity) {
  if (!planRandomScores.has(activity.id)) {
    planRandomScores.set(activity.id, Math.random());
  }

  return planRandomScores.get(activity.id);
}

function activityBaseScore(activity, strategy) {
  const start = normalizeTimeToMinutes(activity.time);
  const end = normalizeTimeToMinutes(activity.endTime);
  const availability = getAvailabilityScore(activity);

  if (strategy === "early") {
    return availability * 8 - end * 3 - start;
  }

  if (strategy === "compact") {
    return availability * 3 - end * 0.4;
  }

  return getPlanRandomScore(activity) * 1000 + availability * 2 - end * 0.2;
}

function evaluateSchedule(selected, strategy) {
  if (selected.length === 0) return 0;

  const availability = selected.reduce((sum, activity) => sum + getAvailabilityScore(activity), 0);
  const latePenalty = selected.reduce((sum, activity) => sum + normalizeTimeToMinutes(activity.endTime), 0);

  if (strategy === "early") {
    return availability * 8 - latePenalty * 3;
  }

  if (strategy === "compact") {
    const byDay = new Map();

    for (const activity of selected) {
      if (!byDay.has(activity.day)) byDay.set(activity.day, []);
      byDay.get(activity.day).push(activity);
    }

    let totalGap = 0;
    let totalSpan = 0;

    for (const activities of byDay.values()) {
      const starts = activities.map(activity => normalizeTimeToMinutes(activity.time));
      const ends = activities.map(activity => normalizeTimeToMinutes(activity.endTime));
      const span = Math.max(...ends) - Math.min(...starts);
      const duration = activities.reduce((sum, activity) => sum + getActivityDurationMinutes(activity), 0);
      totalSpan += span;
      totalGap += Math.max(0, span - duration);
    }

    return availability * 4 - byDay.size * 5000 - totalGap * 4 - totalSpan - latePenalty * 0.4;
  }

  const randomBonus = selected.reduce((sum, activity) => sum + getPlanRandomScore(activity), 0);
  return availability * 2 - latePenalty * 0.2 + randomBonus * 500;
}

function sortCandidates(activities, strategy) {
  return [...activities].sort((a, b) => {
    const scoreDiff = activityBaseScore(b, strategy) - activityBaseScore(a, strategy);
    if (scoreDiff !== 0) return scoreDiff;

    return [
      a.day.localeCompare(b.day),
      normalizeTimeToMinutes(a.time) - normalizeTimeToMinutes(b.time),
      String(a.activity || "").localeCompare(String(b.activity || "")),
      String(a.location || "").localeCompare(String(b.location || ""))
    ].find(diff => diff !== 0) || 0;
  });
}

function comparePlans(a, b, strategy) {
  if (!a) return b;
  if (!b) return a;

  const coverageDiff = b.selected.length - a.selected.length;
  if (coverageDiff > 0) return b;
  if (coverageDiff < 0) return a;

  return evaluateSchedule(b.selected, strategy) > evaluateSchedule(a.selected, strategy) ? b : a;
}

function choosePrimarySchedule(groups, strategy) {
  const startedAt = performance.now();
  const TIME_LIMIT_MS = 650;
  const MAX_VISITS = 25000;
  let visits = 0;
  let best = null;

  function search(remaining, selected, selectedByKey, skipped) {
    visits += 1;

    const candidatePlan = { selected, selectedByKey, skipped };
    best = comparePlans(best, candidatePlan, strategy);

    if (
      remaining.length === 0 ||
      visits >= MAX_VISITS ||
      performance.now() - startedAt > TIME_LIMIT_MS
    ) {
      return;
    }

    if (selected.length + remaining.length < (best?.selected.length || 0)) {
      return;
    }

    let chosen = null;
    let compatible = [];

    for (const group of remaining) {
      const groupCompatible = sortCandidates(group.available, strategy)
        .filter(candidate => !selected.some(existing => isHardConflict(existing, candidate)));

      if (!chosen || groupCompatible.length < compatible.length) {
        chosen = group;
        compatible = groupCompatible;
      }
    }

    const nextRemaining = remaining.filter(group => group.key !== chosen.key);

    if (compatible.length === 0) {
      search(nextRemaining, selected, selectedByKey, [...skipped, chosen.key]);
      return;
    }

    for (const candidate of compatible) {
      const nextSelectedByKey = new Map(selectedByKey);
      nextSelectedByKey.set(chosen.key, candidate);
      search(
        nextRemaining,
        [...selected, candidate],
        nextSelectedByKey,
        skipped
      );
    }
  }

  const groupsWithChoices = groups.filter(group => group.available.length > 0);
  const emptyGroups = groups.filter(group => group.available.length === 0).map(group => group.key);

  search(groupsWithChoices, [], new Map(), emptyGroups);

  return best || { selected: [], selectedByKey: new Map(), skipped: emptyGroups };
}

function sortBackups(group, primary, primarySchedule, strategy) {
  const otherPrimary = primarySchedule.filter(activity => groupKey(activity) !== group.key);

  return group.available
    .filter(activity => activity.id !== primary?.id)
    .sort((a, b) => {
      const aConflicts = otherPrimary.some(activity => isHardConflict(activity, a));
      const bConflicts = otherPrimary.some(activity => isHardConflict(activity, b));
      if (aConflicts !== bConflicts) return aConflicts ? 1 : -1;
      return activityBaseScore(b, strategy) - activityBaseScore(a, strategy);
    });
}

function buildPlanGroups(allActivities, selectedDays, strategy, ignoreCapacity) {
  resetPlanRandomScores();

  const groupsByKey = {};

  for (const act of allActivities) {
    const key = groupKey(act);
    if (!groupsByKey[key]) groupsByKey[key] = [];
    groupsByKey[key].push(act);
  }

  const groups = Object.entries(groupsByKey).map(([key, acts]) => {
    const dayFiltered = acts.filter(activity => selectedDays.includes(activity.day));
    const capacityAvailable = dayFiltered.filter(activity => ignoreCapacity || isCapacityAvailable(activity));
    const lectureFallbackUsed = !ignoreCapacity &&
      capacityAvailable.length === 0 &&
      dayFiltered.length > 0 &&
      /Lecture/i.test(acts[0]?.activityType || "");
    const available = lectureFallbackUsed ? dayFiltered : capacityAvailable;
    const onlineLectureCapacityBypassCount = dayFiltered.filter(activity =>
      isLectureLike(activity) &&
      isOnlineActivity(activity) &&
      activity.freeSeats !== null &&
      activity.freeSeats !== undefined &&
      activity.freeSeats <= 0
    ).length;

    return {
      key,
      unitCode: acts[0]?.unitCode,
      unitName: acts[0]?.unitName,
      activityType: acts[0]?.activityType,
      requiredCount: getRequiredPreferenceCount(acts),
      all: acts,
      dayFiltered,
      capacityFilteredCount: dayFiltered.length - capacityAvailable.length,
      onlineLectureCapacityBypassCount,
      lectureFallbackUsed,
      available,
      hasPreferredTime: true
    };
  });

  const primaryPlan = choosePrimarySchedule(groups, strategy);
  const primarySchedule = primaryPlan.selected;

  return groups
    .map(group => {
      const primary = primaryPlan.selectedByKey.get(group.key) || null;
      const sortedBackups = sortBackups(group, primary, primarySchedule, strategy);
      const recommended = primary
        ? [primary, ...sortedBackups.slice(0, Math.max(0, group.requiredCount - 1))]
        : [];

      return {
        ...group,
        primary,
        recommended,
        backups: primary ? sortedBackups.slice(Math.max(0, group.requiredCount - 1)) : sortedBackups
      };
    })
    .sort((a, b) => a.key.localeCompare(b.key));
}

async function generatePlan() {
  const selectedDays = getSelectedDays();
  const strategy = document.getElementById("strategy").value;
  const ignoreCapacity = document.getElementById("ignoreCapacity").checked;

  if (selectedDays.length === 0) {
    setResult(`<p class="warning">${t("needOneDay")}</p>`, { statusType: "warning" });
    return;
  }

  const allActivities = await getSavedActivities();

  if (allActivities.length === 0) {
    setResult(`<p class="warning">${t("noActivities")}</p>`, { statusType: "warning" });
    return;
  }

  const plannedGroups = buildPlanGroups(allActivities, selectedDays, strategy, ignoreCapacity);
  renderPlan(plannedGroups, selectedDays, strategy, ignoreCapacity);
}

function getStrategyLabel(strategy) {
  if (strategy === "early") return t("earlyStrategy");
  if (strategy === "compact") return t("compactStrategy");
  return t("randomStrategy");
}

function renderPlan(plannedGroups, selectedDays, strategy, ignoreCapacity) {
  const strategyLabel = getStrategyLabel(strategy);
  let html = "";
  lastPlan = { plannedGroups, selectedDays, strategy, ignoreCapacity, generatedAt: new Date().toISOString() };

  html += `<p class="hint">${t("summary", {
    strategy: strategyLabel,
    days: selectedDays.join(", "),
    capacity: ignoreCapacity ? t("ignoreCapacityMode") : t("respectCapacity")
  })}</p>`;
  html += renderWarnings(plannedGroups);
  html += renderWeeklyGrid(plannedGroups);
  html += renderPreferenceRecommendations(plannedGroups);

  setResult(html, { statusText: t("planUpdated") });
}

function renderWarnings(plannedGroups) {
  const firstChoices = plannedGroups
    .filter(group => group.recommended.length > 0)
    .map(group => group.recommended[0]);
  const conflicts = detectConflicts(firstChoices);
  let html = `<div class="warning-box">`;

  html += `<p>${t("manualReminder")}</p>`;
  html += `<p>${t("disclaimer")}</p>`;

  for (const group of plannedGroups) {
    if (group.available.length === 0) {
      html += `<p>${t("noAvailable", { key: escapeHtml(group.key) })}</p>`;
    }

    if (group.capacityFilteredCount > 0) {
      html += `<p>${t("fullFiltered", {
        key: escapeHtml(group.key),
        count: group.capacityFilteredCount
      })}</p>`;
    }

    if (group.onlineLectureCapacityBypassCount > 0) {
      html += `<p>${t("fullLectureFallback", {
        key: escapeHtml(group.key)
      })}</p>`;
    }

    if (group.lectureFallbackUsed) {
      html += `<p>${t("lectureCapacityFallback", {
        key: escapeHtml(group.key)
      })}</p>`;
    }

    if (group.available.length > 0 && !group.primary) {
      html += `<p>${t("unresolvedGroup", {
        key: escapeHtml(group.key)
      })}</p>`;
    }

    if (group.available.length > 0 && group.recommended.length < group.requiredCount) {
      html += `<p>${t("notEnough", {
        key: escapeHtml(group.key),
        required: group.requiredCount,
        found: group.recommended.length
      })}</p>`;
    }

    for (const act of group.recommended) {
      if ((act.demand ?? 0) >= 90) {
        html += `<p>${t("highDemand", {
          key: escapeHtml(group.key),
          activity: escapeHtml(act.activity),
          demand: escapeHtml(act.demandText)
        })}</p>`;
      }
    }
  }

  if (conflicts.length > 0) {
    for (const [a, b] of conflicts) {
      html += `<p>${t("conflict", {
        a: `${escapeHtml(a.unitCode)} ${escapeHtml(a.activityType)} ${a.day} ${a.time}-${a.endTime}`,
        b: `${escapeHtml(b.unitCode)} ${escapeHtml(b.activityType)} ${b.day} ${b.time}-${b.endTime}`
      })}</p>`;
    }
  } else {
    html += `<p>${t("noConflict")}</p>`;
  }

  html += `</div>`;
  return html;
}

function renderWeeklyGrid(plannedGroups) {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const startMinute = 8 * 60;
  const endMinute = 22 * 60;
  const hourHeight = 72;
  const totalHeight = ((endMinute - startMinute) / 60) * hourHeight;
  const hours = [];

  for (let hour = 8; hour <= 21; hour += 1) {
    hours.push(`${String(hour).padStart(2, "0")}:00`);
  }

  const firstChoices = plannedGroups
    .filter(group => group.recommended.length > 0)
    .map(group => ({ group, activity: group.recommended[0] }));
  const eventsByDay = {};

  for (const day of days) {
    const dayEvents = firstChoices
      .filter(item => item.activity.day === day)
      .sort((a, b) => normalizeTimeToMinutes(a.activity.time) - normalizeTimeToMinutes(b.activity.time));
    const laneEnds = [];

    for (const item of dayEvents) {
      const start = normalizeTimeToMinutes(item.activity.time);
      const end = normalizeTimeToMinutes(item.activity.endTime);
      let lane = laneEnds.findIndex(laneEnd => laneEnd <= start);

      if (lane < 0) {
        lane = laneEnds.length;
        laneEnds.push(end);
      } else {
        laneEnds[lane] = end;
      }

      item.lane = lane;
    }

    eventsByDay[day] = {
      events: dayEvents,
      lanes: Math.max(1, laneEnds.length)
    };
  }

  let html = `<h4>${t("weeklyPreview")}</h4>`;

  html += `<div class="calendar-wrapper"><div class="calendar-board">`;
  html += `<div class="calendar-header time-col">Time</div>`;
  for (const day of days) html += `<div class="calendar-header">${day}</div>`;

  html += `<div class="calendar-time-axis" style="height:${totalHeight}px">`;
  for (const hour of hours) {
    const top = ((normalizeTimeToMinutes(hour) - startMinute) / 60) * hourHeight;
    html += `<div class="calendar-time-mark" style="top:${top}px">${hour}</div>`;
  }
  html += `</div>`;

  for (const day of days) {
    html += `<div class="calendar-day-column" style="height:${totalHeight}px">`;
    for (const hour of hours) {
      const top = ((normalizeTimeToMinutes(hour) - startMinute) / 60) * hourHeight;
      html += `<div class="calendar-hour-line" style="top:${top}px"></div>`;
    }

    const { events, lanes } = eventsByDay[day];

    for (const item of events) {
      const act = item.activity;
      const start = normalizeTimeToMinutes(act.time);
      const end = normalizeTimeToMinutes(act.endTime);
      const top = Math.max(0, ((start - startMinute) / 60) * hourHeight);
      const height = Math.max(60, ((end - start) / 60) * hourHeight - 6);
      const laneWidth = 100 / lanes;
      const left = item.lane * laneWidth;
      const availability = act.demandText || (act.freeSeats === null || act.freeSeats === undefined ? "N/A" : `${act.freeSeats} free`);
      const color = getCourseColor(act.unitCode);

      html += `
        <div class="calendar-event ${getDemandClass(act.demand)}"
          style="top:${top + 3}px;height:${height}px;left:calc(${left}% + 4px);width:calc(${laneWidth}% - 8px);--course-color:${color}">
          <strong>${escapeHtml(getUnitBaseCode(act.unitCode))}</strong>
          <span class="event-line">${escapeHtml(act.activityType)} ${escapeHtml(act.activity)} · ${act.time}-${act.endTime}</span>
          <span class="event-line">${escapeHtml(availability)} · ${escapeHtml(shortLocation(act.location))}</span>
        </div>
      `;
    }

    html += `</div>`;
  }

  html += `</div></div>`;
  return html;
}

function shortLocation(location) {
  if (!location || location === "-") return t("online");
  const parts = String(location).split(".");
  if (parts.length >= 2) return parts.slice(0, 2).join(".");
  return location.length > 38 ? `${location.slice(0, 38)}...` : location;
}

function renderPreferenceRecommendations(plannedGroups) {
  let html = `<h4>${t("recommended")}</h4>`;

  for (const group of plannedGroups) {
    const color = getCourseColor(group.unitCode);
    html += `<div class="course-block" style="--course-color:${color}">`;
    html += `<div class="course-title"><strong>${escapeHtml(group.key)}</strong><span class="badge">${t("required")}: ${group.requiredCount}</span></div>`;

    if (group.unitName) html += `<p class="hint">${escapeHtml(group.unitName)}</p>`;

    if (group.recommended.length === 0) {
      html += `<p class="warning">${t("noRecommended")}</p>`;
      if (group.backups.length > 0) {
        html += renderBackupOptions(group.backups);
      }
      html += `</div>`;
      continue;
    }

    group.recommended.forEach((act, index) => {
      const availability = act.demandText || (act.freeSeats === null || act.freeSeats === undefined ? "N/A" : `${act.freeSeats} free`);
      html += `
        <div class="activity ${getDemandClass(act.demand)}" style="--course-color:${getCourseColor(act.unitCode)}">
          <strong>#${index + 1} Activity ${escapeHtml(act.activity)}</strong><br/>
          ${act.day} ${act.time}-${act.endTime} | ${escapeHtml(availability)}<br/>
          ${escapeHtml(act.location || t("online"))}<br/>
          <span class="hint">${escapeHtml(act.weeks || "")}</span>
        </div>
      `;
    });

    if (group.backups.length > 0) {
      html += renderBackupOptions(group.backups);
    }

    html += `</div>`;
  }

  return html;
}

function renderBackupOptions(backups) {
  let html = `<details><summary>${t("backupOptions")} (${backups.length})</summary>`;

  backups.forEach(act => {
    const availability = act.demandText || (act.freeSeats === null || act.freeSeats === undefined ? "N/A" : `${act.freeSeats} free`);
    html += `
      <div class="activity ${getDemandClass(act.demand)}" style="--course-color:${getCourseColor(act.unitCode)}">
        Activity ${escapeHtml(act.activity)}
        ${act.day} ${act.time}-${act.endTime} | ${escapeHtml(availability)}<br/>
        ${escapeHtml(act.location || t("online"))}
      </div>
    `;
  });

  html += `</details>`;
  return html;
}

async function renderSavedList() {
  const saved = await getSavedActivities();
  const savedList = document.getElementById("savedList");

  if (saved.length === 0) {
    savedList.innerHTML = `<p class="hint">${t("emptySaved")}</p>`;
    return;
  }

  const groups = {};
  for (const act of saved) {
    const key = groupKey(act);
    if (!groups[key]) groups[key] = [];
    groups[key].push(act);
  }

  let html = "";
  for (const [key, acts] of Object.entries(groups).sort()) {
    const first = acts[0];
    const latest = acts
      .map(activity => activity.capturedAt)
      .filter(Boolean)
      .sort()
      .at(-1);
    html += `<div class="course-block captured-course" style="--course-color:${getCourseColor(first.unitCode)}">
      <div class="course-title">
        <strong>${escapeHtml(getUnitBaseCode(first.unitCode))} ${escapeHtml(first.activityType || "")}</strong>
        <span class="badge">${acts.length} ${t("options")}</span>
      </div>
      ${first.unitName ? `<p class="hint">${escapeHtml(first.unitName)}</p>` : ""}
      ${latest ? `<p class="hint">${t("updatedAt", { time: escapeHtml(new Date(latest).toLocaleString()) })}</p>` : ""}
      <button class="mini-button danger" data-delete-group="${encodeURIComponent(key)}">${t("deleteCourse")}</button>
    </div>`;
  }

  savedList.innerHTML = html;
}

async function deleteCapturedGroup(key) {
  const saved = await getSavedActivities();
  const remaining = saved.filter(activity => groupKey(activity) !== key);
  await saveActivities(remaining);
  lastPlan = null;
  await renderSavedList();
  setResult(`<p>${t("deleteCourseDone", { key: escapeHtml(key) })}</p>`);
}

async function clearAll() {
  await chrome.storage.local.remove(STORAGE_KEY);
  lastPlan = null;
  await renderSavedList();
  setResult(`<p>${t("cleared")}</p>`, { statusText: t("clearedUpdated") });
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replaceAll('"', '""')}"`;
}

function formatCsvDate() {
  const now = new Date();
  const parts = [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, "0"),
    String(now.getDate()).padStart(2, "0")
  ];
  return parts.join("-");
}

function daySortValue(day) {
  return ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].indexOf(day);
}

function getAvailabilityText(activity) {
  if (!activity) return "";
  if (activity.demandText) return activity.demandText;
  if (activity.freeSeats !== null && activity.freeSeats !== undefined) return `${activity.freeSeats} free`;
  return "N/A";
}

function activityReadableRow(activity, prefix = "") {
  return [
    prefix,
    getUnitBaseCode(activity.unitCode),
    activity.unitName || "",
    activity.activityType || "",
    activity.activity || "",
    activity.day || "",
    `${activity.time || ""}-${activity.endTime || ""}`,
    getAvailabilityText(activity),
    activity.location || t("online"),
    activity.weeks || ""
  ];
}

function buildPlanCsv(plan) {
  const rows = [];
  const strategyLabel = getStrategyLabel(plan.strategy);
  const primary = plan.plannedGroups
    .filter(group => group.recommended.length > 0)
    .map(group => group.recommended[0])
    .sort((a, b) => [
      daySortValue(a.day) - daySortValue(b.day),
      normalizeTimeToMinutes(a.time) - normalizeTimeToMinutes(b.time),
      String(a.unitCode || "").localeCompare(String(b.unitCode || ""))
    ].find(diff => diff !== 0) || 0);

  rows.push(["USYD Timetable Planner Export"]);
  rows.push(["Generated at", new Date(plan.generatedAt || Date.now()).toLocaleString()]);
  rows.push(["Strategy", strategyLabel]);
  rows.push(["Available days", plan.selectedDays.join(", ")]);
  rows.push(["Capacity handling", plan.ignoreCapacity ? t("ignoreCapacityMode") : t("respectCapacity")]);
  rows.push([]);
  rows.push(["How to use"]);
  rows.push(["1", "Enter the Primary timetable rows into Sydney Timetable as your first choices."]);
  rows.push(["2", "For each course activity, use Preference order #1, #2 and #3 as the recommended order."]);
  rows.push(["3", "Use Backup rows only if a preferred option becomes unavailable."]);
  rows.push([]);
  rows.push(["Disclaimer", t("disclaimer")]);
  rows.push([]);

  rows.push([t("primarySchedule")]);
  rows.push(["", "Course", "Course name", "Type", "Activity", "Day", "Time", "Seats / Demand", "Location", "Weeks"]);
  primary.forEach(activity => rows.push(activityReadableRow(activity, "First choice")));
  rows.push([]);

  rows.push([t("preferenceList")]);
  rows.push(["Choice", "Course", "Course name", "Type", "Activity", "Day", "Time", "Seats / Demand", "Location", "Weeks"]);
  for (const group of plan.plannedGroups) {
    group.recommended.forEach((activity, index) => {
      rows.push(activityReadableRow(activity, `#${index + 1}`));
    });
  }
  rows.push([]);

  rows.push([t("backupsReadable")]);
  rows.push(["", "Course", "Course name", "Type", "Activity", "Day", "Time", "Seats / Demand", "Location", "Weeks"]);
  for (const group of plan.plannedGroups) {
    group.backups.forEach(activity => rows.push(activityReadableRow(activity, "Backup")));
  }
  rows.push([]);
  rows.push(["Support this tool", SUPPORT_URL]);

  return rows.map(row => row.map(csvCell).join(",")).join("\r\n");
}

async function exportExcelCsv() {
  const activities = await getSavedActivities();

  if (activities.length === 0) {
    setResult(`<p class="warning">${t("exportNoData")}</p>`, { statusType: "warning" });
    return;
  }

  const plan = lastPlan || {
    plannedGroups: buildPlanGroups(
      activities,
      getSelectedDays(),
      document.getElementById("strategy").value,
      document.getElementById("ignoreCapacity").checked
    ),
    selectedDays: getSelectedDays(),
    strategy: document.getElementById("strategy").value,
    ignoreCapacity: document.getElementById("ignoreCapacity").checked,
    generatedAt: new Date().toISOString()
  };
  const csv = `\uFEFF${buildPlanCsv(plan)}`;
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const filename = `sydney-timetable-plan-${formatCsvDate()}.csv`;

  if (chrome.downloads?.download) {
    chrome.downloads.download({ url, filename, saveAs: true }, () => {
      URL.revokeObjectURL(url);
    });
  } else {
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  }

  setResult(`<p>${t("exportDone")}</p>`, { statusText: t("exportUpdated") });
}

async function setIgnoreCapacity(enabled) {
  await chrome.storage.local.set({ [IGNORE_CAPACITY_KEY]: enabled });
}

function openSupportPage() {
  chrome.tabs.create({ url: SUPPORT_URL });
}

function openFeedbackPage() {
  if (!FEEDBACK_URL) return;
  chrome.tabs.create({ url: FEEDBACK_URL });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage === "zh" ? "zh-CN" : "en";

  for (const element of document.querySelectorAll("[data-i18n]")) {
    element.textContent = t(element.dataset.i18n);
  }

  for (const option of document.querySelectorAll("option[data-i18n]")) {
    option.textContent = t(option.dataset.i18n);
  }
}

async function init() {
  const stored = await chrome.storage.local.get([LANGUAGE_KEY, IGNORE_CAPACITY_KEY]);
  currentLanguage = stored[LANGUAGE_KEY] || browserLanguage();

  const languageSelect = document.getElementById("languageSelect");
  languageSelect.value = currentLanguage;
  languageSelect.addEventListener("change", async event => {
    currentLanguage = event.target.value;
    await chrome.storage.local.set({ [LANGUAGE_KEY]: currentLanguage });
    applyLanguage();
    await renderSavedList();
    setActionStatus("");
    setResult(`<p class="hint">${t("initialResult")}</p>`, { reveal: false, statusText: "" });
  });

  const ignoreCapacity = document.getElementById("ignoreCapacity");
  ignoreCapacity.checked = stored[IGNORE_CAPACITY_KEY] === true;
  ignoreCapacity.addEventListener("change", event => {
    lastPlan = null;
    setIgnoreCapacity(event.target.checked);
  });

  document.getElementById("strategy").addEventListener("change", () => {
    lastPlan = null;
  });

  document.querySelectorAll(".days input").forEach(input => {
    input.addEventListener("change", () => {
      lastPlan = null;
    });
  });

  document.getElementById("readCurrent").addEventListener("click", readCurrentPage);
  document.getElementById("clearAll").addEventListener("click", clearAll);
  document.getElementById("exportExcel").addEventListener("click", exportExcelCsv);
  document.getElementById("generatePlan").addEventListener("click", generatePlan);
  document.getElementById("supportTool").addEventListener("click", openSupportPage);

  const feedbackTool = document.getElementById("feedbackTool");
  if (FEEDBACK_URL) {
    feedbackTool.hidden = false;
    feedbackTool.addEventListener("click", openFeedbackPage);
  }

  document.getElementById("savedList").addEventListener("click", event => {
    const button = event.target.closest("[data-delete-group]");
    if (!button) return;
    deleteCapturedGroup(decodeURIComponent(button.dataset.deleteGroup));
  });

  applyLanguage();
  await renderSavedList();
  setActionStatus("");
  setResult(`<p class="hint">${t("initialResult")}</p>`, { reveal: false, statusText: "" });
}

init();
