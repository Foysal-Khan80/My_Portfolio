import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, HeartHandshake } from 'lucide-react';

const SocialWork = () => {
  return (
    <section id="social-work" className="py-20 px-6 bg-slate-900/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Social Work</h2>
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
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-24 h-24 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center"
                >
                  <Heart size={40} className="text-white" fill="white" />
                </motion.div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                  <HeartHandshake size={16} className="text-white" />
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-display font-bold text-white mb-4">
              Contributing to the Community
            </h3>
            
            <p className="text-lg text-slate-300 mb-6 max-w-2xl mx-auto leading-relaxed">
              Participated in volunteer and community service activities, contributing to social causes and helping those in need.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Users size={24} className="text-primary-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">Community Service</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <Heart size={24} className="text-red-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">Volunteer Work</p>
              </div>
              <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                <HeartHandshake size={24} className="text-accent-400 mx-auto mb-2" />
                <p className="text-slate-300 text-sm">Social Initiatives</p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                🤝 Committed to giving back to society and making a positive impact
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialWork;
