import React from 'react';
import { HardHat } from 'lucide-react';

export const LoadingSpinner: React.FC = () => {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4">
      <div className="relative">
        <div className="w-16 h-16 rounded-full border-4 border-slate-200 dark:border-slate-800 border-t-orange-500 animate-spin" />
        <HardHat className="w-8 h-8 text-orange-500 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce" />
      </div>
      <p className="text-sm font-semibold tracking-wider uppercase text-slate-600 dark:text-slate-400">
        Loading BuildCore Constructions...
      </p>
    </div>
  );
};
