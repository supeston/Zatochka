import React from 'react';
import { MapPin, Clock, Wrench } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-24 px-6 bg-[#080d12] relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Equipment Repair */}
        <div className="panel-metallic p-8 md:p-12 rounded-xl glare-container border-l-4 border-l-brand-orange info-card">
          <div className="flex items-center gap-4 mb-6">
            <Wrench className="text-brand-orange" size={32} />
            <h3 className="text-3xl font-bold uppercase text-metallic">Ремонт оборудования</h3>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Ремонт парикмахерского и маникюрного оборудования осуществляется по <span className="text-brand-orange font-bold">предварительной договорённости</span> о цене.
          </p>
        </div>

        {/* Contacts & Schedule */}
        <div className="panel-metallic p-8 md:p-12 rounded-xl glare-container info-card">
          <h3 className="text-3xl font-bold uppercase text-metallic mb-8">Контакты</h3>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="mt-1">
                <MapPin className="text-brand-yellow" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">Адрес</h4>
                <p className="text-gray-300 text-lg leading-relaxed">
                  39-й комплекс, 7а бульвар Касимова, 11а.<br/>
                  Новый Город м-н, Центральный район,<br/>
                  Набережные Челны, Республика Татарстан.<br/>
                  <span className="text-brand-yellow font-bold">2 этаж</span>
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1">
                <Clock className="text-brand-yellow" size={28} />
              </div>
              <div>
                <h4 className="text-lg font-bold text-white mb-2 uppercase tracking-wide">График работы</h4>
                <p className="text-gray-300 text-lg">
                  <span className="inline-block w-16">Пн-Пт</span>
                  <span className="text-white font-bold">11:00–14:00</span>
                </p>
                <p className="text-gray-300 text-lg mt-1">
                  <span className="inline-block w-16">Сб-Вс</span>
                  <span className="text-brand-orange font-bold">Выходной</span>
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex gap-4">
              <a
                href="https://t.me/ChelnyZatochka"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-dark-bg px-4 py-2 rounded-lg border border-white/10 hover:border-brand-yellow transition-colors group"
              >
                <i className="fa-brands fa-telegram text-brand-yellow text-xl group-hover:scale-110 transition-transform"></i>
                <span>Задать вопрос</span>
              </a>
              <a
                href="https://t.me/zatochkaK"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-dark-bg px-4 py-2 rounded-lg border border-white/10 hover:border-brand-yellow transition-colors group"
              >
                <i className="fa-brands fa-telegram text-brand-yellow text-xl group-hover:scale-110 transition-transform"></i>
                <span>Канал</span>
              </a>
              <a
                href="https://go.2gis.com/J7Qd1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-dark-bg px-4 py-2 rounded-lg border border-white/10 hover:border-brand-yellow transition-colors group"
              >
                <i className="fa-solid fa-map-location-dot text-brand-yellow text-xl group-hover:scale-110 transition-transform"></i>
                <span>2GIS</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InfoSection;
