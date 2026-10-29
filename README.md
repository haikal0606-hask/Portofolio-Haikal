# Portofolio Muhammad Haikal

Website portofolio pribadi untuk memperkenalkan profil, keahlian, pengalaman, pendidikan, sertifikat, dan proyek Muhammad Haikal.

Website ini dibuat dengan React dan Vite sebagai aplikasi frontend-only. Konten portofolio disimpan sebagai data statis di dalam source code; website tidak memerlukan server backend, API, atau database untuk menampilkan halaman.

## Isi website

- **Home** — pengenalan singkat, bidang keahlian, foto profil, tautan media sosial, dan tombol unduh CV.
- **About** — ringkasan profil, informasi kontak, dan area keahlian.
- **Skills** — daftar keahlian yang dikelompokkan dalam tab dengan indikator tingkat kemampuan.
- **Experience** — riwayat pengalaman dan rincian tanggung jawab.
- **Education** — latar belakang pendidikan.
- **Certificates** — kartu sertifikat dengan filter kategori dan tautan untuk membuka dokumen.
- **Projects** — kartu proyek dengan teknologi yang digunakan dan tautan demo jika tersedia.
- **Contact** — informasi email, WhatsApp, dan lokasi, serta formulir untuk menyiapkan email.

Navigasi halaman menggunakan scroll ke setiap bagian. Layout menyesuaikan ukuran layar, dan animasi elemen dijalankan dengan AOS.

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| React 18 | Komponen dan antarmuka website |
| Vite 5 | Development server dan build produksi |
| Tailwind CSS 3 | Styling responsif dan utility classes |
| React Icons | Ikon antarmuka |
| React Scroll | Navigasi antarbagian halaman |
| AOS | Animasi saat elemen masuk ke viewport |

## Persyaratan

- Node.js 18 atau lebih baru
- npm

## Menjalankan website secara lokal

Jalankan perintah berikut dari folder repository:

```bash
npm install
npm run dev
```

Vite akan menampilkan alamat lokal di terminal, biasanya `http://localhost:5173`.

## Perintah yang tersedia

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Menjalankan development server |
| `npm run build` | Membuat build produksi ke folder `dist/` |
| `npm run preview` | Menjalankan server lokal untuk melihat hasil build |

Untuk melihat hasil produksi secara lokal:

```bash
npm run build
npm run preview
```

## Struktur folder

```text
.
├── public/
│   ├── assets/               # Foto profil dan CV
│   ├── certificates/         # Dokumen sertifikat PDF
│   ├── website-stunting/     # Aset statis website edukasi stunting
│   └── favicon.svg
├── src/
│   ├── components/            # Bagian-bagian antarmuka portofolio
│   ├── pages/Home.jsx         # Susunan bagian halaman utama
│   ├── App.jsx                # Inisialisasi aplikasi dan AOS
│   ├── index.css              # Gaya global dan komponen Tailwind
│   └── main.jsx               # Entry point React
├── index.html
├── package.json
└── vite.config.js
```

## Memperbarui konten

Data saat ini ditulis langsung dalam komponen berikut:

| Konten | File |
| --- | --- |
| Profil utama dan foto pada hero | `src/components/Hero.jsx` |
| Biografi dan informasi tentang saya | `src/components/About.jsx` |
| Kategori dan daftar keahlian | `src/components/Skills.jsx` |
| Pengalaman kerja | `src/components/Experience.jsx` |
| Pendidikan | `src/components/Education.jsx` |
| Sertifikat dan kategori filternya | `src/components/Certificates.jsx` |
| Daftar proyek | `src/components/Projects.jsx` |
| Email, WhatsApp, dan lokasi | `src/components/Contact.jsx` |
| Label dan urutan navigasi | `src/components/Navbar.jsx` |

Foto dan CV dapat diganti di `public/assets/`. Simpan sertifikat PDF baru di `public/certificates/`, lalu sesuaikan nama file dan tautannya di `Certificates.jsx`.

## Perilaku formulir kontak

Formulir kontak menggunakan tautan `mailto:`. Setelah formulir diisi, browser akan membuka aplikasi email dengan alamat penerima, subjek, nama, alamat email pengirim, dan pesan yang sudah dimasukkan. Pengunjung perlu menekan **Kirim** di aplikasi email. Pesan tidak dikirim atau disimpan oleh website.

## Build dan publikasi

Jalankan `npm run build`, lalu terbitkan isi folder `dist/` menggunakan layanan hosting website statis seperti GitHub Pages, Netlify, atau Vercel. Tidak diperlukan konfigurasi environment variable untuk menjalankan portofolio ini.

Jika website dipasang di alamat subfolder, sesuaikan opsi `base` di `vite.config.js` sebelum membuat build.
