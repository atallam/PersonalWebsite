import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Calendar, Heart, MessageCircle, TrendingUp, ArrowRight } from 'lucide-react';

export const SubstackSection = () => {
  const articles = [
    {
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Exploring the latest trends in web development including AI integration, WebAssembly, and the evolution of frontend frameworks.",
      date: "2024-03-15",
      readTime: "5 min read",
      likes: 234,
      comments: 45,
      tags: ["Web Development", "Trends", "Technology"],
      featured: true
    },
    {
      title: "Building Scalable React Applications: Best Practices",
      excerpt: "Learn how to structure your React applications for maximum scalability and maintainability using modern patterns and tools.",
      date: "2024-03-10",
      readTime: "8 min read",
      likes: 189,
      comments: 32,
      tags: ["React", "Architecture", "Best Practices"]
    },
    {
      title: "The Art of Code Review: Giving and Receiving Feedback",
      excerpt: "Master the delicate art of code review with practical tips for both reviewers and contributors to improve team collaboration.",
      date: "2024-03-05",
      readTime: "6 min read",
      likes: 156,
      comments: 28,
      tags: ["Code Review", "Teamwork", "Development"]
    },
    {
      title: "Understanding TypeScript Generics: A Complete Guide",
      excerpt: "Deep dive into TypeScript generics with practical examples and use cases that will level up your type safety game.",
      date: "2024-02-28",
      readTime: "10 min read",
      likes: 201,
      comments: 41,
      tags: ["TypeScript", "Programming", "Tutorial"]
    }
  ];

  const stats = [
    { label: "Subscribers", value: "2.5K+", icon: BookOpen },
    { label: "Articles", value: "48", icon: BookOpen },
    { label: "Total Reads", value: "15K+", icon: TrendingUp },
    { label: "Engagement", value: "89%", icon: Heart }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  return (
    <section id="substack" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <BookOpen className="w-8 h-8 text-purple-600 dark:text-purple-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Writing & Thoughts
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Exploring technology, development, and creative problem-solving through articles and tutorials
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-purple-200 dark:border-purple-700 text-center"
              >
                <motion.div
                  className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </motion.div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Featured Article */}
        {articles.filter(article => article.featured).map((article) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Featured
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-3xl font-bold mb-4">{article.title}</h3>
                <p className="text-lg mb-6 text-white/90">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1">
                      <Heart size={16} />
                      {article.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={16} />
                      {article.comments}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={16} />
                      {article.date}
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-purple-600 px-4 py-2 rounded-full font-semibold"
                  >
                    Read More
                    <ArrowRight size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Article Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {articles.filter(article => !article.featured).map((article) => (
            <motion.div
              key={article.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm text-slate-500 dark:text-slate-400">{article.date}</span>
                <span className="text-slate-300 dark:text-slate-600">·</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">{article.readTime}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                {article.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1">
                    <Heart size={14} />
                    {article.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    {article.comments}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-purple-600 dark:text-purple-400 font-semibold text-sm flex items-center gap-1"
                >
                  Read More
                  <ArrowRight size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Subscribe to My Newsletter
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Get the latest articles, insights, and updates delivered straight to your inbox. 
            No spam, unsubscribe anytime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold"
            >
              Subscribe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
