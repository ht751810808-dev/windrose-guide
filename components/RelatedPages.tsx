'use client';
import Link from 'next/link';

interface RelatedPage {
  href: string;
  label: string;
  desc: string;
  tag?: string;
}

export default function RelatedPages({ pages, title = 'Related Windrose Guides' }: { pages: RelatedPage[]; title?: string }) {
  return (
    <section style={{ padding: '3rem 0', borderTop: '1px solid var(--color-border)' }}>
      <div className="container">
        <h2 style={{ fontSize: '1.1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '1.25rem' }}>
          {title}
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.85rem' }} className="related-grid">
          {pages.map((page, i) => (
            <Link key={i} href={page.href} style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '0.75rem',
              padding: '1rem 1.1rem',
              background: 'rgba(15,32,64,0.6)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              textDecoration: 'none',
              transition: 'all 200ms ease',
              cursor: 'pointer',
            }}
              onMouseOver={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'rgba(212,170,92,0.4)'; el.style.background = 'rgba(18,40,64,0.9)'; }}
              onMouseOut={(e) => { const el = e.currentTarget as HTMLAnchorElement; el.style.borderColor = 'var(--color-border)'; el.style.background = 'rgba(15,32,64,0.6)'; }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: '2px' }}><polyline points="9 18 15 12 9 6"/></svg>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-text)', marginBottom: '0.2rem', lineHeight: 1.3 }}>{page.label}</div>
                <div style={{ fontSize: '0.77rem', color: 'var(--color-text-muted)', lineHeight: 1.4 }}>{page.desc}</div>
                {page.tag && <span style={{ fontSize: '0.68rem', color: 'var(--color-gold)', letterSpacing: '0.06em', textTransform: 'uppercase', marginTop: '0.25rem', display: 'block' }}>{page.tag}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .related-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 480px) { .related-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
