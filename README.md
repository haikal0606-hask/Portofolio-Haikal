# Portofolio Muhammad Haikal

Website portofolio pribadi Muhammad Haikal. Aplikasi dibuat dengan React dan Vite, serta dapat berjalan sebagai website statis tanpa server backend.

## Fitur

- Profil, pengalaman, pendidikan, keterampilan, dan sertifikat.
- Daftar proyek dan tautan ke proyek terkait.
- Formulir kontak yang menyiapkan email melalui aplikasi email perangkat.
- Tampilan responsif dengan Tailwind CSS dan animasi AOS.

## Teknologi

- React 18
- Vite 5
- Tailwind CSS 3
- React Icons
- AOS (Animate On Scroll)

## Menjalankan secara lokal

Pastikan Node.js dan npm sudah terpasang, lalu jalankan:

```bash
npm install
npm run dev
```

Buka alamat lokal yang ditampilkan Vite di terminal.

## Build untuk produksi

```bash
npm run build
npm run preview
```

Hasil build tersedia di folder `dist/` dan dapat diterbitkan ke layanan hosting website statis.

## Mengubah konten

Konten profil dan bagian portofolio disimpan langsung di komponen dalam `src/components/`. Foto dan CV berada di `public/assets/`, sedangkan berkas sertifikat berada di `public/certificates/`.

Formulir kontak membuka aplikasi email dengan alamat, subjek, dan isi pesan yang sudah disiapkan. Pengunjung perlu menekan tombol kirim di aplikasi email tersebut.
