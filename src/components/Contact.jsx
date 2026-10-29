import { useState } from 'react'
import { HiMail, HiPhone, HiLocationMarker, HiInformationCircle } from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'

const CONTACT_INFO = [
  {
    icon:  <HiMail            size={24} />,
    label: 'Email',
    value: 'muhammadqhifari10@gmail.com',
    href:  'mailto:muhammadqhifari10@gmail.com',
    color: 'text-red-400',
    bg:    'bg-red-500/10 border-red-400/30',
  },
  {
    icon:  <FaWhatsapp        size={24} />,
    label: 'WhatsApp',
    value: '+62 821-6293-0491',
    href:  'https://wa.me/6282162930491',
    color: 'text-green-400',
    bg:    'bg-green-500/10 border-green-400/30',
  },
  {
    icon:  <HiLocationMarker  size={24} />,
    label: 'Lokasi',
    value: 'Kayee Lee, Banda Aceh, Aceh',
    href:  'https://maps.google.com/?q=Banda+Aceh+Aceh+Indonesia',
    color: 'text-cyan-400',
    bg:    'bg-cyan-500/10 border-cyan-400/30',
  },
]

const INIT_FORM = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form,    setForm]    = useState(INIT_FORM)
  const [status,  setStatus]  = useState(null)
  const [message, setMessage] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = form.subject.trim() || 'Pesan dari website portofolio'
    const body = [
      `Nama: ${form.name}`,
      `Email: ${form.email}`,
      '',
      form.message,
    ].join('\n')

    setStatus('ready')
    setMessage('Pesan disiapkan di aplikasi email Anda. Tekan Kirim di sana untuk mengirimnya.')
    window.location.href = `mailto:muhammadqhifari10@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  return (
    <section id="contact" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div data-aos="fade-up" className="text-center mb-16">
          <p className="section-subtitle">Kontak</p>
          <h2 className="section-title text-white">
            Hubungi <span className="text-cyan-400">Saya</span>
          </h2>
          <div className="section-divider" />
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Isi formulir untuk menyiapkan email. Aplikasi email Anda akan terbuka agar pesan dapat dikirim.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div data-aos="fade-right" data-aos-delay="100" className="space-y-5">
            <h3 className="text-xl font-bold text-white mb-6">Hubungi langsung</h3>
            {CONTACT_INFO.map(({ icon, label, value, href, color, bg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl border ${bg}
                            hover:-translate-y-0.5 transition-all duration-300 group`}
              >
                <div className={`${color} flex-shrink-0`}>{icon}</div>
                <div>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{label}</p>
                  <p className={`text-sm font-semibold ${color} group-hover:underline`}>{value}</p>
                </div>
              </a>
            ))}

            {/* Map Embed Placeholder */}
            <div className="rounded-2xl overflow-hidden border border-slate-700/60 h-48 bg-slate-800/40 flex items-center justify-center">
              <div className="text-center text-slate-500">
                <HiLocationMarker className="mx-auto mb-2 text-cyan-400" size={32} />
                <p className="text-sm">Kayee Lee, Banda Aceh</p>
                <p className="text-xs text-slate-600">Aceh, Indonesia</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left" data-aos-delay="150">
            <form onSubmit={handleSubmit} className="card space-y-5">
              <h3 className="text-xl font-bold text-white">Tulis pesan</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">Nama *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Nama Anda"
                    className="input-field"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@email.com"
                    className="input-field"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">Topik pesan</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Contoh: kerja sama atau proyek"
                  className="input-field"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-400 mb-2">Pesan *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Ceritakan keperluan Anda..."
                  className="input-field resize-none"
                />
              </div>

              {/* Status Message */}
              {status === 'ready' && (
                <div className="flex items-center gap-2 p-3 rounded-xl text-sm font-medium bg-cyan-500/10 border border-cyan-400/30 text-cyan-300">
                  <HiInformationCircle size={18} />
                  {message}
                </div>
              )}

              <button
                type="submit"
                className="btn-primary w-full justify-center text-base"
              >
                <HiMail size={18} />
                Buka Email untuk Mengirim
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
