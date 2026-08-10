import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { BackToTop } from './components/common/BackToTop';
import { FloatingActions } from './components/common/FloatingActions';
import { ScrollToTop } from './components/common/ScrollToTop';

// Synchronous page imports for instant rendering without blank screens
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServiceDetailsPage } from './pages/ServiceDetailsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailsPage } from './pages/ProjectDetailsPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { GalleryPage } from './pages/GalleryPage';
import { CertificationsPage } from './pages/CertificationsPage';
import { ClientsPage } from './pages/ClientsPage';
import { CareersPage } from './pages/CareersPage';
import { JobDetailsPage } from './pages/JobDetailsPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailsPage } from './pages/BlogDetailsPage';
import { RequestQuotePage } from './pages/RequestQuotePage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans transition-colors duration-300">
          <Navbar />

          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<Navigate to="/" replace />} />
              <Route path="/services/:id" element={<ServiceDetailsPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/projects/:id" element={<ProjectDetailsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/certifications" element={<CertificationsPage />} />
              <Route path="/clients" element={<ClientsPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/careers/:id" element={<JobDetailsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogDetailsPage />} />
              <Route path="/request-quote" element={<RequestQuotePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>

          <Footer />
          <BackToTop />
          <FloatingActions />
        </div>

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </Router>
    </ThemeProvider>
  );
};

export default App;
