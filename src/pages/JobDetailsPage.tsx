import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { jobsData } from '../data/jobsData';
import { JobApplicationForm } from '../components/forms/JobApplicationForm';
import { MapPin, Briefcase, DollarSign, Calendar, CheckCircle2, ArrowLeft, Building2 } from 'lucide-react';

export const JobDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const job = jobsData.find((j) => j.id === id);

  if (!job) {
    return <Navigate to="/careers" replace />;
  }

  return (
    <>
      <SEO
        title={`${job.title} Job Opening | BuildCore Careers`}
        description={job.shortDescription}
      />

      <main className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/careers"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Careers & Open Positions
          </Link>
        </div>

        {/* Job Header */}
        <section className="bg-white dark:bg-slate-950 text-slate-900 dark:text-white rounded-3xl max-w-7xl mx-auto px-6 py-12 mb-12 shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-500 text-white">
              {job.department}
            </span>
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
              {job.employmentType}
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">{job.title}</h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">{job.shortDescription}</p>

          <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-600 dark:text-slate-300">
            <div>
              <span className="text-slate-400 dark:text-slate-500 block">Location</span>
              <strong className="text-slate-900 dark:text-white flex items-center gap-1 mt-0.5"><MapPin className="w-3.5 h-3.5 text-orange-500" /> {job.location}</strong>
            </div>
            <div>
              <span className="text-slate-400 dark:text-slate-500 block">Experience Required</span>
              <strong className="text-slate-900 dark:text-white mt-0.5 block">{job.experience}</strong>
            </div>
            <div>
              <span className="text-slate-400 dark:text-slate-500 block">Compensation</span>
              <strong className="text-orange-600 dark:text-orange-400 mt-0.5 block">{job.salaryRange}</strong>
            </div>
            <div>
              <span className="text-slate-500 block">Posted Date</span>
              <strong className="text-white mt-0.5 block">{job.postedDate}</strong>
            </div>
          </div>
        </section>

        {/* Content & Application Form Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Job Details Column */}
            <div className="lg:col-span-7 space-y-8">
              {/* Responsibilities */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Key Responsibilities</h3>
                <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  {job.responsibilities.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Role Requirements</h3>
                <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Skills & Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Required Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((skill, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-orange-600 dark:text-orange-400">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md">
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">Employee Benefits</h4>
                  <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                    {job.benefits.map((ben, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span>{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Application Form Column */}
            <div className="lg:col-span-5">
              <JobApplicationForm jobTitle={job.title} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
