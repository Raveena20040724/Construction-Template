import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { galleryData } from '../data/galleryData';
import type { GalleryCategory } from '../types/gallery';
import { LightboxModal } from '../components/common/LightboxModal';
import { Maximize2, MapPin, Calendar, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const GalleryPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories: GalleryCategory[] = [
    'All',
    'Building Construction',
    'Infrastructure',
    'Industrial',
    'Residential',
    'Commercial',
    'Interior',
    'Equipment',
    'Construction Sites'
  ];

  const filteredItems = activeCategory === 'All'
    ? galleryData
    : galleryData.filter((g) => g.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO
        title="Project & Site Gallery | BuildCore Constructions"
        description="View high resolution construction site photos, machinery equipment in action, interior fit-outs, and completed structural projects."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Visual Gallery"
            title="Construction & Site Execution Gallery"
            subtitle="Explore high-definition imagery showcasing our equipment, site safety operations, structural framing, and completed architecture."
          />

          {/* Category Filter Pills */}
          <div className="flex items-center justify-center gap-2 mb-12 flex-wrap max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(index)}
                  className="group relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer h-72"
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent dark:from-slate-950/90 dark:via-slate-950/30 opacity-70 group-hover:opacity-90 transition-opacity" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-500 text-white shadow-md">
                      {item.category}
                    </span>
                  </div>

                  {/* Zoom Icon Overlay */}
                  <div className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
                    <Maximize2 className="w-5 h-5" />
                  </div>

                  {/* Bottom Text Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="text-base font-bold line-clamp-1">{item.title}</h4>
                    <div className="flex items-center gap-3 text-[11px] text-slate-300 mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-orange-400" /> {item.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-orange-400" /> {item.year}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={filteredItems}
          currentIndex={lightboxIndex}
          onNavigate={(idx) => setLightboxIndex(idx)}
        />
      </main>
    </>
  );
};
