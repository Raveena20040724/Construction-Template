import React, { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { servicesData } from '../data/servicesData';
import { Button } from '../components/common/Button';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { HardHat, Clock, Wrench, ShieldCheck, CheckCircle2, ArrowRight, Calculator, FileText, Building2, ChevronRight } from 'lucide-react';
import { toast } from 'react-toastify';

export const ServiceDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'execution' | 'safety' | 'faqs'>('overview');

  // Find matching service by slug or id
  const service = servicesData.find((s) => s.slug === id || s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  const handleBrochureDownload = () => {
    toast.success(`Downloading ${service.title} Technical Specification Sheet (PDF)...`);
  };

  return (
    <>
      <SEO
        title={`${service.title} | BuildCore Constructions`}
        description={service.shortDescription}
      />

      <main className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Clean Service Hero Banner Card (NO Photo Background) */}

        {/* Clean Service Hero Banner Card (NO Photo Background) */}
        <section className="relative py-14 px-6 md:px-12 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl max-w-7xl mx-auto mb-12 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden transition-colors">
          {/* Subtle Ambient Decorative Mesh */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-4 border border-orange-500/30">
              <HardHat className="w-4 h-4 text-orange-500" />
              Construction Service Division
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
              {service.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {service.shortDescription}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 items-center">
              <Button
                href="/request-quote"
                variant="primary"
                size="lg"
                rightIcon={<Calculator className="w-5 h-5" />}
              >
                Request Quotation for {service.title}
              </Button>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-orange-400 bg-slate-100 dark:bg-slate-800/80 px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Clock className="w-4 h-4 text-orange-500" />
                Est. Timeline: <strong>{service.estimatedTimeline}</strong>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section: Overview & Key Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          {/* Tabbed Navigation Bar */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 overflow-x-auto pb-2 mb-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Key Features' },
              { id: 'execution', label: 'Execution Process' },
              { id: 'safety', label: 'Safety & ISO' },
              { id: 'faqs', label: 'FAQs' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? 'bg-orange-500 text-white shadow-md'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab 1: Overview */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Row 1: Service Overview & Scope (Left) + Heavy Equipment Fleet (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                      Service Overview & Scope
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                      {service.fullDescription}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-orange-500 dark:text-orange-400">
                      <Wrench className="w-5 h-5" /> Heavy Equipment Fleet
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.equipmentUsed.map((eq, idx) => (
                        <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {eq}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2: Quality Guarantee & On-Time Execution (Left) + Target Sectors Served (Right) */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-2">Quality Guarantee</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        ISO 9001 certified QA/QC inspection testing at every foundation pour and structural steel weld.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-wider text-orange-500 mb-2">On-Time Execution</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        Primavera P6 master scheduling with daily earned value tracking to eliminate deadline delays.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex flex-col justify-between">
                  <div>
                    <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                      <Building2 className="w-5 h-5" /> Target Sectors Served
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.targetIndustries.map((ind, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Other Tabs Layout */}
          {activeTab !== 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-8 space-y-12">
                {/* Tab 2: Key Features */}
                {activeTab === 'features' && (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                      Core Technical Deliverables & Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.keyFeatures.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                          <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-semibold text-slate-800 dark:text-slate-200 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 3: Execution Process */}
                {activeTab === 'execution' && (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6">
                      Step-by-Step Execution Workflow
                    </h3>
                    <div className="space-y-4">
                      {service.processSteps.map((step) => (
                        <div key={step.number} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                          <span className="w-8 h-8 rounded-xl bg-orange-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-md">
                            0{step.number}
                          </span>
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{step.title}</h4>
                            <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 4: Safety & ISO */}
                {activeTab === 'safety' && (
                  <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">
                      Workplace Safety & Compliance Standards
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                      BuildCore operates under strict zero-incident workplace policies across all active job sites.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.safetyStandards.map((std, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/80">
                          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                          <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{std}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tab 5: FAQs */}
                {activeTab === 'faqs' && (
                  <div>
                    <FAQAccordion faqs={service.faqs} title="Service FAQs" subtitle="Common questions regarding our execution." />
                  </div>
                )}
              </div>

              {/* Sidebar Column for Other Tabs */}
              <div className="lg:col-span-4 space-y-8">
                {/* Equipment Used Card */}
                <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-orange-500 dark:text-orange-400">
                    <Wrench className="w-5 h-5" /> Heavy Equipment Fleet
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.equipmentUsed.map((eq, idx) => (
                      <span key={idx} className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Target Industries */}
                <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-blue-600 dark:text-blue-400">
                    <Building2 className="w-5 h-5" /> Target Sectors Served
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.targetIndustries.map((ind, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
};
