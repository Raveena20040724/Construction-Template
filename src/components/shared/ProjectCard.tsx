import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, DollarSign, Calendar, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import type { Project } from '../../types/project';

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* Project Image & Overlay Badges */}
        <div className="relative h-56 w-full overflow-hidden">
          <img
            src={project.heroImage}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              const target = e.currentTarget as HTMLImageElement;
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent dark:from-slate-950/80 dark:via-slate-950/30" />

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider shadow-md backdrop-blur-md ${
                project.status === 'Completed'
                  ? 'bg-emerald-500/90 text-white'
                  : 'bg-amber-500/90 text-slate-950'
              }`}
            >
              {project.status === 'Completed' ? (
                <CheckCircle2 className="w-3.5 h-3.5" />
              ) : (
                <Clock className="w-3.5 h-3.5" />
              )}
              {project.status}
            </span>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-900/80 text-orange-400 border border-slate-700/80 backdrop-blur-md">
              {project.category}
            </span>
          </div>

          {/* Bottom Overlay Info */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-1 font-medium">
              <MapPin className="w-3.5 h-3.5 text-orange-400" />
              <span className="truncate max-w-[180px]">{project.location}</span>
            </span>
            <span className="flex items-center gap-1 font-semibold text-white">
              <Calendar className="w-3.5 h-3.5 text-orange-400" />
              {project.year}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Progress Bar & Value Metrics */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-3">
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-slate-500 dark:text-slate-400">Completion Status</span>
              <span className="text-orange-500 font-extrabold">{project.completionPercentage}%</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-orange-600 to-orange-400 rounded-full transition-all duration-1000"
                style={{ width: `${project.completionPercentage}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5 text-orange-500" />
                Value: <strong className="text-slate-900 dark:text-white">{project.projectValue}</strong>
              </span>
              <span className="text-slate-500 dark:text-slate-400 truncate max-w-[150px]">
                Client: <strong className="text-slate-900 dark:text-white">{project.client}</strong>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Button Action */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/projects/${project.slug}`}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-slate-100 hover:text-white dark:hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-sm"
        >
          <span>View Project Details</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
