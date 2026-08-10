import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HardHat, ArrowRight, ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';
import { CounterNumber } from '../common/CounterNumber';
import { Button } from '../common/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-white overflow-hidden pt-12 pb-20 transition-colors duration-300">
      {/* High Resolution Background Image & Adaptive Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=2000"
          alt="BuildCore Constructions Hero"
          className="w-full h-full object-cover object-center scale-105 opacity-15 dark:opacity-40 animate-pulse-slow transition-opacity duration-300"
        />
        {/* Adaptive Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/60 dark:from-slate-950 dark:via-slate-950/90 dark:to-slate-950/60 transition-colors duration-300" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/40 dark:from-slate-950 dark:via-transparent dark:to-slate-950/40 transition-colors duration-300" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30 text-xs font-extrabold uppercase tracking-wider backdrop-blur-md"
            >
              <HardHat className="w-4 h-4 text-orange-500" />
              <span>Building Strong Foundations for a Better Future</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white"
            >
              Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">Strength, Precision & Innovation</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal"
            >
              We deliver high-quality construction, infrastructure, engineering, and project management solutions with a strong commitment to safety, quality, and timely completion.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <Button
                href="/request-quote"
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto py-4 text-sm font-extrabold uppercase tracking-wider shadow-2xl shadow-orange-500/40"
              >
                Request a Quote
              </Button>

              <Button
                href="/projects"
                variant="dark"
                size="lg"
                className="w-full sm:w-auto py-4 text-sm font-bold uppercase tracking-wider"
              >
                Explore Our Projects
              </Button>
            </motion.div>

            {/* Micro Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="pt-6 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-3 gap-4 text-left max-w-xl mx-auto lg:mx-0"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">100% On-Time Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">ISO 9001 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-orange-500 shrink-0" />
                <span className="text-xs text-slate-700 dark:text-slate-300 font-semibold">75+ Industry Awards</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Live Project Widget & Quick Stat Counter Cards */}
          <div className="lg:col-span-5 space-y-6">
            {/* Floating Live Project Showcase Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-3xl p-6 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center justify-between mb-4">
                <span className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-orange-600 dark:text-orange-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Featured Megaproject
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  $450M Budget
                </span>
              </div>

              <div className="relative h-44 rounded-2xl overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                  alt="Skyline Tower"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent dark:from-slate-950 dark:via-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <h4 className="text-lg font-bold text-white">Smart City Infrastructure</h4>
                  <p className="text-xs text-slate-200">Downtown Megacity Zone • 65% Completed</p>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">Construction Milestone Progress</span>
                  <span className="text-orange-600 dark:text-orange-400 font-extrabold">65%</span>
                </div>
                <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-[65%]" />
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 dark:bg-orange-500/20 text-orange-600 dark:text-orange-400">
                    <Building className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">45-Story Glass Tower</p>
                    <p className="text-[10px] text-slate-500 dark:text-slate-400">LEED Platinum Standard</p>
                  </div>
                </div>
                <Link
                  to="/projects/smart-city-development"
                  className="text-xs font-bold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1"
                >
                  View Details &rarr;
                </Link>
              </div>
            </motion.div>

            {/* Quick Hero Stat Pill */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="bg-white/90 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800/80 rounded-2xl p-4 flex items-center justify-around text-center shadow-lg"
            >
              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  <CounterNumber end={25} suffix="+" />
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Years Experience</div>
              </div>

              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />

              <div>
                <div className="text-2xl font-black text-orange-600 dark:text-orange-500">
                  <CounterNumber end={350} suffix="+" />
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Projects Completed</div>
              </div>

              <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />

              <div>
                <div className="text-2xl font-black text-slate-900 dark:text-white">
                  <CounterNumber end={98} suffix="%" />
                </div>
                <div className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 tracking-wider">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
