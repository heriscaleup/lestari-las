# Lestari Las

Landing page modern untuk bengkel las yang melayani pembuatan pagar, railing balkon, canopy, railing tangga, dan pintu garasi.

Project ini sekarang menggunakan Astro agar hasil build lebih ringan, HTML lebih bersih, dan lebih cocok untuk landing page statis seperti company profile bengkel las.

## Jalankan Lokal

```bash
npm install
npm run dev
```

## Build Production

```bash
npm run build
```

## Deploy

Project ini sudah disiapkan untuk deploy ke GitHub Pages lewat workflow di [.github/workflows/deploy.yml](.github/workflows/deploy.yml).

Catatan final sebelum go live:

- Ganti nomor WhatsApp dan kontak bisnis asli
- Tambahkan area layanan yang spesifik
- Masukkan foto proyek asli pada section showcase atau portfolio
- Jika nama repo berubah, sesuaikan nilai `base` di `astro.config.mjs`

## Sumber Gambar Sementara

Visual sementara di folder `public/images` diambil dari Pexels sebagai placeholder tematik:

- Gate hero: https://www.pexels.com/photo/a-black-metal-gate-on-the-street-14419108/
- Balcony railing: https://www.pexels.com/photo/black-iron-railings-on-residential-balcony-18559629/
- Garage door: https://www.pexels.com/photo/garage-door-and-building-exterior-31944676/
- Exterior mood image: https://www.pexels.com/photo/sunny-modern-house-exterior-with-fence-33520726/
