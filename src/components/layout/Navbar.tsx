import React, { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HardHat, Clock, Menu, ChevronDown, Wrench, Building2, ShieldCheck, CheckCircle2, Clock3, Image, Award, Users, Briefcase } from 'lucide-react';
import { ThemeToggle } from '../common/ThemeToggle';
import { MobileMenu } from './MobileMenu';

export interface DropdownItem {
  name: string;
  path: string;
  icon?: React.FC<{ className?: string }>;
}

export interface NavCategory {
  name: string;
  path: string;
  items: DropdownItem[];
}

export const servicesDropdown: DropdownItem[] = [
  { name: 'Commercial Construction', path: '/services/commercial-construction', icon: Building2 },
  { name: 'Residential Construction', path: '/services/residential-construction', icon: HardHat },
  { name: 'Industrial Construction', path: '/services/industrial-construction', icon: Building2 },
  { name: 'Civil Engineering', path: '/services/civil-engineering', icon: Wrench },
  { name: 'Infrastructure', path: '/services/infrastructure-development', icon: Building2 },
  { name: 'Renovation & Remodeling', path: '/services/renovation-remodeling', icon: Wrench },
  { name: 'Project Management', path: '/services/project-management', icon: ShieldCheck },
];

export const projectsDropdown: DropdownItem[] = [
  { name: 'Completed Projects', path: '/projects?status=Completed', icon: CheckCircle2 },
  { name: 'Ongoing Projects', path: '/projects?status=Ongoing', icon: Clock3 },
  { name: 'Project Gallery', path: '/gallery', icon: Image },
];

export const companyDropdown: DropdownItem[] = [
  { name: 'About Us', path: '/about', icon: HardHat },
  { name: 'Industries', path: '/industries', icon: Building2 },
  { name: 'Certifications', path: '/certifications', icon: Award },
  { name: 'Clients', path: '/clients', icon: Users },
  { name: 'Careers', path: '/careers', icon: Briefcase },
];

export const navCategories: NavCategory[] = [
  { name: 'Services', path: '/services/commercial-construction', items: servicesDropdown },
  { name: 'Projects', path: '/projects', items: projectsDropdown },
  { name: 'Company', path: '/about', items: companyDropdown },
];

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setActiveDropdown(null);
  }, [location.pathname, location.search]);

  const handleMouseEnter = (name: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  const isCategoryActive = (category: NavCategory) => {
    if (location.pathname === category.path) return true;
    return category.items.some(item => {
      const [itemPath] = item.path.split('?');
      return location.pathname === itemPath;
    });
  };

  const checkItemActive = (itemPath: string) => {
    const [path, search] = itemPath.split('?');
    const currentPath = location.pathname;
    const currentSearch = location.search;

    if (search) {
      return currentPath === path && currentSearch.includes(search);
    }
    return currentPath === path && (!currentSearch || currentSearch === '');
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-100 text-slate-700 dark:bg-slate-950 dark:text-slate-300 py-1.5 border-b border-slate-200 dark:border-slate-800/80 text-xs font-medium transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-end items-center">
          <span className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            Mon - Sat: 9:00 AM - 7:00 PM IST
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-lg dark:shadow-2xl border-b border-slate-200 dark:border-slate-800/80 py-3'
            : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-sm py-4 border-b border-slate-200/80 dark:border-slate-800/50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-300">
              <HardHat className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl sm:text-2xl tracking-tight leading-none text-slate-900 dark:text-white">
                BUILD<span className="text-orange-500">CORE</span>
              </span>
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 mt-0.5">
                Constructions
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10'
                    : 'text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`
              }
            >
              Home
            </NavLink>

            {/* Dropdowns */}
            {navCategories.map((cat) => {
              const isOpen = activeDropdown === cat.name;
              const active = isCategoryActive(cat);

              return (
                <div
                  key={cat.name}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(cat.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(isOpen ? null : cat.name)}
                    className={`px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 flex items-center gap-1.5 whitespace-nowrap ${
                      active || isOpen
                        ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10'
                        : 'text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                    }`}
                  >
                    <span>{cat.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-orange-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Container */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="absolute top-full left-0 pt-2 w-64 z-50"
                      >
                        <div className="bg-white dark:bg-slate-950 backdrop-blur-xl border border-slate-200 dark:border-slate-800 rounded-2xl p-2 shadow-2xl space-y-1">
                          {cat.items.map((item) => {
                            const Icon = item.icon;
                            const isActive = checkItemActive(item.path);

                            return (
                              <NavLink
                                key={item.path}
                                to={item.path}
                                className={`group flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 ${
                                  isActive
                                    ? 'bg-orange-500 text-white font-bold shadow-md shadow-orange-500/20'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-orange-500 hover:text-white dark:hover:bg-orange-500 dark:hover:text-white'
                                }`}
                              >
                                {Icon && (
                                  <Icon
                                    className={`w-4 h-4 shrink-0 transition-colors ${
                                      isActive ? 'text-white' : 'text-orange-500 group-hover:text-white'
                                    }`}
                                  />
                                )}
                                <span>{item.name}</span>
                              </NavLink>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}

            {/* Blog */}
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10'
                    : 'text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`
              }
            >
              Blog
            </NavLink>

            {/* Contact */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-bold transition-all duration-200 ${
                  isActive
                    ? 'text-orange-600 dark:text-orange-400 bg-orange-500/10'
                    : 'text-slate-700 dark:text-slate-200 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Right Section: Theme Toggle & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-orange-500 transition-colors"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  );
};
