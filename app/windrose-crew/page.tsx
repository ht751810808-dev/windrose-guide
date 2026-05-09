import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose Crew – Complete NPC Crew Management Guide 2026',
  description: 'Master Windrose crew management — how to recruit NPCs, best crew compositions, crew skills, morale system, and tips for solo and co-op Windrose play.',
  keywords: ['windrose crew', 'windrose', 'windrose npc', 'windrose crew management', 'windrose guide', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-crew' },
};

const related = [
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'Ships your crew will man' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Builds that synergize with crew' },
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Full crew system mechanics' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Crew in combat guide' },
  { href: '/windrose-map', label: 'Windrose Map', desc: 'Where to recruit crew' },
  { href: '/windrose-reddit', label: 'Windrose Reddit', desc: 'Community crew tips' },
];

export default function WindroseCrewPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose Crew' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-teal" style={{ marginBottom: '1rem' }}>Crew Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>Windrose Crew</h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              Master the <strong style={{ color: 'var(--color-text)' }}>Windrose crew</strong> system — recruit NPCs, build the perfect crew composition, manage morale, and dominate both sea and dungeon encounters.
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose Crew System Overview</h2>
          <p>
            The <strong>Windrose crew</strong> system is one of the game's most unique and deep mechanics. In Windrose, your crew consists of recruited NPC characters who serve aboard your <Link href="/windrose-ships">Windrose ship</Link>, fight in Windrose dungeons, and contribute to your Windrose settlement. Each Windrose crew member has a specific role, skill set, and personality that affects their performance.
          </p>
          <p>
            <strong>Windrose crew</strong> management is especially important for solo Windrose players, who rely on NPC crew to fill roles that co-op players would handle. Even in full 8-player co-op, Windrose crews of NPCs supplement your team by manning cannon stations, repairing hull damage, and guarding ship flanks during Windrose boarding actions.
          </p>

          <h2>Windrose Crew Roles</h2>
          <h3>Windrose Gunner</h3>
          <p>
            The <strong>Windrose Gunner</strong> crew role manages your ship's cannons during naval combat. A skilled Windrose Gunner increases cannon reload speed, aims accuracy, and can switch between cannon ammunition types — round shot, chain shot, and explosive Windrose shells. Windrose Gunners require <Link href="/windrose-gunpowder">gunpowder</Link> supplies to remain effective.
          </p>

          <h3>Windrose Navigator</h3>
          <p>
            The <strong>Windrose Navigator</strong> crew member improves your ship's speed, maneuverability, and helps read the Windrose map for optimal sea routes. A Windrose Navigator with high skill can predict storms on the Windrose map and find hidden passages between Windrose islands that bypass enemy naval patrols.
          </p>

          <h3>Windrose Carpenter</h3>
          <p>
            The <strong>Windrose Carpenter</strong> repairs your ship's hull during and after Windrose naval combat. An experienced Windrose Carpenter can perform emergency repairs mid-battle, significantly extending your Windrose ship's survivability. The Windrose Carpenter is the most valuable crew member for extended Windrose voyages far from port.
          </p>

          <h3>Windrose Surgeon</h3>
          <p>
            The <strong>Windrose Surgeon</strong> heals player characters and other Windrose crew members during dungeon runs. A skilled Windrose Surgeon effectively replaces the Support Crew build in some team compositions, freeing a player to take a more offensive <Link href="/windrose-builds">Windrose build</Link> while the NPC Surgeon provides healing.
          </p>

          <h3>Windrose Cook</h3>
          <p>
            The <strong>Windrose Cook</strong> maintains crew morale and provides food buffs to the entire Windrose crew. High crew morale in Windrose improves NPC combat effectiveness, reduces crew fatigue, and unlocks bonus interactions with Windrose faction NPCs. The Windrose Cook is especially important on long multi-day Windrose voyages.
          </p>

          <h3>Windrose Marine (Combat Crew)</h3>
          <p>
            The <strong>Windrose Marine</strong> is a combat-specialized crew member who fights in Windrose dungeons and defends the ship during Windrose boarding actions. Windrose Marines can be equipped with different <Link href="/windrose-weapons">Windrose weapons</Link> and level up over time, becoming increasingly effective fighters as they gain experience.
          </p>

          <h2>How to Recruit Windrose Crew</h2>
          <h3>Port Tavern Recruitment</h3>
          <p>
            The primary way to recruit <strong>Windrose crew</strong> is through port taverns. Visit Windrose port settlements and speak with potential Windrose crew members in the local tavern. Different Windrose ports offer different crew types — tropical island ports have more Windrose Gunners and Marines, while northern Windrose ports offer better Windrose Navigators and Carpenters.
          </p>

          <h3>Windrose Dungeon Rescues</h3>
          <p>
            Some <strong>Windrose crew</strong> members are found as prisoners inside Windrose dungeons. Rescuing them earns their gratitude and often results in highly skilled Windrose crew joins at no cost. Windrose dungeon rescues are especially valuable because these NPC crew members often have rare skills not available through tavern recruitment.
          </p>

          <h3>Windrose Settlement Training</h3>
          <p>
            At your Windrose settlement, you can train existing Windrose crew members to improve their skills or cross-train them into different Windrose crew roles. Training your Windrose crew takes time and gold, but produces more skilled and loyal NPC crew members than tavern recruitment.
          </p>

          <h2>Windrose Crew Morale System</h2>
          <p>
            <strong>Windrose crew morale</strong> is a hidden stat that affects your NPC crew's performance. High Windrose crew morale improves combat effectiveness, reduces desertion risk, and unlocks special crew dialogue. Low Windrose crew morale leads to reduced performance, increased risk of crew members abandoning ship at port, and occasional mutiny events.
          </p>
          <p>
            Maintaining <strong>Windrose crew morale</strong> requires regular food supplies (Windrose Cook), fair pay from Windrose loot division, successful Windrose dungeon runs, and avoiding excessive hull damage that leaves crew feeling unsafe. The Windrose morale system adds a management layer that rewards attentive Windrose captains.
          </p>

          <h2>Best Windrose Crew Compositions</h2>
          <h3>Solo Windrose Crew (NPC-Only)</h3>
          <p>
            Best <strong>Windrose crew</strong> for solo players (all NPCs): 1 Windrose Carpenter (essential for repairs), 1 Windrose Gunner (for cannon fire), 1 Windrose Marine (dungeon companion), 1 Windrose Cook (morale). This Windrose crew composition allows a solo Windrose Brigantine to function effectively without human co-op teammates.
          </p>

          <h3>4-Player Windrose Co-op Crew</h3>
          <p>
            With a full 4-player <strong>Windrose co-op</strong> team, supplement your players with NPC crew: 2 Windrose Gunners (free up players to board), 1 Windrose Carpenter (auto-repairs during combat), 1 Windrose Cook (morale maintenance). This Windrose crew + player configuration is ideal for Windrose Brigantine operations.
          </p>

          <div className="info-box">
            <strong>Windrose Crew Tip:</strong> Name your Windrose crew members — it increases crew loyalty and morale in the Windrose game. Named Windrose crew members are also less likely to leave when you dock at a port with better employers.
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-crew" />
      </main>
      <Footer />
    </>
  );
}
