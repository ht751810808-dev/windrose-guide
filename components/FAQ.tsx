'use client';

import Link from 'next/link';
import { useState } from 'react';

const faqs = [
  {
    q: 'What is Windrose?',
    a: 'Windrose is a co-op pirate survival adventure game developed by Kraken Express and published by Pocketpair. Released on Steam Early Access on April 14, 2026, Windrose lets you sail the seas, battle enemies, build settlements, and explore 100+ hand-crafted dungeons. Windrose sold over 1 million copies in just 6 days, with a peak of 222,000 concurrent players on Steam.',
  },
  {
    q: 'What are the best Windrose builds?',
    a: 'The best Windrose builds depend on your playstyle. Popular Windrose builds include the Gunpowder Bomber build for area damage, the Boarding Specialist build for close combat, the Ship Captain build focused on naval warfare, and the Support Crew build for co-op teamplay. See our dedicated Windrose builds guide for detailed breakdowns of each.',
  },
  {
    q: 'How does the Windrose crew system work?',
    a: 'The Windrose crew system lets you recruit NPCs to join your pirate ship. Each Windrose crew member has unique skills that benefit your voyage — from skilled gunners who boost cannon damage to navigators who improve ship speed. In Windrose, managing your crew effectively is key to surviving tough encounters and clearing high-level dungeons.',
  },
  {
    q: 'Is there a Windrose map or interactive map?',
    a: 'Windrose features a procedurally generated world with multiple biomes. Our Windrose map guide covers all known biome types, key dungeon locations, resource hotspots, and boss spawn areas. The Windrose interactive map tracks player-discovered locations and is updated regularly as the community explores more of the Windrose world.',
  },
  {
    q: 'Are there Windrose mods available?',
    a: 'Yes, Windrose mods are available on platforms like Nexus Mods and CurseForge. Windrose mods range from quality-of-life improvements and building placement tools to weapon rebalances and visual overhauls. Our Windrose mods guide lists the best mods available and explains how to install them safely.',
  },
  {
    q: 'What is the Windrose roadmap?',
    a: 'The Windrose roadmap outlines Kraken Express\'s development plans for the Early Access period, which is expected to last 1.5–2.5 years. The Windrose roadmap includes new biomes, additional ship types, expanded crew mechanics, PvP content, and more weapons and dungeons. Check our Windrose roadmap page for the latest confirmed updates.',
  },
  {
    q: 'What is Windrose 风启之旅?',
    a: 'Windrose 风启之旅 (fēng qǐ zhī lǚ) is the official Chinese name for Windrose. The Windrose game supports Simplified Chinese as one of its languages. Chinese players searching for Windrose 风启之旅 can find all the same builds, wiki, map, and crew guides on our Chinese guide page.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" style={{ padding: '5rem 0', background: 'var(--color-bg)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2.2fr', gap: '4rem', alignItems: 'start' }} className="faq-grid">

          {/* Left sticky */}
          <div style={{ position: 'sticky', top: '100px' }}>
            <div className="section-label">Got Questions?</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.15 }}>
              Windrose{' '}
              <span style={{ background: 'linear-gradient(135deg, #D4AA5C, #26C4AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                FAQ
              </span>
            </h2>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '1.75rem', fontSize: '0.92rem' }}>
              Everything you need to know about the Windrose game — builds, crew, ships, mods, and more.
            </p>

            {/* Quick links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
              <Link href="/windrose-builds" className="pill pill-gold" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Best Windrose Builds
              </Link>
              <Link href="/windrose-wiki" className="pill pill-teal" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Windrose Wiki
              </Link>
              <Link href="/windrose-map" className="pill pill-ocean" style={{ cursor: 'pointer', justifyContent: 'flex-start', padding: '0.5rem 1rem' }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                Interactive Map
              </Link>
            </div>
          </div>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{
                background: openIndex === i ? 'rgba(18,40,64,0.9)' : 'rgba(15,32,64,0.6)',
                border: `1px solid ${openIndex === i ? 'rgba(212,170,92,0.4)' : 'var(--color-border)'}`,
                borderRadius: 'var(--radius-md)',
                overflow: 'hidden',
                transition: 'all 250ms ease',
                boxShadow: openIndex === i ? '0 4px 20px rgba(212,170,92,0.08)' : 'none',
              }}>
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '1rem 1.3rem',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '1rem',
                  }}
                  aria-expanded={openIndex === i}
                >
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: openIndex === i ? 'var(--color-gold)' : 'var(--color-text)',
                    lineHeight: 1.4,
                    transition: 'color 200ms ease',
                  }}>
                    {faq.q}
                  </span>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: openIndex === i ? 'rgba(212,170,92,0.2)' : 'rgba(30,58,80,0.8)',
                    border: `1px solid ${openIndex === i ? 'rgba(212,170,92,0.4)' : 'var(--color-border)'}`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    transition: 'all 250ms ease',
                  }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none"
                      stroke={openIndex === i ? 'var(--color-gold)' : 'var(--color-text-muted)'}
                      strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
                      style={{ transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 250ms ease' }}>
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </span>
                </button>
                <div style={{
                  maxHeight: openIndex === i ? '400px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 300ms ease',
                }}>
                  <p style={{
                    padding: '0 1.3rem 1.2rem',
                    color: 'var(--color-text-muted)',
                    lineHeight: 1.85,
                    fontSize: '0.9rem',
                  }}>
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
