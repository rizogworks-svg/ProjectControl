/**
 * Project Control v5 - Google Sheets relay
 * Spreadsheet: PROJECT CONTROL - MASTER DATABASE
 * Tab sumber: MASTER SITE
 *
 * Deploy:
 * 1. Google Sheet > Extensions > Apps Script
 * 2. Paste file ini ke Code.gs
 * 3. Deploy > New deployment > Web app
 * 4. Execute as: Me
 * 5. Who has access: Anyone with the link / sesuai kebijakan akun
 * 6. Copy URL /exec lalu paste di Project Control > Settings > Apps Script API URL
 */

const PC_SPREADSHEET_ID = '1ol0gwS9ociXRIidWhuRHNAvSOsa330fvz_ILmZImAX4';
const PC_MASTER_SHEET = 'MASTER SITE';

function doGet(e) {
  try {
    const ss = SpreadsheetApp.openById(PC_SPREADSHEET_ID);
    const sh = ss.getSheetByName(PC_MASTER_SHEET);
    if (!sh) throw new Error('Sheet MASTER SITE tidak ditemukan');

    const values = sh.getDataRange().getDisplayValues();
    const csv = values.map(row => row.map(csvCell_).join(',')).join('\n');
    const payload = {
      ok: true,
      spreadsheetId: PC_SPREADSHEET_ID,
      sheet: PC_MASTER_SHEET,
      rows: Math.max(0, values.length - 1),
      generatedAt: new Date().toISOString(),
      csv: csv
    };
    return output_(e, payload);
  } catch (err) {
    return output_(e, {ok:false,error:String(err && err.message ? err.message : err)});
  }
}

function csvCell_(value) {
  const s = String(value == null ? '' : value);
  return /[",\n\r]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

function output_(e, payload) {
  const callback = e && e.parameter && e.parameter.callback;
  const json = JSON.stringify(payload);
  if (callback && /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback)) {
    return ContentService.createTextOutput(callback + '(' + json + ');')
      .setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(json)
    .setMimeType(ContentService.MimeType.JSON);
}
