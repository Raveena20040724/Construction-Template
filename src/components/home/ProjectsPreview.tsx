import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock, Layers } from 'lucide-react';
import { SectionTitle } from '../common/SectionTitle';
import { ProjectCard } from '../shared/ProjectCard';
import { projectsData } from '../../data/projectsData';
import type { ProjectStatus } from '../../types/project';

export const ProjectsPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | ProjectStatus>('All');

  const filteredProjects = activeTab === 'All'
    ? projectsData.slice(0, 6)
    : projectsData.filter((p) => p.status === activeTab).slice(0, 6);

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Featured Engineering Works"
          title="Transforming Blueprints into Iconic Realities"
          subtitle="Explore our portfolio of completed skyscrapers, urban transit corridors, industrial manufacturing hubs, and green residential townships."
        />

        {/* Tab Filters */}
        <div className="flex items-center justify-center gap-3 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'All'
                ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            All Showcase Projects
          </button>

          <button
            onClick={() => setActiveTab('Completed')}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'Completed'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-500'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Completed Projects
          </button>

          <button
            onClick={() => setActiveTab('Ongoing')}
            className={`px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
              activeTab === 'Ongoing'
                ? 'bg-amber-500 text-slate-950 font-black shadow-lg shadow-amber-500/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-500'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            Ongoing Projects
          </button>
        </div>

        {/* Project Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View All Projects CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-extrabold text-sm uppercase tracking-wider shadow-xl shadow-orange-500/30 transition-all duration-300"
          >
            <span>Browse Complete Project Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
