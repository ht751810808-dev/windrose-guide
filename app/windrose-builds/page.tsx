import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Builds – Best Build Guide 2026 (Rapier, Halberd & More)',
  description: 'Best Windrose builds for 2026: Rapier Precision (S+ Tier), Plague Halberd AoE (S Tier), gunpowder builds, boarding melee, and co-op team compositions. No class system — pure talent + weapon combos.',
  keywords: ['windrose builds', 'windrose build', 'windrose', 'windrose best build', 'windrose rapier build', 'windrose guide'],
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
              The definitive <strong style={{ color: 'var(--color-text)' }}>Windrose builds</strong> guide for 2026 — best weapon and talent combos for solo and co-op, tier rankings, and faction-based recommendations.
            </p>
          </div>
        </section>

        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>How Windrose Builds Work</h2>
          <p>
            <strong>Windrose</strong> has no character classes. Instead, your build is defined entirely by three factors: your <strong>stats and talent choices</strong>, your <strong>armor set</strong>, and your <strong>weapon + equipment combination</strong>. This open system means every player can create a unique <strong>Windrose build</strong> suited to their playstyle, and respeccing is possible (at a gold and resource cost) if you want to change direction.
          </p>
          <p>
            <strong>Windrose</strong> features souls-lite combat mechanics — precise dodges and guard-breaking parries — so your build needs to account for both raw damage and survivability. The best <strong>Windrose builds</strong> in the current meta lean heavily on weapon mastery synergies and talent tree depth rather than a single stat stack.
          </p>

          <h2>Windrose Build Tier List 2026</h2>
          <p>
            Based on community testing across all currently accessible biomes (Coastal Jungle, Foothills, Cursed Swamps):
          </p>

          <h3>S+ Tier: Rapier Precision Build</h3>
          <p>
            The <strong>Windrose Rapier Precision Build</strong> is the current community-ranked top build. The Rapier is a fast, accurate melee weapon that rewards precise timing with extremely high single-target damage — perfectly suited for Windrose&apos;s souls-lite parry-and-counter combat system. This build excels in solo play and co-op ground combat, especially in tight POI corridors where faster-swinging weapons dominate.
          </p>
          <ul>
            <li><strong>Primary Weapon:</strong> Rapier</li>
            <li><strong>Talent Focus:</strong> Blade Mastery, Parry Window Extension, Stamina Recovery</li>
            <li><strong>Armor:</strong> Medium-weight sets that don&apos;t cap dodge speed</li>
            <li><strong>Strengths:</strong> Highest single-target DPS, excellent against POI bosses, stamina-efficient</li>
            <li><strong>Weaknesses:</strong> Low AoE capability, struggles in large enemy groups without support</li>
            <li><strong>Best For:</strong> Experienced players comfortable with parry timing, boss specialist roles in co-op</li>
          </ul>

          <h3>S Tier: Plague Halberd AoE Build</h3>
          <p>
            The <strong>Windrose Plague Halberd Build</strong> leverages the Halberd&apos;s wide cleave attacks to clear groups of enemies simultaneously — essential for the Cursed Swamps zone where enemy density spikes. The Plague variant adds a damage-over-time effect that stacks across multiple targets hit by each cleave, creating powerful AoE pressure in crowded POI rooms.
          </p>
          <ul>
            <li><strong>Primary Weapon:</strong> Plague Halberd</li>
            <li><strong>Talent Focus:</strong> Polearm Mastery, Bleed/Poison Amplification, Heavy Strike</li>
            <li><strong>Armor:</strong> Heavy armor tolerable given the Halberd&apos;s range keeps enemies at distance</li>
            <li><strong>Strengths:</strong> Best group clear in the game, excellent for Cursed Swamps, DoT bypasses some boss armor</li>
            <li><strong>Weaknesses:</strong> Slower attack speed, requires good positioning to land full cleaves</li>
            <li><strong>Best For:</strong> POI clearing, Cursed Swamps progression, co-op ground combat anchor</li>
          </ul>

          <h3>A Tier: Gunpowder Ranged Build</h3>
          <p>
            The <strong>Windrose Gunpowder Ranged Build</strong> combines high-powered firearms with explosive secondary items. Blunderbusses and Hand Cannons deal burst damage at mid-range while Powder Kegs handle area denial. The build&apos;s power is limited by <Link href="/windrose-gunpowder">gunpowder supply</Link> — once Millstones crafting is established, the supply constraint largely disappears.
          </p>
          <ul>
            <li><strong>Primary Weapon:</strong> Blunderbuss or Hand Cannon</li>
            <li><strong>Secondary:</strong> Powder Keg or Bomb Pouch</li>
            <li><strong>Talent Focus:</strong> Firearms Mastery, Explosive Radius, Reload Speed</li>
            <li><strong>Strengths:</strong> Safe ranged engagement, high burst damage, great for naval boarding defense</li>
            <li><strong>Weaknesses:</strong> Heavily gunpowder-dependent; weak before Millstones is established</li>
            <li><strong>Best For:</strong> Players who prioritize ranged combat and have a solid gunpowder supply chain</li>
          </ul>

          <h3>A Tier: Boarding Melee Build</h3>
          <p>
            The <strong>Windrose Boarding Melee Build</strong> focuses on close-quarters dominance — cutlasses, boarding axes, and short-range pistols for gap closing. It excels in naval boarding actions where tight ship corridors favor melee over ranged. Works best in co-op where another player provides ranged cover.
          </p>
          <ul>
            <li><strong>Primary Weapon:</strong> Cutlass or Boarding Axe</li>
            <li><strong>Secondary:</strong> Flintlock Pistol</li>
            <li><strong>Talent Focus:</strong> Melee Mastery, Boarding Speed, Stamina Pool</li>
            <li><strong>Strengths:</strong> Outstanding in ship boarding, low resource consumption (no gunpowder dependency)</li>
            <li><strong>Weaknesses:</strong> Vulnerable to massed ranged enemies, limited range</li>
            <li><strong>Best For:</strong> Co-op players who love boarding actions, players who want to conserve gunpowder</li>
          </ul>

          <h3>B Tier: Naval Captain Build</h3>
          <p>
            The <strong>Windrose Naval Captain Build</strong> invests talent points into ship command abilities — improved cannon accuracy, faster crew order cooldowns, and fleet maneuvering bonuses. It is strongest in pure naval combat and weakest during on-foot POI runs. Best suited to players who prioritize the ship-to-ship combat layer of Windrose and delegate ground clearing to co-op teammates.
          </p>
          <ul>
            <li><strong>Primary Weapon:</strong> Flintlock Rifle (for long-range deck suppression)</li>
            <li><strong>Talent Focus:</strong> Naval Command, Crew Efficiency, Cannon Reload, Ship Armor</li>
            <li><strong>Best Ship:</strong> <Link href="/windrose-ships">Frigate Blackbeard</Link> (36-pound cannon access)</li>
            <li><strong>Weaknesses:</strong> Significantly weaker in dungeon/ground combat; requires co-op partners for POI runs</li>
          </ul>

          <h2>Windrose Build System: Talents & Stats</h2>
          <p>
            <strong>Windrose</strong> talent trees are unlocked as you level — and you only level by completing quests or fully exploring POIs (killing enemies gives zero XP). Plan your talent investment around the weapons you commit to early; switching weapon categories mid-game means leveling a new mastery branch from scratch.
          </p>
          <p>
            Stat allocation in <strong>Windrose</strong> follows standard survival RPG patterns: Strength increases melee damage, Dexterity improves ranged weapon handling and reload speed, Constitution increases HP and stamina, and Luck affects loot quality and critical hit chance. There are no hard stat gates — any build can invest in any stat — but talent tree unlocks require meeting minimum stat thresholds for their branch.
          </p>

          <h2>Windrose Build Faction Synergies</h2>
          <p>
            Your chosen <strong>Windrose faction</strong> unlocks build-specific rewards at higher reputation tiers. Relevant synergies:
          </p>
          <ul>
            <li><strong>Smugglers</strong> — black-market crafting recipes that complement Gunpowder Ranged builds (cheaper explosive components, enhanced bomb recipes)</li>
            <li><strong>Buccaneers</strong> — combat bonuses and raiding-focused gear that enhances Boarding Melee builds</li>
            <li><strong>Brethren</strong> — Brethren ship hull variants and crew bonuses that support Naval Captain builds</li>
            <li><strong>People of Tortuga</strong> — widest merchant selection; useful for any build, especially for respec materials and rare weapon parts</li>
          </ul>

          <h2>Co-op Team Compositions</h2>
          <p>
            The strongest <strong>Windrose co-op</strong> team covers multiple combat phases. A recommended 4-player Windrose build composition:
          </p>
          <ul>
            <li><strong>Player 1:</strong> Rapier Precision — boss damage specialist and parry anchor in POIs</li>
            <li><strong>Player 2:</strong> Plague Halberd — group clearing and Cursed Swamps zone coverage</li>
            <li><strong>Player 3:</strong> Gunpowder Ranged — naval boarding defense and mid-range burst</li>
            <li><strong>Player 4:</strong> Naval Captain — ship management, cannon coordination, crew orders</li>
          </ul>

          <h2>Windrose Builds FAQ</h2>
          <h3>What is the best Windrose build for beginners?</h3>
          <p>
            Start with the <strong>Boarding Melee Build</strong> using a Cutlass — melee combat forgives positioning mistakes better than ranged in early-game Coastal Jungle POIs, and it requires no gunpowder supply chain to operate. Transition to Rapier once you understand the parry system, or pivot to Gunpowder Ranged once your Millstones is producing.
          </p>

          <h3>Can you respec your Windrose build?</h3>
          <p>
            Yes — respeccing your <strong>Windrose</strong> talent tree is available through a character reset option at your settlement, at a gold and material cost. It&apos;s not free, but it&apos;s not prohibitive either. Experiment with different weapon types before committing deeply to one talent branch.
          </p>

          <h3>Is there a class system in Windrose?</h3>
          <p>
            No. <strong>Windrose</strong> has no character classes. Your build is entirely defined by your stats, talent choices, armor, and weapon selection. Every player starts from the same baseline and can build toward any archetype.
          </p>

          <div className="info-box">
            <strong>Windrose Builds Pro Tip:</strong> Coordinate build choices with your co-op crew before starting a session. A team of four Rapier builds will shred single bosses but struggle with mass-enemy POI rooms. Build diversity — at least one AoE option and one ranged option — covers every combat situation Windrose throws at you.
          </div>

        </article>

        <RelatedPages pages={related} />
        <CommentBox page="windrose-builds" />
      </main>
      <Footer />
    </>
  );
}
