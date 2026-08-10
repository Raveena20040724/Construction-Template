import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label="Toggle dark mode"
      title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} mode`}
      className={`p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 ${className}`}
    >
      {theme === 'light' ? (
        <Moon className="w-5 h-5 text-slate-700 hover:text-orange-500 transition-colors" />
      ) : (
        <Sun className="w-5 h-5 text-amber-400 hover:text-orange-400 transition-colors" />
      )}
    </button>
  );
};
