'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays, Check, ChevronDown, Clock3, Camera, MapPin, Menu, MessageCircle, ShieldCheck, Sparkles, Stethoscope, UsersRound, X } from 'lucide-react'

const treatments = [
  { name: 'Facial Brightening', desc: 'Kulit tampak lebih cerah dan segar.', price: 'Rp350.000', tag: 'BEST SELLER', icon: Sparkles },
  { name: 'Acne Treatment', desc: 'Bantu kontrol jerawat dan minyak berlebih.', price: 'Rp400.000', icon: ShieldCheck },
  { name: 'Chemical Peeling', desc: 'Membantu menghaluskan tekstur dan menyamarkan noda.', price: 'Rp450.000', icon: Sparkles },
  { name: 'Microneedling', desc: 'Bantu tampilan bekas jerawat dan pori.', price: 'Rp750.000', icon: Stethoscope },
  { name: 'Laser Rejuvenation', desc: 'Membantu tampilan kulit lebih rata dan kencang.', price: 'Rp900.000', icon: Sparkles },
  { name: 'Konsultasi Dokter', desc: 'Kenali kebutuhan kulitmu bersama dokter.', price: 'Rp100.000', icon: UsersRound },
]

const faqs = [
  ['Apakah perlu konsultasi dulu?', 'Ya, agar treatment yang dipilih sesuai dengan kondisi dan kebutuhan kulitmu.'],
  ['Berapa lama satu treatment?', 'Sekitar 45–90 menit, tergantung jenis treatment yang dilakukan.'],
  ['Apakah ada downtime atau kemerahan?', 'Tergantung treatment. Dokter akan menjelaskan semuanya sebelum treatment dimulai.'],
  ['Bisa booking lewat WhatsApp?', 'Bisa. Kamu bisa menghubungi kami lewat tombol WhatsApp atau mengisi form booking.'],
  ['Metode pembayaran apa saja yang tersedia?', 'Kami menerima tunai, transfer, dan QRIS.'],
  ['Apakah ada kontraindikasi seperti hamil atau alergi?', 'Sampaikan kondisi kesehatan saat konsultasi. Dokter akan membantu menentukan pilihan yang aman.'],
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <p className="section-label">{children}</p>
}

function Header() {
  const [open, setOpen] = useState(false)
  return <>
    <header className="site-header">
      <div className="nav-shell">
        <Link href="#top" className="brand" aria-label="Nirmala Skin Clinic beranda">
          <span className="brand-mark">N</span><span><strong>NIRMALA</strong><small>SKIN CLINIC</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Navigasi utama">
          <Link href="#treatment">Treatment</Link><Link href="#dokter">Dokter</Link><Link href="#harga">Harga</Link><Link href="#kontak">Kontak</Link>
        </nav>
        <div className="nav-actions"><span className="open-pill"><span /> Buka 09.00–20.00</span><a className="wa-link" href="https://wa.me/6281234567890"><MessageCircle /> WhatsApp</a><Link className="button button-primary nav-book" href="#booking">Booking</Link><button className="menu-button" onClick={() => setOpen(!open)} aria-label="Buka menu">{open ? <X /> : <Menu />}</button></div>
      </div>
      {open && <nav className="mobile-nav"><Link onClick={() => setOpen(false)} href="#treatment">Treatment</Link><Link onClick={() => setOpen(false)} href="#dokter">Dokter</Link><Link onClick={() => setOpen(false)} href="#harga">Harga</Link><Link onClick={() => setOpen(false)} href="#kontak">Kontak</Link></nav>}
    </header>
  </>
}

function BookingForm() {
  const [sent, setSent] = useState(false)
  if (sent) return <div className="booking-success"><span className="success-icon"><Check /></span><h3>Booking kamu sudah diterima.</h3><p>Terima kasih. Tim Nirmala akan menghubungi kamu melalui WhatsApp untuk konfirmasi jadwal.</p><button className="button button-outline" onClick={() => setSent(false)}>Buat booking baru</button></div>
  return <form className="booking-form" onSubmit={(e) => { e.preventDefault(); setSent(true) }}>
    <div className="form-grid"><label>Nama lengkap<input required placeholder="Nama kamu" /></label><label>No. WhatsApp<input required type="tel" placeholder="08xx-xxxx-xxxx" /></label><label>Pilih treatment<select defaultValue=""><option value="" disabled>Pilih treatment</option>{treatments.map((t) => <option key={t.name}>{t.name}</option>)}</select></label><label>Tanggal<input required type="date" /></label><label>Jam yang diinginkan<select defaultValue=""><option value="" disabled>Pilih jam</option><option>09.00–11.00</option><option>11.00–13.00</option><option>14.00–16.00</option><option>16.00–20.00</option></select></label></div><label>Keluhan singkat<textarea placeholder="Ceritakan sedikit tentang kondisi kulitmu (opsional)" rows={3} /></label><button className="button button-primary" type="submit">Kirim Booking <ArrowRight /></button><small>Dengan mengirim form ini, kamu setuju dihubungi oleh tim Nirmala.</small>
  </form>
}

export default function Page() {
  const [faqOpen, setFaqOpen] = useState(0)
  return <main id="top"><Header />
    <section className="hero section-wrap"><div className="hero-copy"><SectionLabel>PERAWATAN KULIT YANG JUJUR & NYAMAN</SectionLabel><h1>Kulit sehat,<br /><em>percaya diri</em> tiap hari.</h1><p>Konsultasi dulu dengan dokter, treatment sesuai kebutuhan kulitmu. Harga jelas, tanpa paksaan.</p><div className="hero-actions"><Link className="button button-primary" href="#booking">Booking Konsultasi <ArrowRight /></Link><Link className="text-link" href="#treatment">Lihat Treatment <ArrowRight /></Link></div><div className="hero-note"><span className="avatar-stack"><span>R</span><span>A</span><span>D</span></span><span><strong>Dipercaya banyak pasien</strong><br /><small>Datang untuk konsultasi, pulang lebih tenang.</small></span></div></div><div className="hero-visual"><Image src="/nirmala-hero.png" alt="Ruang konsultasi Nirmala Skin Clinic yang hangat dan nyaman" fill priority sizes="(max-width: 768px) 100vw, 48vw" /><div className="image-caption"><span className="caption-icon"><Clock3 /></span><span><strong>Ruang konsultasi kami</strong><small>Tenang, privat, dan nyaman</small></span></div></div></section>
    <section className="trust-strip"><div className="trust-inner"><span><Stethoscope /> Dokter berpengalaman</span><span><ShieldCheck /> Alat steril & higienis</span><span><Check /> Harga transparan</span><span><MessageCircle /> Konsultasi dulu</span></div></section>
    <section id="treatment" className="section-wrap section"><div className="section-heading"><div><SectionLabel>YANG MUNGKIN KAMU BUTUHKAN</SectionLabel><h2>Treatment favorit,<br /><em>dibuat untukmu.</em></h2></div><Link className="text-link" href="#harga">Lihat semua harga <ArrowRight /></Link></div><div className="treatment-grid">{treatments.map((t) => { const Icon = t.icon; return <article className="treatment-card" key={t.name}><div className="card-top"><span className="treatment-icon"><Icon /></span>{t.tag && <span className="tag">{t.tag}</span>}</div><h3>{t.name}</h3><p>{t.desc}</p><div className="card-bottom"><span>Mulai dari <strong>{t.price}</strong></span><button aria-label={`Lihat detail ${t.name}`}><ArrowRight /></button></div></article> })}</div></section>
    <section className="process-section section"><div className="section-wrap process-layout"><div><SectionLabel>ALUR KAMU DI NIRMALA</SectionLabel><h2>Mulai dari memahami,<br /><em>bukan menebak.</em></h2><p className="muted-copy">Kami percaya perawatan kulit yang baik dimulai dari percakapan yang jujur.</p></div><div className="steps"><div className="step"><span>01</span><div><h3>Konsultasi</h3><p>Ceritakan kondisi dan tujuan kulitmu kepada dokter.</p></div></div><div className="step"><span>02</span><div><h3>Rencana Perawatan</h3><p>Dapatkan rekomendasi yang sesuai kebutuhanmu.</p></div></div><div className="step"><span>03</span><div><h3>Treatment & Follow-up</h3><p>Rawat kulit dengan tenang, kami dampingi prosesnya.</p></div></div></div></div></section>
    <section id="dokter" className="section-wrap section"><div className="section-heading"><div><SectionLabel>KENALI DOKTER KAMI</SectionLabel><h2>Ditangani dengan<br /><em>penuh perhatian.</em></h2></div><Link className="text-link" href="#kontak">Kenal lebih dekat <ArrowRight /></Link></div><div className="doctor-grid"><div className="doctor-card doctor-one"><div className="doctor-photo"><span>DR</span></div><h3>dr. Rania Putri</h3><p>Dokter Estetika</p></div><div className="doctor-card doctor-two"><div className="doctor-photo"><span>DR</span></div><h3>dr. Arif Nugraha</h3><p>Dokter Kulit & Kelamin</p></div><div className="doctor-card doctor-three"><div className="doctor-photo"><span>DR</span></div><h3>dr. Dita Larasati</h3><p>Dokter Estetika</p></div></div></section>
    <section id="harga" className="promo-section section-wrap"><div><SectionLabel>KHUSUS UNTUKMU</SectionLabel><h2>Konsultasi dokter <em>gratis</em><br />untuk pasien baru.</h2><p>Ambil treatment pertama kamu dan nikmati konsultasi dokter tanpa biaya tambahan.</p></div><Link className="button button-light" href="#booking">Ambil Promo <ArrowRight /></Link></section>
    <section className="section-wrap section testimonials"><div className="section-heading"><div><SectionLabel>KATA MEREKA</SectionLabel><h2>Pelan-pelan,<br /><em>terasa bedanya.</em></h2></div><span className="note">Hasil dapat bervariasi tiap individu.</span></div><div className="testimonial-grid"><blockquote>“Pertama kali ke klinik dan langsung merasa nyaman. Dokternya mau dengar, bukan langsung jual treatment.”<footer><strong>— Anya, 27</strong><span>Pasien Acne Treatment</span></footer></blockquote><blockquote>“Suka banget karena dijelasin dengan bahasa yang gampang dimengerti. Nggak ada paksaan sama sekali.”<footer><strong>— Raka, 31</strong><span>Pasien Facial Brightening</span></footer></blockquote><blockquote>“Hasilnya bertahap, tapi kulit terasa lebih terawat. Tempatnya juga tenang dan bersih.”<footer><strong>— Sinta, 34</strong><span>Pasien Chemical Peeling</span></footer></blockquote></div></section>
    <section className="faq-section section"><div className="section-wrap faq-layout"><div><SectionLabel>PERTANYAAN UMUM</SectionLabel><h2>Yang sering<br /><em>ditanyakan.</em></h2><p className="muted-copy">Belum menemukan jawaban? <a href="https://wa.me/6281234567890">Chat kami di WhatsApp.</a></p></div><div className="faq-list">{faqs.map(([q, a], i) => <div className={`faq-item ${faqOpen === i ? 'is-open' : ''}`} key={q}><button onClick={() => setFaqOpen(faqOpen === i ? -1 : i)} aria-expanded={faqOpen === i}><span>{q}</span><ChevronDown /></button>{faqOpen === i && <p>{a}</p>}</div>)}</div></div></section>
    <section id="booking" className="booking-section section-wrap"><div className="booking-intro"><SectionLabel>BOOKING KONSULTASI</SectionLabel><h2>Langkah pertama<br /><em>dimulai di sini.</em></h2><p>Isi form singkat ini, kami akan menghubungi kamu untuk konfirmasi jadwal.</p><div className="booking-meta"><span><CalendarDays /> Senin–Sabtu</span><span><Clock3 /> 09.00–20.00</span><span><MapPin /> [area]</span></div></div><BookingForm /></section>
    <footer id="kontak" className="site-footer"><div className="footer-main"><div><Link href="#top" className="brand footer-brand"><span className="brand-mark">N</span><span><strong>NIRMALA</strong><small>SKIN CLINIC</small></span></Link><p>Perawatan kulit yang jujur<br />dan nyaman.</p></div><div className="footer-col"><strong>Temukan</strong><Link href="#treatment">Treatment</Link><Link href="#dokter">Dokter kami</Link><Link href="#harga">Harga</Link></div><div className="footer-col"><strong>Hubungi kami</strong><span>Senin–Sabtu, 09.00–20.00</span><span>[alamat klinik], [area]</span><a href="https://wa.me/6281234567890"><MessageCircle /> WhatsApp kami</a></div><div className="footer-col"><strong>Ikuti kami</strong><a href="#top"><Camera /> @nirmalaskinclinic</a></div></div><div className="footer-bottom"><span>© 2026 NIRMALA Skin Clinic · Demo only</span><span>Made with care for your skin.</span></div></footer>
    {/* <a className="chat-bubble" href="https://wa.me/6281234567890" aria-label="Chat dengan Nirmala"><MessageCircle /></a> */}
  </main>
}
