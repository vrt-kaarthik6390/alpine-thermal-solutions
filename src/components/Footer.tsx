/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: '#' },
    { name: 'Twitter', icon: <Twitter className="w-4 h-4" />, href: '#' },
    { name: 'Facebook', icon: <Facebook className="w-4 h-4" />, href: '#' },
    { name: 'YouTube', icon: <Youtube className="w-4 h-4" />, href: '#' }
  ];

  return (
    <footer
      id="alpine-global-footer"
      className="bg-[#0A0F19] text-slate-500 text-center py-6 border-t border-[#0055CC]/15"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copy text */}
        <p className="text-xs text-slate-500 font-sans tracking-wide">
          &copy; {currentYear !== 2026 ? "2025 - " + currentYear : "2025 - 2026"} Alpine Thermal Solutions. All Rights Reserved. Regd. Works: Tamil Nadu, India.
        </p>

        {/* Social interactions */}
        <div className="flex items-center gap-5">
          {socials.map((platform) => (
            <motion.a
              key={platform.name}
              href={platform.href}
              whileHover={{ scale: 1.15, color: '#0055CC' }}
              whileTap={{ scale: 0.95 }}
              title={`Alpine Thermal Solutions on ${platform.name}`}
              className="text-slate-500 hover:text-white transition-colors duration-150 cursor-pointer p-1"
            >
              {platform.icon}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
}
