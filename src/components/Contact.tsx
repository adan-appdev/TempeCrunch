import { useState, useRef, useEffect, FormEvent } from 'react';

interface FormData {
  nama:  string;
  email: string;
  pesan: string;
}

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData,  setFormData]  = useState<FormData>({ nama: '', email: '', pesan: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading,   setLoading]   = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    section.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate network delay, then redirect to WhatsApp
    setTimeout(() => {
      const msg = encodeURIComponent(
        `Halo Tempe Crunch!\n\nNama: ${formData.nama}\nEmail: ${formData.email}\n\nPesan:\n${formData.pesan}`
      );
      window.open(`https://wa.me/6285739733243?text=${msg}`, '_blank');
      setSubmitted(true);
      setLoading(false);
    }, 800);
  };

  const inputClass = `
    w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200
    bg-[#fdf8f0] border border-[#e5c99a] text-[#2c1a00] placeholder-[#a06820]/50
    focus:border-[#a06820] focus:ring-2 focus:ring-[#a06820]/20
  `;

  const contactItems = [
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      label:   'WhatsApp',
      value:   '+62 857-3973-3243',
      href:    'https://wa.me/6285739733243',
      subtext: 'Balas dalam 1x24 jam',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      label:   'Instagram',
      value:   '@nggadwiif',
      href:    'https://www.instagram.com/nggadwiif?igsh=dDVxcjBjMjNieGg5',
      subtext: 'Update produk terbaru',
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      label:   'Email',
      value:   'rafaeldyas868@gmail.com',
      href:    'mailto:rafaeldyas868@gmail.com',
      subtext: 'Untuk keperluan bisnis',
    },
  ];

  return (
    <section
      id="kontak"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: 'linear-gradient(160deg, #f5ead8 0%, #fdf8f0 100%)' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#e5c99a80', color: '#7a4f00', border: '1px solid #c48a3f50' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a06820] inline-block" />
            Hubungi Kami
          </div>
          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#2c1a00' }}>
            Ada Pertanyaan? Kami Siap Membantu
          </h2>
          <p className="reveal max-w-md mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#5c3800' }}>
            Jangan ragu untuk menghubungi kami. Tim Tempe Crunch selalu siap memberikan layanan terbaik untuk Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* ── Contact info ── */}
          <div className="reveal-left space-y-5">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 p-5 rounded-2xl group transition-all duration-200 hover:-translate-x-1"
                style={{
                  background: '#fdf8f0',
                  border: '1px solid #e5c99a80',
                  boxShadow: '0 2px 12px rgba(90,50,0,0.06)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200"
                  style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)', color: '#fdf8f0' }}
                >
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold mb-0.5 uppercase tracking-wide" style={{ color: '#a06820' }}>
                    {item.label}
                  </p>
                  <p className="font-semibold text-sm" style={{ color: '#2c1a00' }}>
                    {item.value}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: '#7a4f00' }}>
                    {item.subtext}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 ml-auto opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200"
                  fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
                  style={{ color: '#a06820' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </a>
            ))}

            {/* Map/location note */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: '#fdf8f0', border: '1px solid #e5c99a80' }}
            >
              <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: '#a06820' }}>
                Lokasi
              </p>
              <p className="text-sm font-semibold" style={{ color: '#2c1a00' }}>
                SMK MAARIF 04 Pakis, Kabupaten Malang, Jawa Timur
              </p>
            </div>
          </div>

          {/* ── Form ── */}
          <div
            className="reveal-right p-8 rounded-3xl"
            style={{
              background: '#fdf8f0',
              border: '1px solid #e5c99a80',
              boxShadow: '0 8px 40px rgba(90,50,0,0.1)',
            }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)' }}
                >
                  <svg className="w-8 h-8 text-[#fdf8f0]" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="font-display font-bold text-xl" style={{ color: '#2c1a00' }}>
                  Pesan Terkirim
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: '#5c3800' }}>
                  Terima kasih sudah menghubungi kami. Kami akan segera merespons pesan Anda.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ nama: '', email: '', pesan: '' }); }}
                  className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold text-[#fdf8f0] transition-all duration-200"
                  style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)' }}
                >
                  Kirim Pesan Lain
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display font-bold text-xl mb-6" style={{ color: '#2c1a00' }}>
                  Kirim Pesan
                </h3>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#5c3800' }}>
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Anda"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#5c3800' }}>
                    Alamat Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@contoh.com"
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide" style={{ color: '#5c3800' }}>
                    Pesan
                  </label>
                  <textarea
                    name="pesan"
                    value={formData.pesan}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 rounded-xl font-semibold text-[#fdf8f0] text-sm shadow-md hover:shadow-lg active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70"
                  style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)' }}
                >
                  {loading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Mengirim...
                    </>
                  ) : (
                    <>
                      Kirim Pesan
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </>
                  )}
                </button>

                <p className="text-center text-xs" style={{ color: '#a06820' }}>
                  Atau langsung hubungi kami via WhatsApp untuk respons lebih cepat
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
