import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PriceList from './components/PriceList';
import InfoSection from './components/InfoSection';
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
    <div className="min-h-screen relative font-sans scroll-smooth">
      <Header />
      <main>
        <Hero />
        <PriceList />
        <InfoSection />
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-dark-bg">
        <p className="text-gray-500">© {new Date().getFullYear()} Zаточка. Профессиональная заточка инструмента в Набережных Челнах.</p>
      </footer>
    </div>
  );
}

export default App;
