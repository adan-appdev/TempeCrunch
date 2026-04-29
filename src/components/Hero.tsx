import { useEffect, useRef } from 'react';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  /* Parallax subtle effect on scroll */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const imgEl = el.querySelector<HTMLElement>('.hero-image-wrap');
      if (imgEl) imgEl.style.transform = `translateY(${scrollY * 0.08}px)`;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="beranda"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #fdf8f0 0%, #f5ead8 50%, #e5c99a40 100%)' }}
    >
      {/* ── Decorative background blobs ── */}
      <div
        className="absolute top-[-80px] right-[-80px] w-[420px] h-[420px] rounded-full opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c48a3f 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-[-60px] left-[-60px] w-[320px] h-[320px] rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #a06820 0%, transparent 70%)' }}
      />

      {/* ── Grain texture overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* ── Text content ── */}
          <div className="order-2 md:order-1">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ background: '#e5c99a60', color: '#7a4f00', border: '1px solid #c48a3f50' }}
              data-aos="fade-in"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#a06820] inline-block" />
              Produk Unggulan Kami
            </div>

            <h1
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5"
              style={{ color: '#2c1a00', animationFillMode: 'both' }}
            >
              Keripik Tempe{' '}
              <span
                className="relative inline-block"
                style={{ color: '#a06820' }}
              >
                Renyah
                <svg
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 9 C40 3, 100 3, 198 9"
                    stroke="#c48a3f"
                    strokeWidth="3"
                    strokeLinecap="round"
                    fill="none"
                  />
                </svg>
              </span>{' '}
              dan Gurih
            </h1>

            <p
              className="text-base sm:text-lg leading-relaxed mb-8 max-w-md"
              style={{ color: '#5c3800' }}
            >
              Dibuat dengan cinta dari kedelai pilihan, digoreng sempurna hingga renyah tahan lama.
              Tempe Crunch hadir untuk memanjakan lidah Anda setiap hari.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleScrollTo('produk')}
                className="px-7 py-3.5 rounded-full font-semibold text-[#fdf8f0] text-sm shadow-lg hover:shadow-xl active:scale-95 transition-all duration-200"
                style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)' }}
              >
                Beli Sekarang
              </button>
              <button
                onClick={() => handleScrollTo('tentang')}
                className="px-7 py-3.5 rounded-full font-semibold text-sm border-2 hover:bg-[#e5c99a]/40 active:scale-95 transition-all duration-200"
                style={{ color: '#5c3800', borderColor: '#c48a3f80' }}
              >
                Pelajari Lebih Lanjut
              </button>
            </div>

            {/* Stats bar */}
            <div className="mt-12 flex gap-8 flex-wrap">
              {[
                { value: '100%', label: 'Bahan Alami' },
                { value: '2+',   label: 'Varian Rasa'  },
                { value: '1K+',  label: 'Pelanggan Puas' },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-display font-bold text-2xl" style={{ color: '#a06820' }}>
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium mt-0.5" style={{ color: '#7a4f00' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Product image ── */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="hero-image-wrap relative">
              {/* Decorative ring */}
              <div
                className="absolute inset-[-16px] rounded-full border-2 border-dashed opacity-30 animate-[spin_30s_linear_infinite]"
                style={{ borderColor: '#c48a3f' }}
              />
              {/* Image container */}
              <div
                className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden shadow-2xl animate-float"
                style={{
                  boxShadow: '0 30px 80px rgba(90,50,0,0.25), 0 0 0 12px #f0dfc080',
                }}
              >
                <img
                  src="/image.jpg"
                  alt="Keripik Tempe Crunch"
                  className="w-full h-full object-cover"
                />
                {/* Subtle overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,220,150,0.15), transparent 60%)' }}
                />
              </div>

              {/* Floating badge top-right */}
              <div
                className="absolute top-4 -right-4 sm:right-0 px-4 py-2.5 rounded-2xl shadow-lg text-center"
                style={{ background: '#fdf8f0', border: '1px solid #e5c99a' }}
              >
                <p className="text-xs font-semibold" style={{ color: '#7a4f00' }}>Tanpa</p>
                <p className="text-sm font-bold" style={{ color: '#a06820' }}>Pengawet</p>
              </div>

              {/* Floating badge bottom-left */}
              <div
                className="absolute -bottom-2 -left-4 sm:left-0 px-4 py-2.5 rounded-2xl shadow-lg"
                style={{ background: '#a06820', color: '#fdf8f0' }}
              >
                <p className="text-xs font-medium opacity-80">Rating</p>
                <p className="text-sm font-bold">5.0 / 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-50">
        <span className="text-xs font-medium" style={{ color: '#7a4f00' }}>Gulir ke bawah</span>
        <div
          className="w-5 h-8 rounded-full border-2 flex justify-center pt-1.5"
          style={{ borderColor: '#c48a3f' }}
        >
          <div
            className="w-1 h-2 rounded-full animate-bounce"
            style={{ background: '#a06820' }}
          />
        </div>
      </div>
    </section>
  );
}
