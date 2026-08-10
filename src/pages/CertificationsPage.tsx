import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { certificationsData } from '../data/certificationsData';
import { Award, ShieldCheck, Download, CheckCircle2, FileCheck } from 'lucide-react';
import { Button } from '../components/common/Button';
import { toast } from 'react-toastify';

export const CertificationsPage: React.FC = () => {
  const handleDownloadCert = (certName: string) => {
    toast.success(`Downloading verified certificate PDF for ${certName}`);
  };

  return (
    <>
      <SEO
        title="Certifications & Quality Standards | BuildCore Constructions"
        description="View ISO 9001, ISO 14001, ISO 45001, LEED Gold, and OSHA VPP Star certifications awarded to BuildCore Constructions."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Quality & Compliance"
            title="Certifications & Quality Management Standards"
            subtitle="BuildCore maintains internationally audited quality management, environmental sustainability, and workplace safety certifications across all job sites."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert) => (
              <div
                key={cert.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30">
                      {cert.code}
                    </span>
                    <Award className="w-7 h-7 text-orange-500" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {cert.name}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 pt-4 border-t border-slate-100 dark:border-slate-800">
                    <p><strong>Issuing Body:</strong> {cert.issuingOrganization}</p>
                    <p><strong>Certified Year:</strong> {cert.issueYear}</p>
                    <p><strong>Audit Expiry:</strong> {cert.validUntil}</p>
                    <p><strong>Audit Scope:</strong> {cert.scope}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => handleDownloadCert(cert.name)}
                    variant="outline"
                    size="sm"
                    className="w-full text-xs font-bold uppercase tracking-wider"
                    leftIcon={<Download className="w-4 h-4" />}
                  >
                    Download Certificate (PDF)
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};
