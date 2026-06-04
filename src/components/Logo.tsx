/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  /**
   * 'vertical' - Stacked layout (mountain icon on top, "ALPINE" brand underneath).
   * 'horizontal' - Inline layout (mountain icon left, brand text right).
   * 'icon' - Just the mountain shape.
   */
  layout?: 'vertical' | 'horizontal' | 'icon';
  /**
   * Primary fill color for the logo. Supports 'white', 'brand' (original blue), or 'currentColor'.
   */
  color?: 'white' | 'brand' | 'currentColor';
  /**
   * Height of the mountain icon in pixels (default depends on layout)
   */
  iconSize?: number;
  className?: string;
}

export default function Logo({
  layout = 'vertical',
  color = 'brand',
  iconSize,
  className = ''
}: LogoProps) {
  // Brand deep navy blue color matching the logo image
  const fillHex = color === 'brand' ? '#003399' : color === 'white' ? '#FFFFFF' : 'currentColor';

  // Render just the mountain vector paths
  // These represent the exact chiselled mountain silhouette of the Alpine logo:
  // three peaks with dramatic shadow facets and deep clefts.
  const renderMountainIcon = (size: number) => (
    <svg
      viewBox="0 0 1000 450"
      width={size}
      height={size * 0.45}
      className="overflow-visible select-none"
      aria-hidden="true"
    >
      {/* Background/Base Mountain Shadow Silhouette */}
      <g fill={fillHex}>
        
        {/* FAR LEFT PEAK (Small silhouette) */}
        <polygon points="150,335 240,270 290,335" opacity="0.9" />
        <polygon points="175,320 220,285 240,335" />

        {/* MID LEFT PEAK (Secondary peak behind) */}
        <polygon points="215,315 315,240 375,315" opacity="0.95" />

        {/* SECOND FORWARD LEFT PEAK */}
        <polygon points="235,325 340,245 420,325" />

        {/* MAIN GIANT CENTRAL PEAK */}
        {/* Left deep slope and shadow */}
        <path d="M 330,335 L 495,155 L 560,335 Z" />
        
        {/* Right slope and shadow block */}
        <path d="M 495,155 L 615,285 L 660,335 L 495,335 Z" />

        {/* MID RIGHT PEAK */}
        <polygon points="560,325 645,235 735,325" />

        {/* FAR RIGHT PEAK */}
        <polygon points="680,335 738,285 795,335" />
      </g>

      {/* WHITE SNOW MAKS / CHISEL HIGHLIGHTS (To carve out the exact detail in the logo image) */}
      <g fill={color === 'brand' ? '#FFFFFF' : '#0D1B2A'}>
        {/* Center Peak White Snow Cap & Valley Split Cleft */}
        <polygon points="495,152 485,180 500,215 502,175" />
        <polygon points="495,152 520,210 490,265 470,230 490,195" />
        
        {/* Left inner shadow slits */}
        <polygon points="495,152 440,250 490,240" />
        <polygon points="425,250 390,300 445,290" />
        
        {/* Right facet slopes */}
        <polygon points="495,152 540,245 528,260 495,225" />
        <polygon points="538,212 585,275 565,285 530,255" />
        <polygon points="580,265 620,310 600,315 568,295" />

        {/* Left Mountain Details */}
        <polygon points="340,245 310,290 345,280" />
        <polygon points="315,240 285,285 315,280" />
        <polygon points="240,270 215,310 235,305" />

        {/* Right Mountain Details */}
        <polygon points="645,235 615,285 645,280" />
        <polygon points="738,285 715,320 735,315" />
      </g>

      {/* ADDITIONAL CONNECTING RIDGES AND CHISELS */}
      <g fill={fillHex}>
        {/* Extra crisp mountain bottom line anchors */}
        <path d="M 150,333 L 795,333 L 795,337 L 150,337 Z" opacity="0.3" strokeWidth="1" />
      </g>
    </svg>
  );

  if (layout === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        {renderMountainIcon(iconSize || 64)}
      </div>
    );
  }

  if (layout === 'horizontal') {
    return (
      <div className={`flex items-center gap-3 select-none ${className}`}>
        <div className="shrink-0">
          {renderMountainIcon(iconSize || 46)}
        </div>
        <div className="flex flex-col text-left">
          <span
            className="font-serif-header font-extrabold text-lg md:text-xl leading-none uppercase tracking-[0.22em]"
            style={{ color: fillHex }}
          >
            Alpine
          </span>
          <span
            className="font-sans text-[8.5px] md:text-[9.5px] font-bold uppercase tracking-[0.43em] leading-none mt-1"
            style={{ color: color === 'brand' ? '#4A5568' : fillHex, opacity: color === 'brand' ? 0.95 : 0.8 }}
          >
            Thermal Solutions
          </span>
        </div>
      </div>
    );
  }

  // Vertical layout default (matching official B2B letterhead / standalone branding)
  return (
    <div className={`flex flex-col items-center text-center select-none ${className}`}>
      {renderMountainIcon(iconSize || 180)}
      <div className="flex flex-col items-center mt-3">
        {/* "ALPINE" serif wordmark */}
        <h2
          className="font-serif-header font-black text-3xl sm:text-4xl md:text-5xl uppercase tracking-[0.25em] leading-none"
          style={{ color: fillHex, fontFamily: '"Poppins", "Inter", "Georgia", serif' }}
        >
          Alpine
        </h2>
        
        {/* "THERMAL SOLUTIONS" widely spaced wide sans-serif brand-mark */}
        <span
          className="font-sans text-[10px] sm:text-[11px] md:text-[12px] font-extrabold uppercase tracking-[0.48em] leading-none mt-3"
          style={{ color: color === 'brand' ? '#2B6CB0' : fillHex, opacity: 0.95 }}
        >
          Thermal Solutions
        </span>
      </div>
    </div>
  );
}
