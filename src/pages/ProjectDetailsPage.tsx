import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { projectsData } from '../data/projectsData';
import { LightboxModal } from '../components/common/LightboxModal';
import { MapPin, DollarSign, Calendar, CheckCircle2, Building, Wrench, Shield, Layers, ArrowLeft, Maximize2, Award, Clock } from 'lucide-react';
import { Button } from '../components/common/Button';

export const ProjectDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find((p) => p.slug === id || p.id === id);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  const galleryItems = project.galleryImages.map((img, i) => ({
    imageUrl: img,
    title: `${project.title} Image ${i + 1}`,
    location: project.location,
    year: project.year,
    description: `High resolution site execution photo for ${project.title}`
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <SEO
        title={`${project.title} | BuildCore Case Study`}
        description={project.description}
        ogImage={project.heroImage}
      />

      <main className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Navigation Back Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Projects Portfolio
          </Link>
        </div>

        {/* Project Hero Banner */}
        <section className="relative py-20 bg-slate-950 text-white rounded-3xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 z-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-500 text-white">
                {project.category}
              </span>
              <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${
                project.status === 'Completed' ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-slate-950'
              }`}>
                {project.status} ({project.completionPercentage}%)
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
              {project.description}
            </p>

            {/* Quick Metadata Bar */}
            <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
              <div>
                <span className="text-slate-400 block">Location</span>
                <span className="font-bold text-white flex items-center gap-1 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-orange-500" /> {project.location}
                </span>
              </div>
              <div>
                <span className="text-slate-400 block">Client</span>
                <span className="font-bold text-white mt-0.5 block truncate">{project.client}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Project Value</span>
                <span className="font-bold text-orange-400 mt-0.5 block">{project.projectValue}</span>
              </div>
              <div>
                <span className="text-slate-400 block">Timeline</span>
                <span className="font-bold text-white mt-0.5 block">{project.startDate} - {project.completionDate}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Project Statistics Counter Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{project.statistics.builtUpArea}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Built-up Area</div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-500">{project.statistics.duration}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Project Duration</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{project.statistics.workforce}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Daily Workforce</div>
            </div>
            <div>
              <div className="text-2xl font-black text-emerald-500">{project.statistics.floors}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Floors / Scale</div>
            </div>
            <div>
              <div className="text-2xl font-black text-orange-500">{project.statistics.completionPercentage}%</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Completion %</div>
            </div>
            <div>
              <div className="text-2xl font-black text-slate-900 dark:text-white">{project.statistics.projectCost}</div>
              <div className="text-[10px] uppercase font-bold text-slate-500 mt-1">Project Cost</div>
            </div>
          </div>
        </section>

        {/* Detailed Breakdown: Scope, Methodology, Challenges & Solutions */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-10">
              {/* Scope of Work */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Scope of Construction Work</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.scopeOfWork.map((scope, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Construction Methodology */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Engineering Methodology</h3>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.methodology}
                </p>
              </div>

              {/* Case Study Breakdown: Challenges, Solutions & Results */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md space-y-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Engineering Case Study</h3>

                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-300">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Key Technical Challenge</h4>
                  <p className="text-xs leading-relaxed">{project.challenges}</p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-300">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">BuildCore Solution</h4>
                  <p className="text-xs leading-relaxed">{project.solutions}</p>
                </div>

                <div className="p-5 rounded-2xl bg-orange-500/10 border border-orange-500/30 text-orange-900 dark:text-orange-300">
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-1">Project Results & Deliverables</h4>
                  <p className="text-xs leading-relaxed">{project.results}</p>
                </div>
              </div>

              {/* Interactive Photo Gallery Grid */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Project Photo Gallery</h3>
                  <span className="text-xs font-semibold text-slate-500">Click to zoom</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {project.galleryImages.map((img, idx) => (
                    <div
                      key={idx}
                      onClick={() => openLightbox(idx)}
                      className="group relative h-40 rounded-2xl overflow-hidden cursor-pointer shadow-md"
                    >
                      <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                        <Maximize2 className="w-6 h-6" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar Specs */}
            <div className="lg:col-span-4 space-y-8">
              {/* Materials Used */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
                <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-orange-400">
                  <Building className="w-5 h-5" /> Structural Materials Used
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.materialsUsed.map((mat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                      <span>{mat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Equipment Deployed */}
              <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl">
                <h4 className="text-base font-bold mb-3 flex items-center gap-2 text-emerald-400">
                  <Wrench className="w-5 h-5" /> Equipment Deployed
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {project.equipmentUsed.map((eq, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{eq}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Lightbox Modal */}
        <LightboxModal
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          images={galleryItems}
          currentIndex={lightboxIndex}
          onNavigate={(index) => setLightboxIndex(index)}
        />
      </main>
    </>
  );
};
