import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedPages from '@/components/RelatedPages';
import CommentBox from '@/components/CommentBox';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Windrose攻略 – 风启之旅中文攻略与游戏指南 2026',
  description: 'Windrose风启之旅中文攻略指南。Windrose游戏玩法、最强Build、舰船、船员、枪药、mod及新手入门完整中文指南。',
  keywords: ['windrose攻略', 'windrose中文', 'windrose风启之旅', 'windrose', '风启之旅攻略', 'windrose game'],
  alternates: { canonical: 'https://www.windroseguide.com/windrose-zhongwen' },
};

const related = [
  { href: '/windrose-wiki', label: 'Windrose Wiki', desc: 'Complete game encyclopedia' },
  { href: '/windrose-builds', label: 'Windrose Builds', desc: 'Best builds guide' },
  { href: '/windrose-gameplay', label: 'Windrose Gameplay', desc: 'Beginner guide' },
  { href: '/windrose-ships', label: 'Windrose Ships', desc: 'All ship types' },
  { href: '/windrose-crew', label: 'Windrose Crew', desc: 'Crew management' },
  { href: '/windrose-steam', label: 'Windrose Steam', desc: 'Buy Windrose on Steam' },
];

export default function WindroseZhongwenPage() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px', minHeight: '100vh', background: 'var(--color-bg)' }}>
        <div className="container" style={{ padding: '2rem 1.5rem 0' }}>
          <BreadcrumbNav crumbs={[{ label: 'Windrose Guide', href: '/' }, { label: 'Windrose中文攻略' }]} />
        </div>
        <section style={{ padding: '3rem 0 4rem', background: 'linear-gradient(180deg, var(--color-bg-2) 0%, var(--color-bg) 100%)', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container">
            <div className="pill pill-gold" style={{ marginBottom: '1rem' }}>中文攻略 / Chinese Guide</div>
            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.1 }}>
              Windrose 风启之旅 中文攻略
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '680px' }}>
              <strong style={{ color: 'var(--color-text)' }}>Windrose（风启之旅）</strong> 完整中文攻略指南 — 包含游戏介绍、最强Build推荐、舰船指南、船员管理、枪药合成及新手入门教程。
            </p>
          </div>
        </section>
        <article className="container article-content" style={{ padding: '3rem 1.5rem', maxWidth: '860px' }}>

          <h2>Windrose 风启之旅 游戏介绍</h2>
          <p>
            <strong>Windrose（风启之旅）</strong> 是由 Kraken Express 开发、Pocketpair 发行的多人合作海盗生存冒险游戏，于 2026 年 4 月 14 日在 Steam 抢先体验上线。Windrose 风启之旅在上线后 6 天内销售突破 100 万份，同时在线人数峰值超过 22 万人，是 2026 年最受瞩目的 Steam 游戏之一。
          </p>
          <p>
            <strong>Windrose 风启之旅</strong> 支持 1-8 人联机，最优体验为 4 人合作。游戏以海上冒险为核心，玩家驾驶 <Link href="/windrose-ships">Windrose 舰船</Link>、组建 <Link href="/windrose-crew">Windrose 船员队伍</Link>、攻略 100 余座精心设计的地下城，并与具有超自然能力的历史主题 Boss 战斗。Windrose 也是迄今为止最受中国玩家好评的多人海盗类游戏之一。
          </p>

          <h2>Windrose 中文名称与版本说明</h2>
          <h3>Windrose 的中文名称</h3>
          <p>
            <strong>Windrose 风启之旅</strong>（拼音：fēng qǐ zhī lǚ）是 Windrose 的官方中文名称，在 Steam 平台上以此中文标题展示。Windrose 风启之旅 内置简体中文语言支持，中国玩家可完全以中文界面游玩 Windrose。
          </p>
          <p>
            需要注意的是，<strong>Windrose</strong> 此前曾有一个工作名称叫 "Crosswind"（侧风之旅），后更名为 Windrose 风启之旅。如果你在搜索中看到"侧风之旅"，它指的就是现在的 Windrose 风启之旅。
          </p>

          <h2>Windrose 风启之旅 新手攻略</h2>
          <h3>Windrose 新手第一步</h3>
          <p>
            进入 <strong>Windrose 风启之旅</strong> 后，建议所有新玩家先完成游戏内置教程。Windrose 教程涵盖船只操控、炮击、白刃战和地下城探索等核心机制，为后续游玩打下坚实基础。
          </p>
          <p>
            完成 Windrose 教程后，你的首要目标是：收集基础 Windrose 资源（木材、绳索、硝石）、在起始港口招募第一批 <Link href="/windrose-crew">Windrose 船员</Link>、完成附近的 Tier 1 级 Windrose 地下城，积累足够的金币升级你的 Windrose 舰船。
          </p>

          <h3>Windrose 游戏循环</h3>
          <p>
            <strong>Windrose 风启之旅</strong> 的核心游戏循环分为三个阶段：
          </p>
          <ul>
            <li><strong>探索阶段：</strong>在 <Link href="/windrose-map">Windrose 地图</Link> 上航行，发现新岛屿、地下城入口和稀有资源点。</li>
            <li><strong>战斗阶段：</strong>清除 Windrose 地下城、参与海战，击败 Windrose Boss 获取稀有战利品。</li>
            <li><strong>建设阶段：</strong>在占领的 Windrose 岛屿上建立定居点，升级 <Link href="/windrose-ships">Windrose 舰船</Link>，制作 <Link href="/windrose-gunpowder">Windrose 枪药</Link>，扩充船员队伍。</li>
          </ul>

          <h2>Windrose 最强 Build 推荐（中文）</h2>
          <h3>Windrose 枪药轰炸者 Build</h3>
          <p>
            <strong>Windrose 枪药轰炸者 Build</strong> 是目前 Windrose 中最受欢迎的输出型 Build。该 Windrose Build 以炸药、炸弹袋和高口径火器为核心，擅长快速清理地下城中的群体敌人。Windrose 枪药轰炸者 Build 需要稳定的 <Link href="/windrose-gunpowder">Windrose 枪药</Link> 供应，是资源消耗最高的 Windrose Build 之一。
          </p>
          <ul>
            <li><strong>主武器：</strong>霰弹枪（Blunderbuss）或手炮（Hand Cannon）</li>
            <li><strong>副武器：</strong>炸药桶或炸弹袋</li>
            <li><strong>技能重点：</strong>爆炸物精通、枪药效率</li>
          </ul>

          <h3>Windrose 白刃战专家 Build</h3>
          <p>
            <strong>Windrose 白刃战专家 Build</strong> 适合喜爱近战的玩家，专注于登舰战斗和地下城内的密集近战。该 Windrose Build 以重型近战 Windrose 武器为主，配合短程手枪辅助，在登舰战场上表现卓越。
          </p>

          <h3>Windrose 舰长 Build</h3>
          <p>
            <strong>Windrose 舰长 Build</strong> 专为热爱 Windrose 海战的玩家设计，通过舰队指挥技能、炮击精度加成和 <Link href="/windrose-crew">Windrose 船员</Link> 协作增益来主导海战局面。
          </p>

          <h2>Windrose 枪药合成攻略</h2>
          <p>
            <strong>Windrose 枪药（Gunpowder）</strong> 是游戏中最重要的合成材料，所有 Windrose 火器和舰炮都依赖枪药运作。基础 Windrose 枪药配方：
          </p>
          <ul>
            <li>硝石（Saltpeter）x3 — 在 Windrose 洞穴矿脉采集，或在定居点精炼厂批量生产</li>
            <li>木炭（Charcoal）x2 — 定居点木炭窑生产</li>
            <li>硫磺（Sulfur）x1 — 从 Windrose 炼金师类敌人掉落，或在火山群岛采集</li>
          </ul>
          <p>
            在 Windrose 定居点建造枪药厂（Gunpowder Mill）可大幅提升 Windrose 枪药生产效率，是中后期游戏的必建设施。
          </p>

          <h2>Windrose 常见问题（中文）</h2>
          <h3>Windrose 支持中文吗？</h3>
          <p>
            是的，<strong>Windrose 风启之旅</strong> 完整支持简体中文界面，包括游戏菜单、字幕和物品描述。Steam 版 Windrose 可在游戏属性的语言设置中切换为简体中文。
          </p>

          <h3>Windrose 有 PS5 版本吗？</h3>
          <p>
            目前 <strong>Windrose 风启之旅</strong> 仅在 PC（Steam 和 Epic Games Store）上线，暂无 PS5、Xbox 或主机版本的官方计划。Windrose 开发团队表示，主机版本可能在 Windrose 1.0 正式发布后考虑。
          </p>

          <h3>Windrose 可以单机游玩吗？</h3>
          <p>
            可以，<strong>Windrose 风启之旅</strong> 支持离线单人游玩。单人 Windrose 玩家依靠 NPC 船员（Windrose Crew）来弥补多人队伍的缺失，合理配置 Windrose NPC 船员组合是单人攻略的关键。
          </p>

          <div className="info-box">
            <strong>Windrose 中文社区：</strong> 中国 Windrose 玩家活跃社区包括 Steam Windrose 社区、B站 Windrose 攻略区以及 Windrose 官方 Discord 的中文频道。欢迎加入 Windrose 中文社群，与更多风启之旅玩家交流。
          </div>

        </article>
        <RelatedPages pages={related} />
        <CommentBox page="windrose-zhongwen" />
      </main>
      <Footer />
    </>
  );
}
