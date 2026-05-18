import React, { useEffect, useRef } from 'react';
import { Scissors, Hammer, Wrench } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const prices = {
  hair: [
    { name: 'Ножницы Могилевские', price: '250р' },
    { name: 'Ножницы прямые', price: '500р' },
    { name: 'Ножницы филировочные', price: '600р' },
    { name: 'Ножницы слайс', price: '800р' },
    { name: 'Нож для машинки', price: '800р' },
  ],
  manicure: [
    { name: 'Пинцет', price: '200р' },
    { name: 'Кусачки, твизеры, ножнички', price: '400р' },
    { name: 'Кусачки педикюрные (паруса)', price: '500р' },
  ],
  household: [
    { name: 'Цепь для бензопилы', price: '350р' },
    { name: 'Нож охотничий', price: '200-400р' },
    { name: 'Нож кухонный', price: '100-400р' },
    { name: 'Нож для рубанка 10см', price: '200р' },
    { name: 'Топор', price: '200-600р' },
  ]
};

const PriceCategory = ({ title, items, icon: Icon, id }) => (
  <div id={id} className="price-category panel-metallic p-6 md:p-8 rounded-xl glare-container relative overflow-hidden group opacity-0 translate-y-12">
    {/* Background accent */}
    <div className={`absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none text-brand-yellow category-icon-${id}`}>
      <Icon size={120} />
    </div>

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-dark-bg rounded-lg border border-white/5 shadow-inner">
          <Icon className="text-brand-yellow" size={28} />
        </div>
        <h3 className="text-2xl font-bold text-metallic uppercase tracking-wide">{title}</h3>
      </div>

      <ul className="space-y-4">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-center border-b border-white/10 pb-2 hover:border-brand-yellow/50 transition-colors">
            <span className="text-gray-300 text-lg">{item.name}</span>
            <span className="text-brand-yellow font-bold text-lg whitespace-nowrap ml-4">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const PriceList = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Staggered fade in for cards
      gsap.to('.price-category', {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animated Scissors on Scroll for Hair category
      gsap.to('.category-icon-cat-hair svg', {
        scrollTrigger: {
          trigger: '#cat-hair',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        rotate: 45,
        scale: 1.2,
        transformOrigin: "center center"
      });

      // Animated Wrench for Manicure
      gsap.to('.category-icon-cat-manicure svg', {
        scrollTrigger: {
          trigger: '#cat-manicure',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        y: 20,
        rotate: -15,
      });

      // Animated Hammer for Household
      gsap.to('.category-icon-cat-household svg', {
        scrollTrigger: {
          trigger: '#cat-household',
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
        rotate: 30,
        transformOrigin: "bottom right"
      });
    }, containerRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <section id="price" className="py-24 px-6 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black text-center mb-16 text-metallic uppercase price-title">
          Прайс-лист
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PriceCategory
            id="cat-hair"
            title="Парикмахерские"
            items={prices.hair}
            icon={Scissors}
          />
          <PriceCategory
            id="cat-manicure"
            title="Маникюрные"
            items={prices.manicure}
            icon={Wrench}
          />
          <PriceCategory
            id="cat-household"
            title="Бытовые"
            items={prices.household}
            icon={Hammer}
          />
        </div>
      </div>
    </section>
  );
};

export default PriceList;
