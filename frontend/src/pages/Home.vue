<template>
  <div class="landing-page">
    <!-- 顶部导航 -->
    <header class="nav">
      <div class="nav-left">
        <div class="logo">CedricTech</div>
        <div class="logo-sub">让技术真正服务每一个人</div>
      </div>
      <nav class="nav-menu">
        <a href="#hero">首页</a>
        <a href="#studios">工作室</a>
        <a href="#services">典型服务</a>
        <a href="#about">关于我</a>
        <a href="#contact">联系合作</a>
      </nav>
    </header>

    <!-- Hero 区 -->
    <section id="hero" class="hero">
      <div class="hero-text">
        <h1>CedricTech 外包 · 为个人与团队打造 AI 时代的生产力工具</h1>
        <p>
          既懂技术实现，也懂业务落地。<br />
          针对不同客户场景，CedricTech 拆分为
          <strong>稳码工作室（toC）</strong> 与
          <strong>智码工作室（toB）</strong>，
          用同一套工程标准，交付不同形态的产品。
        </p>

        <div class="hero-actions">
          <el-button type="primary" size="large" @click="scrollTo('studios')">
            了解两个工作室
          </el-button>
          <el-button size="large" @click="scrollTo('contact')">
            现在就聊聊需求
          </el-button>
        </div>

        <div class="hero-tags">
          <span class="tag">Vue3 · Vite · Element Plus</span>
          <span class="tag">Spring Boot · MyBatis · Redis</span>
          <span class="tag">AI Agent · RAG · 自动化工具</span>
        </div>
      </div>

      <div class="hero-card">
        <h3>可以帮你解决什么？</h3>
        <ul>
          <li>✅ 想做一个 MVP 官网 / 工具站，却没有全栈同学</li>
          <li>✅ 需要 AI 助手 / Agent 嵌入业务流程</li>
          <li>✅ 想把繁琐重复操作改造成自动化脚本 / 后台系统</li>
          <li>✅ 已有系统，但缺人帮你梳理架构、规范接口、部署上线</li>
        </ul>
        <p class="hero-note">
          用外包的成本，享受“个人 CTO + 工程团队”的交付体验。
        </p>
      </div>
    </section>

    <!-- 工作室介绍 -->
    <section id="studios" class="studios">
      <h2>两个工作室 · 覆盖从个人到组织的不同需求</h2>
      <p class="section-subtitle">
        不同客户，只需要找到最适合你的一侧：稳码（toC） 或 智码（toB）。
      </p>

      <div class="studio-grid">
        <!-- 稳码工作室 -->
        <article class="studio-card studio-card-consumer">
          <h3>稳码工作室 · 面向个人 & 创作者（toC）</h3>
          <p class="studio-tagline">
            帮你把“脑海里的想法”落成可上线的产品雏形。
          </p>

          <div class="studio-section">
            <h4>适合谁？</h4>
            <ul>
              <li>想要一个 <strong>个人官网 / 作品集 / 博客系统</strong> 的学生与开发者</li>
              <li>需要 <strong>展示项目、论文、竞赛成果</strong> 的在校生</li>
              <li>有想法但缺技术的 <strong>自媒体 / 创作者</strong></li>
            </ul>
          </div>

          <div class="studio-section">
            <h4>核心服务</h4>
            <ul>
              <li>个人官网 / Landing Page 设计与实现（Vue3 + 部署）</li>
              <li>博客 / 知识库系统（支持 Markdown、搜索、AI 助手）</li>
              <li>量化投资 / 学习管理 等垂直小工具的 MVP 实现</li>
              <li>简历 + 项目包装：提供技术实现 + 展示页面双重加持</li>
            </ul>
          </div>

          <div class="studio-section">
            <h4>交付特点</h4>
            <ul>
              <li>代码托管到你的 GitHub，便于你后续继续维护</li>
              <li>提供详细部署文档：本地运行 + 云服务器部署</li>
              <li>可选：一次 1 对 1 walkthrough，手把手讲解项目结构</li>
            </ul>
          </div>

          <div class="studio-actions">
            <el-button type="primary" @click="prefillContact('稳码工作室 - 个人官网 / 工具需求')">
              我是个人用户，想做个产品
            </el-button>
          </div>
        </article>

        <!-- 智码工作室 -->
        <article class="studio-card studio-card-business">
          <h3>智码工作室 · 面向团队 & 机构（toB）</h3>
          <p class="studio-tagline">
            把你的业务流程，升级为“可复用的 AI+自动化系统”。
          </p>

          <div class="studio-section">
            <h4>适合谁？</h4>
            <ul>
              <li>需要 <strong>AI 外包开发 / Agent 接入</strong> 的中小团队</li>
              <li>有现有业务系统，想接入 <strong>ChatGPT / DeepSeek</strong> 的公司</li>
              <li>教育机构 / 工作室，想做 <strong>内部管理后台 / 教学助手</strong></li>
            </ul>
          </div>

          <div class="studio-section">
            <h4>核心服务</h4>
            <ul>
              <li>AI 助手 & Agent 应用（问答、流程协作、外包助手）</li>
              <li>前后端分离系统：Vue3 + Spring Boot + MyBatis + Redis</li>
              <li>业务自动化：自动化测试、数据抓取、报表生成等工具</li>
              <li>基于 RAG 的知识库系统：文档 / FAQ / 操作手册智能问答</li>
            </ul>
          </div>

          <div class="studio-section">
            <h4>交付特点</h4>
            <ul>
              <li>对接你现有账户体系 / 权限体系（如 JWT / RBAC）</li>
              <li>提供接口文档 + 架构说明，方便后续内部接手</li>
              <li>可以按阶段拆分：需求梳理 → 原型验证 → 小步上线</li>
            </ul>
          </div>

          <div class="studio-actions">
            <el-button type="success" @click="prefillContact('智码工作室 - AI / 系统外包需求')">
              我是团队或机构，想了解合作
            </el-button>
          </div>
        </article>
      </div>
    </section>

    <!-- 典型服务模块 -->
    <section id="services" class="services">
      <h2>可以为你做的具体事情</h2>
      <div class="service-grid">
        <div class="service-card">
          <h3>Vue3 官网 & 产品落地页</h3>
          <p>适合作为产品首发页 / 活动页 / 个人品牌主页。</p>
          <ul>
            <li>响应式设计，适配 PC & 移动端</li>
            <li>支持表单收集、跳转到微信 / 邮箱</li>
            <li>易于扩展成完整网站 / 后台</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>AI 助手 / Agent 系统</h3>
          <p>把你的知识、流程、数据变成可对话的智能服务。</p>
          <ul>
            <li>接入 DeepSeek / OpenAI / 本地模型</li>
            <li>支持 RAG、聊天历史、权限控制</li>
            <li>前后端分离，前端可嵌入任意网站</li>
          </ul>
        </div>
        <div class="service-card">
          <h3>业务自动化工具</h3>
          <p>用脚本 + 后台系统替你做重复劳动。</p>
          <ul>
            <li>自动化测试执行与结果收集</li>
            <li>定时数据抓取、清洗与整理</li>
            <li>报表生成、告警通知、简易看板</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 关于我 -->
    <section id="about" class="about">
      <h2>关于CedricTech</h2>
      <p>
        CedricTech 作为个人工作室品牌，希望通过“稳码 + 智码”双工作室模式，
        既服务个人开发者与学生，也为中小团队提供可落地、可维护的工程解决方案。
      </p>
      <p>
        对合作方式不过度包装：你可以简单理解为——
        <strong>用外包的价格，请一个懂技术、懂业务、懂产品的“个人 CTO”。</strong>
      </p>
    </section>

    <!-- 联系方式 -->
    <section id="contact" class="contact">
      <h2>聊聊你的想法 · 看能不能帮上忙</h2>
      <p>可以带着一个大概的描述来找我，例如：</p>
      <ul>
        <li>“我想做一个个人官网，展示竞赛、科研和项目”</li>
        <li>“我们想做一套 AI 助手，帮运营 / 教学 / 内部同事提高效率”</li>
        <li>“现在有一堆重复工作，能不能用脚本 + 后台帮我们省时间？”</li>
      </ul>

      <div class="contact-actions">
        <el-button type="primary" size="large">
          复制邮箱 / 微信（预留）
        </el-button>
        <span class="contact-note">
          （这里可以放你的微信二维码 / 邮箱 / 企业微信链接）
        </span>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <span>© {{ new Date().getFullYear() }} CedricTech · 稳码工作室 & 智码工作室</span>
      <span>让技术真正服务每一个人</span>
    </footer>
  </div>
</template>

<script setup lang="ts">
const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const prefillContact = (scene: string) => {
  // 这里可以根据场景预填联系文案，例如跳转到某个页面 / 打开对话框
  console.log("准备联系，场景：", scene);
  scrollTo("contact");
};
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #1f2933;
  background: #f5f7fb;
}

/* 顶部导航 */
.nav {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 6vw;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #e5e7eb;
}

.nav-left .logo {
  font-size: 20px;
  font-weight: 700;
}

.nav-left .logo-sub {
  font-size: 12px;
  color: #6b7280;
}

.nav-menu {
  display: flex;
  gap: 18px;
}

.nav-menu a {
  font-size: 14px;
  color: #4b5563;
  text-decoration: none;
}

.nav-menu a:hover {
  color: #111827;
}

/* Hero 区 */
.hero {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 1.4fr);
  gap: 32px;
  padding: 56px 6vw 40px;
  align-items: center;
}

.hero-text h1 {
  font-size: 28px;
  line-height: 1.4;
  margin-bottom: 16px;
}

.hero-text p {
  font-size: 15px;
  color: #4b5563;
  line-height: 1.8;
}

.hero-actions {
  margin: 20px 0 12px;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 8px;
}

.tag {
  font-size: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background: #e5f0ff;
  color: #1d4ed8;
}

.hero-card {
  background: #ffffff;
  border-radius: 16px;
  padding: 20px 20px 18px;
  box-shadow: 0 18px 45px rgba(15, 23, 42, 0.1);
  border: 1px solid #e5e7eb;
}

.hero-card h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.hero-card ul {
  padding-left: 20px;
  margin: 0 0 10px;
  font-size: 14px;
  color: #4b5563;
}

.hero-note {
  font-size: 13px;
  color: #6b7280;
}

/* 工作室区 */
.studios {
  padding: 32px 6vw 40px;
}

.studios h2 {
  font-size: 22px;
  text-align: center;
  margin-bottom: 8px;
}

.section-subtitle {
  text-align: center;
  font-size: 14px;
  color: #6b7280;
  margin-bottom: 24px;
}

.studio-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.studio-card {
  background: #ffffff;
  border-radius: 18px;
  padding: 18px 18px 16px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.06);
}

.studio-card-consumer {
  border-top: 3px solid #3b82f6;
}

.studio-card-business {
  border-top: 3px solid #10b981;
}

.studio-card h3 {
  font-size: 18px;
  margin-bottom: 6px;
}

.studio-tagline {
  font-size: 13px;
  color: #6b7280;
  margin-bottom: 12px;
}

.studio-section {
  margin-top: 10px;
}

.studio-section h4 {
  font-size: 14px;
  margin-bottom: 4px;
}

.studio-section ul {
  margin: 0;
  padding-left: 18px;
  font-size: 13px;
  color: #4b5563;
}

.studio-actions {
  margin-top: 14px;
}

/* 服务区 */
.services {
  padding: 32px 6vw 40px;
  background: #eef2ff;
}

.services h2 {
  font-size: 20px;
  margin-bottom: 16px;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

.service-card {
  background: #ffffff;
  border-radius: 14px;
  padding: 14px 14px 10px;
  border: 1px solid #e5e7eb;
}

.service-card h3 {
  font-size: 16px;
  margin-bottom: 6px;
}

.service-card p {
  font-size: 13px;
  color: #6b7280;
}

.service-card ul {
  padding-left: 18px;
  margin: 6px 0 0;
  font-size: 13px;
  color: #4b5563;
}

/* 关于区 */
.about {
  padding: 32px 6vw 24px;
}

.about h2 {
  font-size: 20px;
  margin-bottom: 12px;
}

.about p {
  font-size: 14px;
  color: #4b5563;
  line-height: 1.8;
  margin-bottom: 8px;
}

/* 联系区 */
.contact {
  padding: 24px 6vw 32px;
  background: #f9fafb;
}

.contact h2 {
  font-size: 20px;
  margin-bottom: 10px;
}

.contact p,
.contact ul {
  font-size: 14px;
  color: #4b5563;
}

.contact ul {
  padding-left: 18px;
}

.contact-actions {
  margin-top: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.contact-note {
  font-size: 12px;
  color: #9ca3af;
}

/* 页脚 */
.footer {
  padding: 14px 6vw 18px;
  font-size: 12px;
  color: #9ca3af;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  justify-content: space-between;
  border-top: 1px solid #e5e7eb;
  background: #ffffff;
}

/* 响应式处理 */
@media (max-width: 960px) {
  .hero {
    grid-template-columns: minmax(0, 1fr);
  }

  .studio-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .service-grid {
    grid-template-columns: minmax(0, 1fr);
  }

  .nav-menu {
    display: none; /* 简化：移动端可以做汉堡菜单 */
  }
}
</style>