'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface BentoCardProps {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  className?: string;
  codeSnippet?: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ 
  title, 
  description, 
  tech, 
  link, 
  github, 
  className = '',
  codeSnippet = '// initialize component...'
}) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`glass-card group relative p-6 h-full flex flex-col justify-between overflow-hidden ${className}`}
    >
      {/* Code Background Layer */}
      <div className="absolute top-0 left-0 w-full h-full code-bg-mask p-4 font-mono text-[9px] select-none pointer-events-none overflow-hidden">
        <pre className="text-primary/40 leading-relaxed uppercase">
          <code>{codeSnippet}</code>
        </pre>
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-4">
          {tech.slice(0, 2).map((t) => (
            <span 
              key={t} 
              className="px-2 py-0.5 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
          <span className="px-2 py-0.5 rounded bg-slate-500/10 text-slate-500 text-[10px] font-bold uppercase tracking-wider ml-auto">
            v2.4.0
          </span>
        </div>
        
        <h3 className="text-xl font-bold font-mono text-slate-100 group-hover:text-primary transition-colors leading-tight mb-3">
          {title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed max-w-sm mb-6">
          {description}
        </p>
      </div>

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex -space-x-2">
          <div className="size-6 rounded-full border-2 border-background-dark bg-slate-700 shadow-sm"></div>
          <div className="size-6 rounded-full border-2 border-background-dark bg-slate-600 shadow-sm"></div>
        </div>
        <div className="flex items-center gap-4">
          {link && (
            <a href={link} target="_blank" className="text-primary flex items-center gap-1 text-xs font-bold uppercase tracking-widest hover:brightness-110">
              Execute <span className="material-symbols-outlined text-base">arrow_right_alt</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BentoCard;
