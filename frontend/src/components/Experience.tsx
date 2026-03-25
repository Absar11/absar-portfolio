'use client';

import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Opskube',
    role: 'Software Development Engineer',
    period: 'Nov 2025 — Present',
    location: 'India',
    description: [
      'Contributed to an existing production-grade full-stack application using Next.js, NestJS, TypeORM, and PostgreSQL.',
      'Developed and enhanced backend APIs and features as part of the second phase of the product lifecycle.',
      'Improved application performance, contributing to a 15% increase in user engagement.',
      'Implemented JWT-based authentication and role-based access control for secure user operations.',
      'Diagnosed and resolved production issues, performing root cause analysis and deploying fixes in live environments.',
      'Integrated Authorize.Net payment gateway into existing workflows ensuring secure transaction handling.',
    ],
    skills: [
      { name: 'Next.js', icon: '/icons/next.png' },
      { name: 'TypeScript', icon: '/icons/js.png' },
      { name: 'Nest.js', icon: '/icons/nest.png' },
      { name: 'TypeORM', icon: '/icons/typeorm.png' },
      { name: 'PostgreSQL', icon: '/icons/postgresql.png' },
      { name: 'Docker', icon: '/icons/docker.png' },
    ],
  },
  {
    company: 'Bluestock',
    role: 'SDE Intern',
    period: 'Aug 2025 — Sep 2025',
    location: 'India',
    description: [
      'Built and integrated REST APIs and frontend modules using MERN stack.',
      'Participated in debugging, testing, and release cycles.',
      'Worked on API design and database schema structuring.',
    ],
    skills: [
      { name: 'React', icon: '/icons/react.png' },
      { name: 'Node.js', icon: '/icons/node.png' },
      { name: 'MongoDB', icon: '/icons/mongodb.png' },
      { name: 'Express', icon: '/icons/express.png' },
    ],
  },
];

const Experience = () => {
  return (
    <section id="about" className="py-20 bg-editor-bg">
      <div className="max-w-4xl mx-auto px-10">
        <header className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-bold font-mono text-white">git_log --experience</h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </header>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:bottom-0 before:w-[1px] before:bg-primary/20"
            >
              {/* Timeline Indicator */}
              <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-primary glow-sm shadow-[0_0_10px_rgba(13,166,244,0.4)]"></div>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-100 font-mono tracking-tight">{exp.role}</h3>
                  <p className="text-primary font-mono text-xs uppercase tracking-widest mt-1">{exp.company}</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 bg-primary/5 px-3 py-1 rounded border border-primary/10">
                  {exp.period}
                </span>
              </div>

              <div className="space-y-3">
                {exp.description.map((item, i) => (
                  <p key={i} className="text-slate-400 text-sm leading-relaxed font-mono">
                    <span className="text-primary/40 mr-2">$</span> {item}
                  </p>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap gap-4">
                {exp.skills.map(t => (
                  <div key={t.name} className="flex items-center gap-1.5 px-2 py-0.5 border border-primary/10 rounded-sm bg-background-dark/50">
                    <img src={t.icon} alt={t.name} className="w-3 h-3 object-contain" />
                    <span className="text-[9px] font-bold text-slate-500 uppercase tracking-tight">
                      {t.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
