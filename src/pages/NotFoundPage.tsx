import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { HardHat, Home, ArrowLeft } from 'lucide-react';
import { Button } from '../components/common/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <>
      <SEO
        title="404 - Page Under Construction | BuildCore"
        description="The requested page could not be found or is currently under structural maintenance."
      />

      <main className="min-h-[75vh] flex items-center justify-center py-16 bg-slate-50 dark:bg-slate-950 text-center px-4">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6">
          <div className="w-20 h-20 rounded-full bg-orange-500/10 text-orange-500 flex items-center justify-center mx-auto animate-bounce">
            <HardHat className="w-10 h-10" />
          </div>

          <div>
            <h1 className="text-6xl font-black text-slate-900 dark:text-white">404</h1>
            <h2 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-2">
              Page Under Construction
            </h2>
            <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              The blueprints for this URL don't exist or have been moved to a new structural sector.
            </p>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <Button
              href="/"
              variant="primary"
              size="md"
              leftIcon={<Home className="w-4 h-4" />}
              className="w-full uppercase font-bold text-xs"
            >
              Return to Home Page
            </Button>
            <Button
              href="/projects"
              variant="ghost"
              size="md"
              leftIcon={<ArrowLeft className="w-4 h-4" />}
              className="w-full text-xs"
            >
              Explore Our Projects
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
