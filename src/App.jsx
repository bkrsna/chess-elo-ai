import React, { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Pricing from './components/sections/Pricing';
import Team from './components/sections/Team';

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-neutral-background font-sans text-neutral-text_primary">
      <Navbar />

      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <Pricing />
        <Team />
      </main>

      <Footer />
    </div>
  );
}

export default App;
