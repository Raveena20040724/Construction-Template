import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/common/SEO';
import { blogData } from '../data/blogData';
import { BlogCard } from '../components/shared/BlogCard';
import { Calendar, Clock, ArrowLeft, Share2, Globe, MessageSquare, Link as LinkIcon } from 'lucide-react';
import { toast } from 'react-toastify';

export const BlogDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogData.find((b) => b.slug === id || b.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogData.filter((b) => post.relatedPostIds.includes(b.id));

  const handleShare = (platform: string) => {
    if (platform === 'Copy Link') {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Article link copied to clipboard!');
      return;
    }
    toast.info(`Sharing article on ${platform}`);
  };

  return (
    <>
      <SEO
        title={`${post.title} | BuildCore Blog`}
        description={post.shortDescription}
        ogImage={post.heroImage}
      />

      <main className="py-10 bg-slate-50 dark:bg-slate-950 min-h-screen">
        {/* Back Link */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Construction Articles
          </Link>
        </div>

        {/* Article Container */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl">
            {/* Hero Image Banner */}
            <div className="relative h-80 sm:h-96 w-full">
              <img src={post.heroImage} alt={post.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-6 left-6">
                <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-500 text-white shadow-md">
                  {post.category}
                </span>
              </div>
            </div>

            {/* Header Metadata */}
            <div className="p-6 sm:p-10 -mt-12 relative z-10">
              <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-orange-500" /> {post.publishedDate}</span>
                <span className="flex items-center gap-1"><Clock className="w-4 h-4 text-orange-500" /> {post.readTime}</span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {post.title}
              </h1>

              {/* Author Info & Share Buttons */}
              <div className="mt-6 py-4 border-y border-slate-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt={post.author.name} className="w-11 h-11 rounded-full object-cover border-2 border-orange-500" />
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">{post.author.name}</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-1 hidden sm:inline">Share:</span>
                  <button onClick={() => handleShare('Twitter')} aria-label="Share on Twitter" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors">
                    <Globe className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleShare('LinkedIn')} aria-label="Share on LinkedIn" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleShare('Facebook')} aria-label="Share on Facebook" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                  <button onClick={() => handleShare('Copy Link')} aria-label="Copy Article Link" className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-orange-500 hover:text-white transition-colors">
                    <LinkIcon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Body Content */}
              <div className="mt-8 space-y-6 text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {post.contentParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>

              {/* Article Tags */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Tags:</span>
                {post.tags.map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-orange-600 dark:text-orange-400">
                    #{t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((rel, idx) => (
                <BlogCard key={rel.id} post={rel} index={idx} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
};
