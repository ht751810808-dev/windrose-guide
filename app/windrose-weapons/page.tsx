import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Weapons – All Weapons, Stats & Best Combos Guide 2026',
  description: 'Complete Windrose weapons guide. All firearms, melee weapons, explosives, stat scaling, and the best Windrose weapon combos for every build.',
  keywords: ['windrose weapons', 'windrose weapon', 'windrose', 'windrose firearms', 'windrose melee', 'windrose guide'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-weapons' },
};

const related = [
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds for each weapon type' },
  { href: '/windrose-gunpowder', label: 'Windrose Gunpowder', desc: 'Ammo crafting guide' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full weapon mechanics' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Crew weapon assignments' },
  { href: '/windrose-mods', label: 'Windrose Mods', desc: 'Weapon mods & rebalances' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Combat basics' },
];

export default function WindroseWeaponsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Weapons' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-red" style={{ marginBottom: '1rem' }}>Arsenal Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Weapons</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Every <strong style={{ color: 'var(--color-text)' }}>Windrose weapon</strong> explained — from flintlock pistols and muskets to boarding axes and powder kegs. Find the best Windrose weapon combos for your build.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Weapons Overview</h2>
          <p>
            <strong>Windrose weapons</strong> are divided into three main categories: firearms, melee weapons, and explosive weapons. Each Windrose weapon category has unique mechanics, stat scaling, and situational advantages. Choosing the right Windrose weapons for your <Link href="/windrose-builds">Windrose build</Link> is critical to success in both Windrose dungeon encounters and ship-board combat.
          </p>
          <p>
            <strong>Windrose</strong> uses a two-weapon loadout system — you carry one primary Windrose weapon and one secondary Windrose weapon. Most Windrose builds specialize their primary Windrose weapon for their main role while choosing a secondary Windrose weapon that covers weaknesses.
          </p>

          <h2>Windrose Firearms</h2>
          <h3>Windrose Flintlock Pistol</h3>
          <p>
            The <strong>Windrose Flintlock Pistol</strong> is the most versatile Windrose firearm. The Windrose pistol deals moderate damage with a fast reload time compared to other Windrose firearms. Flintlock Pistols in Windrose scale with Dexterity and are effective at medium range. The Windrose pistol is a popular secondary Windrose weapon for melee-focused builds.
          </p>

          <h3>Windrose Musket</h3>
          <p>
            The <strong>Windrose Musket</strong> is the long-range Windrose firearm, dealing high single-target damage at the cost of a slow reload. Windrose Muskets scale with Marksman skill and excel at picking off priority targets before entering melee range. A Windrose musketeer specialized in this Windrose weapon can neutralize enemy officers before a boarding action.
          </p>

          <h3>Windrose Blunderbuss</h3>
          <p>
            The <strong>Windrose Blunderbuss</strong> is the short-range Windrose shotgun equivalent — devastating in close quarters but nearly useless beyond 10 meters. Windrose Blunderbuss weapons excel during boarding fights on Windrose ship decks where corridors limit enemy movement. The Windrose Blunderbuss pairs perfectly with the Gunpowder Bomber build.
          </p>

          <h3>Windrose Hand Cannon</h3>
          <p>
            The <strong>Windrose Hand Cannon</strong> is the highest-damage single Windrose firearm, firing a small cannonball that deals massive damage but has an extremely slow reload. Windrose Hand Cannons are used against heavily armored Windrose enemies and bosses. This Windrose weapon requires the highest <Link href="/windrose-gunpowder">gunpowder</Link> grade for maximum effectiveness.
          </p>

          <h2>Windrose Melee Weapons</h2>
          <h3>Windrose Cutlass</h3>
          <p>
            The <strong>Windrose Cutlass</strong> is the standard pirate blade — fast-attacking with good damage and reach. The Windrose Cutlass is the most commonly used Windrose melee weapon and the recommended starting choice for new Windrose players. Windrose Cutlass damage scales with Strength and Finesse stats.
          </p>

          <h3>Windrose Boarding Axe</h3>
          <p>
            The <strong>Windrose Boarding Axe</strong> trades attack speed for massive burst damage. Windrose Boarding Axes excel against armored targets and deal bonus damage when used during Windrose boarding actions. The heavy Windrose Boarding Axe is the signature Windrose weapon for the Boarding Specialist build.
          </p>

          <h3>Windrose Naval Sword</h3>
          <p>
            The <strong>Windrose Naval Sword</strong> is a longer, more elegant Windrose melee weapon that offers a balance of reach, speed, and damage. Naval Swords in Windrose scale with Finesse and are the preferred Windrose melee weapon for the Ship Captain build — functional in ground combat while not hindering naval command activities.
          </p>

          <h2>Windrose Explosive Weapons</h2>
          <h3>Windrose Powder Keg</h3>
          <p>
            The <strong>Windrose Powder Keg</strong> is a deployable explosive that can be placed and detonated remotely. Windrose Powder Kegs deal massive AoE damage and are central to the Gunpowder Bomber build. Strategic placement of Windrose Powder Kegs in dungeon choke points can eliminate entire groups of Windrose enemies instantly.
          </p>

          <h3>Windrose Bomb Pouch</h3>
          <p>
            The <strong>Windrose Bomb Pouch</strong> allows you to carry multiple throwable Windrose bombs. Windrose thrown bombs deal AoE explosive damage and can be used to soften up Windrose boss encounters before entering melee range. The Windrose Bomb Pouch secondary is excellent for almost any Windrose build that doesn't use a melee secondary.
          </p>

          <h2>Windrose Weapon Combos</h2>
          <h3>Best Windrose Weapon Combos by Build</h3>
          <p>
            The right <strong>Windrose weapon</strong> combination amplifies your build's strengths:
          </p>
          <ul>
            <li><strong>Windrose Gunpowder Bomber:</strong> Blunderbuss + Bomb Pouch</li>
            <li><strong>Windrose Boarding Specialist:</strong> Boarding Axe + Flintlock Pistol</li>
            <li><strong>Windrose Ship Captain:</strong> Flintlock Musket + Naval Sword</li>
            <li><strong>Windrose Support Crew:</strong> Compact Pistol + Medic's Kit</li>
            <li><strong>Solo Windrose player:</strong> Cutlass + Flintlock Pistol (most versatile Windrose combo)</li>
          </ul>

          <h2>Windrose Weapon Upgrades</h2>
          <p>
            <strong>Windrose weapons</strong> can be upgraded at your Windrose settlement's blacksmith. Each upgrade tier increases base damage, improves reload time (for Windrose firearms), or adds special properties like fire damage or armor piercing. Windrose weapon upgrades require iron ingots, exotic materials from Windrose dungeons, and gold.
          </p>
          <p>
            High-tier <strong>Windrose weapon</strong> upgrades also require rare crafting components found exclusively in advanced Windrose dungeons. Planning your Windrose weapon upgrade path alongside your <Link href="/windrose-builds">Windrose build</Link> ensures you get the most value from your crafting investment.
          </p>

          <div className="warn-box">
            <strong>Note:</strong> Windrose weapon stats are subject to balance changes during Early Access. This Windrose weapons guide will be updated after each major Windrose patch. Check <Link href="/windrose-steam">Windrose Steam</Link> patch notes for the latest weapon balance changes.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-weapons" />
      </main>
      <Footer />
    </>
  );
}
