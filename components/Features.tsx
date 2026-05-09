import Link from 'next/link';

const features = [
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
    color: '#D4AA5C', bg: 'rgba(212,170,92,0.08)', border: 'rgba(212,170,92,0.2)',
    title: 'Windrose Builds', desc: 'Master the best Windrose builds for every playstyle — gunpowder builds, boarding specialists, ship captains, and support crew builds for co-op.', href: '/windrose-builds',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>),
    color: '#26C4AE', bg: 'rgba(27,154,135,0.08)', border: 'rgba(27,154,135,0.2)',
    title: 'Windrose Wiki', desc: 'The comprehensive Windrose wiki covering all game mechanics, lore, NPCs, factions, biomes, and systems in the Windrose world.', href: '/windrose-wiki',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/></svg>),
    color: '#4A9FD4', bg: 'rgba(42,124,184,0.08)', border: 'rgba(42,124,184,0.2)',
    title: 'Windrose Ships', desc: 'Every Windrose ship type compared — sloops to galleons. Ship stats, upgrade paths, and the best Windrose ship for each role.', href: '/windrose-ships',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>),
    color: '#EAC97E', bg: 'rgba(234,201,126,0.08)', border: 'rgba(234,201,126,0.2)',
    title: 'Windrose Weapons', desc: 'All Windrose weapons explained — firearm families, melee options, stat scaling, and the best weapon combos for each Windrose build.', href: '/windrose-weapons',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 11 22 2 13 21 11 13 3 11"/></svg>),
    color: '#C94040', bg: 'rgba(201,64,64,0.08)', border: 'rgba(201,64,64,0.2)',
    title: 'Windrose Mods', desc: 'Top Windrose mods from Nexus Mods and CurseForge — QoL improvements, weapon rebalances, visual overhauls, and how to install them.', href: '/windrose-mods',
  },
  {
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/><path d="M15 11a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/></svg>),
    color: '#26C4AE', bg: 'rgba(27,154,135,0.08)', border: 'rgba(27,154,135,0.2)',
    title: 'Windrose Map', desc: 'Windrose interactive map showing biomes, dungeon locations, boss spawns, and resource nodes. Updated as the Windrose community explores.', href: '/windrose-map',
  },
];

export default function Features() {
  return (
    <section style={{ padding: '5rem 0', background: 'var(--color-bg-2)', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label">Everything Windrose</div>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)', fontWeight: 700, marginBottom: '0.875rem' }}>
            Your Complete{' '}
            <span style={{ background: 'linear-gradient(135deg, #D4AA5C, #26C4AE)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Windrose Resource
            </span>
          </h2>
          <p style={{ color: 'var(--color-text-muted)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.8, fontSize: '0.95rem' }}>
            From Windrose builds and weapons to ships, crew, mods, and the interactive Windrose map — every guide you need in one place.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.1rem' }} className="features-grid">
          {features.map((f, i) => (
            <Link key={i} href={f.href} style={{
              display: 'flex', flexDirection: 'column', gap: '0.85rem', padding: '1.5rem',
              background: f.bg, border: `1px solid ${f.border}`, borderRadius: 'var(--radius-lg)',
              textDecoration: 'none', transition: 'all 250ms ease', cursor: 'pointer',
            }}
              onMouseOver={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(-4px)'; el.style.boxShadow = '0 8px 30px rgba(0,0,0,0.3)'; }}
              onMouseOut={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.transform = 'translateY(0)'; el.style.boxShadow = 'none'; }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: 'var(--radius-md)', background: 'rgba(10,22,40,0.6)', border: `1px solid ${f.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: f.color }}>
                {f.icon}
              </div>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: 'var(--color-text)', marginBottom: '0.4rem', letterSpacing: '0.02em' }}>{f.title}</h3>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.855rem', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: f.color, fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: 'auto' }}>
                Read Guide <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .features-grid { grid-template-columns: repeat(2,1fr) !important; } }
        @media (max-width: 560px) { .features-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
