import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Ships – All Ship Types, Stats & Upgrades Guide 2026',
  description: 'Complete Windrose ships guide covering all ship types from sloops to galleons. Ship stats, upgrade paths, best Windrose ship for each build, and naval combat tips.',
  keywords: ['windrose ships', 'windrose ship', 'windrose', 'windrose naval', 'windrose ship guide', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-ships' },
};

const related = [
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'NPC crew for your ship' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds for ship combat' },
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'Naval weapons & cannons' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'Navigation & sea routes' },
  { href: '/windrose-gunpowder', label: 'Windrose Gunpowder', desc: 'Cannon ammo crafting' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Ship combat basics' },
];

export default function WindroseShipsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Ships' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-ocean" style={{ marginBottom: '1rem' }}>Naval Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Ships</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Complete guide to all <strong style={{ color: 'var(--color-text)' }}>Windrose ships</strong> — types, stats, upgrade paths, and which Windrose ship is best for your build and playstyle.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>
          <h2>Windrose Ships Overview</h2>
          <p>
            Your <strong>Windrose ship</strong> is the centerpiece of the Windrose experience. In Windrose, your ship serves as your mobile base, combat platform, and exploration vehicle. Choosing the right Windrose ship for your playstyle — and upgrading it effectively — is one of the most important decisions in the Windrose game.
          </p>
          <p>
            <strong>Windrose</strong> features multiple ship classes, each with different stat profiles for speed, hull health, cargo capacity, cannon count, and crew size. As you progress in Windrose, you can upgrade your current Windrose ship or purchase an entirely new vessel from Windrose port settlements.
          </p>

          <h2>All Windrose Ship Types</h2>
          <h3>Windrose Sloop</h3>
          <p>
            The <strong>Windrose Sloop</strong> is the entry-level ship in Windrose. Fast and maneuverable, the Windrose Sloop excels at quick raids and hit-and-run Windrose tactics. With only 2–4 cannon ports and limited cargo, the Windrose Sloop is ideal for solo Windrose players or small two-person crews. The Windrose Sloop is the easiest Windrose ship to crew and repair.
          </p>
          <ul>
            <li>Windrose Sloop Speed: ★★★★★ (fastest Windrose ship)</li>
            <li>Windrose Sloop Hull HP: ★★☆☆☆</li>
            <li>Windrose Sloop Cannons: 2–4</li>
            <li>Windrose Sloop Crew Requirement: 1–2 players</li>
          </ul>

          <h3>Windrose Brigantine</h3>
          <p>
            The <strong>Windrose Brigantine</strong> is the most versatile Windrose ship class, balancing speed, firepower, and cargo capacity. The Windrose Brigantine is the recommended Windrose ship for standard co-op groups of 3–4 players. With 6–8 cannon ports and a larger cargo hold than the Windrose Sloop, the Windrose Brigantine can handle most Windrose content efficiently.
          </p>
          <ul>
            <li>Windrose Brigantine Speed: ★★★★☆</li>
            <li>Windrose Brigantine Hull HP: ★★★☆☆</li>
            <li>Windrose Brigantine Cannons: 6–8</li>
            <li>Windrose Brigantine Crew Requirement: 2–4 players</li>
          </ul>

          <h3>Windrose Frigate</h3>
          <p>
            The <strong>Windrose Frigate</strong> is the mid-to-high tier Windrose warship, optimized for Windrose naval combat. Frigates in Windrose carry 10–14 cannons and have significantly reinforced hulls compared to smaller Windrose ships. The Windrose Frigate is the preferred Windrose ship for the Ship Captain build and teams that focus on naval engagements.
          </p>
          <ul>
            <li>Windrose Frigate Speed: ★★★☆☆</li>
            <li>Windrose Frigate Hull HP: ★★★★☆</li>
            <li>Windrose Frigate Cannons: 10–14</li>
            <li>Windrose Frigate Crew Requirement: 4–6 players</li>
          </ul>

          <h3>Windrose Man-o'-War (Galleon)</h3>
          <p>
            The <strong>Windrose Man-o'-War</strong>, also called the Windrose Galleon, is the most powerful Windrose ship available in Early Access. This massive Windrose vessel carries 16–24 cannons, has the highest hull HP of any Windrose ship, and can haul the most cargo. The Windrose Man-o'-War requires a full crew of 6–8 players to operate effectively and is the ultimate Windrose ship for fleet battles and high-tier dungeon assault runs.
          </p>
          <ul>
            <li>Windrose Man-o'-War Speed: ★★☆☆☆</li>
            <li>Windrose Man-o'-War Hull HP: ★★★★★</li>
            <li>Windrose Man-o'-War Cannons: 16–24</li>
            <li>Windrose Man-o'-War Crew Requirement: 6–8 players</li>
          </ul>

          <h2>Windrose Ship Upgrades</h2>
          <h3>Hull Upgrades</h3>
          <p>
            <strong>Windrose ship</strong> hull upgrades increase your vessel's durability in naval combat. Hull Windrose upgrades include reinforced planking (increases max HP), waterproofing (reduces fire damage), and armored bow (reduces ram damage). Hull upgrades in Windrose are crafted at your Windrose settlement shipyard using timber, iron, and rare materials from Windrose dungeons.
          </p>

          <h3>Cannon Upgrades</h3>
          <p>
            <strong>Windrose</strong> cannon upgrades improve your ship's offensive capabilities. Windrose cannon upgrade options include long-range barrels (+range), rapid-fire mechanisms (+reload speed), and heavy shot (+damage per salvo). <Link href="/windrose-gunpowder">Windrose gunpowder</Link> quality also affects cannon damage — higher-tier Windrose gunpowder deals more damage per shot.
          </p>

          <h3>Sail Upgrades</h3>
          <p>
            Sail upgrades in <strong>Windrose</strong> improve your ship's speed, maneuverability, and wind efficiency. Windrose sail upgrades include silk sails (+speed in high wind), storm-rigged sails (+control in rough weather), and military-cut sails (+battle turn speed). Fast Windrose ships with upgraded sails can outmaneuver heavier Windrose enemy vessels.
          </p>

          <h2>Windrose Ship Combat Guide</h2>
          <h3>Windrose Naval Positioning</h3>
          <p>
            In <strong>Windrose</strong> naval combat, positioning is everything. Your Windrose ship's cannons fire from the sides (broadsides), so keeping your vessel's side angled toward the enemy Windrose ship maximizes your fire output. Simultaneously, angling your Windrose ship's bow toward incoming cannon fire reduces the cross-section exposed to enemy Windrose volleys.
          </p>

          <h3>Windrose Boarding Tactics</h3>
          <p>
            The <strong>Windrose boarding</strong> system lets you close with an enemy Windrose ship and fight on its decks. To board in Windrose, bring your ship alongside the enemy vessel, throw grappling hooks to lash the ships together, then send your <Link href="/windrose-crew">Windrose crew</Link> or co-op teammates across. Windrose boarding fights are won by players with well-developed <Link href="/windrose-builds">Windrose boarding builds</Link>.
          </p>

          <h2>Best Windrose Ship for Each Playstyle</h2>
          <p>
            Choosing the best <strong>Windrose ship</strong> depends on your Windrose build and crew size:
          </p>
          <ul>
            <li><strong>Solo Windrose players:</strong> Windrose Sloop (easy to manage alone)</li>
            <li><strong>Windrose Gunpowder Bomber build:</strong> Windrose Brigantine (good cargo for gunpowder storage)</li>
            <li><strong>Windrose Boarding Specialist build:</strong> Windrose Brigantine (fast enough to intercept enemy Windrose ships)</li>
            <li><strong>Windrose Ship Captain build:</strong> Windrose Frigate or Man-o'-War (maximum firepower)</li>
            <li><strong>Full 8-player Windrose crew:</strong> Windrose Man-o'-War (needs all 8 crew positions)</li>
          </ul>

          <div className="info-box">
            <strong>Windrose Ships Pro Tip:</strong> Don&apos;t sell your old Windrose ship when you upgrade. Keep your Windrose Sloop as a fast scout vessel while using your main Windrose Frigate or Man-o'-War for heavy combat.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-ships" />
      </main>
      <Footer />
    </>
  );
}
