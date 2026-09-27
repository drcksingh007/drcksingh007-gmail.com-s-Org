/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface DoctorAvatarProps {
  className?: string;
  size?: number;
  shape?: 'circle' | 'rounded';
}

export function DoctorAvatar({
  className = '',
  size = 128,
  shape = 'circle',
}: DoctorAvatarProps) {
  const roundedClass = shape === 'rounded' ? 'rounded-2xl' : 'rounded-full';

  return (
    <div
      className={`relative overflow-hidden flex items-center justify-center select-none shadow-sm ${roundedClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: '#163c37',
        outline: '1.5px solid color-mix(in oklab, var(--fg, #1a211f) 15%, transparent)',
        boxShadow: '0 2px 8px -1px rgba(15, 60, 54, 0.25), 0 0 0 2px color-mix(in oklab, var(--accent, #1f5c56) 20%, transparent)',
      }}
      role="img"
      aria-label="Dr. Chandan Kumar Singh, MD Medicine, Practicing Gastroenterology"
    >
      <svg
        viewBox="0 0 128 128"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        <defs>
          {/* Rich clinical backdrop */}
          <linearGradient id="docBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e544e" />
            <stop offset="45%" stopColor="#133d38" />
            <stop offset="100%" stopColor="#0b2421" />
          </linearGradient>

          {/* Realistic doctor lab coat */}
          <linearGradient id="docCoat" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="60%" stopColor="#f1f5f9" />
            <stop offset="100%" stopColor="#dbe4e2" />
          </linearGradient>

          {/* Warm South Asian complexion shading */}
          <linearGradient id="docSkin" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e3a780" />
            <stop offset="50%" stopColor="#d39268" />
            <stop offset="100%" stopColor="#b6744c" />
          </linearGradient>
          <linearGradient id="docSkinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#b6744c" />
            <stop offset="100%" stopColor="#8d5431" />
          </linearGradient>

          {/* Stethoscope chrome finish */}
          <linearGradient id="chromeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="50%" stopColor="#94a3b8" />
            <stop offset="100%" stopColor="#64748b" />
          </linearGradient>

          {/* Doctor hair subtle sheen */}
          <linearGradient id="docHair" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2c2420" />
            <stop offset="50%" stopColor="#1c1613" />
            <stop offset="100%" stopColor="#0d0a09" />
          </linearGradient>
        </defs>

        {/* Ambient background */}
        <rect width="128" height="128" fill="url(#docBg)" />

        {/* Subtle luminous halo behind head */}
        <circle cx="64" cy="48" r="42" fill="#5eead4" fillOpacity="0.12" />
        <circle cx="64" cy="48" r="30" fill="#ffffff" fillOpacity="0.08" />

        {/* Physician's Shoulders & Lab Coat Body */}
        <path
          d="M16 128 C16 98 34 88 64 88 C94 88 112 98 112 128 Z"
          fill="url(#docCoat)"
        />

        {/* Formal Inner Teal/Navy Shirt Collar */}
        <path d="M52 86 L64 102 L76 86 Z" fill="#134e48" />
        {/* Navy/Gold Necktie */}
        <path d="M62 90 L66 90 L67 114 L64 120 L61 114 Z" fill="#0f2b28" />
        <line x1="64" y1="92" x2="64" y2="128" stroke="#14b8a6" strokeWidth="1" strokeDasharray="1.5 2.5" />

        {/* White Lab Coat Lapels with shadow folds */}
        <path
          d="M34 89 L52 115 L52 128 L18 128 C18 108 26 97 34 89 Z"
          fill="#ffffff"
        />
        <path
          d="M94 89 L76 115 L76 128 L110 128 C110 108 102 97 94 89 Z"
          fill="#ffffff"
        />
        {/* Lapel seam lines */}
        <path d="M34 89 L52 115" stroke="#cbd5e1" strokeWidth="1" />
        <path d="M94 89 L76 115" stroke="#cbd5e1" strokeWidth="1" />

        {/* Neck with anatomical shadow under chin */}
        <path d="M51 72 L51 90 C51 93 56 95 64 95 C72 95 77 93 77 90 L77 72 Z" fill="url(#docSkin)" />
        <path d="M54 74 C58 80 70 80 74 74 L74 78 C70 84 58 84 54 78 Z" fill="url(#docSkinShadow)" opacity="0.35" />

        {/* Head & Face Contour */}
        <ellipse cx="64" cy="54" rx="21" ry="25" fill="url(#docSkin)" />

        {/* Ears with inner detail */}
        <path d="M43 51 C41 51 40 55 41 60 C42 63 44 64 45 61 Z" fill="url(#docSkin)" />
        <path d="M85 51 C87 51 88 55 87 60 C86 63 84 64 83 61 Z" fill="url(#docSkin)" />

        {/* Neat Professional Doctor Hairstyle */}
        <path
          d="M43 52 C41 36 50 31 64 31 C78 31 87 36 85 52 C84 43 78 38 72 36 C66 34 54 34 49 37 C45 40 43 45 43 52 Z"
          fill="url(#docHair)"
        />
        <path
          d="M44 44 C45 34 53 30 64 30 C75 30 83 34 84 44 C81 37 73 32 64 32 C54 32 47 37 44 44 Z"
          fill="#0c0908"
        />

        {/* Realistic Eyebrows with soft arch */}
        <path d="M50 48 Q55 45.5 60 48" stroke="#1c1613" strokeWidth="2" strokeLinecap="round" />
        <path d="M68 48 Q73 45.5 78 48" stroke="#1c1613" strokeWidth="2" strokeLinecap="round" />

        {/* Expressive Warm Eyes */}
        <ellipse cx="55" cy="53" rx="3.2" ry="2.2" fill="#ffffff" />
        <circle cx="55.2" cy="53" r="1.8" fill="#241a15" />
        <circle cx="55.8" cy="52.4" r="0.6" fill="#ffffff" />

        <ellipse cx="73" cy="53" rx="3.2" ry="2.2" fill="#ffffff" />
        <circle cx="72.8" cy="53" r="1.8" fill="#241a15" />
        <circle cx="73.4" cy="52.4" r="0.6" fill="#ffffff" />

        {/* Well-defined Nose */}
        <path d="M64 51 L63.5 59.5 L67 60.5" stroke="#9a5a35" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />

        {/* Friendly Bedside Smile */}
        <path d="M57 65.5 Q64 70 71 65.5" stroke="#874326" strokeWidth="1.8" strokeLinecap="round" />
        {/* Subtle lower lip curve */}
        <path d="M59 67.5 Q64 70.5 69 67.5" stroke="#a75b3b" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

        {/* Doctor Stethoscope around neck */}
        <path
          d="M46 76 C43 88 45 106 50 115"
          stroke="#334155"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        <path
          d="M82 76 C85 88 83 106 78 115"
          stroke="#334155"
          strokeWidth="3.2"
          strokeLinecap="round"
        />
        {/* Chrome Binocular tubes near ears */}
        <path d="M47 77 L44 68" stroke="url(#chromeGrad)" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M81 77 L84 68" stroke="url(#chromeGrad)" strokeWidth="1.8" strokeLinecap="round" />

        {/* Chrome Chest Piece / Stethoscope Bell */}
        <circle cx="50" cy="116" r="6" fill="url(#chromeGrad)" stroke="#1e293b" strokeWidth="1.2" />
        <circle cx="50" cy="116" r="3.2" fill="#334155" />
        <circle cx="51.2" cy="114.8" r="1" fill="#ffffff" opacity="0.8" />

        {/* Doctor Identity Badge on White Coat */}
        <g transform="translate(76, 102)">
          <rect width="18" height="11" rx="2" fill="#ffffff" stroke="#94a3b8" strokeWidth="0.8" />
          <rect x="2" y="2" width="4" height="4" rx="1" fill="#0d9488" />
          <line x1="8" y1="3.5" x2="15" y2="3.5" stroke="#1e293b" strokeWidth="0.8" />
          <line x1="8" y1="6" x2="14" y2="6" stroke="#64748b" strokeWidth="0.6" />
          <line x1="2" y1="8" x2="16" y2="8" stroke="#0d9488" strokeWidth="0.8" />
        </g>
      </svg>
    </div>
  );
}
