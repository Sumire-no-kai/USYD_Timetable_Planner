# USYD Timetable Planner

A local-first Chrome extension for capturing classes, avoiding clashes, and planning USYD timetable preferences.

Recommended browsers: Google Chrome or Microsoft Edge. The extension is mainly tested on Chromium browsers.

## Current scope

This is a V1 MVP.

It does **not** automatically fill or submit preferences.  
It only reads the currently opened preference table, stores it locally, and helps you visualise and plan.

## Features

- Read Sydney Timetable Lecture / Tutorial preference tables
- Read allocated/read-only activity tables such as `Activity / Day / Time / Free / Campus`
- Capture tables from frames embedded inside the page
- Open as a Chrome side panel so it can stay visible while changing pages
- Cache captured activities locally
- Export a readable timetable plan as a UTF-8 CSV file that Excel can open
- Include an optional Buy Me a Coffee support link
- Group activities by unit and activity type
- Generate conflict-free primary recommendations based on:
  - random conflict-free selection
  - earlier finish times plus higher availability
  - compact scheduling across fewer days
  - available weekdays
- Filter out full classes by default, with an option to ignore demand percentage / full capacity
- Keep online or no-room lecture candidates usable even when their displayed free-seat count is 0
- Fall back to full lecture candidates only when a lecture would otherwise disappear from the primary plan
- Show a weekly timetable preview
- Show warnings:
  - missing manual-capture reminder
  - no available days selected
  - no valid option under current weekday filters
  - not enough preference candidates
  - preferred time not available
  - high-demand option selected
  - first-choice time conflicts
- Fully local. No backend, no account, no tracking.

## Feedback

The extension includes an external feedback form:

https://forms.gle/b85QwGzyXchKVUpB6

## How to install locally

1. Open Chrome.
2. Go to `chrome://extensions/`.
3. Enable **Developer mode**.
4. Click **Load unpacked**.
5. Select this folder: `sydney-timetable-helper`.

## How to use

1. Open Sydney Timetable in Google Chrome or Microsoft Edge.
2. Click the extension icon to open the side panel.
3. Open one unit's Lecture or Tutorial preference page.
4. Click **Read Current Page** to capture the current table.
5. Repeat for every Lecture / Tutorial page you want to include.
6. Select strategy, capacity handling and available weekdays.
7. Click **Generate Plan**.
8. Click **Export Timetable CSV** to save the recommended timetable and preference order for spreadsheet review.

Captured data persists in your browser between side-panel opens. Use **New Session / Clear Data** before starting a fresh timetable planning run.

## Important limitation

The extension cannot yet confirm whether you have captured every Lecture / Tutorial page.  
Please manually confirm that all required pages have been captured before relying on the recommendation.

If Sydney Timetable uses a virtualised inner-scroll table, scroll inside that table first so the rows are loaded into the page DOM before capturing.

## Disclaimer

Generated timetables and preference orders are for planning reference only. Before submitting choices, manually confirm times, locations, availability, teaching weeks and final preference order in Sydney Timetable.

## Privacy

All data is stored in your own browser via `chrome.storage.local`.

No server.  
No login.  
No analytics.

## Support

The extension includes an optional external support link:

https://buymeacoffee.com/edward_lee

Payments are handled by Buy Me a Coffee outside the extension. The extension does not process payments or collect supporter details.
