PROJECT CONTROL v13.3 — EDITOR FIX

Perbaikan utama:
- Google Form action + 8 entry ID ditanam langsung di webapp.
- Edit Data tidak lagi bergantung konfigurasi Settings.
- Modal editor selalu berada di atas modal Detail pada HP.
- Setelah Kirim Perubahan, webapp mencoba sync otomatis setelah 4.5 detik.
- Pending edit tetap tampil lokal sampai WEBAPP DATA sudah memuat perubahan.

Tes:
1. Pastikan Google Form sudah Publikasikan dan menerima jawaban.
2. Upload index.html ini ke GitHub repo ProjectControl.
3. Refresh / buka ulang webapp.
4. Buka site -> Edit Data.
5. Ubah Keterangan saja untuk tes.
6. Tekan Kirim Perubahan.
7. Cek tab EDIT LOG di Google Sheet.
