import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { ProjectCard } from '../components/shared/ProjectCard';
import { projectsData } from '../data/projectsData';
import type { ProjectCategory, ProjectStatus } from '../types/project';
import { Search, Building, Layers, CheckCircle2, Clock } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ProjectsPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialStatusParam = searchParams.get('status') as ProjectStatus | null;

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<'All' | ProjectCategory>('All');
  const [statusFilter, setStatusFilter] = useState<'All' | ProjectStatus>(
    initialStatusParam === 'Completed' || initialStatusParam === 'Ongoing' ? initialStatusParam : 'All'
  );

  // Sync filter when URL search params change (e.g. from navbar dropdown clicks)
  useEffect(() => {
    const statusParam = searchParams.get('status') as ProjectStatus | null;
    if (statusParam === 'Completed' || statusParam === 'Ongoing') {
      setStatusFilter(statusParam);
    } else if (!statusParam) {
      setStatusFilter('All');
    }
  }, [searchParams]);

  const handleStatusFilterChange = (newStatus: 'All' | ProjectStatus) => {
    setStatusFilter(newStatus);
    if (newStatus === 'All') {
      searchParams.delete('status');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ status: newStatus });
    }
  };

  const categories: ('All' | ProjectCategory)[] = [
    'All',
    'Residential',
    'Commercial',
    'Industrial',
    'Infrastructure',
    'Government'
  ];

  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.client.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || project.category === categoryFilter;
    const matchesStatus = statusFilter === 'All' || project.status === statusFilter;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <>
      <SEO
        title="Project Showcase & Portfolio | BuildCore Constructions"
        description="Browse completed and ongoing commercial, residential, industrial, infrastructure, and government projects by BuildCore Constructions."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Engineering Portfolio"
            title="Projects Showcase & Case Studies"
            subtitle="Explore our completed skyscrapers, transit corridors, manufacturing parks, and green housing developments."
          />

          {/* Filter Bar Controls */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by title, client, or location (e.g. Skyline, Chicago, Transit)..."
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Filter Rows */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pt-2 border-t border-slate-100 dark:border-slate-800">
              {/* Category Pills */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2 flex items-center gap-1">
                  <Layers className="w-3.5 h-3.5" /> Category:
                </span>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                      categoryFilter === cat
                        ? 'bg-orange-500 text-white shadow-md'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Status Pills */}
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-2">Status:</span>
                <button
                  onClick={() => handleStatusFilterChange('All')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                    statusFilter === 'All'
                      ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900 shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  All Projects
                </button>
                <button
                  onClick={() => handleStatusFilterChange('Completed')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'Completed'
                      ? 'bg-emerald-600 text-white shadow-md font-extrabold'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500/10 hover:text-emerald-600'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" /> Completed Projects
                </button>
                <button
                  onClick={() => handleStatusFilterChange('Ongoing')}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 ${
                    statusFilter === 'Ongoing'
                      ? 'bg-orange-500 text-white font-extrabold shadow-md'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-orange-500/10 hover:text-orange-600'
                  }`}
                >
                  <Clock className="w-3.5 h-3.5" /> Ongoing Projects
                </button>
              </div>
            </div>
          </div>

          {/* Projects Results Grid */}
          <AnimatePresence mode="wait">
            {filteredProjects.length > 0 ? (
              <motion.div
                key={`${categoryFilter}-${statusFilter}-${searchQuery}`}
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
            ) : (
              <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
                <Building className="w-12 h-12 text-slate-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">No projects match your filter criteria</h3>
                <p className="text-xs text-slate-500 mt-1">Try resetting the category or status filter.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
};
