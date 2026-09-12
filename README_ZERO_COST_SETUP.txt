PROJECT CONTROL v13 — ZERO COST EDITOR

Arsitektur:
GitHub Pages -> Google Form -> Form Response Sheet / EDIT LOG -> Published CSV -> WebApp overlay

TIDAK MEMERLUKAN:
- Google Cloud Console
- OAuth Client ID
- Apps Script
- Make.com
- Server berbayar

LANGKAH SETUP FORM:
1. Buka Google Forms dan buat Blank form: PROJECT CONTROL EDIT LOG.
2. Buat 8 pertanyaan Short answer PERSIS:
   SITE KEY
   SITE NAME
   PROJECT ID
   SOW
   FIELD
   OLD VALUE
   NEW VALUE
   EDITOR
3. Hubungkan Responses ke spreadsheet PROJECT CONTROL - MASTER DATABASE.
4. Di Form: menu tiga titik -> Get pre-filled link.
5. Isi placeholder:
   SITE KEY = PC_SITE_KEY
   SITE NAME = PC_SITE_NAME
   PROJECT ID = PC_PROJECT_ID
   SOW = PC_SOW
   FIELD = PC_FIELD
   OLD VALUE = PC_OLD
   NEW VALUE = PC_NEW
   EDITOR = PC_EDITOR
6. Generate/Get link dan copy link pre-filled.
7. Publish tab response Form sebagai CSV / Publish to web.
8. Project Control v13 > Settings:
   - paste Google Form Pre-filled Link
   - paste Published EDIT LOG CSV URL
   - isi Nama Editor
   - Simpan Konfigurasi Editor

CATATAN:
MASTER SITE dan PLN adalah data dasar dan tidak ditulis langsung. Edit masuk ke EDIT LOG dan ditampilkan sebagai nilai terbaru oleh v13.
Form link/config disimpan di localStorage browser, tidak ditanam di file index.html publik.
