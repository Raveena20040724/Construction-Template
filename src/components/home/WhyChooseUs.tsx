import React from 'react';
import { motion } from 'framer-motion';
import { Award, UserCheck, HardHat, Cpu, ShieldCheck, Gem, DollarSign, Clock, Leaf, Briefcase } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const whyFeatures = [
  {
    icon: Award,
    title: '25+ Years Experience',
    description: 'Over two decades of proven civil engineering excellence across commercial high-rises and public infrastructure.'
  },
  {
    icon: UserCheck,
    title: 'Certified Engineers',
    description: 'Chartered PE & SE structural engineers certified by ASCE and state licensing boards.'
  },
  {
    icon: HardHat,
    title: 'Skilled Workforce',
    description: 'Over 500+ experienced trade craftspersons trained under rigorous guild apprenticeship standards.'
  },
  {
    icon: Cpu,
    title: 'Advanced Technology',
    description: '5D BIM digital twin modeling, drone site surveying, and laser-guided screed concrete laying.'
  },
  {
    icon: ShieldCheck,
    title: 'High Safety Standards',
    description: 'ISO 45001 certified zero-incident safety protocols and 24/7 AI-driven hazard recognition.'
  },
  {
    icon: Gem,
    title: 'Quality Materials',
    description: 'Lab-tested C60 structural concrete, certified low-E glazing, and high-strength Grade 350 steel.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Detailed itemized BOQ estimation with zero hidden fees and contractual cost fidelity.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Financial schedule guarantee backed by Primavera P6 master scheduling and fast-track execution.'
  },
  {
    icon: Leaf,
    title: 'Sustainable Construction',
    description: 'USGBC LEED Gold partner utilizing low-carbon concrete mixes and green site waste management.'
  },
  {
    icon: Briefcase,
    title: 'Professional Project Management',
    description: 'PMI-certified PMC oversight managing WBS, cash flows, and sub-contractor coordination.'
  }
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white border-t border-slate-200 dark:border-slate-800 relative overflow-hidden transition-colors">
      {/* Background Decorative Pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle
          badge="Why BuildCore"
          title="The Standard of Excellence in Modern Construction"
          subtitle="Why leading real estate developers, Fortune 500 industrial corporations, and government agencies entrust their landmark projects to BuildCore."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyFeatures.map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-5 border border-slate-200 dark:border-slate-800 hover:border-orange-500/60 shadow-md hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-300 group hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 rounded-xl bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400 w-fit mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
