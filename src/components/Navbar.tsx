import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk',  href: '#produk'  },
  { label: 'Tentang', href: '#tentang' },
  { label: 'Kontak',  href: '#kontak'  },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);
  const [activeLink,   setActiveLink]   = useState('beranda');

  /* ── Shadow on scroll ── */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ── Active section tracking ── */
  useEffect(() => {
    const sections = ['beranda', 'produk', 'tentang', 'keunggulan', 'kontak'];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveLink(id); },
        { threshold: 0.4 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  /* ── Close menu on route change ── */
  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#fdf8f0]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(90,50,0,0.1)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-[68px] flex items-center justify-between">

        {/* ── Logo ── */}
        <a
          href="#beranda"
          onClick={() => handleNavClick('#beranda')}
          className="flex items-center gap-2 group"
        >
          <span className="font-display font-bold text-xl text-[#3d2400] group-hover:text-[#a06820] transition-colors duration-200">
            Tempe Crunch
          </span>
        </a>

        {/* ── Desktop Nav ── */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#a06820] text-[#fdf8f0]'
                    : 'text-[#3d2400] hover:bg-[#e5c99a]/50 hover:text-[#5c3800]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#kontak"
            onClick={(e) => { e.preventDefault(); handleNavClick('#kontak'); }}
            className="ml-3 px-5 py-2 bg-[#a06820] text-[#fdf8f0] text-sm font-semibold rounded-full shadow hover:bg-[#7a4f00] hover:shadow-md active:scale-95 transition-all duration-200"
          >
            Pesan Sekarang
          </a>
        </nav>

        {/* ── Mobile Hamburger ── */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px] rounded-lg hover:bg-[#e5c99a]/40 transition-colors duration-200"
        >
          <span
            className={`block h-0.5 w-6 bg-[#3d2400] rounded-full transition-all duration-300 ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#3d2400] rounded-full transition-all duration-300 ${
              menuOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#3d2400] rounded-full transition-all duration-300 ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </div>

      {/* ── Mobile Menu ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#fdf8f0]/98 backdrop-blur-md border-t border-[#e5c99a]/50`}
      >
        <nav className="flex flex-col px-6 py-4 gap-1">
          {navLinks.map((link) => {
            const isActive = activeLink === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-[#a06820] text-[#fdf8f0]'
                    : 'text-[#3d2400] hover:bg-[#e5c99a]/50'
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href="#kontak"
            onClick={(e) => { e.preventDefault(); handleNavClick('#kontak'); }}
            className="mt-2 px-4 py-3 bg-[#a06820] text-[#fdf8f0] text-sm font-semibold rounded-xl text-center hover:bg-[#7a4f00] transition-colors duration-200"
          >
            Pesan Sekarang
          </a>
        </nav>
      </div>
    </header>
  );
}
