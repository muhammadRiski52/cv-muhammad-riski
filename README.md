# Profil & CV — Muhammad Riski

Website profil statis (HTML, CSS, JavaScript), tanpa build tool.

## Struktur folder
```
myweb/
├── index.html        halaman utama
├── css/style.css     tampilan (tema gradient gelap)
├── js/script.js      animasi
├── assets/           foto profil & ikon
└── README.md
```

## Lihat di komputer
Buka `index.html` di browser (folder harus utuh, jangan dibuka dari dalam ZIP).

## Perbarui website
```
git add -A
git commit -m "catatan perubahan"
git push
```

## GitHub Pages
Settings → Pages → Source: `Deploy from a branch` → `main` / `(root)`.

## Ubah nomor WhatsApp
Cari `6285954685215` di `index.html` lalu ganti (format internasional, tanpa + atau 0 di depan).

## Ganti gambar aplikasi / tambah foto galeri
- Gambar aplikasi ada di `assets/apps/` (sekarang masih gambar pengganti `.svg`). Simpan screenshot asli (misal `nu-pontura.png`, lebar ±1280 px), lalu ubah `src="assets/apps/nu-pontura.svg"` di `index.html` menjadi `.png`.
- Foto galeri ada di `assets/galeri/`. Untuk menambah, salin satu blok `<button class="shot reveal" ...>` di `index.html`, lalu ganti nama file dan keterangannya. Kecilkan foto dulu (lebar ±900 px) agar website cepat dibuka.
