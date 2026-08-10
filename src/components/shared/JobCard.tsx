import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Briefcase, DollarSign, Calendar, ArrowRight } from 'lucide-react';
import type { Job } from '../../types/job';

interface JobCardProps {
  job: Job;
  index?: number;
}

export const JobCard: React.FC<JobCardProps> = ({ job, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500/10 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400 border border-orange-500/30">
            {job.department}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            {job.employmentType}
          </span>
        </div>

        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{job.title}</h3>
        <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed mb-4">
          {job.shortDescription}
        </p>

        {/* Job Meta Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-400 mb-4 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span className="truncate">{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-3.5 h-3.5 text-orange-500" />
            <span>Exp: {job.experience}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-orange-500" />
            <span className="truncate">{job.salaryRange}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-orange-500" />
            <span>Posted: {job.postedDate}</span>
          </div>
        </div>
      </div>

      <Link
        to={`/careers/${job.id}`}
        className="w-full py-2.5 px-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-orange-500/20"
      >
        <span>View Details & Apply</span>
        <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
};
