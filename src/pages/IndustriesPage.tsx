import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { industriesData } from '../data/industriesData';
import { ArrowRight, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Industries We Serve | BuildCore Constructions"
        description="Explore 12 key industry sectors served by BuildCore Constructions including Commercial, Healthcare, Government, Energy, Infrastructure, and Real Estate."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Tailored Engineering Solutions"
            title="Industries We Serve Across India"
            subtitle="Customized civil engineering, structural design, and project management for 12 specialized market sectors."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind) => {
              const IconComponent = (Icons as unknown as Record<string, React.FC<{ className?: string }>>)[ind.iconName] || Icons.Building;
              return (
                <div
                  key={ind.id}
                  className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 group"
                >
                  <div>
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={ind.imageUrl}
                        alt={ind.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 p-3 rounded-xl bg-orange-500 text-white shadow-lg">
                        <IconComponent className="w-6 h-6" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
                        {ind.name}
                      </h3>

                      <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                        {ind.overview}
                      </p>

                      <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-orange-500">Key Solutions</span>
                        {ind.keySolutions.slice(0, 3).map((sol, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                            <span className="truncate">{sol}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <Link
                      to="/projects"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-slate-100 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                    >
                      <span>View Industry Projects</span>
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
};
