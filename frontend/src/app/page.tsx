'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const EXPLORER_FILES = [
  { name: 'Home.tsx', icon: 'description', color: 'text-sky-400', sectionId: 'home' },
  { name: 'Experience.js', icon: 'javascript', color: 'text-yellow-500', sectionId: 'about' },
  { name: 'Skills.css', icon: 'css', color: 'text-blue-500', sectionId: 'skills' },
  { name: 'Projects.md', icon: 'description', color: 'text-orange-400', sectionId: 'projects' },
  { name: 'Contact.html', icon: 'html', color: 'text-orange-500', sectionId: 'contact' },
];

export default function Home() {
  const [isExplorerOpen, setIsExplorerOpen] = useState(true);
  const [activeFile, setActiveFile] = useState('Home.tsx');

  const scrollToSection = (id: string, fileName: string) => {
    setActiveFile(fileName);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex h-screen w-full flex-col overflow-hidden bg-background-dark">
      {/* Top Bar / Window Header */}
      <header className="flex h-10 items-center justify-between border-b border-primary/20 bg-sidebar-bg px-4 flex-shrink-0">
        <div className="flex items-center gap-6">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
            <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
          </div>
          <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
            <span className="material-symbols-outlined text-[14px]">folder_open</span>
            <span>portfolio-v2 — main</span>
          </div>
        </div>
        <div className="flex-1 max-w-md flex justify-center mx-4">
          <div className="w-full bg-editor-bg/50 border border-primary/10 rounded px-6 py-1 text-xs text-slate-400 font-mono text-center">
            search components...
          </div>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary">splitscreen</span>
          <span className="material-symbols-outlined text-lg cursor-pointer hover:text-primary transition-transform hover:rotate-90">settings</span>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (Activity Bar) */}
        <aside className="flex w-12 flex-col items-center gap-6 border-r border-primary/10 bg-sidebar-bg py-4 text-slate-500 flex-shrink-0">
          <button
            onClick={() => setIsExplorerOpen(!isExplorerOpen)}
            className={`p-2 transition-colors ${isExplorerOpen ? 'text-primary border-l-2 border-primary' : 'hover:text-slate-300'}`}
          >
            <span className="material-symbols-outlined text-xl">file_copy</span>
          </button>
          <div className="p-2 hover:text-slate-300 cursor-pointer">
            <span className="material-symbols-outlined text-xl">search</span>
          </div>
          <div className="p-2 hover:text-slate-300 cursor-pointer">
            <span className="material-symbols-outlined text-xl">account_tree</span>
          </div>
          <div className="p-2 hover:text-slate-300 cursor-pointer">
            <span className="material-symbols-outlined text-xl">bug_report</span>
          </div>
          <div className="p-2 hover:text-slate-300 cursor-pointer">
            <span className="material-symbols-outlined text-xl">extension</span>
          </div>
          <div className="mt-auto p-2 hover:text-slate-300 cursor-pointer">
            <span className="material-symbols-outlined text-xl">account_circle</span>
          </div>
        </aside>

        {/* Explorer Sidebar */}
        {isExplorerOpen && (
          <aside className="w-64 flex flex-col border-r border-primary/10 bg-sidebar-bg p-4 flex-shrink-0 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Explorer</h3>
              <span className="material-symbols-outlined text-sm cursor-pointer text-slate-500">more_horiz</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold px-1 mb-2">
                <span className="material-symbols-outlined text-[14px]">expand_more</span>
                <span>PORTFOLIO-V2</span>
              </div>

              {EXPLORER_FILES.map((file) => (
                <button
                  key={file.name}
                  onClick={() => scrollToSection(file.sectionId, file.name)}
                  className={`flex items-center gap-2 w-full px-2 py-1.5 rounded text-xs transition-colors text-left
                    ${activeFile === file.name
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-slate-400 hover:bg-slate-200/5 hover:text-slate-300'}
                  `}
                >
                  <span className={`material-symbols-outlined text-base ${file.color}`}>{file.icon}</span>
                  <span>{file.name}</span>
                </button>
              ))}
            </div>
          </aside>
        )}

        {/* Main Workspace (Editor Pane) */}
        <main className="flex-1 flex flex-col bg-editor-bg relative overflow-hidden">
          <Navbar />

          <div className="flex-1 overflow-y-auto scroll-smooth scrollbar-thin">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 px-6 py-2 text-[11px] text-slate-500 border-b border-primary/5 sticky top-0 bg-editor-bg/80 backdrop-blur-sm z-10">
              <span>src</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span>pages</span>
              <span className="material-symbols-outlined text-[10px]">chevron_right</span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-xs text-sky-400">description</span>
                {activeFile}
              </span>
            </div>

            <div id="home"><Hero /></div>
            <div id="about"><Experience /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </div>

          {/* Status Bar */}
          {/* <footer className="h-6 flex items-center justify-between px-3 bg-primary text-white text-[10px] font-mono uppercase tracking-tight flex-shrink-0">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5">
                <span className="material-symbols-outlined text-[14px]">account_tree</span>
                <span>main*</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">sync</span>
                <span>0 errors, 0 warnings</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">Spaces: 4</span>
              <span className="hidden sm:inline">UTF-8</span>
              <span className="hidden sm:inline">TypeScript JSX</span>
              <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5">
                <span className="material-symbols-outlined text-[14px]">rss_feed</span>
                <span>Go Live</span>
              </div>
            </div>
          </footer> */}
        </main>
      </div>
    </div>
  );
}
