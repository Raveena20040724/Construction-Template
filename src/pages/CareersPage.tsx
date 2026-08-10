import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { JobCard } from '../components/shared/JobCard';
import { jobsData } from '../data/jobsData';
import { Briefcase, Heart, Award, Shield, DollarSign, Search, Users, GraduationCap } from 'lucide-react';

const benefits = [
  { icon: DollarSign, title: 'Competitive Compensation', desc: 'Top 10% industry salaries with annual performance bonuses.' },
  { icon: Heart, title: 'Comprehensive Healthcare', desc: 'Full medical, dental, vision & prescription coverage for family.' },
  { icon: GraduationCap, title: 'Professional Development', desc: 'Tuition reimbursement & PE/SE engineering licensing support.' },
  { icon: Shield, title: 'Safety Incentives', desc: 'Annual zero-incident safety bonus pool for site engineers.' },
  { icon: Award, title: '401(k) 5% Match', desc: 'Generous corporate retirement matching program.' },
  { icon: Users, title: 'Inclusive Work Culture', desc: 'Diverse, collaborative guild of 500+ engineering professionals.' }
];

export const CareersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDept, setSelectedDept] = useState<string>('All');

  const departments = ['All', 'Civil Engineering', 'Design & Engineering', 'Site Execution', 'Project Management', 'Commercial & Contracts', 'HSE & Safety', 'Architectural Design'];

  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesDept = selectedDept === 'All' || job.department === selectedDept;

    return matchesSearch && matchesDept;
  });

  return (
    <>
      <SEO
        title="Careers & Open Positions | BuildCore Constructions"
        description="Join BuildCore Constructions. Explore open engineering, project management, quantity surveying, and safety job positions."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Join BuildCore"
            title="Build Your Career with Industry Leaders"
            subtitle="Explore rewarding career opportunities in civil engineering, structural design, site management, and project consultancy."
          />

          {/* Benefits Section */}
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
              Why Work With Us & Employee Benefits
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((b) => {
                const Icon = b.icon;
                return (
                  <div
                    key={b.title}
                    className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md flex items-start gap-4"
                  >
                    <div className="p-3 rounded-2xl bg-orange-500/10 text-orange-500 shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">{b.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Job Search & Department Filter */}
          <div className="mb-12 space-y-6">
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search job titles (e.g. Civil Engineer, Manager)..."
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-md"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Department Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedDept === dept
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500'
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Job Cards Grid */}
          {filteredJobs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredJobs.map((job, index) => (
                <JobCard key={job.id} job={job} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <Briefcase className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No open positions match your search</h3>
              <p className="text-xs text-slate-500 mt-1">Check back soon or send an open application to hr@buildcoreconstructions.com</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
