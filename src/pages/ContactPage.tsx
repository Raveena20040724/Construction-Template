import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { ContactForm } from '../components/forms/ContactForm';
import { FAQAccordion } from '../components/shared/FAQAccordion';
import { MapPin, Phone, Mail, Clock, Globe, Share2, MessageSquare } from 'lucide-react';

const branchLocations = [
  {
    city: 'Mumbai (Headquarters)',
    address: 'BuildCore Tower, Plot No. 45, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra 400051',
    phone: '+91 (22) 6789 0199',
    email: 'mumbai@buildcoreconstructions.com'
  },
  {
    city: 'Delhi NCR Regional Office',
    address: 'DLF Cyber City, Building 10, Phase 2, Gurugram, Haryana 122002',
    phone: '+91 (124) 455-0144',
    email: 'delhi@buildcoreconstructions.com'
  },
  {
    city: 'Bengaluru Technology Hub',
    address: 'UB City Tower, Level 14, Vittal Mallya Road, Bengaluru, Karnataka 560001',
    phone: '+91 (80) 555-0188',
    email: 'bengaluru@buildcoreconstructions.com'
  },
  {
    city: 'Hyderabad Infrastructure Division',
    address: 'HITEC City Phase-2, Madhapur, Hyderabad, Telangana 500081',
    phone: '+91 (40) 555-0166',
    email: 'hyderabad@buildcoreconstructions.com'
  }
];

export const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us & Branch Locations | BuildCore Constructions"
        description="Get in touch with BuildCore Constructions headquarters in Mumbai or regional offices in Delhi NCR, Bengaluru, and Hyderabad."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Corporate Contacts"
            title="Get in Touch with Our Engineering Team"
            subtitle="Whether you require technical consultation, site inspections, or corporate partnerships, we are here to assist across Pan-India regions."
          />

          {/* Form & Map Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Direct Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Contact Details & Map Placeholder */}
            <div className="lg:col-span-5 space-y-8">
              {/* Headquarters Details Card */}
              <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                <h3 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-800 pb-4">
                  <MapPin className="w-5 h-5 text-orange-500" /> Head Office Headquarters
                </h3>

                <ul className="space-y-4 text-xs text-slate-600 dark:text-slate-300">
                  <li className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                    <span>BuildCore Tower, Plot 45, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra 400051</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                    <a href="tel:+9118002008899" className="hover:text-orange-500 font-bold">+91 1800 200 8899 / +91 (22) 6789 0199</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                    <a href="mailto:info@buildcoreconstructions.com" className="hover:text-orange-500">info@buildcoreconstructions.com</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-orange-500 shrink-0" />
                    <span>Monday - Saturday: 9:00 AM - 7:00 PM IST</span>
                  </li>
                </ul>

                {/* Social Media Links */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
                  <span className="text-xs font-bold uppercase text-slate-400 mr-2">Connect:</span>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Social Link">
                    <Globe className="w-4 h-4" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Social Link">
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors" aria-label="Social Link">
                    <Share2 className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Google Map Embed Iframe */}
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 h-64 relative bg-slate-200 dark:bg-slate-800">
                <iframe
                  title="BuildCore Mumbai Head Office Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.793739775073!2d72.86828237583626!3d19.061730052737604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e228965851%3A0xbefbc89552636f45!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Regional Branches Grid */}
          <div className="mb-20">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-6 text-center">
              Regional Engineering Hubs Across India
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {branchLocations.map((branch) => (
                <div
                  key={branch.city}
                  className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 space-y-3"
                >
                  <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                    {branch.city}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {branch.address}
                  </p>
                  <div className="pt-2 border-t border-slate-100 dark:border-slate-800 space-y-1 text-xs">
                    <p className="text-slate-700 dark:text-slate-300 font-semibold">{branch.phone}</p>
                    <p className="text-orange-500">{branch.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Page FAQs */}
          <div className="max-w-4xl mx-auto">
            <FAQAccordion
              title="Frequently Asked Inquiries"
              subtitle="Answers to common questions regarding RFPs, site visits, and partnership proposals."
              faqs={[
                {
                  question: 'How quickly does BuildCore respond to Request for Proposals (RFPs)?',
                  answer: 'Our commercial estimation department acknowledges all RFP submissions within 4 hours and delivers detailed preliminary BOQs within 48 to 72 hours.'
                },
                {
                  question: 'Does BuildCore handle joint-venture infrastructure contracts in India?',
                  answer: 'Yes, we regularly enter into consortium and joint-venture partnerships with international infrastructure funds and government municipal bodies.'
                },
                {
                  question: 'Can site visits be scheduled for active ongoing projects?',
                  answer: 'Yes, authorized client representatives can request guided site visits through our safety department after completing basic site safety induction.'
                }
              ]}
            />
          </div>
        </div>
      </main>
    </>
  );
};
