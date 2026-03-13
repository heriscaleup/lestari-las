import { useEffect } from 'react'
import './App.css'

const baseUrl = import.meta.env.BASE_URL
const brandLogo = `${baseUrl}brand/lestari-las-logo.webp`

const highlights = [
  'Model bisa disesuaikan dengan gaya rumah atau bangunan',
  'Struktur kuat dengan detail finishing yang lebih rapi',
  'Ukuran, bukaan, dan material mengikuti kebutuhan lapangan',
]

const marqueeItems = [
  'Pagar Custom',
  'Canopy Modern',
  'Railing Balkon',
  'Railing Tangga',
  'Pintu Garasi',
  'Finishing Rapi',
  'Survey & Ukur',
  'Pemasangan Presisi',
]

const services = [
  {
    title: 'Pagar Custom',
    description:
      'Pagar rumah yang dirancang untuk memberi rasa aman sekaligus memperkuat tampilan depan bangunan.',
    points: ['Model minimalis sampai klasik', 'Bukaan swing atau sliding', 'Proporsi rangka dan bilah lebih presisi'],
  },
  {
    title: 'Railing Balkon',
    description:
      'Railing balkon yang aman dipakai setiap hari tanpa membuat tampilan bangunan terasa berat.',
    points: ['Visual lebih bersih', 'Pilihan motif vertikal atau horizontal', 'Cocok untuk rumah, kos, dan ruko'],
  },
  {
    title: 'Canopy Modern',
    description:
      'Solusi pelindung teras atau carport yang tetap enak dilihat dari luar dan nyaman untuk aktivitas harian.',
    points: ['Rangka rapi', 'Cocok untuk area usaha dan rumah', 'Material atap bisa disesuaikan kebutuhan'],
  },
  {
    title: 'Railing Tangga',
    description:
      'Railing tangga indoor maupun outdoor yang fokus pada kenyamanan genggam, keamanan, dan detail akhir.',
    points: ['Aman untuk keluarga', 'Menyatu dengan interior', 'Finishing bisa dibuat lebih elegan'],
  },
  {
    title: 'Pintu Garasi',
    description:
      'Pintu garasi yang kuat, nyaman dipakai, dan tetap selaras dengan desain rumah di bagian depan.',
    points: ['Bisa lipat atau dorong', 'Lebih rapi untuk fasad depan', 'Menjaga area garasi terasa aman'],
  },
]

const galleryItems = [
  {
    category: 'Gerbang & Pagar',
    title: 'Visual gerbang yang tegas, modern, dan terasa mahal saat pertama dilihat.',
    description:
      'Kesan pertama rumah banyak ditentukan dari pagar dan gerbang. Karena itu, komposisi rangka, ritme bilah, dan finishing harus kelihatan matang sejak pandangan pertama.',
    image: `${baseUrl}images/gate-hero.jpg`,
    alt: 'Gerbang besi hitam pada rumah modern.',
  },
  {
    category: 'Railing Balkon',
    title: 'Railing yang aman dipakai, tapi tetap ringan secara visual di area atas rumah.',
    description:
      'Railing balkon yang bagus tidak hanya kuat, tetapi juga memberi kesan bersih dari kejauhan. Detail seperti tinggi railing dan pola sambungan sangat berpengaruh.',
    image: `${baseUrl}images/railing-showcase.jpg`,
    alt: 'Railing balkon besi hitam pada area luar rumah.',
  },
  {
    category: 'Pintu Garasi',
    title: 'Bidang pintu garasi yang rapi membuat fasad rumah terlihat lebih tertata.',
    description:
      'Untuk pintu garasi, orang biasanya mencari kombinasi antara keamanan, bukaan yang nyaman, dan tampilan yang tidak merusak desain bagian depan rumah.',
    image: `${baseUrl}images/garage-showcase.jpg`,
    alt: 'Pintu garasi sederhana pada area rumah.',
  },
]

const projectFits = [
  {
    title: 'Rumah Baru',
    description:
      'Cocok untuk pemilik rumah yang ingin semua elemen besi tampil seragam dari gerbang sampai railing tangga.',
  },
  {
    title: 'Renovasi Fasad',
    description:
      'Pas untuk rumah lama yang butuh wajah baru agar tampilan depan terasa lebih modern, bersih, dan meyakinkan.',
  },
  {
    title: 'Kos, Ruko, dan Kantor',
    description:
      'Ideal untuk bangunan usaha yang butuh kombinasi visual profesional, keamanan, dan daya tahan penggunaan harian.',
  },
]

const processSteps = [
  {
    title: 'Kirim Referensi atau Foto Lokasi',
    description:
      'Calon pelanggan bisa mulai dari kirim inspirasi model, ukuran kasar, atau foto bangunan agar arahnya cepat terbaca.',
  },
  {
    title: 'Survey dan Ukur Lapangan',
    description:
      'Tahap ini penting supaya semua detail seperti tinggi, bukaan, kemiringan, dan titik pemasangan benar-benar pas.',
  },
  {
    title: 'Produksi dengan Detail yang Rapi',
    description:
      'Rangka, sambungan, dan finishing dikerjakan agar hasil tidak terlihat asal jadi, terutama saat dilihat dari dekat.',
  },
  {
    title: 'Pemasangan dan Finishing Akhir',
    description:
      'Setelah terpasang, hasil akhir disesuaikan lagi supaya terlihat solid, nyaman digunakan, dan enak dipandang.',
  },
]

const faqs = [
  {
    question: 'Bagaimana memilih model pagar yang cocok untuk rumah?',
    answer:
      'Mulailah dari karakter rumah dan kebutuhan utamanya. Jika fokus Anda keamanan, pilih struktur yang kokoh dan ritme bilah yang rapat. Jika fokusnya tampilan, model pagar sebaiknya mengikuti garis fasad rumah agar hasilnya terlihat menyatu.',
  },
  {
    question: 'Apa yang paling memengaruhi harga pengerjaan las?',
    answer:
      'Biasanya harga dipengaruhi ukuran area, jenis material, tingkat kerumitan desain, sistem bukaan, dan jenis finishing. Semakin detail model dan semakin besar bidang yang dikerjakan, biasanya waktu produksi dan biaya juga ikut bertambah.',
  },
  {
    question: 'Finishing seperti apa yang cocok untuk area luar rumah?',
    answer:
      'Untuk area luar ruang, finishing harus mempertimbangkan panas, hujan, dan kelembapan. Karena itu pemilihan cat, lapisan pelindung, dan persiapan permukaan sebelum pengecatan sangat penting agar hasil lebih awet dan tetap enak dilihat.',
  },
  {
    question: 'Apa yang sebaiknya disiapkan sebelum konsultasi?',
    answer:
      'Siapkan ukuran kasar, foto lokasi dari beberapa sudut, referensi model yang disukai, dan gambaran prioritas Anda. Dengan begitu proses diskusi akan lebih cepat dan rekomendasi desain bisa lebih tepat.',
  },
]

const prepItems = [
  'Ukuran kasar area yang akan dikerjakan',
  'Foto lokasi dari beberapa sudut',
  'Referensi model yang disukai',
  'Budget atau prioritas kebutuhan utama',
]

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -50px 0px',
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">
      <a className="floating-cta" href="#contact">
        Minta Estimasi
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="brand" href="#top" aria-label="Lestari Las">
            <span className="brand-logo-shell">
              <img className="brand-logo" src={brandLogo} alt="Logo Lestari Las" />
            </span>
            <span className="brand-meta">
              <small>Pagar, canopy, railing, pintu garasi</small>
            </span>
          </a>

          <nav className="site-nav" aria-label="Navigasi utama">
            <a href="#services">Layanan</a>
            <a href="#portfolio">Galeri</a>
            <a href="#process">Proses</a>
            <a href="#contact">Kontak</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero-section" id="top">
          <div className="container hero-grid">
            <div className="hero-copy" data-reveal>
              <p className="eyebrow">Spesialis Pagar, Canopy, Railing, dan Pintu Garasi Custom</p>
              <h1>Solusi Las Custom untuk Rumah yang Ingin Tampil Lebih Rapi, Aman, dan Bernilai</h1>
              <p className="hero-text">
                Setiap rumah dan bangunan punya kebutuhan yang berbeda. Ada yang membutuhkan pagar
                yang lebih aman, ada yang mencari canopy yang ringan tapi tetap kokoh, dan ada juga
                yang ingin railing atau pintu garasi yang tampil serasi dengan fasad bangunan.
              </p>
              <p className="hero-subtext">
                Karena itu pengerjaan las yang baik harus dimulai dari ukuran yang tepat, pilihan
                material yang sesuai, sistem bukaan yang nyaman, dan finishing yang terlihat
                matang saat dipakai setiap hari.
              </p>

              <div className="hero-actions">
                <a className="button button-primary" href="#contact">
                  Konsultasi Proyek
                </a>
                <a className="button button-secondary" href="#portfolio">
                  Lihat Galeri
                </a>
              </div>

              <ul className="hero-highlights" aria-label="Keunggulan utama">
                {highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="hero-visual-cluster">
              <figure className="hero-media hero-media-primary" data-reveal style={{ '--delay': '80ms' }}>
                <img src={galleryItems[0].image} alt={galleryItems[0].alt} fetchPriority="high" />
                <figcaption>
                  <span>Hero Visual</span>
                  <strong>Gerbang custom untuk fasad rumah yang ingin tampil lebih kuat.</strong>
                </figcaption>
              </figure>

              <figure className="hero-media hero-media-secondary" data-reveal style={{ '--delay': '180ms' }}>
                <img src={galleryItems[1].image} alt={galleryItems[1].alt} loading="lazy" />
                <figcaption>Railing balkon yang aman dan tetap ringan dilihat.</figcaption>
              </figure>

              <figure className="hero-media hero-media-tertiary" data-reveal style={{ '--delay': '260ms' }}>
                <img src={`${baseUrl}images/exterior-showcase.jpg`} alt="Eksterior rumah modern dengan pagar." loading="lazy" />
                <figcaption>Nuansa rumah modern yang lebih clean dan premium.</figcaption>
              </figure>

              <aside className="hero-note-card" data-reveal style={{ '--delay': '320ms' }}>
                <p>Hal penting</p>
                <h2>Produk las yang baik harus seimbang antara fungsi, keamanan, dan tampilan.</h2>
                <span>Bukan hanya kuat, tetapi juga nyaman dipakai dan sedap dipandang.</span>
              </aside>
            </div>
          </div>
        </section>

        <section className="marquee-section" aria-label="Marquee layanan">
          <div className="marquee-track">
            {[...marqueeItems, ...marqueeItems].map((item, index) => (
              <span key={`${item}-${index}`}>{item}</span>
            ))}
          </div>
        </section>

        <section className="section story-section">
          <div className="container story-layout">
            <div className="story-copy" data-reveal>
              <p className="section-kicker">Kenapa Harus Custom</p>
              <h2>Setiap ukuran, bukaan, dan karakter bangunan butuh pendekatan yang berbeda.</h2>
              <p>
                Pagar untuk rumah sudut tentu berbeda dengan pagar untuk rumah mungil di area padat.
                Canopy untuk carport juga tidak bisa disamakan dengan canopy untuk teras atau area
                usaha. Karena itu pengerjaan custom penting agar hasil akhir benar-benar pas dengan
                kebutuhan bangunan.
              </p>
              <p>
                Dengan perencanaan yang tepat, tinggi railing bisa terasa aman, arah bukaan pintu
                garasi bisa lebih nyaman, dan model pagar bisa tetap indah tanpa mengorbankan
                fungsi dasar seperti keamanan dan kemudahan akses.
              </p>
            </div>

            <article className="story-card" data-reveal style={{ '--delay': '120ms' }}>
              <img src={galleryItems[2].image} alt={galleryItems[2].alt} loading="lazy" />
              <div className="story-card-body">
                <p className="section-kicker">Spotlight Detail</p>
                <h3>Pintu garasi yang rapi bisa langsung mengangkat tampilan depan rumah.</h3>
                <p>
                  Visual yang bersih, ukuran yang pas, dan bukaan yang nyaman sering jadi pembeda
                  antara pengerjaan biasa dan hasil yang terasa lebih matang.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section services-section" id="services">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Layanan Utama</p>
              <h2>Pilih jenis pengerjaan sesuai fungsi, kebutuhan ruang, dan tampilan bangunan Anda.</h2>
              <p>
                Setiap produk punya pertimbangan yang berbeda. Ada yang lebih fokus ke keamanan,
                ada yang menekankan tampilan depan rumah, dan ada juga yang harus seimbang antara
                fungsi pelindung, kenyamanan, dan visual.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service, index) => (
                <article className="service-card" key={service.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                  <span className="service-index">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cinematic-section">
          <div className="container">
            <article className="cinematic-panel" data-reveal>
              <img src={`${baseUrl}images/exterior-showcase.jpg`} alt="Rumah modern dengan pagar dan area luar rapi." loading="lazy" />
              <div className="cinematic-overlay">
                <p className="section-kicker">Pertimbangan Desain</p>
                <h2>Elemen besi yang tepat bisa membuat tampilan bangunan terasa lebih rapi dan berkelas.</h2>
                <p>
                  Pemilihan model, warna, dan komposisi bidang sebaiknya mengikuti bentuk rumah atau
                  bangunan, bukan sekadar ikut tren. Dengan begitu hasil akhirnya lebih menyatu dan
                  tidak cepat terasa ketinggalan.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Galeri Inspirasi</p>
              <h2>Tiap elemen besi punya fungsi yang berbeda, jadi modelnya pun perlu dipilih dengan tepat.</h2>
              <p>
                Bagian ini membantu Anda membayangkan arah desain yang sesuai, mulai dari pagar depan,
                railing balkon, hingga pintu garasi yang ingin tetap aman tanpa merusak karakter
                visual bangunan.
              </p>
            </div>

            <div className="portfolio-grid">
              {galleryItems.map((item, index) => (
                <article className="portfolio-card" key={item.title} data-reveal style={{ '--delay': `${index * 120}ms` }}>
                  <div className="portfolio-image-wrap">
                    <img src={item.image} alt={item.alt} loading="lazy" />
                  </div>
                  <div className="portfolio-content">
                    <p>{item.category}</p>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section fit-section">
          <div className="container fit-layout">
            <div className="fit-copy" data-reveal>
              <p className="section-kicker">Sering Dicari Untuk</p>
              <h2>Kebutuhan proyek yang paling sering memerlukan pengerjaan las custom.</h2>
              <p>
                Mulai dari rumah baru, renovasi tampak depan, sampai bangunan usaha yang ingin
                terlihat lebih tertata dan aman, pengerjaan custom membantu hasil akhir terasa lebih
                pas dibanding solusi yang seragam.
              </p>
            </div>

            <div className="fit-cards">
              {projectFits.map((item, index) => (
                <article className="fit-card" key={item.title} data-reveal style={{ '--delay': `${index * 100}ms` }}>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section process-section" id="process">
          <div className="container">
            <div className="section-heading" data-reveal>
              <p className="section-kicker">Alur Kerja</p>
              <h2>Tahapan kerja yang jelas membantu hasil akhir lebih presisi dan minim revisi.</h2>
            </div>

            <div className="process-grid">
              {processSteps.map((step, index) => (
                <article className="process-card" key={step.title} data-reveal style={{ '--delay': `${index * 90}ms` }}>
                  <span className="process-number">0{index + 1}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section faq-section">
          <div className="container faq-layout">
            <div className="faq-copy" data-reveal>
              <p className="section-kicker">Pertanyaan Umum</p>
              <h2>Beberapa hal yang sering ditanyakan sebelum memulai pengerjaan.</h2>
              <p>
                Memahami poin-poin dasar ini akan membantu Anda menentukan kebutuhan dengan lebih
                jelas sebelum masuk ke tahap survey, pengukuran, dan penawaran harga.
              </p>
            </div>

            <div className="faq-list">
              {faqs.map((faq, index) => (
                <details key={faq.question} data-reveal style={{ '--delay': `${index * 80}ms` }}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="container contact-card" data-reveal>
            <div className="contact-copy">
              <p className="section-kicker">Sebelum Konsultasi</p>
              <h2>Agar estimasi dan diskusi berjalan lebih cepat, siapkan data dasar proyek Anda.</h2>
              <p>
                Semakin lengkap informasi awal yang Anda kirim, semakin mudah menentukan model,
                material, sistem bukaan, dan kisaran pengerjaan yang sesuai dengan kebutuhan
                bangunan Anda.
              </p>
            </div>

            <div className="contact-actions">
              <a className="button button-primary" href="#process">
                Pelajari Proses
              </a>
              <a className="button button-secondary" href="#portfolio">
                Lihat Inspirasi
              </a>
            </div>

            <div className="prep-list" aria-label="Data final yang dibutuhkan">
              {prepItems.map((item, index) => (
                <article key={item} data-reveal style={{ '--delay': `${index * 70}ms` }}>
                  <span>0{index + 1}</span>
                  <p>{item}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <p>Lestari Las. Solusi las custom untuk pagar, canopy, railing, dan pintu garasi.</p>
          <a href="#top">Kembali ke atas</a>
        </div>
      </footer>
    </div>
  )
}

export default App
