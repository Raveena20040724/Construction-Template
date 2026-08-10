import React from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Phone, ArrowRight } from 'lucide-react';

export const QuoteCTABanner: React.FC = () => {
  return (
    <section className="py-12 bg-slate-100 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-orange-600 to-orange-500 rounded-2xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 opacity-10 pointer-events-none">
            <HardHat className="w-96 h-96" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-bold uppercase tracking-wider mb-3">
              Ready to Start Your Construction Project?
            </span>
            <h3 className="text-2xl md:text-4xl font-extrabold tracking-tight">
              Build Strong Foundations for a Better Future With BuildCore
            </h3>
            <p className="mt-2 text-white/90 text-sm md:text-base">
              Contact our engineering team today for technical consultation, cost estimation, or site surveys.
            </p>
          </div>
          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4">
            <Link
              to="/request-quote"
              className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-950 text-white font-bold text-sm uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </Link>
            <a
              href="tel:+9118002008899"
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm uppercase tracking-wider backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 border border-white/20"
            >
              <Phone className="w-4 h-4" />
              Call +91 1800 200 8899
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
