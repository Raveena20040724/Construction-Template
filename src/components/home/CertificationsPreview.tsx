import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Award } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { certificationsData } from '../../data/certificationsData';

export const CertificationsPreview: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Credibility & Standards"
          title="Certified Industry Excellence"
          subtitle="BuildCore operates under internationally audited quality management, environmental safety, and structural engineering certifications."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificationsData.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30">
                    {cert.code}
                  </span>
                  <Award className="w-6 h-6 text-orange-500" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {cert.description}
                </p>

                <div className="space-y-1 text-[11px] text-slate-500 dark:text-slate-400 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <p><strong>Issuing Org:</strong> {cert.issuingOrganization}</p>
                  <p><strong>Validity:</strong> {cert.issueYear} - {cert.validUntil}</p>
                </div>
              </div>

              <div className="pt-6">
                <Link
                  to="/certifications"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <span>View Certificate Details</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
