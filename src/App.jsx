import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PriceList from './components/PriceList';
import InfoSection from './components/InfoSection';
import ScissorTransition from './components/ScissorTransition';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Parallax effect for background elements
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.info-card').forEach(card => {
        gsap.fromTo(card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen relative font-sans scroll-smooth overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <ScissorTransition />
        <PriceList />
        <InfoSection />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-dark-bg flex flex-col items-center justify-center gap-4">
        <div className="flex gap-4">
            <a
              href="https://t.me/ChelnyZatochka"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
              <i className="fa-brands fa-telegram text-xl"></i>
            </a>
            <a
              href="https://t.me/zatochkaK"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <i className="fa-brands fa-telegram text-xl"></i>
            </a>
            <a
              href="https://go.2gis.com/J7Qd1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <i className="fa-solid fa-map-location-dot text-xl"></i>
            </a>
        </div>
        <p className="text-gray-500">© {new Date().getFullYear()} Zаточка. Профессиональная заточка инструмента в Набережных Челнах.</p>
      </footer>
    </div>
  );
}

export default App;
