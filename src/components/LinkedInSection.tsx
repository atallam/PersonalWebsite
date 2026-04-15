import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Users, Briefcase, Award, TrendingUp, MapPin } from 'lucide-react';

export const LinkedInSection = () => {
  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of enterprise applications using React, Node.js, and cloud technologies.',
      achievements: ['Increased performance by 40%', 'Led team of 5 developers', 'Reduced deployment time by 60%']
    },
    {
      title: 'Frontend Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built responsive web applications and implemented modern UI/UX designs.',
      achievements: ['Developed 10+ production apps', 'Improved user engagement by 35%', 'Mentored junior developers']
    }
  ];

  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'UI/UX Design', level: 80 },
    { name: 'Cloud Architecture', level: 75 },
    { name: 'DevOps', level: 70 }
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
    <section id="linkedin" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full mb-4"
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            <Linkedin className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </motion.div>
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            My journey through the tech industry, showcasing growth and expertise
          </p>
        </motion.div>

        {/* Profile Overview */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-3xl font-bold">YN</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Your Name</h3>
              <p className="text-slate-600 dark:text-slate-300 mb-4">Full-Stack Developer</p>
              <div className="flex items-center justify-center text-slate-500 dark:text-slate-400 mb-4">
                <MapPin size={16} className="mr-2" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex justify-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">50+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">10k+</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Connections</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Skills & Expertise</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-lg p-4"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-medium text-slate-900 dark:text-white">{skill.name}</span>
                    <span className="text-sm text-slate-600 dark:text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 text-center">Work Experience</h3>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-6 border border-slate-200 dark:border-slate-700"
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.title}</h4>
                    <p className="text-lg text-blue-600 dark:text-blue-400">{exp.company}</p>
                  </div>
                  <span className="text-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement, i) => (
                    <motion.span
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm"
                    >
                      {achievement}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            { icon: Users, label: 'Network', value: '10,000+', color: 'blue' },
            { icon: Briefcase, label: 'Projects', value: '50+', color: 'purple' },
            { icon: Award, label: 'Awards', value: '15', color: 'green' },
            { icon: TrendingUp, label: 'Growth', value: '300%', color: 'orange' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 text-center"
              >
                <motion.div
                  className={`w-12 h-12 bg-${stat.color}-100 dark:bg-${stat.color}-900 rounded-full mx-auto mb-4 flex items-center justify-center`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon className={`w-6 h-6 text-${stat.color}-600 dark:text-${stat.color}-400`} />
                </motion.div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
