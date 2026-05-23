import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('domains');

  const skillsData = {
    domains: [
      'Full Stack Web Development',
      'Software Testing',
      'IoT Development',
      'Project Management',
    ],
    languages: [
      'Python',
      'JavaScript',
      'Java',
      'C++',
      'SQL',
    ],
    frontend: [
      'React.js',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Bootstrap',
    ],
    backend: [
      'Node.js',
      'Express.js',
    ],
    database: [
      'MongoDB',
      'MySQL',
    ],
    tools: [
      'Git',
      'GitHub',
      'Figma',
      'Jira',
      'Selenium',
      'Blynk',
      'Postman',
      'VS Code',
    ],
  };

  const categories = [
    { id: 'domains', label: 'Domains', icon: '🎯' },
    { id: 'languages', label: 'Languages', icon: '💻' },
    { id: 'frontend', label: 'Frontend', icon: '🎨' },
    { id: 'backend', label: 'Backend', icon: '⚙️' },
    { id: 'database', label: 'Database', icon: '🗄️' },
    { id: 'tools', label: 'Tools', icon: '🛠️' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="skills" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30'
                  : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.label}
            </motion.button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card text-center group cursor-pointer"
            >
              <div className="text-lg font-semibold text-white group-hover:text-primary-400 transition-colors duration-300">
                {skill}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
        >
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5</div>
            <div className="text-slate-400">Programming Languages</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">5</div>
            <div className="text-slate-400">Frontend Technologies</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">4</div>
            <div className="text-slate-400">Development Tools</div>
          </div>
          <div className="card text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3+</div>
            <div className="text-slate-400">Major Projects</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
