import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Pothik – Travel Agency Management System',
      description: 'A full-stack travel agency platform that allows users to browse tour packages, book trips, manage destinations, and submit reviews. Features include user authentication, booking management, and admin dashboard.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Tailwind CSS'],
      image: '🌍',
      github: '#',
      demo: '#',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Smart Poultry Farm',
      description: 'An IoT-based automated poultry farm monitoring and control system using sensors and remote mobile control. Monitors temperature, humidity, and automates feeding systems with real-time data visualization.',
      technologies: ['ESP32', 'Blynk', 'Temperature Sensor', 'Relay', 'Servo Motor'],
      image: '🐔',
      github: '#',
      demo: '#',
      color: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Jira-like Project Management Website',
      description: 'A collaborative task management application inspired by Jira. Features include sprint planning, kanban boards, task assignment, and team collaboration tools designed in Figma and implemented as a full-stack web application.',
      technologies: ['Figma', 'React.js', 'Node.js', 'MongoDB'],
      image: '📋',
      github: '#',
      demo: '#',
      color: 'from-purple-500 to-pink-500',
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in full-stack development and IoT solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div className="card h-full flex flex-col hover:-translate-y-2 transition-transform duration-300">
                {/* Project Image/Icon */}
                <div className={`relative h-48 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-6 overflow-hidden`}>
                  <div className="text-7xl">{project.image}</div>
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={24} className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={24} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-800/50 text-primary-400 text-xs rounded-full border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-slate-700">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* More Projects CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-primary-500 rounded-lg transition-all duration-300 group"
          >
            <Code size={20} className="group-hover:text-primary-400 transition-colors" />
            <span className="font-medium">View More Projects on GitHub</span>
            <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
