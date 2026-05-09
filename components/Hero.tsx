'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const stats = [
  { value: 'Apr 2026', label: 'Early Access', color: '#D4AA5C' },
  { value: '1M+', label: 'Copies Sold', color: '#26C4AE' },
  { value: '222K', label: 'Peak Players', color: '#4A9FD4' },
  { value: '8-Player', label: 'Co-op', color: '#EAC97E' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '88px',
        background: 'linear-gradient(160deg, #060E1C 0%, #091A2E 40%, #0A1E36 100%)',
      }}
    >
      {/* Background effects */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        {/* Radial glow top-right */}
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,170,92,0.08) 0%, transparent 65%)' }} />
        {/* Radial glow bottom-left */}
        <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,154,135,0.07) 0%, transparent 70%)' }} />
        {/* Center glow */}
        <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(42,124,184,0.05) 0%, transparent 70%)' }} />
        {/* Dot pattern */}
        <div className="dots-bg" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
        {/* Wave pattern at bottom */}
        <div className="wave-bg" style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '80px', opacity: 0.8 }} />
        {/* Floating compass points */}
        {[
          { top: '18%', left: '4%', delay: '0s', size: 32 },
          { top: '65%', right: '5%', delay: '0.8s', size: 24 },
          { top: '30%', right: '12%', delay: '1.4s', size: 20 },
        ].map((p, i) => (
          <svg key={i} width={p.size} height={p.size} viewBox="0 0 36 36" fill="none"
            style={{ position: 'absolute', top: p.top, left: (p as { left?: string }).left, right: (p as { right?: string }).right, opacity: 0.35, animation: `float ${3.5 + i}s ease-in-out infinite`, animationDelay: p.delay }}>
            <path d="M18 4 L20 15 L18 13 L16 15 Z" fill="#D4AA5C"/>
            <path d="M18 32 L16 21 L18 23 L20 21 Z" fill="#506580"/>
            <path d="M32 18 L21 16 L23 18 L21 20 Z" fill="#506580"/>
            <path d="M4 18 L15 20 L13 18 L15 16 Z" fill="#506580"/>
            <circle cx="18" cy="18" r="3" fill="#D4AA5C" opacity="0.8"/>
          </svg>
        ))}
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
        }} className="hero-grid">

          {/* Left: Text */}
          <div>
            {/* Badge */}
            <div className="animate-fade-in-up" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(212,170,92,0.1)',
              border: '1px solid rgba(212,170,92,0.3)',
              borderRadius: 'var(--radius-sm)',
              padding: '0.35rem 1rem',
              marginBottom: '1.5rem',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--color-gold)',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#26C4AE', display: 'inline-block', animation: 'pulse 2s infinite' }} />
              #1 Windrose Fan Resource
            </div>

            {/* H1 */}
            <h1 className="animate-fade-in-up delay-100"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, marginBottom: '1.25rem', lineHeight: 1.08, letterSpacing: '-0.01em' }}>
              <span style={{ display: 'block', color: 'var(--color-text)', fontSize: '0.55em', fontWeight: 400, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Complete Guide to
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, #D4AA5C 0%, #EAC97E 40%, #26C4AE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Windrose
              </span>
            </h1>

            <p className="animate-fade-in-up delay-200" style={{
              fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
              color: 'var(--color-text-muted)',
              maxWidth: '500px',
              lineHeight: 1.85,
              marginBottom: '2rem',
            }}>
              The ultimate <strong style={{ color: 'var(--color-text)', fontWeight: 600 }}>Windrose</strong> game guide — master builds,
              weapons, ships, crew management, mods, interactive map, and more. Updated for Windrose Early Access 2026.
            </p>

            {/* CTAs */}
            <div className="animate-fade-in-up delay-300" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '1.5rem' }}>
              <Link href="/windrose-wiki" className="btn-primary" style={{ fontSize: '0.9rem', padding: '0.85rem 1.6rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                Windrose Wiki
              </Link>
              <Link href="/windrose-builds" className="btn-secondary" style={{ fontSize: '0.9rem', padding: '0.85rem 1.6rem' }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                Best Builds
              </Link>
            </div>

            {/* Steam CTA */}
            <div className="animate-fade-in-up delay-400" style={{ marginBottom: '2rem' }}>
              <a
                href="https://store.steampowered.com/app/3041230/Windrose/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  background: '#1B2838',
                  color: '#C7D5E0',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  transition: 'all 150ms ease',
                  border: '1px solid rgba(199,213,224,0.15)',
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = '#2A475E'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseOut={(e) => { e.currentTarget.style.background = '#1B2838'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.386 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z"/>
                </svg>
                Windrose on Steam — Early Access
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </a>
            </div>

            {/* Stats */}
            <div className="animate-fade-in-up delay-400"
              style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0.65rem' }}>
              {stats.map((stat, i) => (
                <div key={i} style={{
                  background: 'rgba(18,40,64,0.8)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.75rem 0.5rem',
                  textAlign: 'center',
                  transition: 'transform 200ms var(--bounce)',
                  cursor: 'default',
                }}
                  onMouseOver={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-3px)'; }}
                  onMouseOut={(e) => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)'; }}
                >
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 700, color: stat.color, lineHeight: 1, marginBottom: '0.3rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.68rem', color: 'var(--color-text-muted)', fontWeight: 600, letterSpacing: '0.04em' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: SVG Ship Illustration */}
          <div className="animate-fade-in-up delay-200 hero-illustration"
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg viewBox="0 0 500 460" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ width: '100%', maxWidth: '500px', filter: 'drop-shadow(0 20px 60px rgba(27,154,135,0.15))' }}
              aria-label="Windrose game pirate ship sailing on the ocean" role="img">
              <defs>
                <radialGradient id="skyBg" cx="50%" cy="40%" r="70%">
                  <stop offset="0%" stopColor="#0D2040"/>
                  <stop offset="100%" stopColor="#060E1C"/>
                </radialGradient>
                <linearGradient id="seaGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0A2A3E"/>
                  <stop offset="100%" stopColor="#050F1C"/>
                </linearGradient>
                <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#E8DFD0"/>
                  <stop offset="100%" stopColor="#C8BFAA"/>
                </linearGradient>
                <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#B8892B"/>
                  <stop offset="100%" stopColor="#EAC97E"/>
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Sky */}
              <rect width="500" height="460" rx="20" fill="url(#skyBg)"/>

              {/* Stars */}
              {[[60,30],[120,18],[200,40],[280,15],[350,28],[420,45],[470,22],[80,70],[380,60],[450,80],[30,90]].map(([x,y],i) => (
                <circle key={i} cx={x} cy={y} r={i%3===0?1.5:1} fill="#E8DFD0" opacity={0.4+Math.sin(i)*0.3}/>
              ))}

              {/* Moon */}
              <circle cx="420" cy="60" r="28" fill="#1B2840"/>
              <circle cx="406" cy="54" r="22" fill="#E8DFD0" opacity="0.12"/>
              <circle cx="420" cy="60" r="26" fill="none" stroke="#D4AA5C" strokeWidth="0.5" opacity="0.4"/>

              {/* Moon glow */}
              <circle cx="420" cy="60" r="40" fill="radial-gradient(circle,rgba(212,170,92,0.08),transparent)" opacity="0.3"/>
              <circle cx="420" cy="60" r="22" fill="#E8DFD0" opacity="0.08"/>

              {/* Distant island silhouette */}
              <path d="M30 280 Q60 260 100 265 Q130 255 160 270 Q170 250 190 258 Q220 248 240 268 L240 310 L30 310 Z" fill="#0A1828" opacity="0.8"/>

              {/* Sea */}
              <rect x="0" y="300" width="500" height="160" rx="0" fill="url(#seaGrad)"/>
              {/* Waves */}
              <path d="M0 308 Q25 298 50 308 Q75 318 100 308 Q125 298 150 308 Q175 318 200 308 Q225 298 250 308 Q275 318 300 308 Q325 298 350 308 Q375 318 400 308 Q425 298 450 308 Q475 318 500 308" stroke="rgba(27,154,135,0.3)" strokeWidth="2" fill="none"/>
              <path d="M0 322 Q30 312 60 322 Q90 332 120 322 Q150 312 180 322 Q210 332 240 322 Q270 312 300 322 Q330 332 360 322 Q390 312 420 322 Q450 332 480 322" stroke="rgba(27,154,135,0.2)" strokeWidth="1.5" fill="none"/>
              <path d="M0 338 Q40 328 80 338 Q120 348 160 338 Q200 328 240 338 Q280 348 320 338 Q360 328 400 338 Q440 348 480 338" stroke="rgba(42,124,184,0.15)" strokeWidth="1" fill="none"/>

              {/* Ship hull */}
              <path d="M140 300 Q180 310 250 312 Q320 314 360 300 L380 330 Q340 348 250 350 Q160 352 120 330 Z" fill="#1A2A3E" stroke="rgba(212,170,92,0.4)" strokeWidth="1.5"/>
              {/* Hull planks */}
              <path d="M135 315 Q250 322 365 313" stroke="rgba(212,170,92,0.2)" strokeWidth="0.8" fill="none"/>
              <path d="M125 325 Q250 335 375 322" stroke="rgba(212,170,92,0.15)" strokeWidth="0.8" fill="none"/>
              {/* Hull gold trim */}
              <path d="M140 300 Q250 306 360 300" stroke="url(#goldGrad)" strokeWidth="2" fill="none"/>
              {/* Porthole windows */}
              {[180, 220, 260, 300, 340].map((x, i) => (
                <g key={i}>
                  <circle cx={x} cy={322} r={7} fill="#0A1628" stroke="rgba(212,170,92,0.5)" strokeWidth="1.2"/>
                  <circle cx={x} cy={322} r={4} fill="rgba(27,154,135,0.3)"/>
                </g>
              ))}

              {/* Main mast */}
              <rect x="247" y="100" width="6" height="200" fill="#1E3048" rx="2"/>
              {/* Mast ring */}
              <rect x="243" y="140" width="14" height="5" rx="2" fill="#D4AA5C" opacity="0.7"/>
              <rect x="243" y="220" width="14" height="4" rx="2" fill="#D4AA5C" opacity="0.5"/>

              {/* Boom (horizontal spar) */}
              <rect x="170" y="145" width="160" height="4" rx="2" fill="#1E3048"/>
              <rect x="180" y="225" width="130" height="3" rx="2" fill="#1E3048"/>

              {/* Main sail */}
              <path d="M174 148 L252 102 L252 223 L182 228 Z" fill="url(#sailGrad)" opacity="0.92"/>
              {/* Sail horizontal lines (canvas effect) */}
              {[165, 182, 200, 218].map((y, i) => (
                <line key={i} x1={174 + i*6} y1={y} x2={252} y2={y} stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
              ))}
              {/* Sail cross */}
              <line x1="200" y1="150" x2="252" y2="150" stroke="rgba(27,154,135,0.4)" strokeWidth="1.5" strokeDasharray="4,3"/>
              <line x1="186" y1="185" x2="252" y2="185" stroke="rgba(27,154,135,0.3)" strokeWidth="1" strokeDasharray="3,3"/>

              {/* Second sail (fore) */}
              <path d="M252 148 L330 105 L328 226 L252 223 Z" fill="url(#sailGrad)" opacity="0.85"/>
              {/* Second sail lines */}
              {[165, 185, 205].map((y, i) => (
                <line key={i} x1={252} y1={y} x2={325} y2={y} stroke="rgba(0,0,0,0.07)" strokeWidth="1"/>
              ))}

              {/* Crow's nest */}
              <rect x="238" y="100" width="24" height="14" rx="3" fill="#162535" stroke="rgba(212,170,92,0.4)" strokeWidth="1"/>
              {/* Lookout figure */}
              <circle cx="250" cy="96" r="4" fill="#1E2E42"/>
              <circle cx="250" cy="96" r="3.5" fill="#2A3E52"/>

              {/* Flag */}
              <rect x="250" y="68" width="2" height="32" fill="#1E3048"/>
              <path d="M252 68 L278 75 L252 82 Z" fill="#D4AA5C" opacity="0.9"/>
              {/* Skull on flag */}
              <circle cx="263" cy="74" r="3.5" fill="#0A1628" opacity="0.7"/>
              <line x1="260" y1="77" x2="266" y2="77" stroke="#0A1628" strokeWidth="0.8" opacity="0.7"/>

              {/* Bowsprit (front spar) */}
              <rect x="140" y="295" width="100" height="4" rx="2" fill="#1E3048" transform="rotate(-15, 140, 295)"/>
              {/* Jib sail */}
              <path d="M143 288 L235 150 L250 148 L190 296 Z" fill="url(#sailGrad)" opacity="0.7"/>

              {/* Rigging lines */}
              <line x1="250" y1="102" x2="170" y2="148" stroke="rgba(212,170,92,0.25)" strokeWidth="1"/>
              <line x1="250" y1="102" x2="330" y2="108" stroke="rgba(212,170,92,0.25)" strokeWidth="1"/>
              <line x1="250" y1="225" x2="180" y2="228" stroke="rgba(212,170,92,0.2)" strokeWidth="0.8"/>
              <line x1="250" y1="225" x2="328" y2="226" stroke="rgba(212,170,92,0.2)" strokeWidth="0.8"/>
              <line x1="250" y1="102" x2="155" y2="295" stroke="rgba(212,170,92,0.15)" strokeWidth="0.8"/>

              {/* Lantern glow on ship */}
              <circle cx="360" cy="295" r="8" fill="#D4AA5C" opacity="0.15" filter="url(#glow)"/>
              <circle cx="360" cy="295" r="4" fill="#D4AA5C" opacity="0.6"/>

              {/* Light reflection on water */}
              <path d="M220 350 Q250 345 280 350 Q260 370 250 380 Q240 370 220 350" fill="rgba(212,170,92,0.05)"/>

              {/* Windrose compass logo bottom right */}
              <g opacity="0.5" transform="translate(420, 370)">
                <circle cx="18" cy="18" r="18" fill="none" stroke="rgba(212,170,92,0.3)" strokeWidth="1"/>
                <path d="M18 4 L20 14 L18 12 L16 14 Z" fill="#D4AA5C"/>
                <path d="M18 32 L16 22 L18 24 L20 22 Z" fill="#506580"/>
                <path d="M32 18 L22 16 L24 18 L22 20 Z" fill="#506580"/>
                <path d="M4 18 L14 20 L12 18 L14 16 Z" fill="#506580"/>
                <circle cx="18" cy="18" r="3" fill="#D4AA5C"/>
              </g>
            </svg>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; text-align: center; }
          .hero-illustration { display: none !important; }
        }
      `}</style>
    </section>
  );
}
