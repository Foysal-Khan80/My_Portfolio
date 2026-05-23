import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star } from 'lucide-react';

const Awards = () => {
  const achievements = [
    {
      icon: <Award size={32} />,
      title: 'Academic Project Presentations',
      description: 'Successfully presented technical projects in university showcases',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Trophy size={32} />,
      title: 'Technical Assignments',
      description: 'Completed various challenging programming and development assignments',
      color: 'from-blue-500 to-purple-500',
    },
    {
      icon: <Star size={32} />,
      title: 'Future Achievement Space',
      description: 'Actively working towards hackathons and coding competitions',
      color: 'from-green-500 to-teal-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="awards" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Awards & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{achievement.icon}</div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                {achievement.title}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700">
            <div className="w-2 h-2 bg-accent-500 rounded-full animate-pulse" />
            <span className="text-slate-300">More achievements coming soon</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;
