import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Gameplay – Complete Beginner Guide & Tips 2026',
  description: 'Complete Windrose gameplay guide for beginners and veterans. Core mechanics, combat tips, co-op guide, survival basics, and Windrose progression walkthrough.',
  keywords: ['windrose gameplay', 'windrose', 'windrose beginner guide', 'windrose tips', 'windrose how to play', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-gameplay' },
};

const related = [
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds for your style' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full mechanics reference' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ship combat guide' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Crew management basics' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'World navigation guide' },
  { href: '/windrose-gunpowder', label: 'Windrose Gunpowder', desc: 'Ammo & crafting basics' },
];

export default function WindroseGameplayPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Gameplay' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>Beginner Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Gameplay</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Your complete <strong style={{ color: 'var(--color-text)' }}>Windrose gameplay</strong> guide — from your first Windrose voyage to mastering advanced mechanics. Essential reading for all Windrose players.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Getting Started with Windrose Gameplay</h2>
          <p>
            <strong>Windrose gameplay</strong> begins with character creation and your first Windrose ship. New Windrose players start with a basic Windrose Sloop and a small amount of starting gold and supplies. Your first Windrose gameplay objective is to complete the starter Windrose dungeons in the Tropical Seas biome, earning enough gold and materials to upgrade your Windrose ship and recruit your first Windrose crew members.
          </p>
          <p>
            The <strong>Windrose gameplay</strong> loop has three interconnected phases: exploration (sailing your Windrose map), combat (Windrose dungeon clearing and naval battles), and management (upgrading your Windrose ship, crafting supplies, and managing your Windrose crew). Balancing these three Windrose gameplay phases is the core skill that separates successful Windrose captains from those who struggle.
          </p>

          <h2>Windrose Gameplay: Your First Hour</h2>
          <h3>Step 1: Complete the Windrose Tutorial</h3>
          <p>
            <strong>Windrose</strong> features an optional but highly recommended tutorial that teaches basic Windrose gameplay mechanics — ship controls, cannon firing, boarding combat, and Windrose dungeon navigation. Even experienced survival game players should complete the Windrose tutorial, as Windrose gameplay has unique mechanics not common in other games.
          </p>

          <h3>Step 2: Explore the Starting Windrose Island</h3>
          <p>
            After the Windrose tutorial, explore your starting Windrose island thoroughly. Gather basic Windrose resources — timber, rope, and saltpeter — that you'll need for <Link href="/windrose-gunpowder">Windrose gunpowder</Link> crafting. Visit the Windrose settlement's tavern to learn about available Windrose crew members, and check the Windrose port merchant for starter weapon options.
          </p>

          <h3>Step 3: Run Your First Windrose Dungeon</h3>
          <p>
            Locate a Tier 1 Windrose dungeon near your starting area (marked on your Windrose map as a skull icon). Your first Windrose dungeon run will teach you ground combat — how to use <Link href="/windrose-weapons">Windrose weapons</Link>, dodge enemy attacks, and manage health supplies during a Windrose dungeon encounter. Don't worry about bringing your full crew — Tier 1 Windrose dungeons are designed to be completed with minimal crew support.
          </p>

          <h2>Core Windrose Gameplay Mechanics</h2>
          <h3>Windrose Naval Combat</h3>
          <p>
            Naval combat is the most distinctive aspect of <strong>Windrose gameplay</strong>. To engage an enemy Windrose ship, approach until your cannons come in range, then rotate your Windrose ship to bring your broadside to bear. Command your <Link href="/windrose-crew">Windrose crew</Link> gunners to fire coordinated salvos. The Windrose naval combat system rewards positioning and timing over raw firepower.
          </p>
          <p>
            Key <strong>Windrose gameplay</strong> naval tips: use Chain Shot to destroy enemy sails and slow their Windrose ship, target the hull near the waterline for maximum flooding damage, and always have your Windrose Carpenter ready to repair your own hull between salvos.
          </p>

          <h3>Windrose Ground Combat</h3>
          <p>
            <strong>Windrose gameplay</strong> transitions to ground combat in dungeons and during boarding actions. Windrose ground combat uses a real-time system where you attack, dodge, and use special abilities tied to your <Link href="/windrose-builds">Windrose build</Link>. Stamina management is critical in Windrose ground combat — overcommitting to attacks leaves you open to enemy counterattacks.
          </p>

          <h3>Windrose Survival Mechanics</h3>
          <p>
            <strong>Windrose gameplay</strong> includes survival mechanics that require ongoing attention: food supplies for your Windrose crew, freshwater for long voyages, hull integrity repairs, and <Link href="/windrose-gunpowder">gunpowder</Link> restocking. Neglecting Windrose survival mechanics leads to crew morale drops, reduced combat effectiveness, and eventually, ship loss.
          </p>

          <h2>Windrose Gameplay: Co-op Tips</h2>
          <h3>Windrose Co-op Communication</h3>
          <p>
            Effective <strong>Windrose gameplay</strong> in co-op requires clear communication. Designate a Windrose captain who calls commands during naval engagements — "Port cannons, fire!" and "All hands boarding!" — and establish a Windrose crew role for each player before starting a session.
          </p>

          <h3>Windrose Co-op Role Division</h3>
          <p>
            For optimal <strong>Windrose gameplay</strong> in 4-player co-op: Player 1 (Windrose Helmsman) controls the ship; Player 2 (Windrose Gunner) manages cannon volleys; Player 3 (Windrose Boarding Lead) initiates and leads boarding combat; Player 4 (Windrose Support) handles repairs, ammo resupply, and healing. This Windrose gameplay role division maximizes team efficiency.
          </p>

          <h2>Windrose Gameplay Progression</h2>
          <h3>Early Windrose Gameplay (Hours 1–10)</h3>
          <p>
            Focus on: completing Tier 1–3 Windrose dungeons, upgrading from a Windrose Sloop to a Windrose Brigantine, recruiting your first 4 Windrose crew members (Carpenter, Gunner, Navigator, Cook), and establishing a Windrose settlement on a captured Tropical Seas island.
          </p>

          <h3>Mid Windrose Gameplay (Hours 10–30)</h3>
          <p>
            Focus on: exploring the Frozen Waters on the Windrose map, completing Tier 4–6 Windrose dungeons, upgrading your Windrose ship to a Frigate, specializing in a specific <Link href="/windrose-builds">Windrose build</Link>, and expanding your Windrose settlement with advanced production facilities.
          </p>

          <h3>Late Windrose Gameplay (Hours 30+)</h3>
          <p>
            Focus on: conquering Ghost Waters Tier 7–10 Windrose dungeons, operating a Windrose Man-o'-War with a full NPC + co-op crew, obtaining the rarest Windrose weapons and ship components, and contributing to the Windrose <Link href="/windrose-reddit">Reddit</Link> community with your discoveries.
          </p>

          <h2>Windrose Gameplay FAQ</h2>
          <h3>Is Windrose gameplay fun solo?</h3>
          <p>
            Yes, <strong>Windrose gameplay</strong> is enjoyable solo, though challenging. Solo Windrose players need to carefully build NPC crew compositions to compensate for missing co-op teammates. The Windrose Sloop and Windrose Brigantine are the best Windrose ships for solo gameplay.
          </p>

          <h3>How long does a Windrose gameplay session typically last?</h3>
          <p>
            Most <strong>Windrose gameplay</strong> sessions run 2–4 hours. Windrose saves progress automatically when you dock at a Windrose port, so you can quit mid-voyage without losing progress. Plan your Windrose gameplay sessions around dungeon runs — completing a full Windrose dungeon takes 45–90 minutes depending on tier.
          </p>

          <div className="info-box">
            <strong>Windrose Gameplay Tip:</strong> The most common Windrose gameplay mistake for new players is spending all their gold on Windrose weapons without investing in their ship and crew. In Windrose gameplay, your ship and crew amplify your individual combat effectiveness far more than weapon upgrades alone.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-gameplay" />
      </main>
      <Footer />
    </>
  );
}
