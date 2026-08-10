import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Calculator, Send, Upload, CheckCircle2, ShieldCheck, Loader2 } from 'lucide-react';
import { Button } from '../common/Button';

const quoteSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  companyName: z.string().optional(),
  projectType: z.string().min(1, 'Please select a project type'),
  projectLocation: z.string().min(3, 'Please enter project location'),
  estimatedBudget: z.string().min(1, 'Please select estimated budget range'),
  expectedStartDate: z.string().min(1, 'Please select expected start date'),
  expectedCompletionDate: z.string().min(1, 'Please select expected completion date'),
  requiredServices: z.array(z.string()).min(1, 'Please select at least one required service'),
  projectDescription: z.string().min(20, 'Please provide a detailed description (at least 20 characters)'),
});

type QuoteFormValues = z.infer<typeof quoteSchema>;

const projectTypes = [
  'Residential',
  'Commercial',
  'Industrial',
  'Infrastructure',
  'Renovation',
  'Civil Engineering'
];

const budgetRanges = [
  'Under $500,000',
  '$500,000 - $2 Million',
  '$2 Million - $10 Million',
  '$10 Million - $50 Million',
  '$50 Million+'
];

const availableServices = [
  'Turnkey General Contracting',
  'Civil Engineering & Earthworks',
  'Structural Steel & Concrete Framing',
  'PEB Industrial Warehousing',
  'High-rise Curtain Wall Façade',
  'MEP & HVAC System Integration',
  'Interior Commercial Fit-out',
  'LEED Green Building Certification'
];

export const QuoteForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors }
  } = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      requiredServices: [],
    }
  });

  const selectedServices = watch('requiredServices') || [];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setValue('requiredServices', selectedServices.filter(s => s !== service), { shouldValidate: true });
    } else {
      setValue('requiredServices', [...selectedServices, service], { shouldValidate: true });
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      toast.info(`Attached file: ${file.name}`);
    }
  };

  const onSubmit = async (data: QuoteFormValues) => {
    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast.success(
      `Quotation request submitted successfully! Ref: #BC-QT-${Math.floor(1000 + Math.random() * 9000)}. Our engineering team will contact you within 24 hours.`
    );

    reset();
    setUploadedFileName(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-10 border border-slate-200 dark:border-slate-800 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-6">
        <div>
          <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-6 h-6 text-orange-500" />
            Request a Construction Quotation
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Fill out project details below to receive a comprehensive itemized cost estimate.
          </p>
        </div>
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-emerald-500 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-4 h-4" />
          Strict Data Confidentiality
        </div>
      </div>

      {/* Grid 1: Personal & Corporate Contact */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register('fullName')}
            placeholder="John Doe"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Corporate Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="johndoe@company.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Company Name (Optional)
          </label>
          <input
            type="text"
            {...register('companyName')}
            placeholder="Apex Real Estate LLC"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
          />
        </div>
      </div>

      {/* Grid 2: Project Parameters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-100 dark:border-slate-800">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Project Type *
          </label>
          <select
            {...register('projectType')}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
          >
            <option value="">Select Category</option>
            {projectTypes.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
          {errors.projectType && <p className="mt-1 text-xs text-red-500">{errors.projectType.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Project Location *
          </label>
          <input
            type="text"
            {...register('projectLocation')}
            placeholder="City, State / Region"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.projectLocation && <p className="mt-1 text-xs text-red-500">{errors.projectLocation.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Estimated Budget Range *
          </label>
          <select
            {...register('estimatedBudget')}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
          >
            <option value="">Select Range</option>
            {budgetRanges.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </select>
          {errors.estimatedBudget && <p className="mt-1 text-xs text-red-500">{errors.estimatedBudget.message}</p>}
        </div>
      </div>

      {/* Grid 3: Dates */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Expected Start Date *
          </label>
          <input
            type="date"
            {...register('expectedStartDate')}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
          />
          {errors.expectedStartDate && <p className="mt-1 text-xs text-red-500">{errors.expectedStartDate.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Target Completion Date *
          </label>
          <input
            type="date"
            {...register('expectedCompletionDate')}
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-orange-500"
          />
          {errors.expectedCompletionDate && <p className="mt-1 text-xs text-red-500">{errors.expectedCompletionDate.message}</p>}
        </div>
      </div>

      {/* Required Services Checkbox Selection */}
      <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-3">
          Required Construction Services *
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {availableServices.map((service) => {
            const isChecked = selectedServices.includes(service);
            return (
              <div
                key={service}
                onClick={() => toggleService(service)}
                className={`cursor-pointer p-3.5 rounded-xl border text-xs font-semibold transition-all duration-200 flex items-center justify-between ${
                  isChecked
                    ? 'bg-orange-500/10 border-orange-500 text-orange-600 dark:text-orange-400 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-slate-400'
                }`}
              >
                <span>{service}</span>
                <div
                  className={`w-4 h-4 rounded flex items-center justify-center border ${
                    isChecked ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-400'
                  }`}
                >
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>
              </div>
            );
          })}
        </div>
        {errors.requiredServices && <p className="mt-2 text-xs text-red-500">{errors.requiredServices.message}</p>}
      </div>

      {/* Project Description Textarea */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Project Description & Scope Details *
        </label>
        <textarea
          rows={4}
          {...register('projectDescription')}
          placeholder="Specify built-up square footage, special engineering requirements, floor counts, site constraints..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
        />
        {errors.projectDescription && <p className="mt-1 text-xs text-red-500">{errors.projectDescription.message}</p>}
      </div>

      {/* File Upload Zone */}
      <div className="pt-2">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Attach Architectural Drawings / RFPs (Optional)
        </label>
        <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-6 text-center hover:border-orange-500 transition-colors bg-slate-50/50 dark:bg-slate-800/40">
          <input
            type="file"
            onChange={handleFileUpload}
            accept=".pdf,.dwg,.zip,.doc,.docx,.png,.jpg"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Upload className="w-8 h-8 text-orange-500 mx-auto mb-2" />
          <p className="text-xs font-bold text-slate-700 dark:text-slate-300">
            {uploadedFileName ? (
              <span className="text-emerald-500 font-extrabold">{uploadedFileName}</span>
            ) : (
              'Click to upload or drag & drop project PDF, CAD (.dwg), or ZIP files (Max 50MB)'
            )}
          </p>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-5 h-5" />}
        className="w-full py-4 text-base font-extrabold uppercase tracking-wider shadow-xl shadow-orange-500/25"
      >
        Submit Quotation Request
      </Button>
    </form>
  );
};
