import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Builds – Best Build Guide for All Playstyles 2026',
  description: 'The best Windrose builds for solo and co-op play. Gunpowder builds, boarding specialist, ship captain, and support crew builds with full stat guides.',
  keywords: ['windrose builds', 'windrose build', 'windrose', 'windrose best build', 'windrose gunpowder build', 'windrose guide'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-builds' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Windrose Builds – Best Build Guide for All Playstyles 2026',
  description: 'The best Windrose builds for every playstyle in 2026.',
  datePublished: '2026-04-14',
  dateModified: new Date().toISOString().split('T')[0],
  author: { '@type': 'Organization', name: 'Windrose Guide' },
};

const related = [
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'Best weapons for each build' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full game mechanics reference' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Crew composition for builds' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Core mechanics for builds' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship synergies for builds' },
  { href: '/windrose-gunpowder', label: 'Windrose Gunpowder', desc: 'Gunpowder crafting for builds' },
];

export default function WindroseBuildsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Builds' }]} />
        </div>

        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>Build Guide 2026</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
              Windrose Builds
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The definitive <strong style={{ color: 'var(--color-text)' }}>Windrose builds</strong> guide for 2026. Whether you're playing Windrose solo or in a co-op crew of 4–8 players, find the perfect Windrose build for your playstyle.
            </p>
          </div>
        </section>

        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Understanding Windrose Builds</h2>
          <p>
            <strong>Windrose builds</strong> define how your character performs in the Windrose game. A Windrose build is the combination of your skill specializations, <Link href="/windrose-weapons">Windrose weapons</Link> of choice, armor set, and <Link href="/windrose-crew">Windrose crew</Link> composition. Choosing the right Windrose build dramatically affects your effectiveness in both Windrose dungeons and naval combat.
          </p>
          <p>
            <strong>Windrose</strong> currently offers four main build archetypes, each excelling in different situations. Understanding which Windrose build suits your playstyle — and how to optimize it with the right Windrose weapons and crew — is the foundation of mastering the Windrose game.
          </p>

          <h2>Best Windrose Builds 2026</h2>

          <h3>1. Windrose Gunpowder Bomber Build</h3>
          <p>
            The <strong>Windrose Gunpowder Bomber build</strong> is the most popular Windrose build for dealing massive area damage. This Windrose build centers on <Link href="/windrose-gunpowder">gunpowder</Link> explosives, bomb traps, and high-caliber firearms to clear dungeon rooms quickly. The Windrose Gunpowder Bomber build excels at clearing grouped Windrose enemies but requires careful ammo management.
          </p>
          <ul>
            <li><strong>Primary Windrose Weapon:</strong> Blunderbuss or Hand Cannon</li>
            <li><strong>Secondary Windrose Weapon:</strong> Powder Keg or Bomb Pouch</li>
            <li><strong>Windrose Skill Focus:</strong> Explosives Mastery, Gunpowder Efficiency</li>
            <li><strong>Best Windrose Crew:</strong> Supply officer (for gunpowder resupply) + combat gunner</li>
            <li><strong>Windrose Build Weakness:</strong> High gunpowder consumption, less effective in tight corridors</li>
          </ul>

          <h3>2. Windrose Boarding Specialist Build</h3>
          <p>
            The <strong>Windrose Boarding Specialist build</strong> is the premier close-quarters Windrose build for players who enjoy high-intensity melee combat. This Windrose build specializes in boarding enemy Windrose ships and fighting through their crew, using heavy Windrose melee weapons combined with short-range pistols for gap-closing.
          </p>
          <ul>
            <li><strong>Primary Windrose Weapon:</strong> Cutlass or Boarding Axe</li>
            <li><strong>Secondary Windrose Weapon:</strong> Flintlock Pistol or Grappling Hook</li>
            <li><strong>Windrose Skill Focus:</strong> Melee Mastery, Boarding Speed, Ship Disruption</li>
            <li><strong>Best Windrose Crew:</strong> Additional melee boarders + one ranged cover crewmate</li>
            <li><strong>Windrose Build Weakness:</strong> Vulnerable to massed ranged Windrose enemies</li>
          </ul>

          <h3>3. Windrose Ship Captain Build</h3>
          <p>
            The <strong>Windrose Ship Captain build</strong> is designed for players who want to dominate Windrose naval combat. This Windrose build maximizes your Windrose ship's effectiveness through naval command skills, improved cannon accuracy, ship speed bonuses, and crew coordination buffs. The Windrose Ship Captain build is the best Windrose build for taking down large Windrose enemy fleets.
          </p>
          <ul>
            <li><strong>Primary Windrose Weapon:</strong> Flintlock Rifle (for long-range suppression)</li>
            <li><strong>Secondary Windrose Weapon:</strong> Naval Sword (for boarding defense)</li>
            <li><strong>Windrose Skill Focus:</strong> Naval Command, Crew Efficiency, Ship Armor, Cannon Reload</li>
            <li><strong>Best Windrose Ship:</strong> Frigate or Man-o'-War for this Windrose build</li>
            <li><strong>Windrose Build Weakness:</strong> Less effective in dungeon ground combat</li>
          </ul>

          <h3>4. Windrose Support Crew Build</h3>
          <p>
            The <strong>Windrose Support Crew build</strong> is the backbone of any successful Windrose co-op team. This Windrose build focuses on keeping the crew supplied, buffed, and healed during extended Windrose dungeon runs. The Windrose Support Crew build makes the entire team more effective and is especially valuable in the hardest Windrose content.
          </p>
          <ul>
            <li><strong>Primary Windrose Weapon:</strong> Compact Pistol (light, leaves hands free)</li>
            <li><strong>Secondary Windrose Weapon:</strong> Medic's Kit or Supply Pack</li>
            <li><strong>Windrose Skill Focus:</strong> Crew Morale, Supply Efficiency, Emergency Repairs, Ammo Distribution</li>
            <li><strong>Best Windrose Crew Pairing:</strong> Works with any 3 DPS Windrose builds</li>
            <li><strong>Windrose Build Weakness:</strong> Low individual damage output</li>
          </ul>

          <h2>Windrose Build Tips & Optimization</h2>

          <h3>Windrose Build Synergies</h3>
          <p>
            The most effective <strong>Windrose</strong> co-op teams combine multiple Windrose builds that complement each other. A classic Windrose team composition is: 1 Windrose Gunpowder Bomber (primary DPS) + 1 Windrose Boarding Specialist (melee clearing) + 1 Windrose Ship Captain (naval phase) + 1 Windrose Support Crew (sustain and resupply). This Windrose build combination covers every phase of Windrose gameplay.
          </p>

          <h3>Windrose Build Equipment</h3>
          <p>
            No <strong>Windrose build</strong> works without the right equipment. Each Windrose build benefits from specific armor sets that enhance its core stats. The Windrose Gunpowder Bomber build works best with the Powder Monkey armor set (+gunpowder capacity), while the Windrose Boarding Specialist build benefits from the Sea Rover armor (+melee damage, +boarding speed).
          </p>

          <h3>Windrose Build Progression</h3>
          <p>
            <strong>Windrose builds</strong> evolve as you progress through the Windrose game. Early-game Windrose builds should focus on survivability and resource efficiency — you can't optimize a Windrose build if you run out of gunpowder or die in every Windrose dungeon. Mid-game Windrose builds can afford to specialize more aggressively as your Windrose settlement production scales up.
          </p>

          <h2>Windrose Builds for Solo Play</h2>
          <p>
            Playing <strong>Windrose</strong> solo requires a more self-sufficient Windrose build. The best Windrose builds for solo play combine elements of multiple archetypes — typically blending the Windrose Gunpowder Bomber's damage output with some Windrose Support Crew's self-sufficiency skills. Solo Windrose players should prioritize crew NPCs that compensate for missing co-op teammates.
          </p>
          <p>
            The <strong>Windrose</strong> AI crew system lets solo players recruit NPC crew members for their Windrose ship. These Windrose NPCs can handle tasks like manning cannons, repairing the ship, and fighting alongside you in Windrose dungeons. See our <Link href="/windrose-crew">Windrose crew guide</Link> for details on which NPC crew types best support solo Windrose builds.
          </p>

          <h2>Windrose Builds FAQ</h2>
          <h3>What is the best Windrose build for beginners?</h3>
          <p>
            The best starting <strong>Windrose build</strong> for new players is a simplified version of the Windrose Boarding Specialist — melee combat is more forgiving of mistakes than gunpowder management, and the Windrose melee weapons are readily available early in the game. As you learn Windrose mechanics, you can transition to more specialized Windrose builds.
          </p>

          <h3>Can you respec your Windrose build?</h3>
          <p>
            Yes, <strong>Windrose</strong> allows players to respec their build via a Windrose character reset option available at your Windrose settlement. Respeccing your Windrose build costs some gold and resources, so plan your Windrose build path before investing heavily in one direction.
          </p>

          <div className="info-box">
            <strong>Windrose Builds Pro Tip:</strong> Coordinate Windrose builds with your co-op crew before starting a session. A Windrose team where everyone chose the same build will struggle — diversity in Windrose builds is the key to success in high-difficulty content.
          </div>

        </article>

        <RelatedPages pages={related} />
        <CommentBox page="windrose-builds" />
      </main>
      <Footer />
    </>
  );
}
