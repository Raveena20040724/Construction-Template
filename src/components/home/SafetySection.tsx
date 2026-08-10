import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, HardHat, AlertTriangle, Eye, CheckCircle2, Award, HeartPulse, Lock } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const safetyPillars = [
  { icon: ShieldCheck, title: 'Workplace Safety Policy', desc: 'ISO 45001 certified site safety management system.' },
  { icon: HardHat, title: 'Employee Safety Training', desc: 'Mandatory weekly safety toolbox talks and rescue drills.' },
  { icon: Lock, title: '100% PPE Compliance', desc: 'Strict enforcement of hard hats, fall arrest harnesses & steel-toe boots.' },
  { icon: Eye, title: '24/7 Site Inspections', desc: 'AI computer vision camera monitoring for real-time hazard detection.' },
  { icon: AlertTriangle, title: 'Risk Management', desc: 'Daily Job Safety Analysis (JSA) prior to every high-risk activity.' },
  { icon: HeartPulse, title: 'Emergency Procedures', desc: 'On-site medical first aid stations & clear evacuation corridors.' },
  { icon: Award, title: 'Equipment Safety Certs', desc: 'Third-party load testing for all tower cranes & hoisting gear.' },
  { icon: CheckCircle2, title: 'Quality & Safety Control', desc: 'Dual-tier safety audit sign-offs before concrete pours.' }
];

export const SafetySection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Zero-Harm Culture"
          title="Uncompromised Workplace Safety & ISO Standards"
          subtitle="At BuildCore, safety is not merely a policy—it is our primary moral responsibility. Every worker returns home safely at the end of every shift."
        />

        {/* Large Safety Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Image Stack & Stats Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-200 dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="Construction Safety Equipment Inspection"
                className="w-full h-[450px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
            </div>

            {/* Overlapping Stats Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-700/80 rounded-2xl p-6 shadow-2xl grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-black text-emerald-600 dark:text-emerald-400">0</div>
                <div className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-300">Major Incidents</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-500 dark:text-orange-400">100%</div>
                <div className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-300">PPE Compliance</div>
              </div>
              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">500+</div>
                <div className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-300">Safety Trainings</div>
              </div>
              <div>
                <div className="text-2xl font-black text-orange-500 dark:text-orange-400">24/7</div>
                <div className="text-[10px] uppercase font-bold text-slate-700 dark:text-slate-300">Site Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column: 8 Safety Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {safetyPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.03 }}
                  className="bg-white dark:bg-slate-900/60 backdrop-blur-md rounded-xl p-4 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 shadow-sm transition-colors"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{p.title}</h4>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed pl-10">{p.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
