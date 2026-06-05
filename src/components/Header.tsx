/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';

interface HeaderProps {
  currentPage: PageId;
  onPageChange: (page: PageId) => void;
}

export default function Header({ currentPage, onPageChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' }
  ];

  const handleNavClick = (id: PageId) => {
    onPageChange(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="alpine-global-header"
      className="fixed top-0 left-0 right-0 h-16 md:h-20 bg-[#082b3f]/75 backdrop-blur-md border-white/5 z-50 flex items-center justify-between px-4 sm:px-6 lg:px-8 transition-colors duration-200"
    >
      {/* Brand Logo Container */}
      <div 
        id="header-logo"
        className="flex items-center gap-2 cursor-pointer select-none"
        onClick={() => handleNavClick('home')}
      >
        <Logo color="white" layout="horizontal" iconSize={44} />
      </div>

      {/* Desktop Navigation Links */}
      <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
        {navItems.map((item) => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              className={`relative py-2 text-sm font-medium tracking-wide uppercase cursor-pointer select-none transition-colors duration-200 ${
                isActive ? 'text-white font-semibold' : 'text-slate-400 hover:text-white'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.label}
              {isActive && (
                <motion.div
                  layoutId="activeNavUnderline"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#0055CC] rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* Desktop CTA Action Button */}
      <div className="hidden md:flex items-center gap-4">
        {/* Certification badge */}
        <div className="flex items-center gap-1 px-3 py-1 text-[11px] font-mono font-medium text-blue-300">
          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
          <span>CE CERTIFIED</span>
        </div>
        <motion.button
          id="header-cta-desktop"
          whileHover={{ y: -2, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleNavClick('contact')}
          className="bg-[#00C6D4]/27 text-white hover:bg-[#00A8B5] px-5 py-2.5 rounded text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md shadow-[#00C6D4]/25 hover:shadow-[#00C6D4]/40 transition-shadow duration-200"
        >
          <span>Get In Touch</span>
          <ArrowUpRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Mobile Toggle Button (Menu Hamburger) */}
      <div className="flex items-center gap-3 md:hidden">
        {currentPage !== 'contact' && (
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick('contact')}
            className="bg-[#00C6D4]/27 text-white px-3 py-1.5 rounded text-[11px] font-bold tracking-wider uppercase shadow-md shadow-[#FF6B35]/10"
          >
            Contact
          </motion.button>
        )}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1.5 text-slate-300 hover:text-white focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop cover blur backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 top-16 bg-black z-40"
            />
            
            {/* Sliding navigation wrapper */}
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
              className="fixed top-16 bottom-0 left-0 w-3/4 max-w-xs bg-[#0D1B2A] border-r border-white/5 z-45 p-6 flex flex-col justify-between"
            >
              <div className="flex flex-col gap-5 mt-4">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest border-white/5 pb-2">
                  Navigation
                </span>
                <div className="flex flex-col gap-3">
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`text-left text-lg font-medium py-2.5 transition-colors duration-200 border-white/5 ${
                        currentPage === item.id ? 'text-[#0055CC] font-bold' : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Sidebar Bottom details */}
              <div className="border-t border-white/5 pt-6 flex flex-col gap-4">
                <div className="flex flex-col text-[11px] text-slate-400 font-mono">
                  <span>Hosur works contact:</span>
                  <span className="text-blue-400 font-medium leading-relaxed mt-1">+91 87460 99190</span>
                  <span className="text-slate-500 text-[10px] mt-1">sales@alpinethermal.in</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#102A43] self-start rounded-full px-2.5 py-1 text-[10px] font-mono text-cyan-300">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>CE CERTIFIED</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
