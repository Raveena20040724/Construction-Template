import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  centered = true,
  light = false,
  className = ''
}) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : ''} ${className}`}>
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30 mb-4"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-ping" />
          {badge}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};
