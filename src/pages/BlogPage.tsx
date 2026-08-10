import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { SectionTitle } from '../components/common/SectionTitle';
import { BlogCard } from '../components/shared/BlogCard';
import { blogData } from '../data/blogData';
import { Search, BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const BlogPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Smart Buildings',
    'Sustainable Construction',
    'Construction Safety',
    'Construction Technology',
    'Infrastructure Development',
    'Green Building'
  ];

  const featuredPost = blogData[0];

  const filteredPosts = blogData.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEO
        title="Construction News & Technical Articles | BuildCore Blog"
        description="Read expert insights on smart buildings, sustainable concrete technology, ISO site safety, BIM 5D modeling, and infrastructure trends."
      />

      <main className="py-12 bg-slate-50 dark:bg-slate-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Industry Insights"
            title="Construction Engineering & Tech Insights"
            subtitle="Thought leadership articles authored by BuildCore’s senior civil engineers, VDC managers, and sustainability directors."
          />

          {/* Featured Post Banner */}
          {featuredPost && (
            <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 dark:border-slate-800 mb-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-7 relative h-72 lg:h-auto overflow-hidden">
                <img
                  src={featuredPost.heroImage}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-orange-500 text-white shadow-md">
                    Featured Article
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-orange-500" /> {featuredPost.publishedDate}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-orange-500" /> {featuredPost.readTime}</span>
                  </div>

                  <h2 className="text-2xl font-black text-slate-900 dark:text-white hover:text-orange-500 transition-colors">
                    <Link to={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed">
                    {featuredPost.shortDescription}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-9 h-9 rounded-full object-cover border border-orange-500" />
                    <div>
                      <p className="text-xs font-bold text-slate-900 dark:text-white">{featuredPost.author.name}</p>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">{featuredPost.author.role}</p>
                    </div>
                  </div>

                  <Link
                    to={`/blog/${featuredPost.slug}`}
                    className="p-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* Search & Category Filter */}
          <div className="mb-12 space-y-6">
            <div className="max-w-md mx-auto relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles by title or keyword..."
                className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-orange-500 shadow-md"
              />
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>

            {/* Category Pills */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white shadow-md'
                      : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-orange-500'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">No articles found</h3>
              <p className="text-xs text-slate-500 mt-1">Try resetting your search query.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
};
