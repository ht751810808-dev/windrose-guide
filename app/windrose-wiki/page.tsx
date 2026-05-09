import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Wiki – Complete Game Encyclopedia & Reference Guide 2026',
  description: 'The complete Windrose wiki: all game mechanics, biomes (Coastal Jungle, Foothills, Cursed Swamps, Ashlands), factions (Smugglers, Buccaneers, Brethren, Tortuga), ships, builds, and progression.',
  keywords: ['windrose wiki', 'windrose', 'windrose game', 'windrose guide', 'windrose encyclopedia', 'windrose mechanics'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-wiki' },
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Windrose Wiki – Complete Game Encyclopedia & Reference Guide',
  description: 'The complete Windrose wiki covering all game mechanics, lore, biomes, factions, and systems.',
  datePublished: '2026-04-14',
  dateModified: new Date().toISOString().split('T')[0],
  author: { '@type': 'Organization', name: 'Windrose Guide' },
  publisher: { '@type': 'Organization', name: 'Windrose Guide', url: 'https://www.windroseguide.com' },
};

const related = [
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best build guides for all playstyles' },
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'All weapons, stats & combos' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ketch, Brigantine & Frigate guide' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'NPC crew recruitment & management' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'Interactive map & biome guide' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Beginner tips & core mechanics' },
];

export default function WindroseWikiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Wiki' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>Game Encyclopedia</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
              Windrose Wiki
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The definitive <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> wiki and game encyclopedia — mechanics, biomes, factions, ships, progression, and every system in the game explained.
            </p>
          </div>
        </section>

        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>What Is Windrose?</h2>
          <p>
            <strong>Windrose</strong> is a co-operative PvE survival adventure set in an alternate Age of Piracy, developed by <strong>Kraken Express</strong> (a studio based in Uzbekistan) and published by <strong>Pocketpair Publishing</strong> — the Japanese studio behind Palworld. Windrose launched on Steam Early Access on April 14, 2026, and became an immediate hit: over <strong>1 million copies sold in 6 days</strong>, nearly <strong>200,000 concurrent players</strong> at peak, and an 89% positive rating across 20,000+ Steam reviews.
          </p>
          <p>
            Players and critics have called <strong>Windrose</strong> "the pirate Valheim" — a survival crafting foundation built around ships, island exploration, and intense boss fights, playable fully solo or in co-op with up to 8 players. A <strong>free demo</strong> is available on Steam (App ID 4291770) offering roughly 4–6 hours of content covering the first three islands, early quests, and your first ship.
          </p>

          <h2>Core Gameplay Loop</h2>
          <h3>Build, Craft, Survive — On the Seas</h3>
          <p>
            The <strong>Windrose</strong> core loop blends three pillars: <strong>exploration</strong> (sailing the open world, discovering islands and POIs), <strong>combat</strong> (naval broadside fights and souls-lite on-foot dungeon encounters), and <strong>base-building</strong> (capturing islands, constructing settlement buildings, crafting resources including <Link href="/windrose-gunpowder">gunpowder</Link>).
          </p>
          <p>
            <strong>Windrose</strong> features souls-lite combat mechanics — precise dodges and guard-breaking parries — but with a more forgiving death system than traditional Soulslike games. When you die, you drop upgrade materials and items on the ground, but they don&apos;t disappear: you can always return to retrieve them.
          </p>

          <h3>Progression: XP from Quests and POI Exploration</h3>
          <p>
            Unlike most survival games, <strong>Windrose</strong> does not award XP for killing enemies. Experience points are only earned by <strong>completing quests</strong> or <strong>fully exploring a Point of Interest</strong>. This design pushes players to thoroughly clear POIs rather than grind mobs, and ensures progression is tied to meaningful exploration rather than repetitive farming.
          </p>
          <p>
            Rather than character classes, <strong>Windrose</strong> builds identity through <strong>stat allocation, talent choices, armor, and weapon combinations</strong>. There are no locked classes — your character can be built toward any archetype through the talent tree and gear loadout. See our <Link href="/windrose-builds">Windrose builds guide</Link> for current meta options.
          </p>

          <h2>Windrose Biomes</h2>
          <p>
            The <strong>Windrose</strong> world map is an archipelago procedurally placed across four planned biomes, each with distinct enemies, resources, and POI types. At Early Access launch, three of the four biomes are accessible:
          </p>
          <ul>
            <li><strong>Coastal Jungle</strong> — the starting biome. Dense jungle islands, abundant wood and basic resources, pirate camps, and the easiest POI tier. New players begin all Windrose sessions here.</li>
            <li><strong>Foothills</strong> — the mid-game biome where iron ore and Sulfur first appear. Unlocking the Foothills is the key step toward crafting <Link href="/windrose-gunpowder">gunpowder at Millstones</Link> and upgrading to heavier cannon calibers.</li>
            <li><strong>Cursed Swamps</strong> — a late-game biome accessible at launch but considered incomplete by the developers. Features supernatural enemies and high-tier loot, but with less POI density than Coastal Jungle and Foothills.</li>
            <li><strong>Ashlands</strong> — planned for a future update; not accessible at Early Access launch. On the <Link href="/windrose-roadmap">Windrose roadmap</Link> as a major content addition.</li>
          </ul>
          <p>
            Each <strong>Windrose</strong> session map is procedurally generated — islands within each biome are placed differently each run based on a seed system. The community has built an <Link href="/windrose-map">interactive map tool</Link> that auto-detects your seed and shows every island, POI, and chest placement.
          </p>

          <h2>Windrose Factions</h2>
          <p>
            <strong>Windrose</strong> features four playable factions, each controlling different territories and offering unique quests, crafting recipes, and items in exchange for reputation. Reputation is built by giving tokens to each faction or completing faction-specific quests. Not all factions accept the same smuggled goods — knowing what each faction values is part of the progression.
          </p>
          <ul>
            <li><strong>Smugglers</strong> — specialists in illicit trade and contraband. Leveling Smuggler reputation unlocks black-market crafting recipes and smuggling quest chains.</li>
            <li><strong>Buccaneers</strong> — independent sea raiders. Buccaneer reputation rewards offensive combat bonuses and access to raiding-focused gear.</li>
            <li><strong>Brethren</strong> — a pirate brotherhood with codes of conduct. Brethren-aligned players gain access to Brethren hull variants on <Link href="/windrose-ships">Windrose ships</Link> and safe harbor at Brethren ports.</li>
            <li><strong>People of Tortuga</strong> — the inhabitants of Tortuga, a neutral trading port. Tortuga reputation unlocks the widest variety of merchant goods and the most quest chains.</li>
          </ul>
          <p>
            You can raise reputation with multiple <strong>Windrose factions</strong> simultaneously, but some faction quests create conflict between groups. Prioritize the faction whose rewards align with your <Link href="/windrose-builds">build</Link> and playstyle. Community guides recommend leveling the faction that offers the crafting recipes you need most first.
          </p>

          <h2>Windrose Ships</h2>
          <p>
            <strong>Windrose</strong> features three ship classes — <strong>Ketch</strong>, <strong>Brigantine</strong>, and <strong>Frigate</strong> — each available in Stock, Brethren, and Blackbeard variants. The Blackbeard Frigate is the only hull in the game that mounts 36-pound cannons, making it the most powerful naval combat platform available. See the full <Link href="/windrose-ships">Windrose ships guide</Link> for all stats, variants, and upgrade paths.
          </p>
          <p>
            <strong>Windrose naval combat</strong> is inspired by Assassin's Creed: Black Flag — broadside positioning, aiming with glowing white directional arrows, and a secondary Chain Shot ammo type for disabling enemy sails before boarding. Ship Parts (cannons, hull modifications, rigging, crew orders) are modular and swappable at the Dockyard.
          </p>

          <h2>Windrose Bosses</h2>
          <p>
            Each <strong>Windrose</strong> biome contains major bosses — historically-inspired characters with supernatural abilities tied to the alternate Age of Piracy lore. Boss fights in Windrose test your build&apos;s sustained damage, dodge timing, and gunpowder management. Defeating a biome boss unlocks lore entries in your journal and drops the rarest materials in that tier.
          </p>
          <p>
            The <strong>Windrose</strong> boss design philosophy is similar to Soulslike bosses — each has a moveset you learn across multiple attempts — but the death penalty is softer than traditional Souls games, making repeat attempts less punishing for co-op groups.
          </p>

          <h2>Windrose Multiplayer & Co-op</h2>
          <p>
            <strong>Windrose</strong> supports 1–8 players in co-op, with gameplay best optimized for groups of 4. The multiplayer system is session-based: one player hosts, others join via Steam friends list or public lobby. Dedicated server support is also available for persistent world hosting.
          </p>
          <p>
            Co-op significantly enhances the <strong>Windrose</strong> experience — shared base-building, coordinated naval broadside fire, and role specialization (helmsman, gunner, boarder, supply manager) create emergent teamwork that elevates the game above its solo experience. The game&apos;s 89% positive Steam reviews emphasize that co-op with friends is where Windrose truly shines.
          </p>

          <h2>Windrose Early Access & Roadmap</h2>
          <p>
            <strong>Windrose</strong> is in active Early Access development with a committed 1.5–2.5 year timeline before the full 1.0 release. Planned additions include the complete Ashlands biome, expanded faction content, additional ship types, PvP opt-in zones, and a fully voiced story campaign. See the <Link href="/windrose-roadmap">Windrose roadmap</Link> for the full development schedule.
          </p>

          <div className="info-box">
            <strong>Windrose Wiki Tip:</strong> This wiki is updated as new Windrose patches arrive. For the latest faction balance changes and new POI discoveries, also check the <Link href="/windrose-reddit">Windrose community</Link> and the Steam patch notes on the <Link href="/windrose-steam">Windrose Steam page</Link>.
          </div>

        </article>

        <RelatedPages pages={related} />
        <CommentBox page="windrose-wiki" />
      </main>
      <Footer />
    </>
  );
}
