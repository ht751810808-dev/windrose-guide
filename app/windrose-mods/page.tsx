import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Mods – Best Mods, Install Guide & Mod List 2026',
  description: 'The best Windrose mods from Nexus Mods and CurseForge. Complete Windrose mod installation guide, top-rated mods, compatibility notes, and modding tips.',
  keywords: ['windrose mods', 'windrose mod', 'windrose', 'windrose nexus mods', 'windrose modding', 'windrose game mods'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-mods' },
};

const related = [
  { href: '/windrose-trainer', label: 'Windrose Trainer', desc: 'Cheat trainer & tools' },
  { href: '/windrose-steam', label: 'Windrose Steam', desc: 'Steam Workshop & reviews' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Vanilla gameplay guide' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds with or without mods' },
  { href: '/windrose-reddit', label: 'Windrose Reddit', desc: 'Mod community discussions' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Game mechanics reference' },
];

export default function WindroseModsPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Mods' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-red" style={{ marginBottom: '1rem' }}>Modding Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Mods</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The best <strong style={{ color: 'var(--color-text)' }}>Windrose mods</strong> available in 2026 — from quality-of-life improvements to weapon rebalances and visual overhauls. Complete Windrose mod installation guide included.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Modding Overview</h2>
          <p>
            The <strong>Windrose mod</strong> community has been active since Early Access launch, producing a growing library of Windrose mods that enhance and expand the base Windrose game. Windrose mods are primarily available on <strong>Nexus Mods</strong> and <strong>CurseForge</strong>, with some Windrose mods also available via the Steam Workshop.
          </p>
          <p>
            <strong>Windrose mods</strong> range from simple quality-of-life improvements — like better inventory management and improved Windrose map visibility — to comprehensive overhauls that change Windrose weapon balance, add new Windrose crew types, or expand the Windrose world with new biome content. Using Windrose mods in Early Access is generally safe, though some Windrose mods may break after major Windrose game patches.
          </p>

          <div className="warn-box">
            <strong>Windrose Mods Note:</strong> Since Windrose is in Early Access, Windrose mods may become temporarily incompatible after major Windrose patches. Always check mod update dates and read comments from Windrose mod users before installing.
          </div>

          <h2>Best Windrose Mods 2026</h2>
          <h3>Windrose Quality-of-Life Mods</h3>
          <p>
            The most popular <strong>Windrose mods</strong> in the QoL category include:
          </p>
          <ul>
            <li><strong>Windrose Better Inventory</strong> — reorganizes the Windrose inventory UI for faster item management. One of the most-downloaded Windrose mods on Nexus.</li>
            <li><strong>Windrose Enhanced Map</strong> — adds more detail to the Windrose map including discovered dungeon markers, resource node icons, and ship patrol routes. Complements our <Link href="/windrose-map">Windrose map guide</Link>.</li>
            <li><strong>Windrose Crew Quick Commands</strong> — adds hotkeys for issuing Windrose crew orders without opening the command menu. Essential for fast-paced naval combat.</li>
            <li><strong>Windrose Auto-Resupply</strong> — automatically restocks <Link href="/windrose-gunpowder">Windrose gunpowder</Link> and ammo when visiting ports, based on your loadout settings.</li>
            <li><strong>Windrose Extended Storage</strong> — increases cargo hold capacity for all Windrose ship types by 25–50%. Popular for players who like to haul lots of Windrose loot.</li>
          </ul>

          <h3>Windrose Balance & Gameplay Mods</h3>
          <p>
            These <strong>Windrose mods</strong> change how the Windrose game plays:
          </p>
          <ul>
            <li><strong>Windrose Weapon Rebalance</strong> — adjusts Windrose weapon damage values and reload speeds to improve PvE balance. Popular among Windrose players who feel some weapons are underpowered in vanilla Windrose.</li>
            <li><strong>Windrose Hard Mode</strong> — increases enemy health, Windrose dungeon difficulty, and resource scarcity for players who want a more challenging Windrose experience.</li>
            <li><strong>Windrose Faster Crafting</strong> — reduces crafting time at your Windrose settlement for all items including Windrose gunpowder, ship components, and weapons.</li>
            <li><strong>Windrose Crew Expanded</strong> — adds 15+ new Windrose NPC crew types with unique skills not in the base Windrose game. See our <Link href="/windrose-crew">Windrose crew guide</Link> for how these new crew types work.</li>
          </ul>

          <h3>Windrose Visual & Cosmetic Mods</h3>
          <p>
            <strong>Windrose visual mods</strong> improve the game's appearance:
          </p>
          <ul>
            <li><strong>Windrose HD Textures</strong> — replaces base Windrose textures with higher-resolution versions for ships, weapons, and environments.</li>
            <li><strong>Windrose Ocean Overhaul</strong> — dramatically improves Windrose ocean visuals with better wave simulation, foam effects, and underwater visibility.</li>
            <li><strong>Windrose Flag Pack</strong> — adds 50+ historical pirate flags and custom designs for your Windrose ship mast.</li>
            <li><strong>Windrose Character Cosmetics</strong> — expands Windrose character customization with additional pirate outfit pieces, hairstyles, and facial options.</li>
          </ul>

          <h2>How to Install Windrose Mods</h2>
          <h3>Windrose Mod Installation via Nexus Mods</h3>
          <p>
            Installing <strong>Windrose mods</strong> from Nexus Mods is straightforward:
          </p>
          <ol>
            <li>Download and install <strong>Vortex Mod Manager</strong> from Nexus Mods. Vortex is the recommended Windrose mod manager.</li>
            <li>In Vortex, add Windrose as a managed game by searching for it in the games list.</li>
            <li>Browse Windrose mods on Nexus Mods and click "Mod Manager Download" to add Windrose mods directly to Vortex.</li>
            <li>In Vortex, enable the downloaded Windrose mod and click "Deploy Mods" to apply it to your Windrose installation.</li>
            <li>Launch Windrose through Vortex or Steam — your Windrose mods are now active.</li>
          </ol>

          <h3>Windrose Mod Installation via CurseForge</h3>
          <p>
            For <strong>Windrose mods</strong> on CurseForge, use the CurseForge App:
          </p>
          <ol>
            <li>Download and install the <strong>CurseForge App</strong>.</li>
            <li>Find Windrose in the CurseForge App game library.</li>
            <li>Browse Windrose mods within the app and click Install on any Windrose mod you want.</li>
            <li>The CurseForge App will create a modded Windrose profile separate from your vanilla Windrose installation.</li>
            <li>Launch Windrose via CurseForge — your selected Windrose mods will be loaded.</li>
          </ol>

          <h2>Windrose Mod Compatibility</h2>
          <p>
            Not all <strong>Windrose mods</strong> are compatible with each other. Common Windrose mod compatibility issues include:
          </p>
          <ul>
            <li>Two Windrose mods that both modify the same Windrose weapon or item will conflict.</li>
            <li>Windrose map mods may conflict with other Windrose UI mods that also modify the HUD.</li>
            <li>Windrose crew expansion mods may conflict with Windrose balance mods that change NPC skill values.</li>
          </ul>
          <p>
            Most reputable <strong>Windrose mod</strong> pages on Nexus Mods list known incompatibilities in the mod description. The Windrose modding community on <Link href="/windrose-reddit">Windrose Reddit</Link> is also an excellent resource for compatibility advice.
          </p>

          <h2>Windrose Mods and Multiplayer</h2>
          <p>
            <strong>Windrose mods</strong> in multiplayer require all co-op players to have the same Windrose mods installed. If the Windrose session host uses Windrose mods that other players don't have, it can cause desync or crashes. The safest approach is for your entire Windrose co-op crew to agree on a shared Windrose mod list before starting a co-op session.
          </p>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-mods" />
      </main>
      <Footer />
    </>
  );
}
