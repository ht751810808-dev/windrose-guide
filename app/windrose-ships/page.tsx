import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Ships Guide – Ketch, Brigantine & Frigate Stats 2026',
  description: 'Complete Windrose ships guide: all three ship classes (Ketch, Brigantine, Frigate), Stock/Brethren/Blackbeard variants, cannon loadouts, ship parts, and best ship for each playstyle.',
  keywords: ['windrose ships', 'windrose ship', 'windrose', 'windrose frigate', 'windrose ketch', 'windrose brigantine', 'windrose ship guide'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-ships' },
};

const related = [
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Recruit and manage your crew' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds for ship combat' },
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'Naval weapons & boarding arms' },
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
              Complete guide to all <strong style={{ color: 'var(--color-text)' }}>Windrose ships</strong> — all three ship classes, their Stock, Brethren, and Blackbeard variants, cannon loadouts, ship parts, and which Windrose ship is best for your build and crew size.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Ships Overview</h2>
          <p>
            Your <strong>Windrose ship</strong> is the foundation of the entire Windrose experience — your mobile base, combat platform, and primary means of exploration. Windrose currently features three ship classes: the <strong>Ketch</strong>, the <strong>Brigantine</strong>, and the <strong>Frigate</strong>. Each class exists in three hull variants — <strong>Stock</strong>, <strong>Brethren</strong>, and <strong>Blackbeard</strong> — that differ in cannon weight compatibility, hull HP, and hold capacity rather than being cosmetic skins.
          </p>
          <p>
            Choosing the right <strong>Windrose ship</strong> and variant for your crew size and <Link href="/windrose-builds">Windrose build</Link> is one of the most strategic decisions in the game. Upgrading your ship is gated behind the <strong>"I Need a Bigger Boat"</strong> quest, which unlocks the Shipwright's Workshop and lets you build a Wharf to prepare for the open seas.
          </p>

          <h2>Windrose Ship Classes</h2>

          <h3>Windrose Ketch</h3>
          <p>
            The <strong>Windrose Ketch</strong> is the starter ship — small, nimble, and easy to crew alone or with a single partner. Ketches are best for the early Coastal Jungle zone, quick looting runs, and solo players who want responsive handling over raw firepower. The Ketch mounts lighter cannons than the Brigantine or Frigate, making it less suited for prolonged naval engagements against larger enemy vessels.
          </p>
          <ul>
            <li><strong>Ketch Stock:</strong> Baseline variant — balanced hull HP and standard cannon slots.</li>
            <li><strong>Ketch Brethren:</strong> Slightly larger hold, minor crew buff for faction-aligned players.</li>
            <li><strong>Ketch Blackbeard:</strong> The only Ketch variant that can mount 24-pound cannons — a significant firepower upgrade for the class.</li>
          </ul>

          <h3>Windrose Brigantine</h3>
          <p>
            The <strong>Windrose Brigantine</strong> is the all-rounder — the most popular Windrose ship for standard co-op groups of 2–4 players. It offers a strong balance of speed, hull durability, cannon count, and cargo space. The Brigantine is versatile enough to handle both naval combat and longer exploration voyages without needing constant resupply.
          </p>
          <ul>
            <li><strong>Brigantine Stock:</strong> The default mid-tier option. Solid across all categories.</li>
            <li><strong>Brigantine Brethren:</strong> Improved cargo capacity — ideal for players who prioritize looting and trading runs.</li>
            <li><strong>Brigantine Blackbeard:</strong> The only Brigantine variant that can mount 24-pound cannons, giving it punch well above its size class.</li>
          </ul>

          <h3>Windrose Frigate</h3>
          <p>
            The <strong>Windrose Frigate</strong> (also called the Fregata) is the pinnacle of naval engineering in Windrose — a massive leap in firepower and hull durability compared to the Ketch and Brigantine. The Frigate is the endgame ship, requiring a larger crew to operate effectively and offering the most tactical flexibility in naval combat. Community guides consistently rank the Windrose Frigate as the best ship for late-game content and boss encounters.
          </p>
          <ul>
            <li><strong>Frigate Stock:</strong> Excellent base stats — the go-to for most late-game crews.</li>
            <li><strong>Frigate Brethren:</strong> Enhanced hold capacity and faction perks for Brethren-aligned players.</li>
            <li><strong>Frigate Blackbeard:</strong> The <em>only hull in the entire game</em> that can mount 36-pound cannons — the heaviest broadside available in Windrose, reserved for the most serious naval combat players.</li>
          </ul>

          <div className="info-box">
            <strong>Cannon Caliber Note:</strong> Cannon weight compatibility matters enormously in Windrose. Only Blackbeard variants of each ship class can mount heavier cannon calibers — the Blackbeard Frigate&apos;s 36-pound cannons deal significantly more hull damage per salvo than any other loadout in the game.
          </div>

          <h2>Windrose Ship Parts System</h2>
          <p>
            <strong>Windrose ship parts</strong> are the modular components that define your vessel&apos;s combat, durability, and cargo profile. Each hull mounts a fixed loadout of cannons, hull modifications, rigging, and crew orders — all swappable at the Dockyard as you progress. Ship Parts in Windrose fall into four categories:
          </p>
          <ul>
            <li><strong>Cannons:</strong> Your primary offensive firepower. Caliber determines damage; the heavier the cannon, the more damage but the slower the reload.</li>
            <li><strong>Hull Modifications:</strong> Reinforced planking, waterproofing, and armored bow options that raise HP, reduce fire damage, or absorb ram impacts.</li>
            <li><strong>Rigging:</strong> Sail configurations that affect speed, maneuverability, and wind behavior in rough sea conditions.</li>
            <li><strong>Crew Orders:</strong> Unlockable through faction reputation and POI loot. The universal <strong>Crew Power</strong> order is available on all hulls; named crew orders with stronger effects are earned through progression.</li>
          </ul>

          <h2>Windrose Naval Combat Guide</h2>
          <h3>Broadside Combat</h3>
          <p>
            <strong>Windrose</strong> naval combat is inspired by Assassin's Creed: Black Flag — you circle opponents and deliver broadsides, choosing which gun to fire based on the direction you&apos;re facing. Glowing white aiming arrows indicate optimal firing angles. Keeping your ship&apos;s side angled toward the enemy maximizes your cannon output while minimizing your exposed profile.
          </p>

          <h3>Chain Shot & Sail Targeting</h3>
          <p>
            <strong>Chain Shot</strong> is a secondary ammunition type used primarily to destroy enemy sails and rigging. Hitting an enemy Windrose ship&apos;s sails with Chain Shot dramatically reduces their speed and maneuverability, making them easy to circle and board. Reserve Chain Shot for when you want to force a boarding action rather than sink the target.
          </p>

          <h3>Boarding</h3>
          <p>
            To board an enemy <strong>Windrose ship</strong>, close the distance, throw grappling hooks to lash the ships together, then fight across the decks in melee range. Boarding combat rewards players with good <Link href="/windrose-builds">Windrose builds</Link> optimized for close quarters. After winning a boarding action, you can claim the enemy ship&apos;s cargo or scuttle the vessel.
          </p>

          <h2>How to Unlock New Windrose Ships</h2>
          <p>
            Progression to larger <strong>Windrose ships</strong> is quest-gated. After your starting Ketch, complete the <strong>"I Need a Bigger Boat"</strong> quest to upgrade your Weaponsmith Workshop to a Shipwright's Workshop. From there, build a Wharf at your settlement to begin constructing or purchasing Brigantines and eventually Frigates. Ship availability scales with your faction reputation and settlement tier.
          </p>
          <p>
            You must also complete <strong>"Rescue the Crew"</strong> and recruit 7 crewmates before you can fully operate your first proper warship. <Link href="/windrose-crew">Crew management</Link> is directly tied to ship capability — an undermanned Windrose ship performs far below its potential in combat.
          </p>

          <h2>Best Windrose Ship for Each Playstyle</h2>
          <ul>
            <li><strong>Solo Windrose players:</strong> Ketch Blackbeard — maximum firepower for a one-person crew.</li>
            <li><strong>Small co-op (2–3 players):</strong> Brigantine Blackbeard — 24-pound cannons with manageable crew requirements.</li>
            <li><strong>Standard co-op (4 players):</strong> Brigantine Brethren or Frigate Stock — the sweet spot for most player groups.</li>
            <li><strong>Max firepower focus:</strong> Frigate Blackbeard — 36-pound cannons, the heaviest broadside in Windrose, for dedicated naval combat players.</li>
            <li><strong>Trading & exploration:</strong> Brigantine Brethren or Frigate Brethren — maximized cargo hold for hauling loot and faction goods.</li>
          </ul>

          <div className="info-box">
            <strong>Windrose Ships Pro Tip:</strong> Don&apos;t discard your Ketch when you upgrade to a Brigantine — keep it docked as a fast scout vessel. The Ketch Blackbeard in particular remains useful for rapid solo runs to Foothills resource nodes even after you&apos;ve transitioned to a Frigate as your main combat ship.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-ships" />
      </main>
      <Footer />
    </>
  );
}
