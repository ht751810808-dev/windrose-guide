import type { Metadata } from 'next';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import SocialShare from '@/components/SocialShare';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Guide – Complete Fan Guide for Windrose Game 2026',
  description:
    'Everything about Windrose game: builds, weapons, ships, crew, mods, interactive map, wiki, trainer, and roadmap. Your #1 Windrose fan guide updated 2026.',
  keywords: [
    'windrose', 'windrose game', 'windrose guide', 'windrose wiki', 'windrose builds',
    'windrose weapons', 'windrose ships', 'windrose crew', 'windrose mods', 'windrose map',
    'windrose steam', 'windrose gameplay', '风启之旅',
  ],
  alternates: { canonical: 'https://www.windroseguide.com' },
};

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Windrose?',
      acceptedAnswer: { '@type': 'Answer', text: 'Windrose is a co-op pirate survival adventure game developed by Kraken Express and published by Pocketpair, released on Steam Early Access on April 14, 2026. Windrose sold over 1 million copies in 6 days with 222,000 peak concurrent players. The Windrose game supports up to 8 players in co-op mode.' },
    },
    {
      '@type': 'Question',
      name: 'What are the best Windrose builds?',
      acceptedAnswer: { '@type': 'Answer', text: 'The best Windrose builds include the Gunpowder Bomber for AoE damage, the Boarding Specialist for close-quarters combat, the Ship Captain build focused on naval warfare, and the Support Crew build for co-op teams. Our Windrose builds page covers each in detail with stat recommendations.' },
    },
    {
      '@type': 'Question',
      name: 'Is Windrose available on Steam?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, Windrose is available on Steam as an Early Access title since April 14, 2026. Windrose is a PC-exclusive game published by Pocketpair (the developer behind Palworld). The Windrose Steam page shows player reviews, screenshots, and purchase options.' },
    },
  ],
};

const websiteStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Windrose Guide',
  url: 'https://www.windroseguide.com',
  description: 'The #1 fan resource for the Windrose game — builds, weapons, ships, crew, mods, map, wiki, and more.',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://www.windroseguide.com/search?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const subpageLinks = [
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Complete game encyclopedia', color: '#26C4AE', bg: 'rgba(27,154,135,0.08)', border: 'rgba(27,154,135,0.25)' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best build guides 2026', color: '#D4AA5C', bg: 'rgba(212,170,92,0.08)', border: 'rgba(212,170,92,0.25)' },
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'All weapons & stats', color: '#EAC97E', bg: 'rgba(234,201,126,0.08)', border: 'rgba(234,201,126,0.25)' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship types & upgrades', color: '#4A9FD4', bg: 'rgba(42,124,184,0.08)', border: 'rgba(42,124,184,0.25)' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'NPC crew management', color: '#26C4AE', bg: 'rgba(27,154,135,0.08)', border: 'rgba(27,154,135,0.25)' },
  { href: '/windrose-mods', label: 'Windrose Mods', desc: 'Best mods & install guide', color: '#C94040', bg: 'rgba(201,64,64,0.08)', border: 'rgba(201,64,64,0.25)' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'Interactive map & biomes', color: '#26C4AE', bg: 'rgba(27,154,135,0.08)', border: 'rgba(27,154,135,0.25)' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Beginner\'s guide', color: '#D4AA5C', bg: 'rgba(212,170,92,0.08)', border: 'rgba(212,170,92,0.25)' },
  { href: '/windrose-steam', label: 'Windrose Steam', desc: 'Steam charts & reviews', color: '#4A9FD4', bg: 'rgba(42,124,184,0.08)', border: 'rgba(42,124,184,0.25)' },
];

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteStructuredData) }} />

      <Header />

      <main>
        {/* 1. Hero */}
        <Hero />

        {/* 2. About Windrose — SEO content block */}
        <section style={{ padding: '5rem 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }} className="about-grid">
              <div>
                <div className="section-label">About Windrose</div>
                <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, marginBottom: '1.25rem', lineHeight: 1.2 }}>
                  What Is{' '}
                  <span style={{ background: 'linear-gradient(135deg, #D4AA5C, #26C4AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                    Windrose?
                  </span>
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                  <p>
                    <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> is a co-operative pirate survival adventure game developed by Kraken Express and published by Pocketpair — the studio behind global hit Palworld. Released on Steam Early Access on April 14, 2026, the <strong style={{ color: 'var(--color-text)' }}>Windrose game</strong> quickly became one of the most talked-about titles of the year, selling over <strong style={{ color: 'var(--color-gold)' }}>1 million copies in just 6 days</strong> and reaching a peak of 222,000 concurrent players.
                  </p>
                  <p>
                    In <strong style={{ color: 'var(--color-text)' }}>Windrose</strong>, you play as a pirate adventurer sailing across procedurally generated seas dotted with diverse biomes and over 100 hand-crafted dungeons. The Windrose game supports solo offline play as well as co-op sessions of up to 8 players, optimized for groups of 4. Whether you prefer to captain your own Windrose ship solo or crew up with friends, the game delivers intense naval combat, deep survival mechanics, and rich settlement building.
                  </p>
                  <p>
                    The <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> experience centers on several interconnected systems: building and upgrading your <Link href="/windrose-ships" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose ships</Link>, crafting powerful <Link href="/windrose-weapons" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose weapons</Link>, managing your <Link href="/windrose-crew" style={{ color: 'var(--color-teal-light)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose crew</Link> of recruited NPCs, and optimizing your <Link href="/windrose-builds" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose builds</Link> to tackle increasingly dangerous dungeons and boss encounters.
                  </p>
                </div>
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem', paddingTop: '2.8rem' }}>
                  <p>
                    The <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> world is divided into multiple biomes — tropical islands, frozen tundra seas, volcanic archipelagos, and mist-shrouded ghost waters — each with unique enemies, resources, and dungeon types. Exploring the <Link href="/windrose-map" style={{ color: 'var(--color-teal-light)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose map</Link> to discover new islands and uncover hidden dungeons is a core part of the Windrose gameplay loop.
                  </p>
                  <p>
                    <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> also features a robust <Link href="/windrose-gunpowder" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>gunpowder</Link> crafting system, allowing players to craft cannon ammunition, bombs, and firearm upgrades. The historically-inspired boss encounters in Windrose each require different strategies — learning the Windrose meta and optimizing your builds is essential for clearing the hardest content.
                  </p>
                  <p>
                    For players who want to enhance their experience, the <Link href="/windrose-mods" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose mods</Link> community on Nexus Mods and CurseForge has already produced dozens of quality-of-life improvements and content expansions. The Windrose game is also known by its Chinese name <strong style={{ color: 'var(--color-text)' }}>风启之旅</strong> (Windrose: fēng qǐ zhī lǚ), with full Simplified Chinese language support built in.
                  </p>
                  <p>
                    This Windrose guide covers every aspect of the game — from beginner <Link href="/windrose-gameplay" style={{ color: 'var(--color-teal-light)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose gameplay</Link> tips to advanced Windrose builds, the complete <Link href="/windrose-wiki" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose wiki</Link>, the latest <Link href="/windrose-roadmap" style={{ color: 'var(--color-gold)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Windrose roadmap</Link>, and the Windrose <Link href="/windrose-steam" style={{ color: 'var(--color-ocean-light)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: '3px' }}>Steam charts</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Content Navigation */}
        <section style={{ padding: '4rem 0', background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <div className="section-label">Explore Windrose</div>
              <h2 style={{ fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 700 }}>
                Everything About Windrose
              </h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem' }} className="nav-grid">
              {subpageLinks.map((link, i) => (
                <Link key={i} href={link.href} style={{
                  display: 'flex', alignItems: 'center', gap: '0.85rem', padding: '1.1rem 1.15rem',
                  background: link.bg, border: `1px solid ${link.border}`,
                  borderRadius: 'var(--radius-md)', textDecoration: 'none', transition: 'all 200ms ease',
                }} className="nav-card-link">
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(10,22,40,0.5)', border: `1px solid ${link.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={link.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.15rem' }}>{link.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{link.desc}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Game Features */}
        <Features />

        {/* 5. Windrose Gameplay Overview */}
        <section style={{ padding: '5rem 0', background: 'var(--color-bg)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '860px', margin: '0 auto' }}>
              <div className="section-label">How Windrose Works</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 2.8vw, 2.2rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
                Windrose{' '}
                <span style={{ background: 'linear-gradient(135deg, #D4AA5C, #26C4AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Gameplay Guide
                </span>
              </h2>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }} className="gameplay-grid">
                {[
                  { icon: '⚓', title: 'Windrose Ship Combat', body: 'Naval warfare is the heart of Windrose. Position your Windrose ship to unleash broadside cannon volleys, use gunpowder bombs to devastate enemy hulls, and order your Windrose crew to board enemy vessels for close-quarters fighting. Every Windrose ship handles differently, so mastering your vessel is key.' },
                  { icon: '🗺️', title: 'Windrose Exploration', body: 'The Windrose map is procedurally generated with hand-crafted dungeons scattered across diverse biomes. Windrose exploration rewards thorough players — hidden coves hold rare Windrose loot, sunken ruins contain powerful Windrose weapons, and remote islands unlock special Windrose crew members.' },
                  { icon: '🏴', title: 'Windrose Builds & Progression', body: 'Your Windrose build determines how you play. The Windrose progression system lets you specialize in firearms, melee, naval command, or support roles. Choosing the right Windrose build for your crew composition — and the right Windrose weapons to match — determines success in high-difficulty content.' },
                  { icon: '🏘️', title: 'Windrose Settlement Building', body: 'Windrose lets you establish settlements on captured islands. Your Windrose settlement serves as a home base — recruit NPCs for your Windrose crew, craft Windrose gunpowder and supplies, and upgrade Windrose facilities to unlock better gear and ship improvements.' },
                ].map((item, i) => (
                  <div key={i} style={{ background: 'rgba(15,32,64,0.5)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}>
                    <div style={{ fontSize: '1.6rem', marginBottom: '0.65rem' }}>{item.icon}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-gold)', marginBottom: '0.65rem' }}>{item.title}</h3>
                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', lineHeight: 1.8 }}>{item.body}</p>
                  </div>
                ))}
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-teal-light)', marginBottom: '1rem' }}>
                Windrose Co-op: Playing with Friends
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> is designed from the ground up for co-op play. While you can play Windrose solo with an offline mode, the game truly shines with a full Windrose crew of 4 players. Each Windrose player can specialize in a different role — one manages the Windrose ship cannons, another steers the vessel, a third focuses on Windrose melee combat for boarding, and a fourth handles Windrose crew management and supply crafting.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
                The Windrose co-op system uses a session-based approach — one player hosts a Windrose session and others join. All progress in Windrose is saved per player, so even if the host disconnects, you keep your Windrose character progression. This makes Windrose one of the most accessible co-op experiences in the survival genre.
              </p>

              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 700, color: 'var(--color-teal-light)', marginBottom: '1rem' }}>
                Windrose Dungeons & Boss Fights
              </h3>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
                <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> features over 100 hand-crafted dungeons spread across its biomes, ranging from pirate fortress assaults to naval blockade runs and ancient temple raids. Each Windrose dungeon ends in a boss fight against historically-inspired characters with supernatural powers. Windrose bosses require players to coordinate Windrose builds, manage Windrose gunpowder supplies carefully, and use the environment strategically.
              </p>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.9, fontSize: '0.95rem' }}>
                Completing Windrose dungeons rewards players with unique Windrose weapons, rare crafting materials, Windrose ship upgrades, and special Windrose crew recruits. The difficulty of Windrose dungeons scales with your crew size and progression tier, making Windrose accessible to new players while offering serious challenges for experienced adventurers.
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/windrose-gameplay" className="btn-primary" style={{ fontSize: '0.88rem' }}>
                  Full Windrose Gameplay Guide
                </Link>
                <Link href="/windrose-wiki" className="btn-secondary" style={{ fontSize: '0.88rem' }}>
                  Windrose Wiki
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Windrose Key Info Cards */}
        <section style={{ padding: '4rem 0', background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="section-label" style={{ textAlign: 'center', marginBottom: '0.75rem' }}>Quick Facts</div>
            <h2 style={{ textAlign: 'center', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, marginBottom: '2rem' }}>
              Windrose Game At a Glance
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }} className="facts-grid">
              {[
                { label: 'Developer', value: 'Kraken Express', sub: 'Published by Pocketpair', color: '#D4AA5C' },
                { label: 'Release', value: 'Apr 14, 2026', sub: 'Steam Early Access', color: '#26C4AE' },
                { label: 'Copies Sold', value: '1M+ in 6 days', sub: '222K peak concurrent', color: '#4A9FD4' },
                { label: 'Co-op', value: 'Up to 8 players', sub: 'Optimized for 4', color: '#EAC97E' },
              ].map((f, i) => (
                <div key={i} style={{ background: 'rgba(15,32,64,0.6)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', padding: '1.4rem', textAlign: 'center' }}>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-light)', marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>{f.label}</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: f.color, marginBottom: '0.3rem', lineHeight: 1.2 }}>{f.value}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>{f.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. FAQ */}
        <FAQ />

        {/* 8. Final CTA */}
        <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(15,32,64,0.95) 100%)', textAlign: 'center', borderTop: '1px solid var(--color-border)' }}>
          <div className="container">
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="section-label" style={{ marginBottom: '1rem' }}>Set Sail</div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 700, marginBottom: '1rem' }}>
                Master{' '}
                <span style={{ background: 'linear-gradient(135deg, #D4AA5C, #EAC97E, #26C4AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Windrose
                </span>
              </h2>
              <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
                From your first Windrose voyage to conquering the hardest Windrose dungeons, our guides cover every Windrose mechanic. Start exploring the Windrose wiki, build your perfect crew, and dominate the seas.
              </p>
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '2rem' }}>
                <Link href="/windrose-builds" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                  Explore Windrose Builds
                </Link>
                <Link href="/windrose-wiki" className="btn-secondary" style={{ fontSize: '1rem', padding: '0.9rem 2rem' }}>
                  Windrose Wiki
                </Link>
              </div>
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SocialShare title="Windrose Guide – Complete Fan Guide for Windrose Game" url="https://www.windroseguide.com" />
              </div>
            </div>
          </div>
        </section>

        {/* 9. Comments */}
        <CommentBox page="home" />
      </main>

      <Footer />

      <style>{`
        .about-grid { grid-template-columns: 1fr 1fr; }
        .nav-grid { grid-template-columns: repeat(3, 1fr); }
        .gameplay-grid { grid-template-columns: 1fr 1fr; }
        .facts-grid { grid-template-columns: repeat(4, 1fr); }
        .nav-card-link:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(0,0,0,0.3); }
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; }
          .gameplay-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
        @media (max-width: 768px) {
          .nav-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .nav-grid { grid-template-columns: 1fr !important; }
          .facts-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </>
  );
}
