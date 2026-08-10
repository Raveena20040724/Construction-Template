import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sun, RefreshCw, Droplets, Zap, Shield, TreePine, BarChart3 } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const greenPillars = [
  { icon: Leaf, title: 'Green Building', desc: 'USGBC LEED Gold & Platinum design execution.' },
  { icon: Sun, title: 'Energy Efficiency', desc: 'High-performance double-glazed low-E building envelopes.' },
  { icon: RefreshCw, title: 'Waste Management', desc: '85% construction site material recycling rate.' },
  { icon: Droplets, title: 'Water Conservation', desc: 'Rainwater harvesting lakes & greywater recycling.' },
  { icon: Zap, title: 'Renewable Energy', desc: 'Solar microgrid & rooftop photovoltaic installation.' },
  { icon: TreePine, title: 'Sustainable Materials', desc: 'FSC-certified timber & recycled fly-ash bricks.' },
  { icon: BarChart3, title: 'Carbon Reduction', desc: '40% lower embodied carbon via low-cement geopolymers.' },
  { icon: Shield, title: 'Environmental Compliance', desc: 'Full ISO 14001 certification across all job sites.' }
];

export const SustainabilitySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Environmental Responsibility"
          title="Building Green for a Sustainable Tomorrow"
          subtitle="We engineer structures designed to minimize carbon emissions, conserve natural resources, and provide long-term energy savings."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {greenPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-slate-50 dark:bg-slate-800/60 backdrop-blur-md rounded-2xl p-6 border border-slate-200 dark:border-slate-700/80 hover:border-emerald-500/50 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1.5"
              >
                <div className="p-3.5 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 w-fit mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Sustainability Progress Indicators */}
        <div className="bg-slate-50 dark:bg-slate-800/80 rounded-3xl p-8 border border-slate-200 dark:border-slate-700/80 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center shadow-md">
          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              <span>Recycled Site Materials</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">85%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[85%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              <span>LEED Platinum Projects</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">40+</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[90%]" />
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
              <span>Embodied Carbon Reduction</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-black">40%</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
              <div className="h-full bg-emerald-500 rounded-full w-[65%]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
