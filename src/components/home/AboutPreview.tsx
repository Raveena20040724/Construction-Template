import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, HeartHandshake, Lightbulb, Leaf, Smile, ArrowRight, CheckCircle2 } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';

const coreValues = [
  {
    icon: Award,
    title: 'Quality',
    description: 'Uncompromising engineering standards, ISO certified quality assurance, and premium structural material sourcing.'
  },
  {
    icon: ShieldCheck,
    title: 'Safety',
    description: 'Zero-incident safety culture, 100% PPE site compliance, and continuous hazard identification training.'
  },
  {
    icon: HeartHandshake,
    title: 'Integrity',
    description: 'Transparent milestone pricing, ethical contractor dealings, and honest communication across all phases.'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Advanced 5D BIM digital twins, pre-cast modular construction, and AI-driven site monitoring technologies.'
  },
  {
    icon: Leaf,
    title: 'Sustainability',
    description: 'USGBC LEED Gold construction methods, low-carbon concrete mixes, and eco-friendly waste management.'
  },
  {
    icon: Smile,
    title: 'Customer Satisfaction',
    description: 'Dedicated post-handover support, financial on-time completion guarantees, and 98% client referral rating.'
  }
];

export const AboutPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Image Stack */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="BuildCore Engineers at Work"
                className="w-full h-[450px] object-cover"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.onerror = null;
                  target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000';
                }}
              />
            </div>

            {/* Overlapping Badge */}
            <div className="absolute -bottom-6 -right-6 z-20 bg-orange-500 text-white rounded-3xl p-6 shadow-2xl max-w-xs hidden sm:block">
              <div className="text-4xl font-black">25+</div>
              <div className="text-xs font-bold uppercase tracking-wider mt-1">Years of Engineering & Construction Leadership</div>
            </div>

            <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />
          </div>

          {/* Right Column: Copy */}
          <div className="lg:col-span-6 space-y-6">
            <SectionTitle
              badge="About BuildCore Constructions"
              title="Building Strong Foundations for a Better Future"
              subtitle="With over two decades of engineering excellence, BuildCore Constructions stands as a premier general contractor trusted by commercial developers, industrial corporations, and municipal authorities."
              centered={false}
            />

            <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p><strong>Mission:</strong> To construct enduring, sustainable, and technologically advanced infrastructure that elevates communities and empowers economic growth.</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <p><strong>Vision:</strong> To be the global contractor of choice, setting the standard for zero-harm safety, environmental stewardship, and structural precision.</p>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-lg shadow-orange-500/30 transition-all duration-300"
              >
                Discover Our Full Profile
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Core Values Sub-section */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Our Core Construction Values
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2">
              The fundamental principles that guide every foundation we pour, structure we erect, and relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group"
                >
                  <div className="p-3.5 rounded-2xl bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 w-fit mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-orange-500 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
