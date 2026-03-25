'use client';

import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: 'Core Technical Stack',
    skills: [
      { name: 'HTML5', icon: '/icons/html.png', color: 'text-orange-500' },
      { name: 'CSS3', icon: '/icons/css.jpg', color: 'text-blue-500' },
      { name: 'JAVASCRIPT', icon: '/icons/js.png', color: 'text-yellow-500' },
      { name: 'REACT', icon: '/icons/react.png', color: 'text-sky-400' },
      { name: 'NEXT.JS', icon: '/icons/next.png', color: 'text-slate-100' },
      { name: 'REDUX', icon: '/icons/Redux.png', color: 'text-purple-500' },
      { name: 'TAILWIND', icon: '/icons/tailwind.png', color: 'text-sky-400' },
      { name: 'NODE.JS', icon: '/icons/node.png', color: 'text-green-500' },
      { name: 'EXPRESS', icon: '/icons/express.png', color: 'text-slate-400' },
      { name: 'NESTJS', icon: '/icons/nest.png', color: 'text-red-500' },
      { name: 'MONGODB', icon: '/icons/mongodb.png', color: 'text-green-600' },
      { name: 'POSTGRES', icon: '/icons/postgresql.png', color: 'text-blue-400' },
      { name: 'SQL', icon: '/icons/sql.jpg', color: 'text-blue-600' },
      { name: 'TYPEORM', icon: '/icons/typeorm.png', color: 'text-orange-400' },
      { name: 'DOCKER', icon: '/icons/docker.png', color: 'text-blue-500' },
      { name: 'JENKINS', icon: '/icons/jenkins.jpg', color: 'text-slate-400' },
      { name: 'GIT', icon: '/icons/git.png', color: 'text-orange-600' },
    ]
  },
  {
    title: 'Currently Learning',
    skills: [
      { name: 'JAVA', icon: '/icons/java.png', color: 'text-red-600' },
      { name: 'KUBERNETES', icon: '/icons/kubernetes.png', color: 'text-blue-600' },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-editor-bg border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        <header className="flex items-center gap-4 mb-16">
          <h2 className="text-2xl font-bold font-mono text-white">ls_la --tech-stack</h2>
          <div className="h-[1px] flex-1 bg-primary/10"></div>
        </header>

        {skillCategories.map((category) => (
          <div key={category.title} className="mb-16 last:mb-0">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-[0.3em] mb-8 flex items-center gap-3">
              <span className="text-primary opacity-50">#</span> {category.title}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {category.skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex flex-col items-center justify-center p-8 rounded-xl border border-slate-200/5 dark:border-slate-800 bg-white/5 dark:bg-slate-900/50 glow-hover transition-all group cursor-default"
                >
                  <div className={`w-12 h-12 mb-4 transition-transform group-hover:scale-110 p-1`}>
                    <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] group-hover:text-slate-300 transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
