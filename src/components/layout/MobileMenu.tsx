import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, HardHat, ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { navCategories } from './Navbar';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    Services: false,
    Projects: false,
    Company: false,
  });

  const toggleAccordion = (name: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm lg:hidden"
          />

          {/* Mobile Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-2xl flex flex-col justify-between overflow-y-auto lg:hidden"
          >
            {/* Drawer Header */}
            <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-xl bg-orange-500 text-white">
                  <HardHat className="w-6 h-6" />
                </div>
                <div className="font-extrabold text-xl tracking-tight">
                  <span className="text-slate-900 dark:text-white">BUILD</span>
                  <span className="text-orange-500">CORE</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 text-slate-700 dark:text-slate-300 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Navigation List */}
            <div className="px-6 py-6 flex flex-col gap-2">
              {/* Home */}
              <NavLink
                to="/"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400'
                  }`
                }
              >
                Home
              </NavLink>

              {/* Accordion Categories */}
              {navCategories.map((cat) => {
                const isExpanded = expandedCategories[cat.name];

                return (
                  <div key={cat.name} className="rounded-xl border border-slate-200 dark:border-slate-800/80 bg-slate-50 dark:bg-slate-950/40 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => toggleAccordion(cat.name)}
                      className="w-full px-4 py-3 text-base font-bold text-slate-800 dark:text-slate-200 flex items-center justify-between hover:text-orange-500 transition-colors"
                    >
                      <span>{cat.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-orange-500 transition-transform duration-300 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-3 pb-3 pt-1 space-y-1 bg-white dark:bg-slate-900/60 border-t border-slate-200 dark:border-slate-800/50"
                        >
                          {cat.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <NavLink
                                key={item.path}
                                to={item.path}
                                onClick={onClose}
                                className={({ isActive }) =>
                                  `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    isActive
                                      ? 'bg-orange-500/20 text-orange-600 dark:text-orange-400 font-bold border-l-2 border-orange-500'
                                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                                  }`
                                }
                              >
                                {Icon && <Icon className="w-4 h-4 text-orange-500 shrink-0" />}
                                <span>{item.name}</span>
                              </NavLink>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Blog */}
              <NavLink
                to="/blog"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400'
                  }`
                }
              >
                Blog
              </NavLink>

              {/* Contact */}
              <NavLink
                to="/contact"
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 ${
                    isActive
                      ? 'bg-orange-500 text-white font-bold'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-orange-600 dark:hover:text-orange-400'
                  }`
                }
              >
                Contact
              </NavLink>
            </div>

            {/* Bottom Footer */}
            <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
              <span>© {new Date().getFullYear()} BuildCore</span>
              <ThemeToggle />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
