import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { industriesData } from '../../data/industriesData';

export const IndustriesPreview: React.FC = () => {
  const featuredIndustries = industriesData.slice(0, 8);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Market Sectors"
          title="Industries We Serve Across India"
          subtitle="Engineered solutions tailored to the stringent functional requirements of corporate, municipal, industrial, and healthcare clients."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredIndustries.map((ind, idx) => {
            const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[ind.iconName] || Icons.Building;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group relative rounded-2xl overflow-hidden bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  <div className="p-3 rounded-xl bg-orange-500 text-white w-fit mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                    {ind.name}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-700/60">
                  <Link
                    to="/industries"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-orange-500 hover:text-orange-600 uppercase tracking-wider"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-wider text-orange-500 hover:text-orange-600"
          >
            <span>Explore All 12 Industries We Serve</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
