"use client";

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  
  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    
    // Apply the theme to the document
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.classList.remove('dark-mode');
    }
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Toggle dark class on document and update body background
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#121212';
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.style.backgroundColor = '';
      document.body.classList.remove('dark-mode');
    }
  };
  
  return (
    <button 
      onClick={toggleTheme}
      className="flex items-center justify-center gap-2 px-3 py-1 rounded-full border border-white/30 hover:bg-white/10 transition-colors"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className="text-xs text-white">
        {theme === 'light' ? (
          <>
            <span className="hidden sm:inline mr-1">Dark</span>
            <span className="inline-block w-4 h-4">🌙</span>
          </>
        ) : (
          <>
            <span className="hidden sm:inline mr-1">Light</span>
            <span className="inline-block w-4 h-4">☀️</span>
          </>
        )}
      </span>
    </button>
  );
}