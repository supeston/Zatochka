import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import { TelegramChannelIcon, TelegramAccountIcon, MaxIcon } from './Icons';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center"
        >
          <span className="text-2xl sm:text-4xl font-black italic tracking-tighter font-display flex items-baseline">
            <span className="text-yellow-gradient pr-[2px]">Z</span>
            <span className="text-metallic">АТОЧКА</span>
          </span>
        </motion.div>

        <div className="flex items-center gap-4">
          {/* Social Icons */}
          <div className="hidden md:flex gap-3">
            <motion.a
              href="https://t.me/ChelnyZatochka"
              target="_blank"
              title="Написать нам"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
              <TelegramAccountIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://t.me/zatochkaK"
              target="_blank"
              title="Наш канал"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <TelegramChannelIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://go.2gis.com/J7Qd1"
              target="_blank"
              title="Мы на карте"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:text-brand-yellow hover:border-brand-yellow transition-all"
            >
               <i className="fa-solid fa-map-location-dot text-xl"></i>
            </motion.a>
            <motion.a
              href="https://max.ru/u/f9LHodD0cOI6eF2fqc0EAxuzP-8Y0REIDecsMGmjJj0oPTIQYLWaEU1smpE"
              target="_blank"
              title="Max"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.1, boxShadow: "0px 0px 15px rgba(250, 204, 21, 0.5)" }}
              className="bg-dark-panel w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-brand-yellow transition-all"
            >
               <MaxIcon className="w-6 h-6 hover:brightness-200 transition-all" />
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
