import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background dark radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#1a2b3c] via-[#0b131a] to-[#0b131a] -z-10"></div>

      {/* Decorative spark effect */}
      <motion.div
        initial={{ opacity: 0, scale: 0, x: '-50%', y: '-50%' }}
        animate={{ opacity: [0, 1, 0], scale: [0, 2, 4] }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 w-32 h-32 bg-brand-yellow/20 rounded-full blur-3xl pointer-events-none -z-10"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center z-10 w-full">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="text-[6.5vw] md:text-[5.5vw] lg:text-[4.5vw] xl:text-6xl leading-[1.1] font-black uppercase tracking-tight mb-6 w-full"
        >
          <span className="text-metallic block pb-2 px-2">Профессиональная</span>
          <span className="text-yellow-gradient mt-2 block font-display text-[15vw] sm:text-[12vw] md:text-7xl">Zаточка</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
          className="metallic-divider w-[90%] sm:w-3/4 mx-auto mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light max-w-[90%] sm:max-w-3xl mx-auto leading-relaxed"
        >
          Инструмента для салонов красоты, ремонт оборудования, бытовой и охотничий инструмент
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          className="mt-12"
        >
          <a href="#price" className="inline-block px-8 py-4 bg-brand-yellow text-dark-bg font-bold text-lg rounded-sm uppercase tracking-wider glare-container hover:bg-yellow-400 transition-colors shadow-[0_0_20px_rgba(250,204,21,0.3)] hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]">
            Смотреть цены
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
