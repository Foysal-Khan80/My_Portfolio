import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Cpu, Target } from 'lucide-react';

const About = () => {
  const interests = [
    {
      icon: <Code size={32} />,
      title: 'Web Development',
      description: 'Building modern, responsive web applications',
    },
    {
      icon: <Zap size={32} />,
      title: 'Software Engineering',
      description: 'Creating scalable and efficient solutions',
    },
    {
      icon: <Target size={32} />,
      title: 'Project Management',
      description: 'Leading and coordinating technical projects',
    },
    {
      icon: <Cpu size={32} />,
      title: 'IoT Development',
      description: 'Developing smart connected devices',
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Description */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-display font-bold mb-6 text-white">
              Passionate About Building Solutions
            </h3>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                I am a Computer Science and Engineering student at{' '}
                <span className="text-primary-400 font-semibold">United International University</span> with a strong passion for technology and innovation. My journey in the world of software development has been driven by curiosity and a desire to create meaningful solutions.
              </p>
              <p>
                Currently maintaining a <span className="text-accent-500 font-semibold">CGPA of 3.26/4.00</span>, I focus on combining academic knowledge with practical experience through various projects and hands-on learning.
              </p>
              <p>
                I specialize in full-stack web development using modern technologies like React, Node.js, and MongoDB. Beyond web development, I'm also exploring IoT solutions and how technology can be used to solve real-world challenges.
              </p>
              <p>
                Located in <span className="text-primary-400 font-semibold">Dhaka, Bangladesh</span>, I'm constantly learning, building, and looking for opportunities to grow as a developer and contribute to impactful projects.
              </p>
            </div>
          </motion.div>

          {/* Right: Interests */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="card group hover:-translate-y-2"
              >
                <div className="text-primary-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {interest.icon}
                </div>
                <h4 className="text-xl font-display font-semibold mb-2 text-white">
                  {interest.title}
                </h4>
                <p className="text-slate-400 text-sm">{interest.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
