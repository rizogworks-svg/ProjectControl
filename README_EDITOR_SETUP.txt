PROJECT CONTROL v12 - EDITOR MODE

Editor v12 menulis langsung ke Google Sheet memakai Google Identity Services + Google Sheets API.

Yang bisa diedit:
MASTER SITE:
- STATUS PROJECT
- BINDER
- ONEFLUX flag
- BAST DONE flag
- DEADLINE PROJECT
- KETERANGAN

PLN:
- STATUS PLN
- RFI
- CONNECT
- HO
- ID PELANGGAN PLN
- DOK PLN
- KETERANGAN
- DAYA PLN
- NAMA PELANGGAN

Read-only:
Nama Site, SOW, Tenant, Regional, Project ID, Site ID, Site ID DMT.

Setiap perubahan dicatat di tab ACTIVITY LOG.

SETUP GOOGLE CLOUD:
1. Buat / pilih Google Cloud project.
2. Enable Google Sheets API.
3. Google Auth platform: konfigurasi Branding/Audience.
4. Buat OAuth Client > Web application.
5. Authorized JavaScript origins:
   https://rizogworks-svg.github.io
6. Copy Client ID (...apps.googleusercontent.com).
7. Di Project Control > Settings > Google OAuth Client ID > Simpan.
8. Tekan Login Google untuk Editor.
9. Gunakan akun Google yang memiliki izin edit spreadsheet.

Tidak perlu Client Secret dan jangan menaruh Client Secret di HTML.
