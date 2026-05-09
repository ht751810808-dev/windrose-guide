import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Gunpowder – Crafting Guide, Ingredients & Farming Tips 2026',
  description: 'Complete Windrose gunpowder guide — how to craft gunpowder in Windrose, all ingredients, farming locations, best gunpowder recipes, and ammo tips.',
  keywords: ['windrose gunpowder', 'windrose', 'windrose crafting', 'windrose ammo', 'windrose gunpowder guide', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-gunpowder' },
};

const related = [
  { href: '/windrose-weapons', label: 'Windrose Weapons', desc: 'Weapons that use gunpowder' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Gunpowder Bomber build guide' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship cannon ammunition' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Supply crew for gunpowder' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Core crafting mechanics' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full gunpowder mechanics' },
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
              The complete <strong style={{ color: 'var(--color-text)' }}>Windrose gunpowder</strong> guide — crafting recipes, ingredient farming, storage tips, and how to maximize your gunpowder supply for Windrose cannon and firearm combat.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Gunpowder Overview</h2>
          <p>
            <strong>Windrose gunpowder</strong> is the most critical crafting resource in the Windrose game. Without sufficient Windrose gunpowder, your firearms run dry and your cannons fall silent — leaving you defenseless in naval combat and unable to use the most powerful Windrose weapons in dungeons. Mastering Windrose gunpowder production and management is essential for all Windrose playstyles, but especially for the <Link href="/windrose-builds">Windrose Gunpowder Bomber build</Link>.
          </p>

          <h2>Windrose Gunpowder Crafting Recipe</h2>
          <h3>Basic Windrose Gunpowder</h3>
          <p>
            The <strong>basic Windrose gunpowder</strong> recipe requires three ingredients gathered from the Windrose world:
          </p>
          <ul>
            <li><strong>Saltpeter (x3)</strong> — the primary ingredient for Windrose gunpowder. Found in Windrose cave deposits, purchased from Windrose port merchants, and produced at Windrose settlement saltpeter refineries.</li>
            <li><strong>Charcoal (x2)</strong> — produced by burning wood at your Windrose settlement's charcoal kiln. Windrose charcoal can also be purchased from Windrose merchants at a premium.</li>
            <li><strong>Sulfur (x1)</strong> — found near Windrose volcanic areas, purchased from Windrose alchemist NPCs, or looted from specific Windrose dungeon enemy types.</li>
          </ul>
          <p>
            Combine these three Windrose gunpowder ingredients at a Windrose crafting bench or your settlement's Windrose Gunpowder Mill (produces larger batches more efficiently). Basic Windrose gunpowder works with all starter Windrose weapons and Tier 1–4 cannon ammunition.
          </p>

          <h3>Advanced Windrose Gunpowder</h3>
          <p>
            <strong>Advanced Windrose gunpowder</strong> is required for higher-tier Windrose weapons and elite cannon ammunition. The advanced Windrose gunpowder recipe uses:
          </p>
          <ul>
            <li><strong>Refined Saltpeter (x3)</strong> — processed saltpeter from your Windrose Advanced Refinery building.</li>
            <li><strong>Enriched Charcoal (x2)</strong> — charcoal mixed with Windrose volcanic minerals. Only available in volcanic biome areas.</li>
            <li><strong>Crystalline Sulfur (x1)</strong> — rare, found only in Windrose Volcanic Archipelago and Ghost Waters biomes.</li>
          </ul>
          <p>
            Advanced Windrose gunpowder deals 40% more damage per shot with all compatible Windrose firearms and unlocks Tier 5–8 Windrose cannon ammunition types. The Windrose Gunpowder Bomber build specifically requires advanced Windrose gunpowder for its most powerful explosive abilities.
          </p>

          <h2>Windrose Gunpowder Farming</h2>
          <h3>Where to Farm Saltpeter in Windrose</h3>
          <p>
            <strong>Windrose saltpeter</strong> nodes appear as white crystalline deposits inside caves on Windrose islands. The highest concentration of Windrose saltpeter is found in the Frozen Waters biome, where glacial cave systems contain large saltpeter deposits. Establish a Windrose settlement near a saltpeter-rich island and build a Windrose Saltpeter Refinery to automate saltpeter production for your Windrose gunpowder supply.
          </p>

          <h3>Where to Farm Sulfur in Windrose</h3>
          <p>
            <strong>Windrose sulfur</strong> farming is more location-specific. Early-game Windrose sulfur sources include dungeon loot from Alchemist enemy types in Tier 1–4 Windrose dungeons. Mid-game Windrose players should prioritize exploring the Volcanic Archipelago on the Windrose map for abundant natural sulfur deposits. A Windrose Sulfur Collection building at a Volcanic Archipelago settlement produces sulfur automatically for your Windrose gunpowder operation.
          </p>

          <h2>Windrose Gunpowder Storage</h2>
          <p>
            <strong>Windrose gunpowder</strong> has special storage requirements — it cannot be stored near fire sources (your Windrose ship's galley, lanterns) without explosion risk. Always store Windrose gunpowder in dedicated Windrose Magazine compartments in your ship's hold. Upgrading your Windrose ship's magazine increases gunpowder storage capacity and reduces explosion risk from enemy fire damage to your hull.
          </p>
          <p>
            On your Windrose settlement, build a separate Windrose Powder House structure for bulk gunpowder storage. The Windrose Powder House is a fireproof structure with large capacity — far safer than storing Windrose gunpowder in general settlement warehouses.
          </p>

          <h2>Windrose Gunpowder and Cannon Ammunition</h2>
          <h3>Windrose Cannon Round Shot</h3>
          <p>
            The standard <strong>Windrose cannon</strong> ammunition uses basic Windrose gunpowder + iron balls. Round shot Windrose cannon ammunition deals direct hull damage to enemy Windrose ships and is the most efficient in terms of Windrose gunpowder consumption per shot.
          </p>

          <h3>Windrose Chain Shot</h3>
          <p>
            <strong>Windrose chain shot</strong> targets enemy ship rigging and sails, reducing their Windrose ship's speed and maneuverability. Chain shot uses slightly more Windrose gunpowder per round but is essential for setting up boarding actions in Windrose naval combat.
          </p>

          <h3>Windrose Explosive Shell</h3>
          <p>
            The most powerful <strong>Windrose cannon</strong> ammunition — explosive shells — requires advanced Windrose gunpowder. A single Windrose explosive shell salvo can ignite enemy ship fires and deal massive AoE damage. Reserve Windrose explosive shells for elite enemy Windrose ships and boss naval encounters.
          </p>

          <h2>Windrose Gunpowder Tips</h2>
          <p>
            Top <strong>Windrose gunpowder</strong> management tips from experienced Windrose players:
          </p>
          <ul>
            <li>Always carry at least 2x your expected Windrose session gunpowder needs — Windrose dungeons can consume far more gunpowder than planned.</li>
            <li>Assign a <Link href="/windrose-crew">Windrose Supply Crew</Link> member to monitor and distribute Windrose gunpowder during long voyages.</li>
            <li>Sell excess Windrose gunpowder at ports for gold — Windrose merchants pay premium prices for bulk gunpowder orders.</li>
            <li>The <Link href="/windrose-mods">Windrose Auto-Resupply mod</Link> can automate gunpowder restocking when you dock at Windrose ports.</li>
          </ul>

          <div className="info-box">
            <strong>Windrose Gunpowder Economy Tip:</strong> Early in Windrose, buy Windrose gunpowder from port merchants rather than crafting it — it&apos;s more efficient until you have a functioning settlement refinery. Once your Windrose settlement gunpowder production is established, it&apos;s far cheaper to craft your own Windrose gunpowder.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-gunpowder" />
      </main>
      <Footer />
    </>
  );
}
