import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { ConstructionService } from '../../types/service';

interface ServiceCardProps {
  service: ConstructionService;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, index = 0 }) => {
  // Dynamic Lucide Icon picker
  const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[service.iconName] || Icons.Building2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.04 }}
      className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* Top High-Resolution Card Photo Banner */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          {/* High Transparency Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent dark:from-slate-950/80 dark:via-slate-950/20" />

          {/* Floating Category Icon Badge */}
          <div className="absolute bottom-4 left-6 p-3 rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 group-hover:bg-orange-600 transition-colors">
            <IconComponent className="w-6 h-6" />
          </div>

          {/* Floating Timeline Badge */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-slate-900/80 backdrop-blur-md text-white border border-slate-700/80 shadow-md">
            {service.estimatedTimeline}
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6">
          <h3 className="text-xl font-extrabold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
            {service.title}
          </h3>

          <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {service.shortDescription}
          </p>

          {/* Key Features Bullet List */}
          <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2">
            {service.keyFeatures.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <Check className="w-3.5 h-3.5 text-orange-500 shrink-0 mt-0.5" />
                <span className="truncate">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/services/${service.slug}`}
          className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-white hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          <span>Explore Division</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
