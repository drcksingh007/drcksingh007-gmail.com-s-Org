/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DoctorAvatar } from './DoctorAvatar.tsx';

// Visual illustrations and decorated medical scenes matching the modern healthcare website layout

export function HospitalHeroVisual() {
  return (
    <div className="relative w-full aspect-4/3 sm:aspect-16/11 rounded-3xl overflow-hidden shadow-2xl border border-[var(--border)] bg-gradient-to-br from-teal-950 via-slate-900 to-slate-950 flex items-center justify-center p-4 sm:p-6 text-white select-none group">
      {/* Background ambient lighting */}
      <div className="absolute -top-12 -right-12 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Vector Medical Scene */}
      <svg
        viewBox="0 0 600 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
      >
        <defs>
          <linearGradient id="heroWallGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#132e2a" />
            <stop offset="100%" stopColor="#0a1a18" />
          </linearGradient>
          <linearGradient id="heroFloorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1e3e38" />
            <stop offset="100%" stopColor="#0e201d" />
          </linearGradient>
          <linearGradient id="sunlitWindow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#99f6e4" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0d9488" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="endoScreenGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#1e293b" />
          </linearGradient>
        </defs>

        {/* Room Wall & Floor */}
        <rect width="600" height="320" fill="url(#heroWallGrad)" />
        <rect y="320" width="600" height="120" fill="url(#heroFloorGrad)" />
        <line x1="0" y1="320" x2="600" y2="320" stroke="#254d46" strokeWidth="2.5" />

        {/* Large Sunlit Hospital Windows with Nepalgunj City Silhouette */}
        <rect x="35" y="25" width="165" height="245" rx="8" fill="url(#sunlitWindow)" stroke="#2d6a60" strokeWidth="2" />
        <line x1="117" y1="25" x2="117" y2="270" stroke="#2d6a60" strokeWidth="2" />
        <line x1="35" y1="145" x2="200" y2="145" stroke="#2d6a60" strokeWidth="2" />
        {/* Soft morning sunlight beam */}
        <polygon points="35,30 200,30 360,320 120,320" fill="#2dd4bf" fillOpacity="0.04" />

        {/* High-Definition Endoscopy & Medical Tower Monitor */}
        <rect x="220" y="35" width="130" height="85" rx="6" fill="url(#endoScreenGrad)" stroke="#475569" strokeWidth="2.5" />
        {/* Screen Display Content: Stomach & Colon visualization */}
        <circle cx="285" cy="77" r="28" fill="#881337" fillOpacity="0.8" />
        <circle cx="285" cy="77" r="22" fill="#be123c" />
        <circle cx="285" cy="77" r="14" fill="#fb7185" fillOpacity="0.6" />
        <circle cx="285" cy="77" r="6" fill="#ffe4e6" />
        <path d="M260 95 Q285 60 310 95" stroke="#fda4af" strokeWidth="1.5" fill="none" />
        <text x="228" y="50" fill="#2dd4bf" fontSize="7" fontWeight="bold" fontFamily="monospace">
          HD ENDOSCOPY · LIVE
        </text>
        <text x="228" y="112" fill="#94a3b8" fontSize="6.5" fontFamily="monospace">
          Sanjeevani GI Lab
        </text>
        {/* Monitor Stand */}
        <rect x="281" y="120" width="8" height="35" fill="#64748b" />
        <rect x="265" y="155" width="40" height="6" rx="2" fill="#475569" />

        {/* Doctor's Framed MD Degree & Certification on Wall */}
        <rect x="490" y="30" width="75" height="52" rx="3" fill="#f8fafc" stroke="#b45309" strokeWidth="2.5" />
        <rect x="494" y="34" width="67" height="44" fill="#fffbeb" stroke="#d97706" strokeWidth="0.8" />
        <circle cx="527" cy="48" r="6" fill="#b45309" />
        <line x1="504" y1="60" x2="550" y2="60" stroke="#78350f" strokeWidth="1.5" />
        <line x1="510" y1="66" x2="544" y2="66" stroke="#92400e" strokeWidth="1" />
        <line x1="514" y1="71" x2="540" y2="71" stroke="#b45309" strokeWidth="0.8" />

        {/* Examination Couch & Bed with Clean Linen */}
        <rect x="230" y="240" width="330" height="48" rx="8" fill="#f8fafc" />
        <rect x="230" y="222" width="110" height="26" rx="6" fill="#e2e8f0" />
        <rect x="250" y="208" width="75" height="18" rx="5" fill="#cbd5e1" />
        {/* Stainless Steel Legs */}
        <rect x="245" y="288" width="10" height="75" fill="#94a3b8" />
        <rect x="535" y="288" width="10" height="75" fill="#94a3b8" />
        <circle cx="250" cy="363" r="7" fill="#475569" />
        <circle cx="540" cy="363" r="7" fill="#475569" />

        {/* Patient Resting Comfortably during Consultation */}
        <ellipse cx="380" cy="180" rx="18" ry="22" fill="#fed7aa" />
        <path d="M362 172 C362 148 376 142 396 148 C404 158 398 175 398 175 Z" fill="#451a03" />
        <path d="M352 202 C352 188 410 188 410 202 L418 280 L342 280 Z" fill="#ec4899" opacity="0.9" />

        {/* Sanjeevani Medical Staff / Nurse Specialist */}
        <ellipse cx="480" cy="140" rx="16" ry="20" fill="#fed7aa" />
        <path d="M466 132 C466 112 494 112 494 132 C494 140 466 140 466 132 Z" fill="#1e1b4b" />
        <path d="M452 160 C452 148 508 148 508 160 L520 340 L440 340 Z" fill="#ffffff" />
        <path d="M472 160 L480 188 L488 160 Z" fill="#0d9488" />
        {/* Stethoscope */}
        <path d="M468 174 Q480 200 492 174" stroke="#334155" strokeWidth="2.5" fill="none" />
        <circle cx="480" cy="204" r="3.5" fill="#64748b" />

        {/* Dr. Chandan Kumar Singh (MD Medicine, Practicing Gastroenterology at Bedside) */}
        <ellipse cx="178" cy="130" rx="20" ry="24" fill="#fed7aa" />
        {/* Doctor Hair */}
        <path d="M158 122 C158 98 178 92 198 98 C202 115 194 128 194 128 Z" fill="#18181b" />
        {/* Lab Coat */}
        <path d="M144 154 C144 142 212 142 212 154 L226 350 L130 350 Z" fill="#f8fafc" />
        {/* Inner Teal Shirt & Tie */}
        <path d="M170 154 L178 180 L186 154 Z" fill="#0f766e" />
        <line x1="178" y1="160" x2="178" y2="210" stroke="#042f2e" strokeWidth="2.5" />
        {/* Stethoscope around Dr. Singh's neck */}
        <path d="M164 168 Q178 202 192 168" stroke="#0f172a" strokeWidth="3" fill="none" />
        <circle cx="178" cy="205" r="4.5" fill="#cbd5e1" stroke="#334155" strokeWidth="1" />
        {/* Clipboard & Medical Report in Hand */}
        <rect x="190" y="188" width="32" height="46" rx="4" fill="#dbeafe" stroke="#3b82f6" strokeWidth="1.5" />
        <line x1="196" y1="202" x2="216" y2="202" stroke="#2563eb" strokeWidth="1.8" />
        <line x1="196" y1="211" x2="216" y2="211" stroke="#2563eb" strokeWidth="1.8" />
        <line x1="196" y1="220" x2="210" y2="220" stroke="#2563eb" strokeWidth="1.8" />

        {/* Medical Cross Wall Sign */}
        <rect x="520" y="105" width="36" height="36" rx="8" fill="#14b8a6" fillOpacity="0.15" stroke="#2dd4bf" strokeWidth="1.5" />
        <path d="M538 114 L538 132 M529 123 L547 123" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      {/* Floating Trust Card (Top-Right) */}
      <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-white/20 rounded-2xl py-2 px-3.5 shadow-xl flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-[11px] font-semibold tracking-wide text-white">
          Sanjeevani OPD Open · 9 AM – 4 PM
        </span>
      </div>

      {/* Floating Doctor Profile Pill (Bottom-Left) featuring Dr. Chandan Singh's Picture */}
      <div className="absolute bottom-4 left-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border border-black/10 dark:border-white/15 rounded-2xl p-3 shadow-2xl flex items-center gap-3 text-slate-900 dark:text-white max-w-xs">
        <DoctorAvatar size={46} className="shrink-0" />
        <div>
          <p className="text-xs font-bold leading-tight text-slate-900 dark:text-white">
            Dr. Chandan Singh
          </p>
          <p className="text-[11px] text-teal-700 dark:text-teal-300 font-medium">
            MD Medicine · Practicing Gastroenterology
          </p>
          <div className="flex items-center gap-1 text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">
            <span className="text-amber-500">★★★★★</span>
            <span className="font-semibold text-slate-700 dark:text-slate-200">4.9</span>
            <span>(Sanjeevani Hospital)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HospitalBuildingVisual() {
  return (
    <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden shadow-xl border border-[var(--border)] bg-gradient-to-b from-sky-100 to-slate-200 dark:from-slate-900 dark:to-teal-950 flex items-center justify-center select-none group">
      <svg
        viewBox="0 0 500 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
      >
        <defs>
          <linearGradient id="skyGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#bae6fd" />
            <stop offset="100%" stopColor="#e0f2fe" />
          </linearGradient>
          <linearGradient id="buildingGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#e2e8f0" />
          </linearGradient>
          <linearGradient id="glassWall" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0284c7" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        {/* Bright Daylight Sky */}
        <rect width="500" height="280" fill="url(#skyGrad)" />
        {/* Soft clouds */}
        <ellipse cx="120" cy="50" rx="45" ry="16" fill="#ffffff" fillOpacity="0.6" />
        <ellipse cx="150" cy="45" rx="35" ry="18" fill="#ffffff" fillOpacity="0.7" />
        <ellipse cx="380" cy="65" rx="50" ry="18" fill="#ffffff" fillOpacity="0.6" />

        {/* Paved Ground & Clean Driveway */}
        <rect y="280" width="500" height="100" fill="#475569" />
        <rect y="295" width="500" height="85" fill="#334155" />
        <line x1="20" y1="340" x2="90" y2="340" stroke="#f1f5f9" strokeWidth="4" strokeDasharray="20 15" />
        <line x1="130" y1="340" x2="480" y2="340" stroke="#f1f5f9" strokeWidth="4" strokeDasharray="20 15" />

        {/* Sanjeevani Hospital Main Modern Multi-Storey Facade */}
        <rect x="70" y="50" width="360" height="235" rx="8" fill="url(#buildingGrad)" stroke="#cbd5e1" strokeWidth="2" />

        {/* Hospital Glass Curtain Center Wing */}
        <rect x="150" y="60" width="200" height="180" rx="4" fill="url(#glassWall)" />
        <line x1="150" y1="100" x2="350" y2="100" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="150" y1="140" x2="350" y2="140" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="150" y1="180" x2="350" y2="180" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="200" y1="60" x2="200" y2="240" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="250" y1="60" x2="250" y2="240" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />
        <line x1="300" y1="60" x2="300" y2="240" stroke="#ffffff" strokeWidth="1.5" strokeOpacity="0.4" />

        {/* Hospital Signboard */}
        <rect x="145" y="70" width="210" height="32" rx="6" fill="#0f766e" />
        <text x="250" y="90" textAnchor="middle" fill="#ffffff" fontSize="11" fontWeight="bold" fontFamily="sans-serif">
          SANJEEVANI MEDICAL COLLEGE
        </text>

        {/* Red Emergency Signage */}
        <rect x="85" y="210" width="60" height="24" rx="4" fill="#dc2626" />
        <text x="115" y="226" textAnchor="middle" fill="#ffffff" fontSize="10" fontWeight="bold" fontFamily="sans-serif">
          EMERGENCY
        </text>

        {/* Main Sliding Glass Doors */}
        <rect x="220" y="240" width="60" height="45" rx="4" fill="#0284c7" fillOpacity="0.4" stroke="#0369a1" strokeWidth="2" />
        <line x1="250" y1="240" x2="250" y2="285" stroke="#ffffff" strokeWidth="2" />

        {/* 24*7 Critical Care Ambulance Parked in front */}
        <rect x="30" y="255" width="105" height="45" rx="8" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
        <path d="M100 265 L130 275 L130 300 L100 300 Z" fill="#ffffff" />
        <rect x="30" y="278" width="100" height="8" fill="#ef4444" />
        <rect x="52" y="262" width="14" height="14" rx="2" fill="#ef4444" />
        <path d="M59 265 L59 273 M55 269 L63 269" stroke="#ffffff" strokeWidth="2" />
        <circle cx="50" cy="302" r="10" fill="#1e293b" />
        <circle cx="50" cy="302" r="4" fill="#94a3b8" />
        <circle cx="115" cy="302" r="10" fill="#1e293b" />
        <circle cx="115" cy="302" r="4" fill="#94a3b8" />
        <rect x="65" y="250" width="12" height="6" rx="2" fill="#ef4444" />
        <line x1="71" y1="246" x2="71" y2="250" stroke="#f87171" strokeWidth="2" />

        {/* Landscaped Greenery */}
        <circle cx="430" cy="270" r="28" fill="#15803d" />
        <circle cx="455" cy="265" r="22" fill="#16a34a" />
        <rect x="428" y="285" width="6" height="20" fill="#78350f" />
        <rect x="453" y="280" width="5" height="25" fill="#78350f" />
      </svg>

      {/* Floating Location Badge */}
      <div className="absolute bottom-3 left-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl px-3 py-1.5 shadow-md">
        <p className="text-[11px] font-bold text-slate-800 dark:text-slate-100">
          Sanjeevani College of Medical Sciences
        </p>
        <p className="text-[10px] text-teal-700 dark:text-teal-400 font-medium">
          B.P. Chowk, Nepalgunj-12, Banke, Nepal
        </p>
      </div>
    </div>
  );
}

// Facility Visual Pictures matching the modern healthcare website layout
export function FacilityThumbnail({
  type,
  isNepali = false,
}: {
  type: 'icu' | 'vip' | 'ot' | 'lab' | 'ambulance' | 'fibroscan' | 'ubt';
  isNepali?: boolean;
}) {
  const configs = {
    icu: {
      titleEn: 'ICU Facilities',
      titleNp: 'सघन उपचार कक्ष (ICU)',
      subtitleEn: 'Intensive Care Unit with Ventilators',
      subtitleNp: 'आधुनिक भेन्टिलेटर र २४ घण्टे निगरानी',
      bg: 'from-blue-950 via-slate-900 to-blue-900',
      badge: 'ICU',
      icon: '🏥',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* ICU Room Wall */}
          <rect width="200" height="130" fill="#0f172a" fillOpacity="0.4" />
          {/* Ventilator Monitor Screen */}
          <rect x="25" y="20" width="75" height="55" rx="6" fill="#0284c7" />
          {/* ECG rhythm trace */}
          <polyline
            points="30,50 45,50 50,35 56,65 62,45 68,50 95,50"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <text x="32" y="32" fill="#bae6fd" fontSize="8" fontWeight="bold">HR 76</text>
          <text x="65" y="32" fill="#4ade80" fontSize="8" fontWeight="bold">SpO2 99%</text>
          {/* Syringe Infusion Pumps */}
          <rect x="115" y="25" width="55" height="70" rx="4" fill="#334155" />
          <line x1="122" y1="38" x2="162" y2="38" stroke="#22c55e" strokeWidth="2.5" />
          <line x1="122" y1="50" x2="152" y2="50" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="122" y1="62" x2="158" y2="62" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="126" cy="78" r="4" fill="#ef4444" />
          <circle cx="138" cy="78" r="4" fill="#22c55e" />
          <circle cx="150" cy="78" r="4" fill="#38bdf8" />
        </svg>
      ),
    },
    vip: {
      titleEn: 'IPD Wards & Cabins',
      titleNp: 'भर्ना सेवा (IPD Cabins)',
      subtitleEn: 'Deluxe AC Rooms & General Wards',
      subtitleNp: 'शान्त र सफा क्याबिन तथा वार्ड',
      bg: 'from-amber-950 via-slate-900 to-amber-900',
      badge: 'IPD',
      icon: '🛌',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Hospital Bed */}
          <rect x="20" y="60" width="160" height="38" rx="6" fill="#f8fafc" />
          {/* Pillow */}
          <rect x="25" y="42" width="50" height="24" rx="5" fill="#cbd5e1" />
          <rect x="35" y="40" width="30" height="8" rx="2" fill="#94a3b8" />
          {/* Bed Rail */}
          <line x1="80" y1="52" x2="170" y2="52" stroke="#94a3b8" strokeWidth="2" />
          <line x1="95" y1="52" x2="95" y2="60" stroke="#94a3b8" strokeWidth="2" />
          <line x1="125" y1="52" x2="125" y2="60" stroke="#94a3b8" strokeWidth="2" />
          <line x1="155" y1="52" x2="155" y2="60" stroke="#94a3b8" strokeWidth="2" />
          {/* Bedside table with lamp */}
          <rect x="145" y="30" width="30" height="38" rx="3" fill="#92400e" />
          <circle cx="160" cy="20" r="9" fill="#fbbf24" opacity="0.7" />
          {/* IV Stand Pole */}
          <line x1="15" y1="15" x2="15" y2="105" stroke="#cbd5e1" strokeWidth="2" />
          <path d="M10 20 C15 15 15 15 20 20" stroke="#cbd5e1" strokeWidth="2" fill="none" />
          <rect x="18" y="22" width="8" height="14" rx="2" fill="#67e8f9" opacity="0.8" />
        </svg>
      ),
    },
    ot: {
      titleEn: 'Endoscopy & Colonoscopy',
      titleNp: 'इन्डोस्कोपी तथा कोलोनोस्कोपी',
      subtitleEn: 'High-Definition Video Endoscopy Suite',
      subtitleNp: 'आधुनिक भिडियो क्यामरा जाँच सुइट',
      bg: 'from-teal-950 via-slate-900 to-teal-900',
      badge: 'Endo & Scope',
      icon: '🩺',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Olympus Endoscopy Video Monitor */}
          <rect x="55" y="15" width="90" height="60" rx="5" fill="#042f2e" stroke="#0d9488" strokeWidth="2" />
          {/* GI lumen circle */}
          <circle cx="100" cy="45" r="20" fill="#9f1239" />
          <circle cx="100" cy="45" r="13" fill="#e11d48" />
          <circle cx="100" cy="45" r="6" fill="#ffe4e6" />
          {/* Scope Tower buttons */}
          <rect x="80" y="80" width="40" height="25" rx="3" fill="#1e293b" />
          <circle cx="90" cy="92" r="3" fill="#14b8a6" />
          <circle cx="100" cy="92" r="3" fill="#38bdf8" />
          <circle cx="110" cy="92" r="3" fill="#f59e0b" />
          {/* Flexible Endoscope tube */}
          <path d="M120 90 Q160 100 175 65" stroke="#0d9488" strokeWidth="3" fill="none" strokeLinecap="round" />
        </svg>
      ),
    },
    lab: {
      titleEn: 'Advanced Laboratory',
      titleNp: 'अत्याधुनिक ल्याब सेवा',
      subtitleEn: 'Automated LFT, Serology & Hematology',
      subtitleNp: 'स्वचालित रगत, कलेजो र भाइरस परीक्षण',
      bg: 'from-indigo-950 via-slate-900 to-indigo-900',
      badge: 'Lab',
      icon: '🔬',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Laboratory Analyzer */}
          <rect x="25" y="45" width="60" height="50" rx="5" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <rect x="35" y="55" width="40" height="15" rx="2" fill="#3b82f6" />
          {/* Test tube rack */}
          <rect x="100" y="65" width="75" height="30" rx="3" fill="#334155" />
          {/* Color-coded vacutainer tubes */}
          <rect x="106" y="45" width="8" height="28" rx="2" fill="#ef4444" />
          <rect x="118" y="45" width="8" height="28" rx="2" fill="#a855f7" />
          <rect x="130" y="45" width="8" height="28" rx="2" fill="#3b82f6" />
          <rect x="142" y="45" width="8" height="28" rx="2" fill="#22c55e" />
          <rect x="154" y="45" width="8" height="28" rx="2" fill="#eab308" />
        </svg>
      ),
    },
    ambulance: {
      titleEn: '24*7 Emergency & Ambulance',
      titleNp: '२४/७ आकस्मिक तथा एम्बुलेन्स',
      subtitleEn: 'Resuscitation & Trauma Dispatch',
      subtitleNp: 'तत्काल आपतकालीन सेवा: ०८१-५२६४५८',
      bg: 'from-red-950 via-slate-900 to-red-900',
      badge: '24*7',
      icon: '🚑',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Ambulance Body */}
          <rect x="25" y="40" width="145" height="52" rx="8" fill="#ffffff" />
          <path d="M125 40 L160 55 L160 85 L125 85 Z" fill="#ffffff" />
          <rect x="25" y="62" width="140" height="10" fill="#dc2626" />
          {/* Emergency Cross */}
          <rect x="65" y="47" width="16" height="16" rx="2" fill="#dc2626" />
          <path d="M73 49 L73 61 M67 55 L79 55" stroke="#ffffff" strokeWidth="2.5" />
          {/* Flashing Light */}
          <rect x="85" y="32" width="18" height="8" rx="2" fill="#ef4444" />
          <line x1="94" y1="28" x2="94" y2="32" stroke="#f87171" strokeWidth="2" />
          {/* Wheels */}
          <circle cx="60" cy="94" r="14" fill="#0f172a" />
          <circle cx="60" cy="94" r="5" fill="#94a3b8" />
          <circle cx="135" cy="94" r="14" fill="#0f172a" />
          <circle cx="135" cy="94" r="5" fill="#94a3b8" />
        </svg>
      ),
    },
    fibroscan: {
      titleEn: 'FibroScan & USG Facility',
      titleNp: 'फाइब्रोस्क्यान र युएसजी सेवा',
      subtitleEn: 'Liver Elastography & High-Res Ultrasound',
      subtitleNp: 'कलेजोको बोसो र कडापनको सही ग्रेडिङ',
      bg: 'from-emerald-950 via-slate-900 to-teal-900',
      badge: 'FibroScan',
      icon: '🫀',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* FibroScan Screen */}
          <rect x="30" y="20" width="85" height="60" rx="5" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          {/* Stiffness meter kPa */}
          <path d="M45 60 A 25 25 0 0 1 95 60" fill="none" stroke="#34d399" strokeWidth="4" />
          <line x1="70" y1="60" x2="85" y2="45" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
          <text x="50" y="35" fill="#a7f3d0" fontSize="8" fontWeight="bold">E = 5.2 kPa</text>
          <text x="50" y="45" fill="#6ee7b7" fontSize="7">CAP = 210 dB/m</text>
          {/* Ultrasound Probe */}
          <rect x="135" y="35" width="22" height="45" rx="5" fill="#334155" />
          <rect x="139" y="80" width="14" height="6" rx="1" fill="#10b981" />
          <path d="M146 35 Q150 15 115 25" stroke="#64748b" strokeWidth="2" fill="none" />
        </svg>
      ),
    },
    ubt: {
      titleEn: 'UBT (Urea Breath Test)',
      titleNp: 'युरिया ब्रेथ टेस्ट (UBT)',
      subtitleEn: 'Fast Non-Invasive H. pylori Detection',
      subtitleNp: 'पेटको अल्सर कीटाणु पत्ता लगाउने श्वास जाँच',
      bg: 'from-cyan-950 via-slate-900 to-cyan-900',
      badge: 'UBT Test',
      icon: '💨',
      svg: (
        <svg viewBox="0 0 200 130" className="w-full h-full opacity-80">
          {/* Spectrometer Unit */}
          <rect x="25" y="35" width="80" height="55" rx="6" fill="#083344" stroke="#06b6d4" strokeWidth="1.5" />
          <rect x="35" y="45" width="30" height="18" rx="2" fill="#0e7490" />
          <text x="38" y="58" fill="#a5f3fc" fontSize="7" fontWeight="bold">H. PYLORI</text>
          <circle cx="85" cy="50" r="5" fill="#22c55e" />
          <circle cx="85" cy="65" r="5" fill="#06b6d4" />
          {/* Breath Collection Bag */}
          <rect x="125" y="40" width="45" height="45" rx="8" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />
          <path d="M125 40 L170 85 M125 85 L170 40" stroke="#bae6fd" strokeWidth="1" />
          {/* Blow mouthpiece nozzle */}
          <rect x="142" y="25" width="10" height="15" rx="2" fill="#0284c7" />
        </svg>
      ),
    },
  };

  const c = configs[type];

  return (
    <div
      className={`relative aspect-16/10 rounded-2xl overflow-hidden shadow-md border border-white/10 bg-gradient-to-br ${c.bg} p-3.5 flex flex-col justify-between group hover:scale-[1.02] transition-transform cursor-pointer select-none`}
    >
      <div className="flex items-center justify-between z-10">
        <span className="text-xl">{c.icon}</span>
        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/15 text-white backdrop-blur-xs">
          {c.badge}
        </span>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {c.svg}
      </div>

      <div className="z-10 bg-black/60 backdrop-blur-xs p-2.5 rounded-xl border border-white/10">
        <p className="text-xs font-bold text-white leading-tight">
          {isNepali ? c.titleNp : c.titleEn}
        </p>
        <p className="text-[10px] text-slate-300 mt-0.5 truncate">
          {isNepali ? c.subtitleNp : c.subtitleEn}
        </p>
      </div>
    </div>
  );
}
