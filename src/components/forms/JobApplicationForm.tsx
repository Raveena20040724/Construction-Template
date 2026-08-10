import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Upload, Send, CheckCircle2, Briefcase } from 'lucide-react';
import { Button } from '../common/Button';

const jobAppSchema = z.object({
  fullName: z.string().min(2, 'Full Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  linkedinProfile: z.string().url('Please enter a valid LinkedIn URL').optional().or(z.literal('')),
  coverLetter: z.string().min(20, 'Cover letter must be at least 20 characters'),
});

type JobAppFormValues = z.infer<typeof jobAppSchema>;

interface JobApplicationFormProps {
  jobTitle: string;
}

export const JobApplicationForm: React.FC<JobApplicationFormProps> = ({ jobTitle }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [resumeName, setResumeName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<JobAppFormValues>({
    resolver: zodResolver(jobAppSchema),
  });

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setResumeName(file.name);
      toast.info(`Resume attached: ${file.name}`);
    }
  };

  const onSubmit = async (data: JobAppFormValues) => {
    if (!resumeName) {
      toast.error('Please attach your Resume / CV file (PDF/DOC)');
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);

    toast.success(`Application submitted for ${jobTitle}! Our HR talent acquisition team will review your CV.`);
    reset();
    setResumeName(null);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Briefcase className="w-6 h-6 text-orange-500" />
          Apply for: <span className="text-orange-500">{jobTitle}</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Submit your candidate details and resume below.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            {...register('fullName')}
            placeholder="Robert Vance"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="robert@domain.com"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            {...register('phone')}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            LinkedIn Profile URL (Optional)
          </label>
          <input
            type="url"
            {...register('linkedinProfile')}
            placeholder="https://linkedin.com/in/username"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.linkedinProfile && <p className="mt-1 text-xs text-red-500">{errors.linkedinProfile.message}</p>}
        </div>
      </div>

      {/* Resume File Upload */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Upload Resume / CV * (PDF, DOCX)
        </label>
        <div className="relative border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-2xl p-5 text-center hover:border-orange-500 transition-colors bg-slate-50/50 dark:bg-slate-800/40">
          <input
            type="file"
            onChange={handleResumeUpload}
            accept=".pdf,.doc,.docx"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          <Upload className="w-6 h-6 text-orange-500 mx-auto mb-1" />
          <p className="text-xs font-semibold text-slate-700 dark:text-slate-300">
            {resumeName ? (
              <span className="text-emerald-500 font-bold">{resumeName}</span>
            ) : (
              'Click to upload Resume file (PDF / DOCX Max 10MB)'
            )}
          </p>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Cover Letter & Career Overview *
        </label>
        <textarea
          rows={4}
          {...register('coverLetter')}
          placeholder="Briefly explain your technical experience, major structural projects managed, and why you wish to join BuildCore..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
        />
        {errors.coverLetter && <p className="mt-1 text-xs text-red-500">{errors.coverLetter.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full py-3.5 text-sm uppercase tracking-wider font-extrabold shadow-lg shadow-orange-500/20"
      >
        Submit Job Application
      </Button>
    </form>
  );
};
