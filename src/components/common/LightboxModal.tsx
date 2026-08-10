import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: { imageUrl: string; title: string; location?: string; year?: string; description?: string }[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNavigate
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % images.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/90 backdrop-blur-md p-4"
        onClick={onClose}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close Lightbox"
          className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-slate-800/80 hover:bg-orange-500 text-white transition-colors duration-200"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex - 1 + images.length) % images.length);
            }}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-orange-500 text-white transition-colors duration-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Content Container */}
        <div
          className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={current.imageUrl}
            alt={current.title}
            className="max-h-[70vh] w-auto object-contain rounded-t-xl"
          />

          <div className="w-full p-6 bg-slate-900 text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-t border-slate-800">
            <div>
              <h3 className="text-xl font-bold text-white">{current.title}</h3>
              {current.description && (
                <p className="text-sm text-slate-400 mt-1">{current.description}</p>
              )}
            </div>

            <div className="flex items-center gap-4 text-xs text-orange-400 font-semibold uppercase tracking-wider shrink-0">
              {current.location && (
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {current.location}
                </span>
              )}
              {current.year && (
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {current.year}
                </span>
              )}
              <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300">
                {currentIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((currentIndex + 1) % images.length);
            }}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-slate-800/80 hover:bg-orange-500 text-white transition-colors duration-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </motion.div>
    </AnimatePresence>
  );
};
