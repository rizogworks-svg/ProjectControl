PROJECT CONTROL v11 - PERCENTAGE HEALTH

Perubahan:
- Project Health sekarang murni sistem persentase.
- Tidak ada lagi PLN 15/15, Project 15/30, dst.
- Detail menjadi: Project xx%, PLN xx%, Oneflux xx%, Binder xx%, BAST Doc xx%.
- Health total = rata-rata lima persentase tersebut.
- Deadline Alert TIDAK mengurangi persentase Health.

Perhitungan PLN:
- RFI = 20%
- Connect = 20%
- HO = 20%
- Dok PLN = 20%
- ID Pelanggan = 20%
- Jika STATUS PLN = DONE, PLN otomatis 100%.

Project:
- DONE 100%
- BAST 80%
- PROGRESS 50%
- HOLD 20%
- DROP 0%

Oneflux:
- Selesai 100%
- Hold 25%
- Belum 0%

Binder:
- Done 100%
- Pending 0%

BAST Document:
- Dihitung dari progress dokumen SITAC/CME/IMB/Addwork yang tersedia.

Semua fitur v10 tetap ada: WhatsApp, template, Favorite, Recent Viewed, IDPEL, Maps, copy data, live sync.

Cara update:
Ganti index.html di GitHub dengan index.html v11 lalu commit.
