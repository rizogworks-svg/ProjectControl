PROJECT CONTROL - GITHUB PAGES PACKAGE
======================================

ISI:
- index.html       -> WebApp utama. GitHub Pages otomatis membuka file ini.
- .nojekyll        -> Memastikan GitHub menyajikan file statis apa adanya.
- backend/Code.gs  -> Backup kode Google Apps Script API.

UPLOAD DARI HP:
1. Buka github.com dan login.
2. Buat repository baru, contoh: project-control
3. Pilih Public.
4. Buka repository > Add file > Upload files.
5. Upload index.html dan .nojekyll.
   Folder backend opsional; upload juga jika ingin menyimpan source API.
6. Commit changes.
7. Buka Settings > Pages.
8. Source: Deploy from a branch.
9. Branch: main, folder: / (root), lalu Save.
10. Tunggu sebentar lalu buka:
    https://USERNAME.github.io/project-control/

SETELAH WEB TERBUKA:
1. Buka Settings pada Project Control.
2. Masukkan Apps Script API URL /exec jika diperlukan.
3. Tekan Simpan API URL.
4. Tekan Sync Sekarang dari Google Sheet.

CATATAN:
- Menjalankan dari GitHub Pages memakai HTTPS, bukan content://downloads.
- Data cache lokal tetap tersedia jika live sync gagal.
- Bila URL /exec tetap gagal ketika dibuka langsung di browser, GitHub Pages
  tidak memperbaiki backend tersebut; deployment Apps Script perlu diperbaiki.
