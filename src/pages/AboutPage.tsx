import React from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { Award, ShieldCheck, Users, CheckCircle2, Download, Building2, HardHat, FileText } from 'lucide-react';
import { Button } from '../components/common/Button';
import { toast } from 'react-toastify';

const leadershipTeam = [
  {
    name: 'Arthur Vance',
    role: 'Founder & Chief Executive Officer',
    experience: '30+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300',
    bio: 'Former chief structural engineer for mega-bridge projects across India before founding BuildCore in 2001.'
  },
  {
    name: 'Elena Rostova',
    role: 'Chief Operating Officer & VP Civil Works',
    experience: '22+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    bio: 'Directs all site operations, equipment deployment, and public infrastructure contract executions.'
  },
  {
    name: 'Dr. Robert Harrison',
    role: 'Chief Technology Officer & VDC Director',
    experience: '18+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    bio: 'Pioneered 5D BIM digital twin integration and computer vision safety monitoring on high-rise jobsites.'
  },
  {
    name: 'Sarah Jenkins',
    role: 'Head of Sustainability & LEED Director',
    experience: '15+ Years Experience',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300',
    bio: 'Leads green building certifications, low-carbon concrete chemistry, and environmental compliance.'
  }
];

export const AboutPage: React.FC = () => {
  const handleBrochureDownload = () => {
    toast.success('Downloading BuildCore Corporate Profile Brochure (PDF)...');
  };

  return (
    <>
      <SEO
        title="About BuildCore Constructions | 25+ Years Engineering Excellence"
        description="Learn about BuildCore Constructions' history, leadership team, mission, vision, core values, and commitment to structural excellence."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Page Hero Header */}
        <section className="relative py-20 bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1541888946425-d0fbb186a5b7?auto=format&fit=crop&q=80&w=1600"
              alt="BuildCore Headquarters"
              className="w-full h-full object-cover opacity-10 dark:opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent dark:from-slate-950 dark:via-slate-950/80" />
          </div>

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 font-bold text-xs uppercase tracking-wider mb-4 border border-orange-500/30">
              Corporate Profile
            </span>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white">
              Building Strong Foundations for a Better Future
            </h1>
            <p className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Established in 2001, BuildCore Constructions has grown into an industry-leading general contractor executing multi-million dollar commercial, residential, industrial, and infrastructure developments.
            </p>

            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleBrochureDownload}
                variant="primary"
                size="lg"
                leftIcon={<FileText className="w-5 h-5" />}
              >
                Download Corporate Brochure (PDF)
              </Button>
            </div>
          </div>
        </section>

        {/* Company History & Mission */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <SectionTitle
                badge="Our Legacy"
                title="Over Two Decades of Engineering Precision"
                subtitle="BuildCore was founded on a simple pledge: to deliver uncompromised structural quality, complete safety, and on-time project completion."
                centered={false}
              />

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                From our origins as a regional foundation piling specialist in 2001, we have expanded into a full-service general contracting power house with over 500+ skilled professionals, 850,000+ sq.ft. of constructed commercial space, and over $1.5 Billion in completed projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-2xl font-black text-orange-500">$1.5B+</h4>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Total Project Value Handled</p>
                </div>
                <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <h4 className="text-2xl font-black text-emerald-500">100%</h4>
                  <p className="text-xs text-slate-500 font-semibold uppercase">Financial Completion Guarantee</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=1000"
                alt="BuildCore Heavy Construction Site"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <SectionTitle
            badge="Executive Leadership"
            title="Guided by Veteran Civil Engineers"
            subtitle="Meet the seasoned executives driving BuildCore's strategic vision, engineering standards, and operational growth."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadershipTeam.map((member) => (
              <div
                key={member.name}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
              >
                <img
                  src={member.avatar}
                  alt={member.name}
                  className="w-28 h-28 rounded-full object-cover mx-auto mb-4 border-4 border-orange-500/30 group-hover:scale-105 transition-transform"
                />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs text-orange-500 font-semibold mt-0.5">{member.role}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] text-slate-500 font-bold uppercase mt-2">
                  {member.experience}
                </span>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};
