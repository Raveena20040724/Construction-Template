import React from 'react';
import { motion } from 'framer-motion';
import { CounterNumber } from '../common/CounterNumber';
import { Award, Building2, Users, ThumbsUp, Calendar, HardHat } from 'lucide-react';

const stats = [
  { label: 'Years of Experience', value: 25, suffix: '+', icon: Calendar, color: 'text-orange-500' },
  { label: 'Completed Projects', value: 350, suffix: '+', icon: Building2, color: 'text-emerald-500' },
  { label: 'Ongoing Projects', value: 120, suffix: '+', icon: HardHat, color: 'text-amber-500' },
  { label: 'Industry Awards', value: 75, suffix: '+', icon: Award, color: 'text-blue-500' },
  { label: 'Skilled Professionals', value: 500, suffix: '+', icon: Users, color: 'text-purple-500' },
  { label: 'Client Satisfaction', value: 98, suffix: '%', icon: ThumbsUp, color: 'text-orange-500' }
];

export const StatsCounter: React.FC = () => {
  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 mb-3 group-hover:scale-110 transition-transform duration-300">
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>

              <div className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                <CounterNumber end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>

              <span className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                {stat.label}
              </span>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
