import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Facebook, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com', label: 'GitHub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: <Facebook size={20} />, url: 'https://facebook.com', label: 'Facebook' },
    { icon: <Mail size={20} />, url: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900/50 border-t border-slate-800 py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold text-gradient mb-4">
              FH Khan
            </h3>
            <p className="text-slate-400 mb-4 leading-relaxed">
              Computer Science Student & Full Stack Developer passionate about building innovative solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-slate-800/50 hover:bg-primary-500 rounded-lg transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className="text-slate-400 hover:text-primary-400 transition-colors duration-300 capitalize"
                  >
                    {section}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801234567890"
                  className="hover:text-primary-400 transition-colors duration-300"
                >
                  +880 1234 567890
                </a>
              </li>
              <li>Dhaka, Bangladesh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm text-center md:text-left">
              © {currentYear} Md. Foysal Hossain Khan. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm flex items-center gap-2">
              Built with{' '}
              <Heart size={16} className="text-red-500 animate-pulse" fill="currentColor" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
