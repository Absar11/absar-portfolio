'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="py-12 bg-editor-bg border-t border-primary/10 font-mono">
      <div className="max-w-7xl mx-auto px-10 lg:px-20 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="text-slate-500 mb-6 md:mb-0">
          <span className="text-primary mr-2 italic">EOF //</span> 
          {new Date().getFullYear()} Absar Ahmad — End of Connection — [200 OK]
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { name: 'github', url: 'https://github.com/Absar11' },
            { name: 'linkedin', url: 'https://www.linkedin.com/in/absar10/' },
            { name: 'leetcode', url: 'https://leetcode.com/u/Absar_Ahmad/' },
            { name: 'gfg', url: 'https://www.geeksforgeeks.org/profile/siddiquimr10' },
          ].map((link) => (
            <a 
              key={link.name}
              href={link.url} 
              target="_blank" 
              className="group text-slate-500 hover:text-primary transition-all flex items-center space-x-1"
            >
              <span className="text-[10px] opacity-30 group-hover:opacity-100 transition-opacity">0x</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
