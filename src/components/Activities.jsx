import React from 'react';
import { motion } from 'framer-motion';
import { Users, Laptop, Calendar } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Users size={32} />,
      title: 'UIU Computer Club',
      role: 'Member',
      description: 'Active member participating in technical discussions, coding sessions, and club events',
      highlights: ['Technical Workshops', 'Peer Learning', 'Networking'],
    },
    {
      icon: <Laptop size={32} />,
      title: 'Technical Events',
      role: 'Participant',
      description: 'Regular participation in university technical events and coding competitions',
      highlights: ['Hackathons', 'Code Challenges', 'Tech Talks'],
    },
    {
      icon: <Calendar size={32} />,
      title: 'University Workshops',
      role: 'Attendee',
      description: 'Attended various workshops on web development, software engineering, and emerging technologies',
      highlights: ['Web Development', 'IoT Sessions', 'Career Guidance'],
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="activities" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">Extracurricular Activities</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {activities.map((activity, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="card group hover:border-primary-500/70 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{activity.icon}</div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                        {activity.title}
                      </h3>
                      <p className="text-primary-400 font-medium">{activity.role}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {activity.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Activities;
