import React from 'react';
import { SEO } from '../components/common/SEO';
import { QuoteForm } from '../components/forms/QuoteForm';
import { SectionTitle } from '../components/common/SectionTitle';

export const RequestQuotePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Request a Quote | BuildCore Constructions"
        description="Request a detailed itemized construction quote for commercial, residential, industrial, or civil engineering projects."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Cost Estimation"
            title="Request a Construction Quotation"
            subtitle="Submit your project specifications below. Our senior estimating department will analyze your drawings and return a detailed proposal within 24 hours."
          />

          <QuoteForm />
        </div>
      </main>
    </>
  );
};
