import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { SectionTitle } from '../common/SectionTitle';
import { clientsData } from '../../data/clientsData';

import 'swiper/css';

export const ClientCarousel: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-xs font-extrabold uppercase tracking-widest text-orange-500">
            Trusted Partnerships
          </span>
          <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mt-1">
            Trusted by Leading Enterprises & Government Agencies
          </h3>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="py-4"
        >
          {clientsData.map((client) => (
            <SwiperSlide key={client.id}>
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center text-center h-28 group hover:border-orange-500/50 transition-all">
                <span className="font-extrabold text-sm text-slate-800 dark:text-slate-200 group-hover:text-orange-500 transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase font-semibold">
                  {client.category}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
