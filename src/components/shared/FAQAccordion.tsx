import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface FAQItem {
  question: string;
  answer: string;
}

export const defaultFAQs: FAQItem[] = [
  {
    question: 'What types of construction projects do you handle?',
    answer: 'BuildCore Constructions handles a comprehensive spectrum of projects including Commercial High-rises, Residential Housing Complexes, Industrial Manufacturing Hubs, Infrastructure Transit Corridors, Bridges, Highways, and Civic Government Buildings.'
  },
  {
    question: 'Do you provide complete project management?',
    answer: 'Yes, we provide full turn-key Project Management Consultancy (PMC) covering pre-construction design, municipal approvals, procurement, site execution, quality assurance, safety supervision, and commissioning.'
  },
  {
    question: 'How can I request a construction quotation?',
    answer: 'You can fill out our online Request a Quote form, email us directly at quote@buildcoreconstructions.com, or call our estimating department at +1 (800) 555-0199. Our team will review your drawings and provide an itemized BOQ proposal.'
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scale and structural complexity. Commercial interior fit-outs typically take 3-6 months, while major high-rise towers and heavy infrastructure corridors range between 18 to 36 months.'
  },
  {
    question: 'Do you provide renovation services?',
    answer: 'Yes, our specialized Retrofitting & Remodeling division handles structural strengthening (CFRP wrapping), historical facade preservation, commercial interior modernization, and adaptive reuse.'
  },
  {
    question: 'Do you handle government projects?',
    answer: 'Yes, BuildCore is a pre-qualified tier-1 contractor for federal, state, and municipal government projects including transit corridors, civic administrative offices, and public utility works.'
  },
  {
    question: 'What safety standards do you follow?',
    answer: 'We strictly operate under ISO 45001 Occupational Health & Safety and OSHA VPP Star standards, maintaining 100% PPE compliance, mandatory fall protection rigging, and continuous site hazard monitoring.'
  },
  {
    question: 'Do you provide sustainable construction solutions?',
    answer: 'Yes, as a USGBC LEED Certified Gold Partner, we integrate low-carbon concrete mixes, solar microgrids, rainwater harvesting, energy-efficient HVAC, and recycled building materials.'
  },
  {
    question: 'Can I view your completed projects?',
    answer: 'Yes! You can explore our extensive online Project Portfolio and Gallery pages or schedule an on-site guided tour of our completed commercial towers and ongoing infrastructure works.'
  },
  {
    question: 'Do you provide post-construction support?',
    answer: 'Absolute accuracy and client peace of mind are guaranteed. All BuildCore projects include a 10-year structural warranty alongside dedicated 24/7 post-handover facility maintenance support.'
  }
];

interface FAQAccordionProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  faqs = defaultFAQs,
  title = 'Frequently Asked Questions',
  subtitle = 'Find answers to common questions about our construction methodology, pricing, timelines, and safety standards.'
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {title && (
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4 text-orange-500" />
            Clear Answers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">{title}</h2>
          {subtitle && <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>}
        </div>
      )}

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                isOpen
                  ? 'bg-white dark:bg-slate-900 border-orange-500 shadow-lg shadow-orange-500/5'
                  : 'bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => toggleIndex(index)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <span className="font-bold text-base md:text-lg text-slate-900 dark:text-white flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-orange-500 shrink-0" />
                  {faq.question}
                </span>
                <div
                  className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                    isOpen ? 'bg-orange-500 text-white rotate-180' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                  }`}
                >
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 pt-2 text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/80">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
