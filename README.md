# BuildCore Constructions - Modern Construction & Infrastructure Web Application

> **Building Strong Foundations for a Better Future**

BuildCore Constructions is a modern, responsive, corporate static web application built using **React 18**, **TypeScript**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Swiper.js**.

Designed specifically for enterprise construction companies, civil engineering firms, general contractors, and infrastructure developers.

---

## 🚀 Technology Stack

- **Core**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS v3, PostCSS, Autoprefixer, Google Fonts (`Inter` & `Outfit`)
- **Routing**: React Router DOM v6 (with lazy loading & route code-splitting)
- **Animations**: Framer Motion
- **Icons**: Lucide React Icons
- **Form Management & Validation**: React Hook Form, Zod
- **SEO & Metadata**: React Helmet Async
- **Sliders & Carousels**: Swiper.js
- **Animated Statistics**: React CountUp
- **Notifications**: React Toastify

---

## ✨ Features & Included Pages

### 🏛 Main Navigation & Pages
1. **Home Page (`/`)**: Full-width high-resolution hero with animated stat counters, core values cards, 12 construction services overview, tabbed project showcase, 9-step interactive timeline, equipment fleet showcase, safety metrics section, green building sustainability section, ISO certifications, Swiper client logo carousel & testimonial slider.
2. **About Company (`/about`)**: Corporate history, leadership team profiles, mission, vision, core values, and downloadable corporate brochure.
3. **Services & Dynamic Details (`/services` & `/services/:id`)**: Comprehensive listing of all 12 services (Residential, Commercial, Industrial, Infrastructure, Civil Engineering, Road, Bridge, Building, Renovation, Structural Engineering, Project Management, Interior Construction) with dynamic detail views, process steps, tools, safety standards, and FAQs.
4. **Projects & Multi-Filter Showcase (`/projects` & `/projects/:id`)**: Multi-faceted filter by Category (Residential, Commercial, Industrial, Infrastructure, Government) and Status (Completed vs. Ongoing) with search bar and detailed case study pages (Built-up area, Duration, Workforce, Cost, Scope, Challenges & Solutions).
5. **Industries We Serve (`/industries`)**: 12 market sector solutions cards (Residential, Commercial, Industrial, Healthcare, Education, Hospitality, Retail, Government, Infrastructure, Energy, Manufacturing, Real Estate).
6. **Gallery & Lightbox (`/gallery`)**: Masonry grid with category filter tabs and interactive Lightbox modal preview.
7. **Certifications (`/certifications`)**: ISO 9001, 14001, 45001, LEED Gold Partner, OSHA VPP Star, and ASCE award certificates.
8. **Client Showcase (`/clients`)**: Sector-grouped corporate client cards & auto-sliding partner logo carousel.
9. **Careers & Job Details (`/careers` & `/careers/:id`)**: Open positions listing (Civil Engineer, Structural Engineer, Site Engineer, Project Manager, Quantity Surveyor, Safety Engineer, Architect, Construction Supervisor) with detailed job specs and an interactive Application Form.
10. **Blog & Articles (`/blog` & `/blog/:id`)**: Searchable industry blog feed with reading times, author bios, tag filtering, and social sharing links.
11. **Request a Quote (`/request-quote`)**: Full interactive quotation form powered by React Hook Form & Zod validation with Toast notifications.
12. **Contact & Branch Locations (`/contact`)**: Headquarters details, 4 regional branch cards, map iframe embed, direct contact form, and FAQ accordion.
13. **Custom 404 Page (`*`)**: Construction-themed 404 page.

### 🌗 Dark & Light Mode
- Built-in `ThemeContext` providing smooth Dark and Light theme switching with localStorage persistence.

### 📱 Responsive & Accessible
- Mobile-first responsive layout with slide-over mobile drawer navigation.
- Floating WhatsApp instant contact button & floating Request Quote button.

---

## 📁 Project Structure

```
src/
├── assets/             # Images and visual branding
├── components/
│   ├── common/         # SEO, Button, SectionTitle, BackToTop, ThemeToggle, FloatingActions, LightboxModal
│   ├── layout/         # Navbar, Footer, MobileMenu
│   ├── home/           # Hero, StatsCounter, AboutPreview, ServicesPreview, ProjectsPreview, IndustriesPreview, WhyChooseUs, ProcessTimeline, EquipmentShowcase, SafetySection, SustainabilitySection, CertificationsPreview, ClientCarousel, TestimonialSlider, QuoteCTABanner
│   ├── forms/          # QuoteForm, ContactForm, JobApplicationForm
│   └── shared/         # ServiceCard, ProjectCard, BlogCard, JobCard, FAQAccordion
├── context/            # ThemeContext
├── data/               # Mock data for services, projects, industries, equipment, certifications, clients, testimonials, jobs, blog
├── pages/              # 17 Page components
├── types/              # TypeScript interfaces for strict typing
├── App.tsx             # Main router & layout configuration
├── index.css           # Tailwind CSS & global styles
└── main.tsx            # Application entrypoint
```

---

## 📦 Installation & Local Development

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Vite Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

---

## ⚡ License & Author

Created for **BuildCore Constructions** - Building Strong Foundations for a Better Future.
