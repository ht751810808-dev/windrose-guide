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
            <strong>Windrose（风启之旅）</strong> 是由 Kraken Express（乌兹别克斯坦独立工作室）开发、Pocketpair Publishing（《幻兽帕鲁》发行商）发行的多人合作海盗生存冒险游戏，于 2026 年 4 月 14 日在 Steam 抢先体验上线。Windrose 风启之旅在上线后 6 天内销售突破 100 万份，同时在线人数峰值接近 20 万人，Steam 好评率 89%，是 2026 年最受瞩目的 Steam 游戏之一。Steam 上还提供<strong>免费试玩 Demo</strong>（App ID: 4291770），约 4–6 小时内容，好评率高达 92%。
          </p>
          <p>
            <strong>Windrose 风启之旅</strong> 支持 1–8 人联机，最优体验为 4 人合作，也支持完全离线单人游玩。游戏融合了生存建造、类魂战斗（精准闪避+破防格挡）、海战和 POI（兴趣点）探索，玩家驾驶 <Link href="/windrose-ships">Windrose 舰船</Link>、组建 <Link href="/windrose-crew">Windrose 船员队伍</Link>、探索各 POI 并挑战具有超自然能力的历史主题 Boss。社区称其为"海上版 Valheim"。
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
            进入游戏后首先在 <strong>海岸丛林（Coastal Jungle）</strong> 起始区域驾驶 Ketch（克奇帆船）展开冒险。你的首要目标是：完成 <strong>"拯救船员（Rescue the Crew）"</strong> 任务招募 7 名船员，以及 <strong>"我需要一艘更大的船（I Need a Bigger Boat）"</strong> 任务解锁造船厂。持续运行木炭窑（Charcoal Kiln）积累灰烬（Ash）为后期枪药合成做准备。
          </p>

          <h3>Windrose 游戏循环</h3>
          <p>
            <strong>Windrose 风启之旅</strong> 的核心游戏循环分为三个阶段：
          </p>
          <ul>
            <li><strong>探索阶段：</strong>在 <Link href="/windrose-map">Windrose 地图</Link>（程序生成的群岛）上航行，发现新岛屿、POI（兴趣点）和稀有资源节点。地图通过种子（Seed）生成，社区提供互动地图工具可自动识别你的种子布局。</li>
            <li><strong>战斗阶段：</strong>攻略 Windrose POI（海盗要塞、沉船、遗迹）、参与海战，挑战具有固定机制的 Boss。注意：<strong>击杀敌人不获得经验值</strong>，经验来自完成任务或完整探索 POI。</li>
            <li><strong>建设阶段：</strong>建立定居点，将 <Link href="/windrose-ships">Windrose 舰船</Link> 从 Ketch（克奇）升级到 Brigantine（双桅帆船）再到 Frigate（护卫舰），制作 <Link href="/windrose-gunpowder">Windrose 枪药</Link>，发展四大势力（私枭、海盗、兄弟会、托尔图加人）的声望。</li>
          </ul>

          <h2>Windrose 最强 Build 推荐（中文）</h2>
          <p>
            <strong>Windrose</strong> 没有职业系统，Build 完全由天赋树选择、护甲和武器组合决定，支持随时（花费金币）洗点重置。
          </p>
          <h3>S+ 级：细剑精准 Build（Rapier Precision）</h3>
          <p>
            当前社区公认最强 Build。细剑（Rapier）攻速快、格挡反击伤害极高，完美契合 Windrose 的类魂战斗系统。对 Boss 的单体输出全游戏最高，适合有一定动作游戏基础的玩家。
          </p>
          <ul>
            <li><strong>主武器：</strong>细剑（Rapier）</li>
            <li><strong>天赋重点：</strong>刀刃精通、格挡窗口延长、体力回复</li>
            <li><strong>弱点：</strong>群体清怪能力差，人多的 POI 需要队友辅助</li>
          </ul>

          <h3>S 级：瘟疫长戟 AoE Build（Plague Halberd）</h3>
          <p>
            最佳群体清怪 Build。长戟（Halberd）的横扫范围广，瘟疫版本附带持续伤害，可同时叠加在多个敌人身上，在诅咒沼泽（Cursed Swamps）高密度 POI 中表现顶级。
          </p>
          <ul>
            <li><strong>主武器：</strong>瘟疫长戟（Plague Halberd）</li>
            <li><strong>天赋重点：</strong>长柄武器精通、流血/毒强化、重击</li>
          </ul>

          <h3>A 级：枪药远程 Build</h3>
          <p>
            以霰弹枪（Blunderbuss）或手炮（Hand Cannon）为核心的远程爆发 Build，配合炸药进行范围控制。需要稳定的 <Link href="/windrose-gunpowder">枪药供应链</Link>，石磨坊建立后约束大幅降低。
          </p>

          <h2>Windrose 枪药合成攻略</h2>
          <p>
            <strong>Windrose 枪药（Gunpowder）</strong> 是游戏中最重要的消耗材料，所有火器和舰炮都依赖枪药运作。枪药来源分两个阶段：
          </p>
          <p><strong>前期（海岸丛林阶段）：</strong>通过击杀敌方海盗（Sailor、Musketeer）、开启 POI 宝箱，以及砸开地图上发光的 "Old Package"（旧包裹）获得枪药。此阶段无法合成枪药。</p>
          <p><strong>中期（丘陵地带解锁后）：</strong>在 <strong>丘陵地带（Foothills）</strong> 生物群落解锁 <strong>石磨坊（Millstones）</strong> 工作台后，即可合成枪药。</p>
          <p><strong>枪药合成配方（石磨坊）：</strong></p>
          <ul>
            <li><strong>灰烬（Ash）× 25</strong> — 木炭窑烧制木炭时自动产生的副产品，从游戏开始就应持续运行木炭窑积累</li>
            <li><strong>硫磺（Sulfur）× 25</strong> — 仅在丘陵地带矿脉出现，需要铁镐（Iron Pickaxe）开采</li>
          </ul>
          <p>
            为石磨坊分配一名 <Link href="/windrose-crew">工人 NPC</Link> 可获得 <strong>+50% 枪药产量加成</strong>，是全游戏性价比最高的工人配置。
          </p>

          <h2>Windrose 常见问题（中文）</h2>
          <h3>Windrose 支持中文吗？</h3>
          <p>
            是的，<strong>Windrose 风启之旅</strong> 完整支持简体中文界面，包括游戏菜单、字幕和物品描述。Steam 版 Windrose 可在游戏属性的语言设置中切换为简体中文。
          </p>

          <h3>Windrose 有免费试玩吗？</h3>
          <p>
            有。Steam 上提供 <strong>Windrose 免费 Demo</strong>（App ID: 4291770），约 4–6 小时游戏内容，涵盖前三座岛屿、第一艘 Ketch 船、核心战斗和探索机制。Demo 好评率高达 92%，强烈推荐购买前先体验。
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
