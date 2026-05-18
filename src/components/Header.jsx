import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import logoUrl from '../assets/logo.png';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-1 sm:gap-2"
        >
          <img src={logoUrl} alt="Zаточка" className="h-10 w-10 sm:h-16 sm:w-16 object-contain rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)]" />
          <span className="text-2xl sm:text-4xl font-black italic tracking-tighter">
            <span className="text-metallic font-display">АТОЧКА</span>
          </span>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            <motion.a
              href="https://t.me/ChelnyZatochka"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
              <i className="fa-brands fa-telegram text-xl"></i>
            </motion.a>
            <motion.a
              href="https://t.me/zatochkaK"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <i className="fa-brands fa-telegram text-xl"></i>
            </motion.a>
            <motion.a
              href="https://go.2gis.com/J7Qd1"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <i className="fa-solid fa-map-location-dot text-xl"></i>
            </motion.a>
          </div>

          {/* Phone */}
          <motion.a
            href="tel:+79272422685"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex items-center gap-2 sm:gap-3 glare-container panel-metallic px-3 py-1.5 sm:px-4 sm:py-2 rounded-full cursor-pointer"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.8, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="bg-brand-yellow text-dark-bg p-1.5 sm:p-2 rounded-full"
            >
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" fill="currentColor" />
            </motion.div>
            <span className="font-bold text-sm sm:text-lg hidden md:block tracking-wide">
              8 927 242-26-85
            </span>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
