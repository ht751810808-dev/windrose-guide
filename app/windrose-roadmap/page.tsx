import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Roadmap – Early Access Development Plan & Updates 2026',
  description: 'The complete Windrose roadmap for 2026 Early Access. Planned features, upcoming biomes, new ships, crew mechanics, PvP content, and the Windrose 1.0 release timeline.',
  keywords: ['windrose roadmap', 'windrose', 'windrose early access', 'windrose updates', 'windrose 1.0', 'windrose game roadmap'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-roadmap' },
};

const related = [
  { href: '/windrose-steam', label: 'Windrose Steam', desc: 'Latest Steam patch notes' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Current game state reference' },
  { href: '/windrose-reddit', label: 'Windrose Reddit', desc: 'Community roadmap discussions' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Current gameplay guide' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Current best builds' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Current ship roster' },
];

export default function WindroseRoadmapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Roadmap' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-teal" style={{ marginBottom: '1rem' }}>Development Roadmap</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Roadmap</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The complete <strong style={{ color: 'var(--color-text)' }}>Windrose roadmap</strong> — planned Early Access updates, new features, upcoming content, and the path to Windrose 1.0 full release.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Early Access Roadmap Overview</h2>
          <p>
            The <strong>Windrose roadmap</strong> outlines Kraken Express's development plan for the Windrose Early Access period. The Windrose developers have committed to 1.5–2.5 years of active Early Access development before the full Windrose 1.0 release. The Windrose roadmap is organized into major content phases, each adding significant new Windrose gameplay systems, biomes, ships, and story content.
          </p>
          <p>
            The <strong>Windrose roadmap</strong> is based on developer communications, Steam announcements, and community interviews. As Early Access development progresses, the Windrose roadmap may be adjusted based on player feedback from the <Link href="/windrose-reddit">Windrose community</Link> and technical requirements. This Windrose roadmap page is updated whenever new roadmap information is released.
          </p>

          <h2>Windrose Roadmap: Phase 1 (Current Early Access)</h2>
          <h3>Windrose Launch Content (Available Now)</h3>
          <p>
            The current <strong>Windrose</strong> Early Access build includes:
          </p>
          <ul>
            <li>Windrose Tropical Seas and Frozen Waters biomes</li>
            <li>100+ hand-crafted Windrose dungeons across two biomes</li>
            <li>4 Windrose ship classes (Sloop, Brigantine, Frigate, Man-o'-War)</li>
            <li>20+ Windrose weapons across three categories</li>
            <li>Core Windrose crew system with 6 NPC role types</li>
            <li>Windrose settlement building on captured islands</li>
            <li>Co-op for up to 8 Windrose players</li>
            <li>Basic Windrose gunpowder crafting and combat systems</li>
          </ul>

          <h2>Windrose Roadmap: Phase 2 (Q3 2026)</h2>
          <h3>Windrose Volcanic Archipelago Update</h3>
          <p>
            The next major <strong>Windrose roadmap</strong> milestone is the Volcanic Archipelago update, planned for Q3 2026. This Windrose roadmap update adds the full Volcanic Archipelago biome to the Windrose map with new Windrose dungeons, unique volcanic Windrose enemies, and a new tier of Windrose crafting materials.
          </p>
          <p>
            The Windrose Volcanic Archipelago roadmap update also introduces the <strong>Windrose Forge</strong> settlement building — a specialized Windrose crafting facility that produces the highest-tier Windrose weapons and ship armor from volcanic materials.
          </p>

          <h3>Windrose New Ship Type: Fire Ship</h3>
          <p>
            The Windrose roadmap includes a new Windrose ship type planned for Phase 2 — the <strong>Windrose Fire Ship</strong>. This Windrose vessel is a small, fast craft designed to be rammed into enemy Windrose ships and detonated, dealing massive area damage. The Windrose Fire Ship represents a new tactical option for Windrose naval combat.
          </p>

          <h2>Windrose Roadmap: Phase 3 (Q4 2026)</h2>
          <h3>Windrose Ghost Waters Update</h3>
          <p>
            The <strong>Windrose Ghost Waters</strong> full biome expansion is the centerpiece of Phase 3 on the Windrose roadmap. This Windrose update adds the most dangerous Windrose biome with supernatural enemies, ghost ship encounters, and the highest-tier Windrose dungeons in the game. The Windrose Ghost Waters update also introduces the Windrose Ancient Order faction storyline.
          </p>

          <h3>Windrose PvP System</h3>
          <p>
            The <strong>Windrose PvP system</strong> is planned for Phase 3 of the Windrose roadmap. The Windrose PvP implementation will be opt-in — players choose to enable PvP Windrose encounters when they enter specific sea zones marked on the Windrose map. PvP Windrose encounters include sea skirmishes, base raids, and treasure convoy ambushes between player crews.
          </p>

          <h2>Windrose Roadmap: Phase 4 (2027)</h2>
          <h3>Windrose Story Campaign</h3>
          <p>
            The <strong>Windrose roadmap</strong> Phase 4 is the most ambitious update planned — a fully voiced Windrose story campaign. This Windrose roadmap update adds a narrative framework to the existing Windrose gameplay, with cutscenes, voiced NPC dialogues, and a main questline that takes Windrose players through all biomes.
          </p>

          <h3>Windrose Expanded Crew System</h3>
          <p>
            Phase 4 of the <strong>Windrose roadmap</strong> also expands the Windrose crew system significantly, adding crew relationships, crew-specific questlines, and crew member backstories. Legendary Windrose crew members with unique abilities will be unlockable through special Windrose quests in Phase 4.
          </p>

          <h2>Windrose 1.0 Release</h2>
          <p>
            The full <strong>Windrose 1.0</strong> release is planned for 2027–2028, following the completion of all major Windrose roadmap phases. Windrose 1.0 will include all Early Access content plus the full Windrose story campaign, expanded Windrose biomes, and polished Windrose systems refined through community feedback.
          </p>
          <p>
            The <strong>Windrose</strong> development team has stated that the Windrose 1.0 price will be higher than the Early Access price, making now an excellent time to purchase Windrose on Steam if you're interested in following the full Windrose roadmap journey.
          </p>

          <h2>How to Follow the Windrose Roadmap</h2>
          <p>
            Stay updated on the <strong>Windrose roadmap</strong> through these channels:
          </p>
          <ul>
            <li><strong>Windrose Steam page</strong> — developer announcements and patch notes for every Windrose update</li>
            <li><strong>Windrose Reddit</strong> — <Link href="/windrose-reddit">r/Windrose</Link> community discussions of roadmap announcements</li>
            <li><strong>Windrose official Discord</strong> — real-time Windrose development updates from Kraken Express</li>
            <li><strong>This page</strong> — updated whenever new Windrose roadmap information is announced</li>
          </ul>

          <div className="info-box">
            <strong>Windrose Roadmap Note:</strong> All Windrose roadmap dates and features are subject to change during Early Access. The Windrose development team adjusts the Windrose roadmap based on community feedback and technical requirements.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-roadmap" />
      </main>
      <Footer />
    </>
  );
}
