import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import Products     from './components/Products';
import About        from './components/About';
import Features     from './components/Features';
import Testimonials from './components/Testimonials';
import Contact      from './components/Contact';
import Footer       from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#fdf8f0' }}>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Features />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
