'use client';
import Link from 'next/link';

interface Crumb { label: string; href?: string; }

export default function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: `https://www.windroseguide.com${c.href}` } : {}),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Breadcrumb" style={{ padding: '0.6rem 0', marginBottom: '0.5rem' }}>
        <ol style={{ listStyle: 'none', display: 'flex', alignItems: 'center', gap: '0.35rem', flexWrap: 'wrap', fontSize: '0.8rem' }}>
          {crumbs.map((crumb, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              {i > 0 && (
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--color-text-light)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="9 18 15 12 9 6"/></svg>
              )}
              {crumb.href && i < crumbs.length - 1 ? (
                <Link href={crumb.href} style={{ color: 'var(--color-text-muted)', textDecoration: 'none', transition: 'color 150ms' }}
                  onMouseOver={(e) => { e.currentTarget.style.color = 'var(--color-gold)'; }}
                  onMouseOut={(e) => { e.currentTarget.style.color = 'var(--color-text-muted)'; }}
                >
                  {crumb.label}
                </Link>
              ) : (
                <span style={{ color: i === crumbs.length - 1 ? 'var(--color-gold)' : 'var(--color-text-muted)', fontWeight: i === crumbs.length - 1 ? 600 : 400 }}>
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
