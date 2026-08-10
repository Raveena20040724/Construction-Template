import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from '../shared/ServiceCard';
import { servicesData } from '../../data/servicesData';

export const ServicesPreview: React.FC = () => {
  const featuredServices = servicesData.slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Construction Expertise"
          title="World-Class Engineering & Construction Services"
          subtitle="From high-rise commercial office towers and heavy industrial hubs to national infrastructure expressways, we deliver end-to-end solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/request-quote"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl transition-all duration-300 group"
          >
            <span>Request a Custom Service Quote</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};
