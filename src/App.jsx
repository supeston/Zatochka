import React, { useEffect, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy loading below-the-fold components
const PriceList = lazy(() => import('./components/PriceList'));
const VideoGallery = lazy(() => import('./components/VideoGallery'));
const InfoSection = lazy(() => import('./components/InfoSection'));

gsap.registerPlugin(ScrollTrigger);

// Simple loading placeholder
const Loader = () => (
  <div className="w-full h-32 flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-brand-orange border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  useEffect(() => {
    // Parallax effect and anchor smooth scroll
    const ctx = gsap.context(() => {
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

      // Delay to ensure lazy loaded components are mostly rendered
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen relative font-sans scroll-smooth overflow-x-hidden text-gray-200">
      <Header />
      <main className="overflow-x-hidden">
        <Hero />
        <Suspense fallback={<Loader />}>
          <PriceList />
          <VideoGallery />
          <InfoSection />
        </Suspense>
      </main>

      {/* Footer */}
      <footer className="py-8 text-center border-t border-white/5 bg-dark-bg flex flex-col items-center justify-center gap-4">
        <p className="text-gray-500">© {new Date().getFullYear()} Zаточка. Профессиональная заточка инструмента в Набережных Челнах.</p>
      </footer>
    </div>
  );
}

export default App;
