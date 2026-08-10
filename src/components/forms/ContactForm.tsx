import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-toastify';
import { Send, Mail, MessageSquare } from 'lucide-react';
import { Button } from '../common/Button';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(15, 'Message must be at least 15 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setIsSubmitting(false);

    toast.success('Thank you for contacting BuildCore Constructions! Our representative will respond shortly.');
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 bg-white dark:bg-slate-900 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-800 shadow-xl">
      <div>
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-orange-500" />
          Send Us a Direct Message
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
          Have a question or inquiry? Fill out the form below to connect with our corporate team.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Your Name *
          </label>
          <input
            type="text"
            {...register('name')}
            placeholder="Jane Smith"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            {...register('email')}
            placeholder="janesmith@domain.com"
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
            Subject *
          </label>
          <input
            type="text"
            {...register('subject')}
            placeholder="Project Consultation Inquiry"
            className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
          />
          {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">
          Your Message *
        </label>
        <textarea
          rows={5}
          {...register('message')}
          placeholder="Please describe how we can assist you..."
          className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500"
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        rightIcon={<Send className="w-4 h-4" />}
        className="w-full py-3.5 text-sm uppercase tracking-wider font-extrabold shadow-lg shadow-orange-500/20"
      >
        Send Message
      </Button>
    </form>
  );
};
