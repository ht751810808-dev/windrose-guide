import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Steam – Steam Charts, Reviews & PC Requirements 2026',
  description: 'Everything about Windrose on Steam: player counts, Steam charts, system requirements, reviews, patches, and how to get Windrose on PC via Steam.',
  keywords: ['windrose steam', 'windrose steam charts', 'windrose', 'windrose pc', 'windrose system requirements', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-steam' },
};

const related = [
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'How to play Windrose' },
  { href: '/windrose-key', label: 'Windrose Key', desc: 'Where to buy Windrose key' },
  { href: '/windrose-roadmap', label: 'Windrose Roadmap', desc: 'Steam Early Access updates' },
  { href: '/windrose-mods', label: 'Windrose Mods', desc: 'Steam Workshop mods' },
  { href: '/windrose-reddit', label: 'Windrose Reddit', desc: 'Community discussions' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds to start with' },
];

export default function WindroseSteamPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Steam' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-ocean" style={{ marginBottom: '1rem' }}>Steam Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Steam</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Everything about <strong style={{ color: 'var(--color-text)' }}>Windrose on Steam</strong> — player counts, Steam charts, system requirements, reviews, Early Access updates, and how to get started.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose on Steam Overview</h2>
          <p>
            <strong>Windrose Steam</strong> launched on April 14, 2026, as an Early Access title on Steam (App ID: 3041230). Published by Pocketpair — the developer behind Palworld — the Windrose Steam launch was one of the most successful Early Access launches of 2026. Windrose sold over 1 million copies on Steam in just 6 days and peaked at over 222,000 concurrent Windrose Steam players.
          </p>
          <p>
            <strong>Windrose</strong> is currently only available on Steam for PC (Windows). The Windrose Steam listing shows the game as developed by Kraken Express, a Uzbekistani indie studio. The Windrose Steam page indicates the game is also available on the Epic Games Store.
          </p>

          <h2>Windrose Steam Charts</h2>
          <h3>Windrose Steam Player Count</h3>
          <p>
            <strong>Windrose Steam charts</strong> show the game's extraordinary player retention following its April 2026 launch. The Windrose Steam peak of 222,000+ concurrent players occurred in the first week after Early Access launch — placing Windrose among the most successful Early Access survival games on Steam.
          </p>
          <p>
            <strong>Windrose Steam</strong> player counts have remained strong after the initial launch surge, with the Windrose community continuing to grow as word-of-mouth and content creator coverage expand the Windrose playerbase. Regular Windrose Steam updates and new content drops have maintained player engagement well beyond the typical Early Access honeymoon period.
          </p>

          <h3>Windrose Steam Reviews</h3>
          <p>
            <strong>Windrose Steam reviews</strong> are overwhelmingly positive, with reviewers consistently praising the Windrose game's co-op experience, naval combat depth, and content volume for an Early Access title. Common Windrose Steam review themes include:
          </p>
          <ul>
            <li><strong>Positive Windrose Steam reviews:</strong> "Best pirate co-op game ever made," "Naval combat is incredibly satisfying," "Windrose ships feel distinct and meaningful," "More content than most full-price games."</li>
            <li><strong>Mixed Windrose Steam reviews:</strong> "Some Windrose content is thin in the current Early Access build," "Windrose server performance can struggle in 8-player sessions."</li>
          </ul>

          <h2>Windrose Steam System Requirements</h2>
          <h3>Windrose Minimum PC Requirements</h3>
          <p>
            To run <strong>Windrose on Steam</strong> at minimum settings:
          </p>
          <ul>
            <li><strong>OS:</strong> Windows 10 64-bit (required for Windrose Steam)</li>
            <li><strong>CPU:</strong> Intel Core i5-8400 or AMD Ryzen 5 2600</li>
            <li><strong>RAM:</strong> 12 GB (16 GB recommended for Windrose)</li>
            <li><strong>GPU:</strong> NVIDIA GTX 1060 6GB or AMD RX 580 8GB</li>
            <li><strong>Storage:</strong> 30 GB SSD (HDD will cause longer Windrose loading times)</li>
            <li><strong>Network:</strong> Broadband internet required for Windrose co-op</li>
          </ul>

          <h3>Windrose Recommended PC Requirements</h3>
          <p>
            For optimal <strong>Windrose Steam</strong> performance:
          </p>
          <ul>
            <li><strong>OS:</strong> Windows 11 64-bit</li>
            <li><strong>CPU:</strong> Intel Core i7-10700K or AMD Ryzen 7 3800X</li>
            <li><strong>RAM:</strong> 16 GB</li>
            <li><strong>GPU:</strong> NVIDIA RTX 2070 Super or AMD RX 6700 XT</li>
            <li><strong>Storage:</strong> 30 GB NVMe SSD (for fastest Windrose load times)</li>
          </ul>

          <h2>Windrose Steam Early Access</h2>
          <h3>What Is Windrose Early Access?</h3>
          <p>
            <strong>Windrose Steam Early Access</strong> means the game is available to purchase and play while still in active development. The Windrose Early Access period is planned to last 1.5–2.5 years before the full Windrose 1.0 release. During Windrose Early Access, the game receives regular updates on Steam that add new content, fix bugs, and refine balance based on community feedback.
          </p>
          <p>
            Purchasing <strong>Windrose on Steam</strong> during Early Access gives you immediate access to all current Windrose content plus all future Windrose updates included in the base price — there are no additional paid Windrose DLC plans during Early Access according to the developers.
          </p>

          <h3>Windrose Steam Update History</h3>
          <p>
            Since the <strong>Windrose Steam</strong> Early Access launch, the development team has released regular patches. Major Windrose Steam updates have added new dungeon types, weapon balance adjustments, ship upgrade options, crew system refinements, and performance improvements. See the <Link href="/windrose-roadmap">Windrose roadmap</Link> for planned future Steam updates.
          </p>

          <h2>Windrose on Steam: Getting Started</h2>
          <p>
            To get started with <strong>Windrose on Steam</strong>: Search for "Windrose" in the Steam store or navigate directly to the Windrose Steam page (App ID 3041230). Add Windrose to your Steam cart, complete the purchase, and install the Windrose game via your Steam library. Launch Windrose through Steam to access both solo and co-op Windrose gameplay.
          </p>
          <p>
            If you prefer to buy a <strong>Windrose key</strong> rather than purchasing directly on Steam, visit our <Link href="/windrose-key">Windrose key guide</Link> for authorized third-party Windrose key retailers.
          </p>

          <h2>Windrose Steam Workshop & Mods</h2>
          <p>
            The <strong>Windrose Steam Workshop</strong> is active but not the primary Windrose modding platform — most Windrose mods are hosted on Nexus Mods and CurseForge. The Windrose Steam Workshop hosts official and community-created cosmetic items, flag designs, and some QoL Windrose mods. See our <Link href="/windrose-mods">Windrose mods guide</Link> for the full Windrose modding ecosystem.
          </p>

          <div className="info-box">
            <strong>Windrose Steam Tip:</strong> Add Windrose to your Steam wishlist to receive notifications about major Windrose Steam updates and any future price changes. Follow the Windrose game page on Steam to stay updated on patch notes and developer announcements.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-steam" />
      </main>
      <Footer />
    </>
  );
}
