/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ArrowRight, 
  ExternalLink,
  CheckCircle2
} from 'lucide-react';
import { PageId } from '../types';
import Logo from './Logo';

interface PreFooterProps {
  onPageChange: (page: PageId) => void;
}

export default function PreFooter({ onPageChange }: PreFooterProps) {
  const [emailSub, setEmailSub] = useState('');
  const [isSubbed, setIsSubbed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSub.trim() && emailSub.includes('@')) {
      setIsSubbed(true);
      setEmailSub('');
      setTimeout(() => setIsSubbed(false), 5000);
    }
  };

  return (
    <section
      id="alpine-pre-footer"
      className="bg-[#0D1B2A] text-white border-t border-white/5 relative overflow-hidden pt-16 pb-12 px-4 sm:px-6 lg:px-8"
    >
      {/* Dynamic graphic backgrounds */}
      <div className="absolute inset-0 bg-radial-gradient(at bottom right, rgba(0, 85, 204, 0.1) 0%, transparent 60%) pointer-events-none" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-blue-900/10 rounded-tr-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Column 1: Company Profile Info */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2 cursor-pointer select-none" onClick={() => onPageChange('home')}>
            <Logo color="white" layout="horizontal" iconSize={38} />
          </div>
          <p className="text-xs text-slate-400 leading-relaxed font-sans mt-2">
            Alpine Thermal Solutions is a specialized, ISO-compliant developer of passive thermal packaging materials and salt-hydrated eutectic formulations designed to prevent temperature critical excursions in pharma shipment lanes.
          </p>

          {/* Mini Newsletter Subscribe Component */}
          <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-2">
            <label htmlFor="newsletter-email" className="text-[11px] font-mono tracking-wider uppercase text-slate-400 font-bold">
              Engineering Bulletin Newsletter:
            </label>
            <div className="flex bg-[#16222F] border border-slate-700/60 rounded overflow-hidden p-1 focus-within:border-[#0055CC] transition-colors">
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="pharma@coldchain.com"
                value={emailSub}
                onChange={(e) => setEmailSub(e.target.value)}
                className="bg-transparent text-xs text-white px-2.5 py-1.5 focus:outline-none flex-grow min-w-0"
              />
              <button
                type="submit"
                className="bg-[#0055CC] hover:bg-blue-600 text-white px-3 py-1.5 rounded transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Subscribe"
              >
                {isSubbed ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <ArrowRight className="w-3.5 h-3.5" />}
              </button>
            </div>
            {isSubbed && (
              <p className="text-[10px] text-emerald-400 font-mono">
                Successfully subscribed to Alpine Engineering bulletin.
              </p>
            )}
          </form>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider relative pb-2 border-b border-white/5 self-start">
            Quick Links
            <span className="absolute bottom-[-1px] left-0 w-8 h-[2px] bg-[#FF6B35]" />
          </h3>
          <ul className="flex flex-col gap-2.5 text-xs text-slate-400 font-sans mt-1">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'about', label: 'About Us' },
              { id: 'products', label: 'Our Products Catalogue' },
              { id: 'gallery', label: 'Systems Gallery' },
              { id: 'contact', label: 'Contact Us / Support' }
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => onPageChange(link.id as PageId)}
                  className="hover:text-[#0055CC] transition-colors leading-normal text-left flex items-center gap-1 group cursor-pointer"
                >
                  <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5">
                    →
                  </span>
                  <span>{link.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Information block */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-sans font-bold text-white uppercase tracking-wider relative pb-2 border-b border-white/5 self-start">
            Registered Office
            <span className="absolute bottom-[-1px] left-0 w-8 h-[2px] bg-[#FF6B35]" />
          </h3>
          <div className="flex flex-col gap-3 text-xs text-slate-400 mt-1 font-sans">
            
            {/* Address */}
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-[#FF6B35] shrink-0 mt-0.5" />
              <p className="leading-relaxed font-sans text-[11px] text-slate-300">
                Survey No 29/9, Anumepalli, Hosur, Krishnagiri District - 635126, India.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-[#0055CC] shrink-0" />
              <a
                href="tel:+918746099190"
                className="text-blue-400 font-semibold hover:underline transition-colors"
              >
                +91 87460 99190
              </a>
            </div>

            {/* Email */}
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-[#0055CC] shrink-0" />
              <a
                href="mailto:sales@alpinethermal.in"
                className="text-slate-300 hover:text-white hover:underline transition-colors focus:outline-none"
              >
                sales@alpinethermal.in
              </a>
            </div>

            {/* Link */}
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#0055CC] shrink-0" />
              <a
                href="https://www.alpinethermal.in"
                target="_blank"
                rel="noreferrer"
                className="text-slate-300 hover:text-white flex items-center gap-1 hover:underline transition-colors"
              >
                <span>www.alpinethermal.in</span>
                <ExternalLink className="w-3 h-3 text-slate-500" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
