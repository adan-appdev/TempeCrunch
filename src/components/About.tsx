import { useRef, useEffect } from 'react';

export default function About() {
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
      { threshold: 0.12 }
    );
    section.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el) =>
      observer.observe(el)
    );
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="tentang"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #fdf8f0 0%, #f5ead8 100%)' }}
    >
      {/* Decorative blob */}
      <div
        className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a06820, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ── Image column ── */}
          <div className="reveal-left relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{ boxShadow: '0 24px 64px rgba(90,50,0,0.18)' }}
            >
              <img
                src="/image.jpg"
                alt="Tentang Tempe Crunch"
                className="w-full h-80 md:h-[440px] object-cover"
              />
              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(44,26,0,0.4), transparent 60%)' }}
              />
            </div>

            {/* Floating card */}
            <div
              className="absolute -bottom-6 -right-4 md:right-6 px-5 py-4 rounded-2xl shadow-xl"
              style={{ background: '#fdf8f0', border: '1px solid #e5c99a' }}
            >
              <p className="text-xs font-semibold mb-1" style={{ color: '#7a4f00' }}>Di Dirikan Oleh </p>
              <p className="font-display font-bold text-2xl" style={{ color: '#a06820' }}>Rangga, Rafael, & Lana</p>
              <p className="text-xs mt-0.5" style={{ color: '#5c3800' }}></p>
            </div>

            {/* Decorative square accent */}
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-2xl -z-10"
              style={{ background: '#e5c99a', opacity: 0.6 }}
            />
          </div>

          {/* ── Text column ── */}
          <div>
            <div
              className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-5"
              style={{ background: '#e5c99a80', color: '#7a4f00', border: '1px solid #c48a3f50' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a06820] inline-block" />
              Tentang Kami
            </div>

            <h2
              className="reveal font-display font-bold text-3xl sm:text-4xl leading-snug mb-5"
              style={{ color: '#2c1a00' }}
            >
              Berawal dari Dapur,{' '}
              <span style={{ color: '#a06820' }}>Dibuat dengan Hati</span>
            </h2>

            <p className="reveal text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#5c3800' }}>
                Kerupuk tempe adalah camilan khas dari Malang yang dibuat dari bahan utama tempe, yaitu hasil fermentasi kedelai.
                Tempe diolah dengan bumbu tertentu, kemudian diiris tipis, dikeringkan, dan digoreng hingga renyah. Produk ini 
                  banyak dijadikan oleh-oleh karena rasanya yang gurih, teksturnya kriuk, dan memiliki cita rasa khas Indonesia.
                Kerupuk tempe biasanya tersedia dalam berbagai varian rasa, seperti original, pedas, balado, hingga keju, sehingga
                 bisa menyesuaikan selera konsumen.               Selain itu, kemasannya kini semakin modern dan praktis untuk dibawa bepergian.
              Keunggulan Produk
            </p>

            <p className="reveal text-sm sm:text-base leading-relaxed mb-4" style={{ color: '#5c3800' }}>
            1. Cita Rasa Khas dan Unik
            Kerupuk tempe memiliki rasa gurih alami dari tempe yang berbeda dari kerupuk biasa. Kombinasi bumbu membuat rasanya lebih khas dan disukai banyak orang.
            </p>

            <p className="reveal text-sm sm:text-base leading-relaxed mb-8" style={{ color: '#5c3800' }}>
              Kini, Tempe Crunch telah dipercaya oleh ribuan keluarga di seluruh Indonesia sebagai
              teman camilan yang sehat, lezat, dan dapat dinikmati oleh semua kalangan.
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}
