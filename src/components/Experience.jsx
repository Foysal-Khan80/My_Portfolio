import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Code2 } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center border-2 border-primary-500/30">
                  <Briefcase size={40} className="text-primary-400" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <Code2 size={16} className="text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Building Experience Through Projects
            </h3>
            
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              No professional experience yet; actively working on academic and personal projects to develop practical skills in full-stack development, IoT, and software engineering.
            </p>

            <div className="inline-flex flex-wrap gap-3 justify-center">
              <div className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
                <span className="text-primary-400 font-medium text-sm">Academic Projects</span>
              </div>
              <div className="px-4 py-2 bg-accent-500/10 border border-accent-500/30 rounded-full">
                <span className="text-accent-400 font-medium text-sm">Personal Development</span>
              </div>
              <div className="px-4 py-2 bg-primary-500/10 border border-primary-500/30 rounded-full">
                <span className="text-primary-400 font-medium text-sm">Continuous Learning</span>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                💼 Currently seeking internship and entry-level opportunities to gain professional experience
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
