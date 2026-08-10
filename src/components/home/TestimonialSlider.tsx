import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { testimonialsData } from '../../data/testimonialsData';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const TestimonialSlider: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Client Endorsements"
          title="What Our Clients Say About BuildCore"
          subtitle="Read genuine feedback from commercial developers, government transit authorities, and industrial leaders."
        />

        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
            className="pb-14 pt-4"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl relative flex flex-col justify-between h-full hover:border-orange-500/40 transition-colors">
                  <div>
                    <Quote className="w-10 h-10 text-orange-500/20 absolute top-6 right-6" />

                    {/* Star Rating */}
                    <div className="flex items-center gap-1 mb-4 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>

                    <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed italic mb-6 relative z-10">
                      "{item.feedback}"
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-4">
                    <img
                      src={item.clientAvatar}
                      alt={item.clientName}
                      className="w-12 h-12 rounded-full object-cover border-2 border-orange-500"
                    />
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {item.clientName}
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.designation}, <strong>{item.company}</strong>
                      </p>
                      <p className="text-[10px] text-orange-500 font-semibold mt-0.5">
                        Project: {item.project}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};
