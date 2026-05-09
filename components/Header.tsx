'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '/windrose-wiki', label: 'Wiki' },
  { href: '/windrose-builds', label: 'Builds' },
  { href: '/windrose-ships', label: 'Ships' },
  { href: '/windrose-mods', label: 'Mods' },
  { href: '/windrose-map', label: 'Map' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed',
      top: '10px',
      left: '14px',
      right: '14px',
      zIndex: 100,
      borderRadius: '12px',
      border: scrolled ? '1px solid rgba(212,170,92,0.4)' : '1px solid rgba(212,170,92,0.2)',
      background: scrolled ? 'rgba(10,22,40,0.97)' : 'rgba(10,22,40,0.85)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      transition: 'all 300ms ease',
      boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(212,170,92,0.1)' : '0 2px 12px rgba(0,0,0,0.4)',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '62px',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect width="36" height="36" rx="8" fill="#0F2040" stroke="rgba(212,170,92,0.4)" strokeWidth="1"/>
            {/* Compass rose */}
            <circle cx="18" cy="18" r="12" fill="none" stroke="rgba(212,170,92,0.25)" strokeWidth="1"/>
            {/* N arrow (gold) */}
            <path d="M18 7 L20 16 L18 14 L16 16 Z" fill="#D4AA5C"/>
            {/* S arrow (muted) */}
            <path d="M18 29 L16 20 L18 22 L20 20 Z" fill="#506580"/>
            {/* E arrow */}
            <path d="M29 18 L20 16 L22 18 L20 20 Z" fill="#506580"/>
            {/* W arrow */}
            <path d="M7 18 L16 20 L14 18 L16 16 Z" fill="#506580"/>
            {/* Center dot */}
            <circle cx="18" cy="18" r="2.5" fill="#D4AA5C"/>
          </svg>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.05rem',
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

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', gap: '0.1rem' }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                fontSize: '0.8rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                padding: '0.4rem 0.8rem',
                borderRadius: 'var(--radius-sm)',
                transition: 'all 200ms ease',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.color = 'var(--color-gold)';
                e.currentTarget.style.background = 'rgba(212,170,92,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.color = 'var(--color-text-muted)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <Link href="/windrose-steam" className="btn-primary" style={{ padding: '0.45rem 1.1rem', fontSize: '0.78rem' }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.386 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0z"/>
            </svg>
            Play on Steam
          </Link>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text)',
              cursor: 'pointer',
              width: '38px',
              height: '38px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
              gap: '4px',
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <span style={{ display: 'block', width: '16px', height: '1.5px', background: 'var(--color-gold)', borderRadius: '2px' }} />
            <span style={{ display: 'block', width: '12px', height: '1.5px', background: 'var(--color-text-muted)', borderRadius: '2px' }} />
            <span style={{ display: 'block', width: '16px', height: '1.5px', background: 'var(--color-gold)', borderRadius: '2px' }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          padding: '0.75rem 1.25rem 1rem',
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.2rem',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-display)',
                color: 'var(--color-text-muted)',
                textDecoration: 'none',
                padding: '0.65rem 1rem',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'background 200ms',
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(212,170,92,0.1)'; e.currentTarget.style.color = 'var(--color-gold)'; }}
              onMouseOut={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--color-text-muted)'; }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/windrose-steam"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: '0.5rem', justifyContent: 'center', fontSize: '0.85rem' }}
          >
            Play on Steam
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
