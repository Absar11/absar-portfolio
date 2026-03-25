'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import BentoCard from './BentoCard';
import { API_BASE_URL } from '../config/api';

interface Project {
  id: number;
  title: string;
  description: string;
  projectUrl: string;
  githubUrl?: string;
  technologies: string[];
}

const SNIPPETS = {
  nest: `import { Controller, Get } from '@nestjs/common';\n\n@Controller('api')\nexport class AppController {\n  @Get()\n  init() { return 'connected'; }\n}`,
  react: `import React from 'react';\n\nconst Component = () => {\n  return <div>Hello World</div>;\n};`,
  db: `SELECT * FROM users\nWHERE id = $1\nJOIN posts ON users.id = posts.userId;`,
  default: `function main() {\n  console.log('Building future...');\n  deploy(new Project());\n}`,
};

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/projects`);
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const getSnippetForProject = (tech: string[]) => {
    if (tech.some(t => t.toLowerCase().includes('nest'))) return SNIPPETS.nest;
    if (tech.some(t => t.toLowerCase().includes('react'))) return SNIPPETS.react;
    if (tech.some(t => t.toLowerCase().includes('sql') || t.toLowerCase().includes('db'))) return SNIPPETS.db;
    return SNIPPETS.default;
  };

  return (
    <section id="projects" className="py-20 bg-editor-bg border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-10 lg:px-20">
        <header className="flex justify-between items-end mb-12">
          <div>
            <div className="flex items-center gap-3 text-primary font-mono text-sm mb-4">
              <span>&gt;</span>
              <span className="bg-primary/10 px-2 py-0.5 rounded tracking-tighter uppercase">./active-projects.sh</span>
            </div>
            <h2 className="text-4xl font-bold font-mono tracking-tight text-white">Source_Code_Showcase</h2>
          </div>
          <div className="hidden md:flex gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-primary/20 rounded hover:bg-primary/5 transition-colors text-xs font-mono text-slate-400 uppercase tracking-tighter">
              <span className="material-symbols-outlined text-sm">filter_list</span>
              Filter_Stack
            </button>
          </div>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 glass-card animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4 auto-rows-[200px]">
            {projects.map((project, index) => {
              const spans = [
                'md:col-span-2 md:row-span-2 lg:col-span-4 lg:row-span-2', // Massive
                'md:col-span-2 lg:col-span-2 lg:row-span-2', // Tall
                'md:col-span-2 lg:col-span-2', // Normal
                'md:col-span-2 lg:col-span-4', // Wide
                'md:col-span-4 lg:col-span-6', // Full Wide
              ];
              
              const className = spans[index % spans.length];

              return (
                <BentoCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  tech={project.technologies}
                  github={project.githubUrl}
                  link={project.projectUrl}
                  className={className}
                  codeSnippet={getSnippetForProject(project.technologies)}
                />
              );
            })}
            
            {/* Final Small Component Addon Card */}
            <div className="glass-card flex flex-col items-center justify-center text-center border-dashed border-slate-700 md:col-span-2 lg:col-span-2">
              <span className="material-symbols-outlined text-slate-600 text-3xl mb-2">add_circle</span>
              <h3 className="text-[10px] font-bold font-mono text-slate-500 uppercase tracking-widest">Add_New_Module</h3>
            </div>
          </div>
        )}

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-primary/5">
          {[
            { label: 'Builds', value: '1,284' },
            { label: 'Uptime', value: '99.98%', color: 'text-primary' },
            { label: 'Quality', value: 'A+' },
            { label: 'Lang', value: 'TSX' },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-[0.2em] block mb-1">{stat.label}</span>
              <span className={`text-xl font-bold font-mono ${stat.color || 'text-slate-300'}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
