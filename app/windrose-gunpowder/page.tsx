import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Gunpowder Guide – How to Get & Craft Gunpowder 2026',
  description: 'How to get gunpowder in Windrose: early-game looting spots, mid-game Millstones crafting recipe (Ash + Sulfur), farming locations, and tips to keep your ammo supply topped up.',
  keywords: ['windrose gunpowder', 'windrose', 'windrose crafting', 'windrose ammo', 'windrose gunpowder guide', 'windrose millstones'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-gunpowder' },
};

const related = [
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'Weapons that use gunpowder' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Gunpowder-heavy build guide' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship cannon ammunition' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Assign workers to Millstones' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Core crafting mechanics' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'Foothills region — sulfur location' },
];

export default function WindroseGunpowderPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Gunpowder' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>Crafting Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Gunpowder</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              The complete <strong style={{ color: 'var(--color-text)' }}>Windrose gunpowder</strong> guide — how to find it early, how to craft it at the Millstones, what ingredients you need, and how to maximize your ammo supply for firearms and ship cannons.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Gunpowder Overview</h2>
          <p>
            <strong>Windrose gunpowder</strong> is the most critical consumable resource in the game. Without a steady supply, your firearms go silent and your ship&apos;s cannons run dry — leaving you unable to compete in naval combat or clear higher-tier POIs. The good news: <strong>Windrose gunpowder</strong> is obtainable through two very different routes depending on your progression stage.
          </p>
          <p>
            In the <strong>first several hours</strong> of Windrose, crafting gunpowder is not yet practical — it requires unlocking the Millstones workstation, which is only available in the Foothills region. During this early phase, looting gunpowder directly from enemies and chests is far more efficient. Once you reach the Foothills and set up Millstones production, crafting becomes the go-to method for the rest of the game.
          </p>

          <h2>Early Game: How to Get Windrose Gunpowder by Looting</h2>
          <h3>Kill Enemy Sailors & Musketeers</h3>
          <p>
            Human pirate enemies — especially <strong>Sailors</strong> and higher-level <strong>Musketeers</strong> — frequently drop <strong>Windrose gunpowder</strong> when killed. These enemies appear in POIs (Points of Interest) across the Coastal Jungle starting zone. Prioritize clearing pirate camps and coastal fortifications early; the gunpowder drops from these enemies will carry you through your first several hours without needing any crafting.
          </p>

          <h3>Loot POI Chests</h3>
          <p>
            Chests found inside Ruins and other <strong>Windrose POIs</strong> (Points of Interest) reliably contain gunpowder alongside other consumables and gear. Make a habit of fully clearing each POI you visit — partial clears miss the best chest rewards. Windrose tracks POI completion separately, and a fully explored POI grants bonus XP in addition to its chest loot.
          </p>

          <h3>Smash Old Packages</h3>
          <p>
            Keep an eye out for <strong>Old Packages</strong> — large, square bundles that sparkle on the ground, often found near wrecked ships or abandoned pirate camps. Smashing an Old Package almost always yields a small stash of <strong>Windrose gunpowder</strong> or explosives. This is one of the easiest early sources and is frequently missed by new players.
          </p>

          <h2>Mid-Game: Crafting Windrose Gunpowder at the Millstones</h2>
          <h3>Unlocking the Millstones</h3>
          <p>
            The <strong>Millstones</strong> workstation is your primary gunpowder crafting facility in Windrose. It becomes available once you reach the <strong>Foothills region</strong> — the second major biome after the Coastal Jungle. The Foothills is where iron ore first appears, and it&apos;s also where you&apos;ll source the most important gunpowder ingredient: Sulfur.
          </p>

          <h3>Windrose Gunpowder Recipe</h3>
          <p>
            The <strong>Windrose gunpowder crafting recipe</strong> requires two ingredients:
          </p>
          <ul>
            <li><strong>Ash × 25</strong> — produced as a byproduct in your <strong>Charcoal Kiln</strong> whenever you burn wood to make charcoal. Run your Charcoal Kiln constantly from the start of the game and you&apos;ll naturally accumulate a large Ash stockpile by the time you reach the Foothills.</li>
            <li><strong>Sulfur × 25</strong> — the harder ingredient. Sulfur must be <strong>mined with an Iron Pickaxe</strong>, and iron ore only appears in the Foothills region. You cannot mine Sulfur until you have iron tools, so unlock the Foothills as soon as possible if gunpowder supply is a bottleneck.</li>
          </ul>
          <p>
            Combine Ash and Sulfur at the <strong>Millstones workstation</strong> to produce <strong>Windrose gunpowder</strong>. The Millstones is a settlement building, so you need an established base in or near the Foothills to craft efficiently at scale.
          </p>

          <div className="info-box">
            <strong>Windrose Gunpowder Pro Tip:</strong> Assign a <Link href="/windrose-crew">worker NPC</Link> to your Millstones. A stationed worker provides a <strong>+50% production bonus</strong> to gunpowder output — the single best return on a worker assignment in the game. Do not leave your Millstones unattended.
          </div>

          <h2>Farming Ash for Windrose Gunpowder</h2>
          <p>
            <strong>Ash</strong> is the easiest gunpowder ingredient to farm. Every time your Charcoal Kiln burns wood to produce Charcoal, it generates Ash as a byproduct. The key is to <strong>run your Charcoal Kiln continuously</strong> from the very start of the game — even before you need gunpowder — so that by the time you unlock Millstones you already have a large Ash reserve.
          </p>
          <p>
            Wood is abundant throughout both the Coastal Jungle and Foothills zones, so Ash supply should never be a bottleneck if you maintain your kiln. If you find yourself short on Ash, cut more trees and queue up a large batch of Charcoal production.
          </p>

          <h2>Farming Sulfur for Windrose Gunpowder</h2>
          <p>
            <strong>Sulfur</strong> is the rate-limiting ingredient for <strong>Windrose gunpowder</strong> production. It only appears in the Foothills region as minable ore deposits, and you need an <strong>Iron Pickaxe</strong> to harvest it. Since iron itself is exclusive to the Foothills, Sulfur is completely unavailable until you advance past the Coastal Jungle starting zone.
          </p>
          <p>
            Once in the Foothills, identify Sulfur nodes on your map — they appear as yellowish mineral deposits, distinct from iron ore. Prioritize building a Foothills settlement near a sulfur-dense area so you can mine it in bulk. If you find a Foothills POI with both iron and sulfur nodes nearby, it&apos;s an ideal location for your second base.
          </p>

          <h2>Windrose Gunpowder and Cannon Ammunition</h2>
          <h3>Standard Cannon Rounds</h3>
          <p>
            Your <strong>Windrose ship&apos;s</strong> standard broadside cannons consume gunpowder with every salvo. Round shot is the default Windrose cannon ammo — direct hull damage against enemy ships. Maintain at least twice your expected session consumption in your ship&apos;s magazine to avoid running dry mid-combat.
          </p>

          <h3>Chain Shot</h3>
          <p>
            <strong>Chain Shot</strong> consumes slightly more <strong>Windrose gunpowder</strong> per round but is essential for disabling enemy sails before a boarding action. The tradeoff — using more gunpowder now to set up a boarding fight — is usually worth it when you want to capture cargo rather than sink the target.
          </p>

          <h3>Firearms</h3>
          <p>
            All <strong>Windrose</strong> ranged weapons — pistols, muskets, blunderbusses, hand cannons — draw from the same gunpowder supply as your ship&apos;s cannons. During long dungeon runs, firearm-heavy <Link href="/windrose-builds">builds</Link> can deplete your gunpowder reserves surprisingly fast. Carry a dedicated gunpowder reserve for ground combat, separate from your ship&apos;s naval magazine.
          </p>

          <h2>Windrose Gunpowder Management Tips</h2>
          <ul>
            <li><strong>Farm Charcoal Kiln from day one</strong> — Ash stockpiles are invisible until you need them. A well-fed kiln means you&apos;ll never be gated by Ash when you reach Millstones.</li>
            <li><strong>Reach the Foothills early</strong> — Sulfur is your actual bottleneck. Push into Foothills as soon as your gear allows rather than grinding the Coastal Jungle past the point of diminishing returns.</li>
            <li><strong>Assign a worker to Millstones</strong> — the +50% production bonus is free passive output that compounds significantly over a full session.</li>
            <li><strong>Stock gunpowder before long sessions</strong> — estimate your firearm and cannon consumption for the session and carry at least double. Windrose POIs can consume far more ammo than planned.</li>
            <li><strong>Don&apos;t buy gunpowder from merchants</strong> once your Millstones is running — merchant gunpowder is expensive and exists mainly as an emergency bridge before your own production is online.</li>
          </ul>

          <h2>Windrose Gunpowder FAQ</h2>
          <h3>Can I get gunpowder without crafting?</h3>
          <p>
            Yes. In early Windrose gameplay, looting from enemies (Sailors, Musketeers), smashing Old Packages, and opening POI chests is the primary source of <strong>Windrose gunpowder</strong>. Crafting at Millstones only becomes available after reaching the Foothills region.
          </p>

          <h3>What is the Windrose gunpowder crafting recipe?</h3>
          <p>
            The recipe is <strong>Ash × 25 + Sulfur × 25</strong> at the Millstones workstation. Ash comes from your Charcoal Kiln as a byproduct of charcoal production. Sulfur is mined with an Iron Pickaxe in the Foothills biome.
          </p>

          <h3>How do I increase gunpowder production speed?</h3>
          <p>
            Assign a <Link href="/windrose-crew">worker NPC</Link> to your Millstones — this gives a permanent +50% gunpowder production bonus. Additionally, building multiple Millstones workstations lets you run parallel production batches.
          </p>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-gunpowder" />
      </main>
      <Footer />
    </>
  );
}
