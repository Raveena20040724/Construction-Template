import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { ServiceCard } from '../components/shared/ServiceCard';
import { servicesData } from '../data/servicesData';
import { Search, Wrench } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = servicesData.filter(
    (s) =>
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="Construction Services | BuildCore Constructions"
        description="Explore 12 specialized construction services including Commercial, Residential, Industrial, Infrastructure, Road, Bridge, and Structural Engineering."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Services Portfolio"
            title="Comprehensive Construction & Engineering Services"
            subtitle="Explore our 12 core engineering divisions delivering precision, structural longevity, and safety across India."
          />

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-12 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search construction services (e.g. Bridge, Road, PEB...)"
              className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-md"
            />
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <Wrench className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No matching services found</h3>
              <p className="text-xs text-slate-500 mt-1">Try adjusting your search terms.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
