import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { clientsData } from '../data/clientsData';
import { Building2, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { ClientCarousel } from '../components/home/ClientCarousel';

export const ClientsPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Enterprise Clients & Partners | BuildCore Constructions"
        description="BuildCore Constructions is trusted by real estate conglomerates, Fortune 500 manufacturing firms, healthcare systems, and government transit authorities."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Client Showcase"
            title="Enterprise & Public Sector Clients"
            subtitle="Explore our long-term corporate partnerships with commercial developers, healthcare networks, and transportation departments."
          />

          {/* Client Logos Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {clientsData.map((client) => (
              <div
                key={client.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30">
                    {client.category}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-3">
                    {client.name}
                  </h3>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs text-slate-500 dark:text-slate-400">
                    <p className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-orange-500" /> {client.location}
                    </p>
                    <p className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-orange-500" /> Partner Since: {client.partnerSince}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1 text-[11px] font-bold text-emerald-500">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Verified Partnership
                </div>
              </div>
            ))}
          </div>

          <ClientCarousel />
        </div>
      </main>
    </>
  );
};
