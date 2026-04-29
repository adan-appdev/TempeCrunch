import { useRef, useEffect } from 'react';

const testimonials = [
  {
    name:   'Sirin',
    city:   'Njeru',
    text:   'Keripik tempe paling renyah yang pernah saya coba. Anak-anak saya langsung ketagihan dan selalu minta dibelikan lagi setiap minggu.',
    rating: 5,
  },
  {
    name:   'Joko',
    city:   'Madura',
    text:   'Bahan-bahannya terasa alami dan tidak berminyak berlebihan. Cocok banget dijadikan oleh-oleh untuk keluarga di kampung.',
    rating: 5,
  },
  {
    name:   'Aziz',
    city:   'Mendit',
    text:   'Varian pedas manisnya luar biasa enak. Saya sudah langganan hampir setahun dan kualitasnya selalu konsisten.',
    rating: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" style={{ color: '#c48a3f', fill: '#c48a3f' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
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
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: '#f5ead8' }}
    >
      {/* Decorative wave top */}
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-14" style={{ fill: '#fdf8f0' }}>
          <path d="M0,60 C200,10 400,50 600,30 C800,10 1000,50 1200,20 L1200,0 L0,0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#e5c99a80', color: '#7a4f00', border: '1px solid #c48a3f50' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a06820] inline-block" />
            Kata Mereka
          </div>
          <h5 className="reveal font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#2c1a00' }}>
            Dipercaya Ribuan Pelanggan
          </h5>
          <p className="reveal max-w-md mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#5c3800' }}>
            Kepuasan pelanggan adalah prioritas utama kami. Inilah yang mereka rasakan setelah mencoba Tempe Crunch.
          </p>
         <p className="reveal font-display font-bold sm:text-10xl mb-4" style={{ color: '#2c1a00' }}>
            JIKA YANG DIKIRIM BUKAN KERIPIK TEMPE CRUNCH, KAMI GANTI BARANG ATAU UANG ANDA 2X LIPAT!
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal p-7 rounded-3xl flex flex-col gap-4 transition-all duration-300 hover:-translate-y-1"
              style={{
                background: '#fdf8f0',
                border: '1px solid #e5c99a80',
                boxShadow: '0 4px 20px rgba(90,50,0,0.07)',
                transitionDelay: `${i * 100}ms`,
              }}
            >
              {/* Quote icon */}
              <svg className="w-8 h-8 opacity-20" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#a06820' }}>
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              <p className="text-sm leading-relaxed flex-1" style={{ color: '#5c3800' }}>
                {t.text}
              </p>

              <div className="flex items-center justify-between pt-4" style={{ borderTop: '1px solid #e5c99a60' }}>
                <div className="flex items-center gap-3">
                  {/* Avatar */}
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                    style={{ background: 'linear-gradient(135deg, #a06820, #c48a3f)', color: '#fdf8f0' }}
                  >
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm" style={{ color: '#2c1a00' }}>{t.name}</p>
                    <p className="text-xs" style={{ color: '#a06820' }}>{t.city}</p>
                  </div>
                </div>
                <StarRating count={t.rating} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none rotate-180">
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-10" style={{ fill: '#2c1a00' }}>
          <path d="M0,60 C200,10 400,50 600,30 C800,10 1000,50 1200,20 L1200,0 L0,0 Z" />
        </svg>
      </div>
    </section>
  );
}
