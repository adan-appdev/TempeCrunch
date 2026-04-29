interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  badge?: string;
  index: number;
  image: string; // ✅ tambahin ini
}

export default function ProductCard({
  name,
  description,
  price,
  badge,
  index,
  image, // ✅ ambil dari props
}: ProductCardProps) {
  const handleBuy = () => {
    const msg = encodeURIComponent(
      `Halo Tempe Crunch, saya ingin memesan *${name}* seharga ${price}. Mohon informasinya. Terima kasih.`
    );
    window.open(`https://wa.me/6285739733243?text=${msg}`, '_blank');
  };

  return (
    <div
      className="reveal group relative bg-[#fdf8f0] rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col"
      style={{
        border: '1px solid #e5c99a80',
        boxShadow: '0 4px 24px rgba(90,50,0,0.08)',
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Badge */}
      {badge && (
        <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold text-[#fdf8f0] bg-[#a06820] shadow">
          {badge}
        </div>
      )}

      {/* Image */}
      <div
        className="relative h-52 overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #f5ead8, #e5c99a50)' }}
      >
        <img
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display font-bold text-lg mb-2" style={{ color: '#2c1a00' }}>
          {name}
        </h3>

        <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: '#7a4f00' }}>
          {description}
        </p>

        <div
          className="flex items-center justify-between mt-auto pt-4"
          style={{ borderTop: '1px solid #e5c99a60' }}
        >
          <div>
            <p className="text-xs font-medium mb-0.5" style={{ color: '#a06820' }}>
              Harga
            </p>
            <p className="font-display font-bold text-xl" style={{ color: '#3d2400' }}>
              {price}
            </p>
          </div>

          <button
            onClick={handleBuy}
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-[#fdf8f0] shadow hover:shadow-md active:scale-95 transition-all duration-200"
            style={{ background: 'linear-gradient(135deg, #a06820, #7a4f00)' }}
          >
            Beli
          </button>
        </div>
      </div>
    </div>
  );
}