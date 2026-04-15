import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitBranch, Code, Package, Users, Zap, ExternalLink } from 'lucide-react';

export const GitHubSection = () => {
  const repositories = [
    {
      name: "awesome-react-components",
      description: "A curated list of reusable React components with modern design patterns and best practices.",
      language: "TypeScript",
      stars: 1234,
      forks: 89,
      issues: 12,
      tags: ["React", "TypeScript", "UI Components"],
      featured: true,
      lastUpdated: "2 days ago"
    },
    {
      name: "node-api-boilerplate",
      description: "Production-ready Node.js API boilerplate with authentication, testing, and deployment setup.",
      language: "JavaScript",
      stars: 856,
      forks: 234,
      issues: 8,
      tags: ["Node.js", "API", "Boilerplate"],
      lastUpdated: "1 week ago"
    },
    {
      name: "tailwind-dashboard",
      description: "A beautiful admin dashboard template built with TailwindCSS and React.",
      language: "TypeScript",
      stars: 678,
      forks: 156,
      issues: 5,
      tags: ["TailwindCSS", "Dashboard", "React"],
      lastUpdated: "3 days ago"
    },
    {
      name: "python-ml-toolkit",
      description: "Machine learning toolkit with common algorithms and utilities for data science projects.",
      language: "Python",
      stars: 445,
      forks: 78,
      issues: 3,
      tags: ["Python", "Machine Learning", "Data Science"],
      lastUpdated: "5 days ago"
    },
    {
      name: "vue-ecommerce",
      description: "Full-stack e-commerce application built with Vue.js and Node.js.",
      language: "Vue",
      stars: 323,
      forks: 67,
      issues: 15,
      tags: ["Vue.js", "E-commerce", "Full-stack"],
      lastUpdated: "1 week ago"
    },
    {
      name: "docker-compose-starter",
      description: "Docker Compose templates for common web development setups.",
      language: "Dockerfile",
      stars: 289,
      forks: 45,
      issues: 2,
      tags: ["Docker", "DevOps", "Configuration"],
      lastUpdated: "4 days ago"
    }
  ];

  const contributions = [
    { day: "Mon", contributions: 5 },
    { day: "Tue", contributions: 8 },
    { day: "Wed", contributions: 3 },
    { day: "Thu", contributions: 12 },
    { day: "Fri", contributions: 7 },
    { day: "Sat", contributions: 4 },
    { day: "Sun", contributions: 6 }
  ];

  const stats = [
    { label: "Total Contributions", value: "1,234", icon: Zap },
    { label: "Public Repos", value: "48", icon: Package },
    { label: "Followers", value: "892", icon: Users },
    { label: "Following", value: "156", icon: Users }
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

  const getLanguageColor = (language: string) => {
    const colors: { [key: string]: string } = {
      TypeScript: 'bg-blue-500',
      JavaScript: 'bg-yellow-500',
      Python: 'bg-green-500',
      Vue: 'bg-emerald-500',
      Dockerfile: 'bg-cyan-500'
    };
    return colors[language] || 'bg-gray-500';
  };

  return (
    <section id="github" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-slate-800 dark:bg-slate-700 rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Github className="w-8 h-8 text-white" />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Open Source Contributions
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My GitHub portfolio showcasing open source projects and community contributions
          </p>
        </motion.div>

        {/* GitHub Stats */}
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
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
              >
                <motion.div
                  className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full mx-auto mb-4 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className="w-6 h-6 text-slate-600 dark:text-slate-400" />
                </motion.div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 mb-16"
        >
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
          <div className="grid grid-cols-7 gap-2">
            {contributions.map((day, index) => (
              <motion.div
                key={day.day}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{day.day}</div>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="h-8 bg-gradient-to-t from-green-500 to-green-400 rounded"
                  style={{ 
                    height: `${Math.min(day.contributions * 8, 64)}px`,
                    opacity: Math.min(day.contributions * 0.1 + 0.3, 1)
                  }}
                  title={`${day.contributions} contributions`}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Repository */}
        {repositories.filter(repo => repo.featured).map((repo) => (
          <motion.div
            key={repo.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    Featured Project
                  </span>
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    {repo.lastUpdated}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <Github className="w-8 h-8" />
                  <h3 className="text-3xl font-bold">{repo.name}</h3>
                </div>
                <p className="text-lg mb-6 text-white/90">{repo.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {repo.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <span className="flex items-center gap-1">
                      <Star size={16} />
                      {repo.stars}
                    </span>
                    <span className="flex items-center gap-1">
                      <GitBranch size={16} />
                      {repo.forks}
                    </span>
                    <span className="flex items-center gap-1">
                      <Code size={16} />
                      {repo.issues} issues
                    </span>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 bg-white text-slate-900 px-4 py-2 rounded-full font-semibold"
                  >
                    View Repository
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Repository Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {repositories.filter(repo => !repo.featured).map((repo) => (
            <motion.div
              key={repo.name}
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${getLanguageColor(repo.language)}`} />
                  <span className="text-sm text-slate-600 dark:text-slate-400">{repo.language}</span>
                </div>
                <span className="text-xs text-slate-500 dark:text-slate-400">{repo.lastUpdated}</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {repo.name}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-2">
                {repo.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {repo.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star size={14} />
                    {repo.stars}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitBranch size={14} />
                    {repo.forks}
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-1"
                >
                  View
                  <ExternalLink size={14} />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Profile Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 text-white px-8 py-3 rounded-full font-semibold"
          >
            <Github size={20} />
            View Full GitHub Profile
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
