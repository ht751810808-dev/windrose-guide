import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Map – All Biomes, POIs & Interactive Map Guide 2026',
  description: 'Windrose map guide: all four biomes (Coastal Jungle, Foothills, Cursed Swamps, Ashlands), POI types, seed-based interactive map tool, boss locations, and navigation tips.',
  keywords: ['windrose map', 'windrose interactive map', 'windrose', 'windrose biomes', 'windrose POI map', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-map' },
};

const related = [
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Navigate the map by sea' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Navigator crew bonuses' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full biome information' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Exploration basics' },
  { href: '/windrose-gunpowder', label: 'Windrose Gunpowder', desc: 'Sulfur in Foothills biome' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Builds for different biomes' },
];

export default function WindroseMapPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Map' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-teal" style={{ marginBottom: '1rem' }}>World Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Map</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The complete <strong style={{ color: 'var(--color-text)' }}>Windrose map</strong> guide — all biomes, POI types, how to use the seed-based interactive map tool, boss locations, and navigation tips for 2026.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>How the Windrose Map Works</h2>
          <p>
            The <strong>Windrose map</strong> is procedurally generated — each playthrough places islands, POIs, and resources differently based on a <strong>seed value</strong>. The biome structure, enemy types, and resource categories stay consistent, but the exact layout changes every session. This means there is no single static Windrose map that applies to everyone.
          </p>
          <p>
            The <strong>Windrose interactive map</strong> community tool (available at windrose.gaming.tools and windrose.tools) is seed-driven: you drop in your save file and it auto-detects your seed, then displays every island, POI, chest, and resource placement for your specific map. This is the most accurate way to navigate your Windrose world without manually exploring every corner.
          </p>

          <h2>Windrose Biomes: All Four Regions</h2>

          <h3>1. Coastal Jungle (Starting Biome)</h3>
          <p>
            The <strong>Coastal Jungle</strong> is where all <strong>Windrose</strong> players begin. Dense jungle islands, shallow coves, pirate camps, and early-tier POIs define this biome. The Coastal Jungle is the most fully developed zone in Early Access — the best POI density, the most quest hooks, and the most accessible enemy difficulty.
          </p>
          <p>
            Key resources in the <strong>Coastal Jungle</strong>: wood (abundant), fiber, basic stone, and early-game loot from pirate camps. <Link href="/windrose-gunpowder">Gunpowder</Link> here comes from enemy drops and POI chests — you cannot craft it until you reach the Foothills. Your Charcoal Kiln should run constantly in this biome to build up an Ash stockpile for later.
          </p>
          <p>
            The Coastal Jungle is also where you complete the two critical early quests: <strong>"Rescue the Crew"</strong> (recruit 7 crewmates) and <strong>"I Need a Bigger Boat"</strong> (unlock the Shipwright's Workshop).
          </p>

          <h3>2. Foothills (Mid-Game Biome)</h3>
          <p>
            The <strong>Foothills</strong> is the pivotal mid-game biome — the first place where <strong>iron ore</strong> appears, and the only place to source <strong>Sulfur</strong> for <Link href="/windrose-gunpowder">Millstones gunpowder crafting</Link>. Reaching the Foothills and establishing an outpost here is the single most important progression step in Windrose after the starting quests.
          </p>
          <p>
            Foothills terrain is characterized by elevated rocky islands, river valleys, and denser enemy fortifications than the Coastal Jungle. Enemy pirate factions in the Foothills are better equipped — expect muskets, light armor, and more organized patrol routes. The biome&apos;s POI density is strong and this is where XP-per-hour peaks for mid-game players.
          </p>
          <p>
            Critical Foothills resources: <strong>iron ore</strong> (for Iron Pickaxes and better weapons), <strong>Sulfur</strong> (mined with Iron Pickaxe — the key gunpowder ingredient), and higher-tier crafting materials unavailable in the Coastal Jungle.
          </p>

          <h3>3. Cursed Swamps (Late-Game Biome)</h3>
          <p>
            The <strong>Cursed Swamps</strong> biome is accessible at Early Access launch but described by the developers as incomplete — it has fewer POIs than Coastal Jungle and Foothills, and some content is still being finalized. What exists is the highest-difficulty content available: supernatural enemies, challenging boss encounters, and rare loot tiers unavailable elsewhere.
          </p>
          <p>
            Players entering the <strong>Cursed Swamps</strong> should have a fully upgraded <Link href="/windrose-ships">Frigate</Link>, a complete <Link href="/windrose-crew">crew</Link>, and a well-established <Link href="/windrose-gunpowder">gunpowder</Link> supply chain. The Cursed Swamps rewards experienced players but will punish underprepared ones quickly. The community recommends completing all Foothills content before pushing here.
          </p>

          <h3>4. Ashlands (Upcoming — Not Yet Accessible)</h3>
          <p>
            The <strong>Ashlands</strong> is the fourth planned biome for <strong>Windrose</strong>, currently on the <Link href="/windrose-roadmap">development roadmap</Link> and not accessible at Early Access launch. Based on developer communications, the Ashlands will be a volcanic, ash-covered region with unique enemies, resources, and the highest-tier content in the game. Follow the <Link href="/windrose-roadmap">Windrose roadmap</Link> for release timing.
          </p>

          <h2>Windrose POIs (Points of Interest)</h2>
          <p>
            <strong>Windrose</strong> uses a POI system rather than traditional dungeons. POIs are distinct encounter zones — pirate forts, shipwrecks, ruins, caves, enemy camps — each with a set of enemies, optional objectives, and a chest at completion. Fully clearing a POI grants bonus XP in addition to the loot (partial clears grant zero XP bonus). This makes full POI exploration the highest-value activity for character progression.
          </p>
          <p>
            POI difficulty scales with biome: Coastal Jungle POIs are beginner-friendly, Foothills POIs require good gear and builds, Cursed Swamps POIs demand optimized co-op teams. Each biome has POIs with unique architectural styles, enemy factions, and loot tables appropriate to that region.
          </p>

          <h2>Windrose Bosses on the Map</h2>
          <p>
            Each biome contains major boss encounters — larger, named enemies with unique movesets and lore. <strong>Windrose bosses</strong> are historically-inspired characters with supernatural powers, drawing from an alternate Age of Piracy setting. Defeating a biome boss drops the rarest crafting materials and lore journal entries. The boss fights are souls-lite in design: you learn the moveset across attempts, and once you understand the attack patterns, the fight becomes manageable.
          </p>
          <p>
            The community&apos;s seed-based interactive map tools (windrose.tools/map) include boss spawn locations for known seeds, saving exploration time for players who want to go directly to a boss fight without scouting.
          </p>

          <h2>Windrose Interactive Map Tools</h2>
          <p>
            Two primary community map tools exist for <strong>Windrose</strong>:
          </p>
          <ul>
            <li><strong>windrose.gaming.tools/interactive-map</strong> — a live interactive map where you can input your seed to auto-detect your specific world layout. Shows every island, POI, and chest position.</li>
            <li><strong>windrose.tools/map</strong> — an alternative community map with boss spawn overlays, rare resource node locations, and faction territory markings.</li>
          </ul>
          <p>
            Both tools are community-maintained and updated as new biome content is added. The <Link href="/windrose-reddit">Windrose community</Link> on Steam forums and Reddit contributes new discoveries (new seed patterns, rare POI variants, hidden chests) that keep the interactive maps current.
          </p>

          <h2>Navigation Tips for the Windrose Map</h2>
          <ul>
            <li><strong>Explore in outward spirals</strong> from your starting port — this systematically reveals the Coastal Jungle before pushing into harder biomes.</li>
            <li><strong>Assign a Navigator crew member</strong> — Navigator NPCs reveal hidden islands and enemy patrol routes on your minimap, reducing blind sailing time.</li>
            <li><strong>Use the Spyglass</strong> before approaching any island — it reveals enemy type and density without triggering combat, letting you decide whether to engage or bypass.</li>
            <li><strong>Reach the Foothills early</strong> — don&apos;t over-grind the Coastal Jungle. Once you have Iron Pickaxes, the Foothills&apos; Sulfur and iron dramatically accelerate your progress.</li>
            <li><strong>Use custom map markers</strong> for sulfur nodes, tavern ports (crew recruitment), and Dockyard locations so you can return efficiently during long sessions.</li>
          </ul>

          <div className="info-box">
            <strong>Windrose Map Tip:</strong> Drop your save file into the community seed-detection tool at windrose.gaming.tools before exploring. Knowing your seed layout turns blind exploration into efficient routing — you can plan a session around the highest-value POIs in your current biome instead of sailing randomly.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-map" />
      </main>
      <Footer />
    </>
  );
}
