import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, CheckCircle2, AlertCircle, Wrench, Shield } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { equipmentData } from '../../data/equipmentData';

export const EquipmentShowcase: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('All');

  const filteredEquipment = selectedType === 'All'
    ? equipmentData
    : equipmentData.filter((e) => e.type.toLowerCase().includes(selectedType.toLowerCase()));

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Machinery Fleet"
          title="Heavy Construction Equipment & Fleet"
          subtitle="BuildCore owns and operates a modern fleet of heavy construction machinery, maintained to manufacturer specs for high productivity and zero downtime."
        />

        {/* Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-12 flex-wrap">
          {['All', 'Excavator', 'Crane', 'Dozer', 'Mixer', 'Tipper', 'Roller'].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedType === t
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredEquipment.map((eq, idx) => (
            <motion.div
              key={eq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700/80 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden">
                  <img
                    src={eq.imageUrl}
                    alt={eq.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800';
                    }}
                  />
                  <div className="absolute top-3 left-3">
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shadow-md ${
                        eq.availability === 'Available'
                          ? 'bg-emerald-500 text-white'
                          : eq.availability === 'On Site'
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {eq.availability}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-orange-500">
                    {eq.type}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">
                    {eq.name}
                  </h4>

                  <div className="mt-3 space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    <p><strong>Capacity:</strong> {eq.capacity}</p>
                    <p className="line-clamp-2"><strong>Usage:</strong> {eq.usage}</p>
                  </div>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-slate-200 dark:border-slate-700 flex justify-between items-center text-[10px] text-slate-500 dark:text-slate-400 font-semibold">
                  <span>Engine: {eq.specifications.enginePower}</span>
                  <span className="flex items-center gap-1 text-emerald-500">
                    <Shield className="w-3 h-3" /> Inspected
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
