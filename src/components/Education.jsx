import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Educational Qualification</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="card relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary-500/10 to-transparent rounded-bl-full" />
            
            <div className="relative z-10">
              {/* University Logo Placeholder */}
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                    <GraduationCap size={40} className="text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                    B.Sc. in Computer Science and Engineering
                  </h3>
                  <p className="text-xl text-primary-400 font-semibold mb-4">
                    United International University
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-800/50 rounded-lg">
                        <Award size={20} className="text-accent-500" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">CGPA</p>
                        <p className="text-lg font-semibold text-white">3.26 / 4.00</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-slate-800/50 rounded-lg">
                        <Calendar size={20} className="text-primary-400" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">Expected Graduation</p>
                        <p className="text-lg font-semibold text-white">2026</p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-slate-700 pt-4">
                    <p className="text-slate-300 leading-relaxed">
                      Pursuing a comprehensive education in Computer Science with focus on software development, 
                      algorithms, data structures, web technologies, and modern development practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 rounded-full border border-slate-700">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse" />
            <span className="text-slate-300">Currently pursuing degree</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
