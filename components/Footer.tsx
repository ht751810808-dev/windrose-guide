'use client';

import Link from 'next/link';

const footerSections = {
  'Game Guides': [
    { label: 'Windrose Wiki', href: '/windrose-wiki' },
    { label: 'Windrose Builds', href: '/windrose-builds' },
    { label: 'Windrose Weapons', href: '/windrose-weapons' },
    { label: 'Windrose Ships', href: '/windrose-ships' },
    { label: 'Windrose Crew', href: '/windrose-crew' },
    { label: 'Windrose Gameplay', href: '/windrose-gameplay' },
  ],
  'Resources': [
    { label: 'Windrose Mods', href: '/windrose-mods' },
    { label: 'Windrose Map', href: '/windrose-map' },
    { label: 'Windrose Trainer', href: '/windrose-trainer' },
    { label: 'Windrose Gunpowder', href: '/windrose-gunpowder' },
    { label: 'Windrose Key', href: '/windrose-key' },
  ],
  'News & Community': [
    { label: 'Windrose Steam', href: '/windrose-steam' },
    { label: 'Windrose Roadmap', href: '/windrose-roadmap' },
    { label: 'Windrose Reddit', href: '/windrose-reddit' },
    { label: 'Windrose 中文攻略', href: '/windrose-zhongwen' },
  ],
  'More': [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Contact', href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, var(--color-bg) 0%, #060F1E 100%)',
      borderTop: '1px solid var(--color-border)',
      paddingTop: '4rem',
      paddingBottom: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative compass */}
      <div aria-hidden="true" style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', bottom: '-80px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(212,170,92,0.04) 0%, transparent 70%)' }} />
        <div style={{ position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(27,154,135,0.04) 0%, transparent 70%)' }} />
      </div>

      <div className="container" style={{ position: 'relative' }}>
        {/* Top: brand + links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 0.6fr',
          gap: '2.5rem',
          marginBottom: '3rem',
        }} className="footer-grid">

          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', marginBottom: '1rem' }}>
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <rect width="36" height="36" rx="8" fill="#0F2040" stroke="rgba(212,170,92,0.35)" strokeWidth="1"/>
                <circle cx="18" cy="18" r="12" fill="none" stroke="rgba(212,170,92,0.2)" strokeWidth="1"/>
                <path d="M18 7 L20 16 L18 14 L16 16 Z" fill="#D4AA5C"/>
                <path d="M18 29 L16 20 L18 22 L20 20 Z" fill="#506580"/>
                <path d="M29 18 L20 16 L22 18 L20 20 Z" fill="#506580"/>
                <path d="M7 18 L16 20 L14 18 L16 16 Z" fill="#506580"/>
                <circle cx="18" cy="18" r="2.5" fill="#D4AA5C"/>
              </svg>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                background: 'linear-gradient(135deg, #D4AA5C, #EAC97E)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                Windrose Guide
              </span>
            </Link>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.855rem', lineHeight: 1.85, marginBottom: '1.25rem' }}>
              Your #1 fan resource for the Windrose game. Complete guides for builds, weapons, ships, crew management, mods, and more. Updated for 2026.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <Link href="/windrose-wiki" className="pill pill-gold" style={{ cursor: 'pointer' }}>Wiki</Link>
              <Link href="/windrose-builds" className="pill pill-teal" style={{ cursor: 'pointer' }}>Builds</Link>
              <Link href="/windrose-steam" className="pill pill-ocean" style={{ cursor: 'pointer' }}>Steam</Link>
            </div>
          </div>

          {/* Link Sections */}
          {Object.entries(footerSections).map(([section, links]) => (
            <div key={section}>
              <h4 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--color-gold)',
                marginBottom: '1rem',
              }}>
                {section}
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      style={{
                        color: 'var(--color-text-muted)',
                        fontSize: '0.85rem',
                        textDecoration: 'none',
                        transition: 'color 150ms ease',
                      }}
                      onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                      onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="divider" />

        {/* Friend Links */}
        <div style={{ paddingBottom: '1.75rem' }}>
          <h4 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.72rem',
            fontWeight: 600,
            color: 'var(--color-text-light)',
            marginBottom: '0.875rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Friend Links
          </h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {[
              { label: 'Bazi Calculator', href: 'https://bazi-calculator.app' },
              { label: 'Sailor Piece', href: 'https://www.sailorpiece.help/' },
              { label: 'Titan Fishing', href: 'https://www.titanfishing.art/' },
              { label: 'Imposter Game', href: 'https://www.impostergame.pro/' },
              { label: 'Bojack Test', href: 'https://www.bojacktest.com/' },
              { label: "Women's March Madness", href: 'https://www.womensmarchmadness.wiki/' },
              { label: 'Mem Palace', href: 'https://www.mempalace.tech/' },
              { label: 'Tomodachi Life', href: 'https://www.tomodachi-life.org/' },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: '0.77rem',
                  color: 'var(--color-text-light)',
                  textDecoration: 'none',
                  padding: '0.22rem 0.6rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--color-border)',
                  transition: 'all 150ms ease',
                  cursor: 'pointer',
                }}
                onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; e.currentTarget.style.borderColor = 'rgba(212,170,92,0.3)'; }}
                onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-light)'; e.currentTarget.style.borderColor = 'var(--color-border)'; }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <hr className="divider" />

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '0.5rem',
        }}>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.78rem' }}>
            © 2026 windroseguide.com — Unofficial fan site. Not affiliated with Kraken Express or Pocketpair.
          </p>
          <p style={{ color: 'var(--color-text-light)', fontSize: '0.77rem' }}>
            Built for Windrose sailors everywhere
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
