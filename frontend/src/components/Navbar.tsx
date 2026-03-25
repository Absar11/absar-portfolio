'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'Home.tsx', href: '#home', icon: 'javascript', iconColor: 'text-yellow-500', id: 'home' },
  { name: 'Projects.md', href: '#projects', icon: 'description', iconColor: 'text-orange-400', id: 'projects' },
  { name: 'Contact.sh', href: '#contact', icon: 'terminal', iconColor: 'text-blue-400', id: 'contact' },
  { name: 'Experience.log', href: '#about', icon: 'history', iconColor: 'text-green-400', id: 'about' },
];

const Navbar = () => {
  const [active, setActive] = useState('home');

  return (
    <nav className="flex h-9 border-b border-primary/10 bg-sidebar-bg overflow-x-auto scrollbar-hide flex-shrink-0">
      {navItems.map((item) => (
        <a
          key={item.id}
          href={item.href}
          onClick={() => setActive(item.id)}
          className={`flex items-center gap-2 px-4 border-r border-primary/5 text-xs font-mono transition-colors relative min-w-max h-full
            ${active === item.id 
              ? 'bg-editor-bg text-slate-100 border-t-2 border-t-primary' 
              : 'text-slate-500 hover:bg-editor-bg/50 hover:text-slate-300'}
          `}
        >
          <span className={`material-symbols-outlined text-sm ${item.iconColor}`}>{item.icon}</span>
          <span>{item.name}</span>
          {active === item.id && (
            <span className="material-symbols-outlined text-[10px] ml-2 opacity-50 hover:opacity-100 cursor-pointer">close</span>
          )}
        </a>
      ))}
    </nav>
  );
};

export default Navbar;
