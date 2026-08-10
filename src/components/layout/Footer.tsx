import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HardHat, Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { toast } from 'react-toastify';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success('Thank you for subscribing to BuildCore Construction insights!');
    setEmail('');
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-200 dark:border-slate-800">
          {/* Column 1: Company Profile */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-orange-500 text-white shadow-md">
                <HardHat className="w-7 h-7" />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-2xl tracking-tight text-slate-900 dark:text-white">
                  BUILD<span className="text-orange-500">CORE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400">
                  Constructions
                </span>
              </div>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed pr-4">
              BuildCore Constructions is a premier general contractor delivering high-performance commercial, residential, industrial, and civil infrastructure projects with uncompromising safety and engineering precision.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-slate-800 dark:text-orange-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-3 w-fit shadow-sm">
              <ShieldCheck className="w-5 h-5 text-orange-500 shrink-0" />
              <span>ISO 9001, 14001 & 45001 Certified Contractor</span>
            </div>

            {/* Newsletter Form */}
            <div className="pt-2">
              <h5 className="text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-slate-300 mb-2">
                Subscribe to Industry Insights
              </h5>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your corporate email..."
                  required
                  className="px-3.5 py-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-orange-500 w-full shadow-sm"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs uppercase tracking-wider shrink-0 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/services/commercial-construction" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Commercial Construction
                </Link>
              </li>
              <li>
                <Link to="/services/residential-construction" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Residential Projects
                </Link>
              </li>
              <li>
                <Link to="/services/industrial-construction" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Industrial Facilities
                </Link>
              </li>
              <li>
                <Link to="/services/infrastructure-development" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Infrastructure Development
                </Link>
              </li>
              <li>
                <Link to="/services/civil-engineering" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Civil Engineering
                </Link>
              </li>
              <li>
                <Link to="/services/renovation-remodeling" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Retrofitting & Remodeling
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Projects & Sectors */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/about" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  About BuildCore
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/certifications" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Certifications & Standards
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Careers & Job Openings
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">
                  Construction Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Details */}
          <div>
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 border-l-2 border-orange-500 pl-3">
              Headquarters
            </h4>
            <ul className="space-y-3 text-xs text-slate-600 dark:text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                <span>BuildCore Tower, Plot 45, Bandra-Kurla Complex (BKC), Mumbai, Maharashtra 400051</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="tel:+9118002008899" className="hover:text-orange-500 dark:hover:text-orange-400">
                  +91 1800 200 8899
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-orange-500 shrink-0" />
                <a href="mailto:contact@buildcoreconstructions.com" className="hover:text-orange-500 dark:hover:text-orange-400">
                  contact@buildcoreconstructions.com
                </a>
              </li>
              <li className="flex items-center gap-2 pt-2 text-slate-700 dark:text-slate-300 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>24/7 Site Safety Supervision</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} BuildCore Constructions Inc. All rights reserved. Building Strong Foundations for a Better Future.</p>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
