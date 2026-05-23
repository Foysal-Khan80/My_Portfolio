import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ExternalLink, Github, Linkedin, Facebook, Phone } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-primary-400 font-semibold mb-4 text-lg"
            >
              Hello, I'm
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold mb-4"
            >
              <span className="text-gradient">Md. Foysal</span>
              <br />
              <span className="text-white">Hossain Khan</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-slate-400 mb-6 font-medium"
            >
              Computer Science Student | Full Stack Web Developer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 text-lg mb-8 leading-relaxed"
            >
              I am a Computer Science and Engineering student at United International University with a strong interest in full-stack web development, software engineering, and IoT-based solutions.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary flex items-center gap-2"
              >
                <ExternalLink size={20} />
                View Projects
              </button>
              <button className="btn-secondary flex items-center gap-2">
                <Download size={20} />
                Download Resume
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="btn-secondary flex items-center gap-2"
              >
                <Mail size={20} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4"
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Facebook size={24} />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="p-3 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+8801234567890"
                className="p-3 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300 hover:scale-110"
              >
                <Phone size={24} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Animated Background Circles */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500/20 to-accent-500/20 blur-3xl"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-8 rounded-full bg-gradient-to-bl from-primary-600/20 to-accent-600/20 blur-2xl"
              />
              
              {/* Profile Image Placeholder */}
              <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-primary-500/30 overflow-hidden flex items-center justify-center shadow-2xl shadow-primary-500/20">
                <div className="text-center">
                  <div className="text-8xl mb-4">👨‍💻</div>
                  <p className="text-slate-400 text-sm">Add your photo here</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary-500 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
