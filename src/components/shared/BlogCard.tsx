import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import type { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

export const BlogCard: React.FC<BlogCardProps> = ({ post, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
    >
      <div>
        {/* Blog Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={post.heroImage}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-md">
              {post.category}
            </span>
          </div>
        </div>

        {/* Blog Body */}
        <div className="p-6">
          {/* Metadata */}
          <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-orange-500" />
              {post.publishedDate}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-orange-500" />
              {post.readTime}
            </span>
          </div>

          <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-orange-500 transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="mt-2 text-xs text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
            {post.shortDescription}
          </p>

          {/* Author info */}
          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover border border-orange-500"
            />
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">{post.author.name}</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400">{post.author.role}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <Link
          to={`/blog/${post.slug}`}
          className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-orange-500 dark:hover:bg-orange-500 text-slate-900 dark:text-slate-100 hover:text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group/btn"
        >
          <span>Read Full Article</span>
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
