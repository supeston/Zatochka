import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 px-6 py-4 bg-dark-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-2"
        >
          <span className="text-4xl font-black italic tracking-tighter">
            <span className="text-yellow-gradient">Z</span>
            <span className="text-metallic">АТОЧКА</span>
          </span>
        </motion.div>

        {/* Phone */}
        <motion.a
          href="tel:+79272422685"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex items-center gap-3 glare-container panel-metallic px-4 py-2 rounded-full cursor-pointer"
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
            className="bg-brand-yellow text-dark-bg p-2 rounded-full"
          >
            <Phone size={18} fill="currentColor" />
          </motion.div>
          <span className="font-bold text-lg hidden sm:block tracking-wide">
            8 927 242-26-85
          </span>
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
