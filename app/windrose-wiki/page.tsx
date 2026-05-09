import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Wiki – Complete Game Encyclopedia & Reference Guide 2026',
  description: 'The complete Windrose wiki covering all game mechanics, lore, NPCs, factions, biomes, dungeons, and systems. Your definitive Windrose game reference.',
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
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship types, stats & upgrades' },
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

        {/* Hero */}
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>Game Encyclopedia</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
              Windrose Wiki
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The definitive <strong style={{ color: 'var(--color-text)' }}>Windrose</strong> wiki and game encyclopedia. Everything you need to know about Windrose mechanics, lore, biomes, NPCs, factions, and systems — all in one place.
            </p>
          </div>
        </section>

        {/* Article */}
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>What Is the Windrose Wiki?</h2>
          <p>
            The <strong>Windrose wiki</strong> is your complete reference guide for the <strong>Windrose</strong> game — the pirate survival co-op adventure developed by Kraken Express and published by Pocketpair. This Windrose wiki covers every aspect of the game, from core mechanics and lore to advanced systems and hidden mechanics discovered by the Windrose community.
          </p>
          <p>
            <strong>Windrose</strong> was released on Steam Early Access on April 14, 2026, and rapidly became a phenomenon — selling over 1 million copies in 6 days and reaching 222,000 peak concurrent players. As the Windrose game continues to evolve through Early Access updates, this Windrose wiki will be updated to reflect the latest changes and community discoveries.
          </p>

          <h2>Windrose Game Overview</h2>
          <h3>Windrose Genre & Core Concept</h3>
          <p>
            <strong>Windrose</strong> is a co-operative PvE survival adventure game set in a world of pirate seas, exotic islands, and supernatural boss encounters. The Windrose game blends naval combat, dungeon crawling, settlement building, and survival crafting into a cohesive experience that works both solo and in co-op sessions of up to 8 players.
          </p>
          <p>
            The defining feature of <strong>Windrose</strong> is the seamless transition between naval warfare and on-foot combat. You can bombard a Windrose enemy fort with your ship's cannons, then sail close, board the enemy vessel, and fight hand-to-hand across the decks — all within a single Windrose encounter.
          </p>

          <h3>Windrose Developer & Publisher</h3>
          <p>
            <strong>Windrose</strong> is developed by Kraken Express, a team based in Uzbekistan, and published by Pocketpair Inc. — the Japanese developer and publisher known for Palworld. Pocketpair's involvement has given Windrose significant visibility and publishing support. The Windrose development team has committed to 1.5–2.5 years of Early Access development before the full Windrose 1.0 release.
          </p>

          <h2>Windrose Game Mechanics</h2>
          <h3>Windrose Combat System</h3>
          <p>
            The <strong>Windrose</strong> combat system operates on two levels: naval and ground. In naval Windrose combat, you control your ship's cannons, positioning, and speed to outmaneuver and outgun enemy vessels. Ground Windrose combat uses a real-time action system where your character wields <Link href="/windrose-weapons">Windrose weapons</Link> — firearms, swords, axes, and explosives — against dungeon enemies and bosses.
          </p>
          <p>
            <strong>Windrose</strong> gunpowder plays a central role in both combat styles. Naval Windrose combat requires gunpowder for cannon ammunition, while ground combat uses gunpowder for firearm charges and explosive weapons. Managing your <Link href="/windrose-gunpowder">Windrose gunpowder</Link> supply is a key strategic element.
          </p>

          <h3>Windrose Progression System</h3>
          <p>
            <strong>Windrose</strong> progression works through a combination of character level, equipment tier, and settlement upgrades. As you complete Windrose dungeons and defeat bosses, you earn experience points and rare crafting materials that unlock more powerful Windrose weapons, armor, and ship components.
          </p>
          <p>
            The <strong>Windrose</strong> skill system lets you specialize your character toward specific <Link href="/windrose-builds">Windrose builds</Link>. You can invest in firearm proficiency for a gunslinger Windrose build, melee mastery for a boarding specialist Windrose build, naval command skills for a ship captain Windrose build, or support abilities for a crew management Windrose build.
          </p>

          <h3>Windrose Crafting & Resources</h3>
          <p>
            <strong>Windrose</strong> features an extensive crafting system centered around materials gathered from exploration, combat loot, and settlement production. Key Windrose crafting resources include:
          </p>
          <ul>
            <li><strong>Windrose Gunpowder</strong> — essential for all firearms and cannon ammunition. Crafted from saltpeter, charcoal, and sulfur.</li>
            <li><strong>Windrose Ship Materials</strong> — timber, iron, rope, and canvas for ship construction and repair.</li>
            <li><strong>Windrose Weapon Components</strong> — metal ingots, leather, and rare dungeon drops for crafting and upgrading Windrose weapons.</li>
            <li><strong>Windrose Settlement Supplies</strong> — food, medicine, and luxury goods to maintain Windrose crew morale and settlement growth.</li>
          </ul>

          <h2>Windrose World & Biomes</h2>
          <h3>Windrose Biome Types</h3>
          <p>
            The <strong>Windrose</strong> world is procedurally generated and divided into distinct biomes, each with unique environments, enemies, and resources. Known Windrose biomes include:
          </p>
          <ul>
            <li><strong>Windrose Tropical Islands</strong> — the starting Windrose biome, featuring dense jungle, coral reefs, and pirate hideouts. Best for beginning Windrose players.</li>
            <li><strong>Windrose Frozen Seas</strong> — icy waters and snowbound archipelagos with powerful Windrose enemies and rare cold-weather resources.</li>
            <li><strong>Windrose Volcanic Archipelago</strong> — dangerous active volcanic islands with high-tier Windrose dungeons and valuable mineral deposits.</li>
            <li><strong>Windrose Ghost Waters</strong> — mist-shrouded seas with supernatural Windrose enemies and the most challenging Windrose dungeons in Early Access.</li>
            <li><strong>Windrose Trade Routes</strong> — busy sea lanes with merchant ships to intercept and naval patrols to evade or fight.</li>
          </ul>

          <h3>Windrose Dungeons</h3>
          <p>
            <strong>Windrose</strong> features over 100 hand-crafted dungeons spread across its biomes. Each Windrose dungeon is a self-contained encounter zone with a series of enemy rooms culminating in a boss fight. Windrose dungeons reward players with rare loot, crafting materials, and occasionally unique Windrose crew recruits.
          </p>
          <p>
            Windrose dungeon difficulty scales with the biome tier and your crew's progression level. Early-game Windrose dungeons on Tropical Islands are manageable solo, while late-game Windrose dungeons in Ghost Waters require a full co-op crew with optimized Windrose builds and well-upgraded Windrose weapons.
          </p>

          <h2>Windrose Factions & Lore</h2>
          <h3>Windrose Factions</h3>
          <p>
            The <strong>Windrose</strong> world is populated by several major factions that influence gameplay and story. Each Windrose faction controls certain territories on the Windrose map and has unique enemy types, quest chains, and relationship dynamics with other Windrose factions.
          </p>
          <ul>
            <li><strong>The Windrose Trading Company</strong> — a mercantile empire that controls major Windrose trade routes. Friendly if you don't attack their ships, hostile if you pirate their goods.</li>
            <li><strong>The Windrose Crown Navy</strong> — the naval military force that hunts pirates. The Windrose Crown Navy escalates pursuit if your infamy rises.</li>
            <li><strong>The Windrose Brotherhood</strong> — a loose confederation of pirates. Joining the Windrose Brotherhood unlocks co-op crew bonuses and safe harbor at Brotherhood ports.</li>
            <li><strong>The Windrose Ancient Order</strong> — a mysterious faction tied to the supernatural bosses in Windrose Ghost Waters dungeons.</li>
          </ul>

          <h3>Windrose Boss Lore</h3>
          <p>
            <strong>Windrose</strong> bosses are historically-inspired characters with supernatural powers. Each Windrose boss has a backstory rooted in the Windrose world's lore — legendary pirates, corrupt naval captains, and ancient sea creatures awakened by the Windrose Ancient Order. Defeating Windrose bosses unlocks lore entries in your Windrose journal, building the overarching narrative of the Windrose world.
          </p>

          <h2>Windrose Multiplayer & Co-op</h2>
          <p>
            <strong>Windrose</strong> supports up to 8 players in co-op, with gameplay optimized for groups of 4. The Windrose multiplayer system uses session-based hosting — one Windrose player creates a session and others join. You can play Windrose with friends via Steam friends list or with public lobbies.
          </p>
          <p>
            <Link href="/windrose-crew">Windrose crew</Link> management becomes even more important in multiplayer. Dividing roles among your Windrose co-op team — ship gunner, helmsman, boarding specialist, and supply manager — dramatically improves efficiency in Windrose dungeons and naval combat. See our <Link href="/windrose-builds">Windrose builds</Link> page for recommended co-op team compositions.
          </p>

          <h2>Windrose Early Access Roadmap</h2>
          <p>
            As an Early Access title, <strong>Windrose</strong> is actively being developed. The Windrose development team has outlined a <Link href="/windrose-roadmap">Windrose roadmap</Link> covering new biomes, additional Windrose ships, expanded Windrose crew mechanics, PvP content, seasonal Windrose events, and a fully voiced Windrose story campaign for the 1.0 release.
          </p>
          <p>
            The Windrose Early Access period is expected to last 1.5–2.5 years. During this time, major Windrose updates will add content and refine existing systems based on community feedback from the <Link href="/windrose-reddit">Windrose Reddit</Link> and Steam forums. Check the Windrose <Link href="/windrose-steam">Steam</Link> page for update announcements.
          </p>

          <div className="info-box">
            <strong>Windrose Wiki Tip:</strong> This Windrose wiki is updated regularly as the Windrose game receives Early Access patches. Check the <Link href="/windrose-roadmap">Windrose roadmap</Link> for upcoming content, and see <Link href="/windrose-steam">Windrose Steam charts</Link> for player count data.
          </div>

        </article>

        <RelatedPages pages={related} />
        <CommentBox page="windrose-wiki" />
      </main>
      <Footer />
    </>
  );
}
