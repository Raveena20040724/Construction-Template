import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Search, Compass, Calculator, FileCheck, HardHat, CheckCircle2, Key, ShieldCheck } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const processSteps = [
  { step: 1, title: 'Project Consultation', icon: MessageSquare, description: 'Initial alignment on project vision, operational requirements, and client budget parameters.' },
  { step: 2, title: 'Site Assessment', icon: Search, description: 'Geotechnical soil investigation, bathymetric surveys, and environmental impact assessments.' },
  { step: 3, title: 'Planning & Design', icon: Compass, description: '3D architectural drafting, 5D BIM digital twin modeling, and structural stress simulations.' },
  { step: 4, title: 'Cost Estimation', icon: Calculator, description: 'Detailed itemized Bill of Quantities (BOQ), material pricing, and milestone Cash Flow schedule.' },
  { step: 5, title: 'Approvals & Documentation', icon: FileCheck, description: 'Securing municipal zoning permits, environmental clearances, and structural stability filings.' },
  { step: 6, title: 'Construction Execution', icon: HardHat, description: 'Mobilization of heavy machinery, foundation piling, RCC framing, and MEP utility installation.' },
  { step: 7, title: 'Quality Inspection', icon: CheckCircle2, description: 'ISO 9001 quality audits, concrete core strength testing, and life safety system commissioning.' },
  { step: 8, title: 'Project Handover', icon: Key, description: 'Punch list resolution, final architectural cleanup, as-built documentation, and client keys handover.' },
  { step: 9, title: 'Maintenance & Support', icon: ShieldCheck, description: '10-year structural warranty coverage and 24/7 post-occupancy facility maintenance support.' }
];

export const ProcessTimeline: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="How We Work"
          title="Our Proven 9-Step Construction Lifecycle"
          subtitle="From initial concept and architectural design to physical handover and long-term facility maintenance, we guarantee structural precision at every stage."
        />

        {/* Timeline Grid */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {processSteps.map((s, idx) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 relative group hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  {/* Step Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="w-10 h-10 rounded-2xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 font-extrabold text-sm flex items-center justify-center shadow-sm">
                      0{s.step}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] font-bold text-orange-500 uppercase tracking-wider">
                    <span>Phase 0{s.step} Completed</span>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
