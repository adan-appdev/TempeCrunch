import { useRef, useEffect } from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    name: 'Tempe Crunch Original',
    description: 'Cita rasa klasik keripik tempe yang gurih dan renyah, cocok untuk camilan sehari-hari bersama keluarga.',
    price: 'Rp 5.000',
    badge: 'Terlaris',
    image: '/project1.jpg',
  },
  {
    name: 'Tempe Crunch Pedas Manis',
    description: 'Perpaduan sempurna antara tempe dan asin yang menggugah selera, hadir untuk pencinta sensasi berbeda.',
    price: 'Rp 5.000',
    badge: 'Favorit',
    image: '/project2.jpg',
  },
  {
    name: 'Tempe Crunch Pedas',
    description: 'Bumbu Pedas khas Pakis yang kaya rempah memberikan cita rasa autentik pada setiap gigitan renyahnya.',
    price: 'Rp 5.000',
    image: '/project3.jpg',
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
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
    <section id="produk" ref={sectionRef} className="py-24 px-6" style={{ background: '#f5ead8' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="reveal inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ background: '#e5c99a80', color: '#7a4f00', border: '1px solid #c48a3f50' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#a06820] inline-block" />
            Pilihan Produk Kami
          </div>

          <h2 className="reveal font-display font-bold text-3xl sm:text-4xl mb-4" style={{ color: '#2c1a00' }}>
            Temukan Varian Favorit Anda
          </h2>

          <p className="reveal max-w-xl mx-auto text-sm sm:text-base leading-relaxed" style={{ color: '#5c3800' }}>
            Setiap varian dibuat dengan resep rahasia dan bahan-bahan pilihan yang menjamin kelezatan dan kerenyahan terbaik.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {products.map((product, i) => (
            <ProductCard key={product.name} {...product} index={i} />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal text-center mt-14">
          <p className="text-sm mb-4" style={{ color: '#7a4f00' }}>
            Ingin memesan dalam jumlah besar untuk acara atau reseller?
          </p>

          <a
            href="https://wa.me/6281234567890?text=Halo%20Tempe%20Crunch%2C%20saya%20ingin%20bertanya%20tentang%20pemesanan%20dalam%20jumlah%20besar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm border-2 hover:bg-[#e5c99a]/40 active:scale-95 transition-all duration-200"
            style={{ color: '#5c3800', borderColor: '#c48a3f80' }}
          >
            Hubungi Kami untuk Pemesanan Grosir
          </a>
        </div>

      </div>
    </section>
  );
}