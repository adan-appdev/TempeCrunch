import { useRef, useEffect } from 'react';

interface Feature {
  icon:        React.ReactNode;
  title:       string;
  description: string;
}

const features: Feature[] = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title:       'Tanpa Bahan Pengawet',
    description: 'Kami tidak menggunakan pengawet buatan. Setiap produk murni dari bahan-bahan alami pilihan untuk menjaga kesehatan Anda.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
    title:       'Dibuat Secara Homemade',
    description: 'Diproduksi dengan tangan oleh tim kami yang berpengalaman, menjaga cita rasa autentik dan kehangatan masakan rumahan.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title:       'Bahan Baku Berkualitas',
    description: 'Hanya kedelai lokal non-GMO pilihan, rempah asli, dan minyak premium yang kami gunakan untuk menghasilkan keripik terbaik.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title:       'Renyah Tahan Lama',
    description: 'Proses penggorengan yang terukur dan pengemasan vakum higienis menjaga kerenyahan produk hingga berminggu-minggu.',
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="keunggulan"
      ref={sectionRef}
      className="py-24 px-6"
      style={{ background: '#2c1a00' }}
    >
      <div className="max-w-6xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: 'rgba(196,138,63,0.15)', color: '#c48a3f', border: '1px solid rgba(196,138,63,0.3)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#c48a3f] inline-block" />
            Mengapa Memilih Kami
          </div>

          <h2
            className="reveal font-display font-bold text-3xl sm:text-4xl mb-4"
            style={{ color: '#fdf8f0' }}
          >
            Keunggulan Tempe Crunch
          </h2>
          <p className="reveal max-w-lg mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#d4a86a' }}>
            Kami percaya bahwa camilan yang baik tidak harus mengorbankan kualitas dan kesehatan.
          </p>
        </div>

        {/* ── Features grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="reveal group p-7 rounded-3xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(196,138,63,0.2)',
                transitionDelay: `${i * 80}ms`,
              }}
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
                style={{ background: 'rgba(160,104,32,0.18)', color: '#c48a3f' }}
              >
                {feature.icon}
              </div>

              <h3
                className="font-display font-semibold text-lg mb-3"
                style={{ color: '#fdf8f0' }}
              >
                {feature.title}
              </h3>

              <p
                className="text-sm leading-relaxed"
                style={{ color: '#d4a86a' }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Bottom banner ── */}
        <div
          className="reveal mt-14 rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(160,104,32,0.25), rgba(92,56,0,0.2))',
            border: '1px solid rgba(196,138,63,0.25)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full"
            style={{ background: 'linear-gradient(90deg, transparent, #c48a3f, transparent)' }}
          />

          <h3
            className="font-display font-bold text-2xl sm:text-3xl mb-3"
            style={{ color: '#fdf8f0' }}
          >
            Siap Mencoba Kerenyahan Sesungguhnya?
          </h3>
          <p className="text-sm sm:text-base mb-7" style={{ color: '#d4a86a' }}>
            Pesan sekarang dan rasakan perbedaan kualitas Tempe Crunch langsung ke pintu rumah Anda.
          </p>
          <a
            href="#produk"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('produk')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-[#2c1a00] text-sm hover:opacity-90 active:scale-95 transition-all duration-200 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #c48a3f, #a06820)' }}
          >
            Lihat Semua Produk
          </a>
        </div>
      </div>
    </section>
  );
}
