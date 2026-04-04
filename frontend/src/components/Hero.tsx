'use client';

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "initialising_dev_env...";
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowContent(true), 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative p-10 lg:p-20 overflow-hidden bg-editor-bg border-b border-primary/5">
      <div className="flex gap-8">
        {/* Line Numbers Decoration */}
        <div className="hidden md:flex flex-col text-slate-600 font-mono text-sm leading-[1.6] text-right select-none pr-6 border-r border-primary/5">
          {Array.from({ length: 15 }).map((_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        <div className="flex flex-col">
          {/* Status Indicator */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-primary">System Online</span>
          </div>

          <div className="font-mono text-primary text-lg mb-4 opacity-80">
            <span className="text-slate-500">&gt;</span> {text} <span className="animate-pulse">|</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-black font-display tracking-tight text-slate-100 neon-text leading-[1.1] mb-8">
            Engineering <span className="text-primary italic">scalable</span> <br />
            digital ecosystems.
          </h1>

          <p className="max-w-2xl text-lg text-slate-400 font-mono leading-relaxed mb-12">
            &gt; Software Development Engineer with hands-on experience in building and scaling production-grade full-stack applications
            using MERN, Next.js, and NestJS. Proven track record of developing secure backend systems, implementing JWT-based authentication 
            and role-based access control, and optimizing application performance, contributing to improved user engagement.
            Experienced in working on live systems, resolving production issues, and delivering reliable features.
          </p>

          <div className="flex flex-wrap gap-6 mb-16">
            <a 
              href="#projects"
              className="flex items-center gap-2 rounded bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
            >
              <span className="material-symbols-outlined text-lg">terminal</span>
              View Projects
            </a>
            <a 
              href="/resume.pdf?v=2" 
              download="Absar_Ahmad_Resume.pdf"
              className="flex items-center gap-2 rounded border border-primary/30 bg-primary/10 px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary transition-all hover:bg-primary/20 hover:border-primary/50"
            >
              <span className="material-symbols-outlined text-lg">download</span>
              Get Resume
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
