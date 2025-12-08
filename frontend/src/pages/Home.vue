<template>
  <div class="home-page">
    <!-- 顶部导航 -->
    <header class="header">
      <div class="header-inner">
        <div class="logo-block">
          <div class="logo-text">CedricTech</div>
          <div class="logo-sub">稳码工作室 · AI与自动化定制开发</div>
        </div>
        <nav class="nav">
          <a href="#hero" class="nav-link">首页</a>
          <a href="#services" class="nav-link">服务与案例</a>
          <a href="#flow" class="nav-link">合作流程</a>
          <a href="#about" class="nav-link">关于稳码</a>
          <a href="#contact" class="nav-link">联系我们</a>
        </nav>
        <div class="nav-actions">
          <el-button size="small" type="primary" @click="scrollToSection('contact')">
            微信咨询 / 留言
          </el-button>
        </div>
      </div>
    </header>

    <!-- 主体内容 -->
    <main class="main">
      <!-- Hero 区 -->
      <section id="hero" class="section hero-section">
        <div class="hero-left">
          <h1 class="hero-title">稳码工作室：让你的想法稳稳落地</h1>
          <p class="hero-subtitle">
            专注 AI + 自动化、小工具与业务小系统定制开发，
            帮你把“脑中的需求”变成可落地、可交付的产品。
          </p>

          <div class="hero-tags">
            <el-tag v-for="tag in heroTags" :key="tag" class="hero-tag" type="info">
              {{ tag }}
            </el-tag>
          </div>

          <div class="hero-actions">
            <el-button type="primary" size="large" @click="scrollToSection('contact')">
              发个需求给我看看
            </el-button>
            <el-button size="large" @click="scrollToSection('flow')">
              3 分钟了解合作流程
            </el-button>
          </div>

          <p class="hero-note">
            已服务场景：量化回测小工具、作业数据处理、自动化测试脚本、个人项目小系统等。
          </p>
        </div>

        <div class="hero-right">
          <el-card shadow="hover" class="hero-card">
            <div class="hero-card-title">典型交付示意</div>
            <ul class="hero-card-list">
              <li>商品链接验证系统：输入批量链接（tb、jd、pdd），验证商品是否下架</li>
              <li>加急金融数据处理：分析用户投资资金流向以及重复投资详情</li>
              <li>基于 DeepSeek 的自动评估系统：输入检测数据自动生成专业鉴定报告</li>
            </ul>
            <div class="hero-card-footer">* 为保护客户隐私，这里为示意内容。</div>
          </el-card>
        </div>
      </section>

      <!-- 服务与案例 -->
      <section id="services" class="section grey-section">
        <div class="section-header">
          <h2>稳码工作室可以帮你做什么？</h2>
          <p>围绕“AI + 自动化 + Web 小系统”，为个人、小团队提供可落地的技术服务。</p>
        </div>

        <!-- 服务卡片 -->
        <el-row :gutter="20" class="services-row">
          <el-col
            v-for="service in services"
            :key="service.title"
            :xs="24"
            :sm="12"
            :md="8"
            class="service-col"
          >
            <el-card shadow="hover" class="service-card">
              <h3 class="service-title">{{ service.title }}</h3>
              <p class="service-desc">{{ service.desc }}</p>
              <p class="service-meta"><strong>适合：</strong>{{ service.audience }}</p>
              <p class="service-meta"><strong>典型交付：</strong>{{ service.delivery }}</p>
            </el-card>
          </el-col>
        </el-row>

        <!-- 场景 / 案例 -->
        <div class="section-sub-header">
          <h3>典型场景 / 使用案例（示意）</h3>
          <p>每个项目都会根据你的实际需求进行裁剪和定制。</p>
        </div>
        <el-row :gutter="20" class="cases-row">
          <el-col
            v-for="item in cases"
            :key="item.title"
            :xs="24"
            :sm="12"
            :md="8"
            class="case-col"
          >
            <el-card shadow="never" class="case-card">
              <h4 class="case-title">{{ item.title }}</h4>
              <p class="case-desc">{{ item.desc }}</p>
              <div class="case-tags">
                <el-tag v-for="tag in item.tags" :key="tag" size="small" class="case-tag">
                  {{ tag }}
                </el-tag>
              </div>
            </el-card>
          </el-col>
        </el-row>
        <!-- 精选案例展示 -->
        <div class="section-sub-header">
          <h3>精选案例展示（产品级示意）</h3>
          <p>以下为 CedricTech 实际交付/自研的产品级案例，展示完整功能实现能力。</p>
        </div>

        <el-row :gutter="20" class="featured-cases-row">

          <el-col :xs="24" :md="12" :lg="12">
            <GrowledgeCaseCard />
          </el-col>
          <el-col :xs="24" :md="12" :lg="12">
            <ProductValidationCaseCard />
          </el-col>

<!--          <el-col :xs="24" :md="12" :lg="12">-->
<!--            <el-card shadow="hover" class="product-case-card">-->
<!--              <img src="@/assets/cases/car-eval.png" class="product-case-image" alt="car-eval" />-->
<!--              <h3 class="product-case-title">-->
<!--                新能源二手车智能评估平台（基于 DeepSeek）-->
<!--              </h3>-->
<!--              <p class="product-case-desc">-->
<!--                输入检测数据后自动生成报告（含双语）；适配多车型模板，交付速度快，落地性强。-->
<!--              </p>-->
<!--              <div class="product-case-tags">-->
<!--                <el-tag size="small">DeepSeek</el-tag>-->
<!--                <el-tag size="small">AI 报告生成</el-tag>-->
<!--                <el-tag size="small">数据解析</el-tag>-->
<!--                <el-tag size="small">Web 平台</el-tag>-->
<!--              </div>-->
<!--            </el-card>-->
<!--          </el-col>-->

        </el-row>

        <!-- 更多场景示例（列表型） -->
        <div class="section-sub-header" style="margin-top: 40px;">
          <h3>更多使用场景（示意）</h3>
          <p>每个项目都会根据你的实际需求进行裁剪与定制。</p>
        </div>

        <el-row :gutter="20" class="cases-row">
          <el-col
            v-for="item in cases"
            :key="item.title"
            :xs="24"
            :sm="12"
            :md="8"
            class="case-col"
          >
            <el-card shadow="never" class="case-card">
              <h4 class="case-title">{{ item.title }}</h4>
              <p class="case-desc">{{ item.desc }}</p>
              <div class="case-tags">
                <el-tag v-for="tag in item.tags" :key="tag" size="small" class="case-tag">
                  {{ tag }}
                </el-tag>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </section>



      <!-- 合作流程 -->
      <section id="flow" class="section">
        <div class="section-header">
          <h2>合作流程：从想法到稳定交付</h2>
          <p>流程尽量简单清晰，方便你快速开始，不被“流程本身”拖慢节奏。</p>
        </div>

        <el-steps :active="4" finish-status="success" align-center class="flow-steps">
          <el-step
            v-for="step in flowSteps"
            :key="step.title"
            :title="step.title"
            :description="step.desc"
          />
        </el-steps>

        <div class="flow-extra">
          <el-card shadow="never">
            <p>
              小贴士：你可以直接把
              <strong>业务说明、聊天记录截图、项目需求文档</strong>
              发给我，我会帮你整理成可执行的需求，并给出实现建议与时间预估。
            </p>
          </el-card>
        </div>
      </section>

      <!-- 关于稳码 / 智码 -->
      <section id="about" class="section grey-section">
        <div class="section-header">
          <h2>关于稳码工作室 & 智码工作室</h2>
          <p>用技术把你的时间和精力从重复劳动中解放出来。</p>
        </div>

        <el-row :gutter="20">
          <el-col :xs="24" :md="14">
            <el-card shadow="never">
              <h3>稳码工作室（个人向、小团队向）</h3>
              <p>
                大厂背景团队，专注于 AI + 自动化、小工具、Web
                小系统等领域的定制开发。目标是“稳”：需求沟通清楚、过程有反馈、交付能落地。
              </p>
              <ul class="about-list">
                <li>面向对象：学生、个人创作者、小团队、小企业内部项目</li>
                <li>典型形式：脚本工具、自动化流程、数据处理/报表、小型管理系统</li>
                <li>技术栈：Python / Java / Vue / Spring Boot / Redis / Docker 等</li>
              </ul>
            </el-card>
          </el-col>

          <el-col :xs="24" :md="10">
            <el-card shadow="never">
              <h3>智码工作室（企业合作）</h3>
              <p>
                如果你是企业 / 机构，有更复杂的系统级需求（如 AI 平台、自动化测试平台、复杂数据系统），
                可以通过 <strong>智码工作室</strong> 进行团队协作开发。
              </p>
              <p>
                当前官网 v1.0 仅简要开放企业合作入口，如有需要，可在下方留言或添加微信时备注
                <strong>【企业合作】</strong>。
              </p>
            </el-card>
          </el-col>
        </el-row>
      </section>

      <!-- 联系我们 -->
      <section id="contact" class="section contact-section">
        <div class="section-header">
          <h2>说明一下你的需求，我们来看看怎么做</h2>
          <p>不用一次性把所有细节写清楚，只要尽可能告诉我：你想解决什么问题。</p>
        </div>

        <el-row :gutter="20">
          <el-col :xs="24" :md="14">
            <el-card shadow="never">
              <el-form
                ref="contactFormRef"
                :model="contactForm"
                :rules="contactRules"
                label-width="90px"
              >
                <el-form-item label="你的称呼" prop="name">
                  <el-input v-model="contactForm.name" placeholder="例如：小王 / 某高校学生 / 某工作室负责人" />
                </el-form-item>

                <el-form-item label="联系方式" prop="contact">
                  <el-input
                    v-model="contactForm.contact"
                    placeholder="微信号 / 邮箱（至少填一个方便联系你的方式）"
                  />
                </el-form-item>

                <el-form-item label="需求简述" prop="description">
                  <el-input
                    v-model="contactForm.description"
                    type="textarea"
                    :rows="5"
                    placeholder="可以粘贴作业要求、简单描述业务流程、或者写下你想要的效果。"
                  />
                </el-form-item>

                <el-form-item label="预算预期">
                  <el-input
                    v-model="contactForm.budget"
                    placeholder="可选，例如：几百 / 1000 左右 / 再看方案报价 等"
                  />
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="handleSubmit">发给我，帮你评估一下</el-button>
                  <span class="form-tip">* 表单目前为示意，可接入你的后端接口/飞书表单等。</span>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>

          <el-col :xs="24" :md="10">
            <el-card shadow="never" class="contact-info-card">
              <h3>也可以直接添加微信 / 发送邮件</h3>
              <ul class="contact-info-list">
                <li>
                  <strong>微信：</strong>
                  <span>CedricChan-dc</span>
                </li>
                <li>
                  <strong>邮箱：</strong>
                  <span>chendecheng@cedrictech.cn</span>
                </li>
                <li>
                  <strong>备注建议：</strong>
                  <span>可备注「稳码咨询 + 简要需求」，方便快速识别。</span>
                </li>
                <li>
                  <strong>大致响应时间：</strong>
                  <span>工作日 10:00–22:00，一般会尽快回复。</span>
                </li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </main>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="footer-inner">
        <div>© {{ new Date().getFullYear() }} CedricTech 版权所有 |
          <a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            粤ICP备2025404071号
          </a></div>
        <div class="footer-links">
          <span>AI 与自动化开发 · 小工具与系统定制服务</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { ElMessage } from 'element-plus'
import GrowledgeCaseCard from "@/components/cases/GrowledgeCaseCard.vue";
import ProductValidationCaseCard from "@/components/cases/ProductValidationCaseCard.vue";

const heroTags = [
  '个人 / 学生 / 小团队',
  'AI + 自动化工具',
  'MVP 小系统·可视化进度'
]

const services = [
  {
    title: 'AI + 自动化小工具',
    desc: '脚本工具、自动化测试、批量处理等，让重复工作交给程序来做。',
    audience: '学生、个人创作者、运营同学、小团队',
    delivery: 'Python / Java 实现，附使用说明与示例。'
  },
  {
    title: '数据处理与可视化报表',
    desc: '从原始数据到清洗、计算、可视化图表，一站式小工具或脚本。',
    audience: '老师、科研同学、小企业内部分析',
    delivery: 'Excel 自动化 / Python 脚本 + 图表报告。'
  },
  {
    title: 'Web 小系统 / MVP 原型',
    desc: '个人项目官网、小型管理后台、任务看板、结果展示平台等。',
    audience: '准备比赛 / 创业 / 求职展示的同学或团队',
    delivery: '前后端一体开发，部署到服务器并提供基础运维指引。'
  }
]

const cases = [
  {
    title: 'A 股量化回测小工具',
    desc: '根据用户自定义策略，读取历史数据，自动完成回测并输出收益曲线与关键指标。',
    tags: ['量化回测', 'Python', '数据分析']
  },
  {
    title: 'GNSS / 测绘数据自动处理脚本',
    desc: '解析特定格式文件，自动完成平差相关数据整理，输出可直接用于作业/报告的数据结果。',
    tags: ['教育场景', '自动化', '数据解析']
  },
  {
    title: '个人项目 Web 展示与管理小系统',
    desc: '为个人或小团队搭建简单的任务管理和结果展示系统，支持后续扩展 AI 助手等能力。',
    tags: ['Web 小系统', 'Vue', 'Spring Boot']
  }
]

const flowSteps = [
  {
    title: '需求沟通（免费）',
    desc: '简单聊一聊你的场景，可以直接发作业要求或需求文档。'
  },
  {
    title: '方案 & 报价',
    desc: '给出实现思路、时间预估与大致报价，确认后开始执行。'
  },
  {
    title: '开发 & 迭代',
    desc: '按阶段演示可运行版本，确保方向一致，随时微调。'
  },
  {
    title: '交付 & 售后',
    desc: '交付代码/工具与使用说明，后续小范围优化可继续沟通。'
  }
]

const contactFormRef = ref(null)
const contactForm = reactive({
  name: '',
  contact: '',
  description: '',
  budget: ''
})

const contactRules = {
  name: [{ required: true, message: '请填写你的称呼', trigger: 'blur' }],
  contact: [{ required: true, message: '请填写至少一种联系方式', trigger: 'blur' }],
  description: [{ required: true, message: '请简单描述一下你的需求', trigger: 'blur' }]
}

const handleSubmit = () => {
  contactFormRef.value?.validate((valid) => {
    if (!valid) return
    // TODO: 在这里接入后端接口 / 第三方表单
    ElMessage.success('该功能暂不可用，请邮件或微信联系我们～')
  })
}

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background: #f5f7fa;
  color: #303133;
}

/* Header */
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffffcc;
  backdrop-filter: blur(10px);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
}

.header-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

.logo-block {
  display: flex;
  flex-direction: column;
}

.logo-text {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.logo-sub {
  font-size: 12px;
  color: #909399;
}

.nav {
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 20px;
}

.nav-link {
  font-size: 14px;
  color: #606266;
  text-decoration: none;
  padding: 4px 0;
}

.nav-link:hover {
  color: #409eff;
}

.nav-actions {
  display: flex;
  align-items: center;
}

/* Main */
.main {
  max-width: 1100px;
  margin: 0 auto;
  padding: 24px 16px 40px;
}

/* Sections */
.section {
  padding: 40px 0;
}

.grey-section {
  background: #f5f7fa;
  margin: 24px -16px;
  padding: 40px 16px;
  border-radius: 16px;
}

.section-header {
  text-align: center;
  margin-bottom: 32px;
}

.section-header h2 {
  font-size: 24px;
  margin-bottom: 8px;
}

.section-header p {
  font-size: 14px;
  color: #909399;
}

.section-sub-header {
  margin-top: 32px;
  margin-bottom: 16px;
}

/* Hero */
.hero-section {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  align-items: center;
}

.hero-left {
  flex: 1 1 320px;
}

.hero-right {
  flex: 1 1 280px;
}

.hero-title {
  font-size: 30px;
  line-height: 1.3;
  margin-bottom: 12px;
}

.hero-subtitle {
  font-size: 15px;
  color: #606266;
  margin-bottom: 16px;
}

.hero-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
}

.hero-tag {
  border-radius: 999px;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.hero-note {
  font-size: 13px;
  color: #909399;
}

.hero-card {
  border-radius: 16px;
}

.hero-card-title {
  font-weight: 600;
  margin-bottom: 8px;
}

.hero-card-list {
  padding-left: 16px;
  font-size: 14px;
  color: #606266;
  text-align: left;
}

.hero-card-footer {
  margin-top: 12px;
  font-size: 12px;
  color: #c0c4cc;
}

/* 服务 */
.services-row,
.cases-row {
  margin-top: 8px;
}

.service-card {
  margin-bottom: 16px;
  border-radius: 16px;
  height: 100%;
}

.service-title {
  font-size: 18px;
  margin-bottom: 8px;
}

.service-desc {
  font-size: 14px;
  color: #606266;
  margin-bottom: 8px;
}

.service-meta {
  font-size: 13px;
  color: #909399;
}

/* 案例 */
.case-card {
  border-radius: 12px;
  height: 100%;
}

.case-title {
  font-size: 16px;
  margin-bottom: 6px;
}

.case-desc {
  font-size: 13px;
  color: #606266;
  margin-bottom: 8px;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.case-tag {
  border-radius: 999px;
}

/* Flow */
.flow-steps {
  max-width: 900px;
  margin: 0 auto 24px;
}

.flow-extra {
  max-width: 800px;
  margin: 0 auto;
}

/* About */
.about-list {
  margin-top: 8px;
  padding-left: 40px;
  font-size: 14px;
  color: #606266;
  text-align: left !important;
}

/* Contact */
.contact-section {
  margin-top: 16px;
}

.contact-info-card {
  height: 100%;
}

.contact-info-list {
  list-style: none;
  padding-left: 0;
  margin: 0;
  font-size: 14px;
}

.contact-info-list li {
  margin-bottom: 8px;
}

.form-tip {
  font-size: 12px;
  color: #c0c4cc;
  margin-left: 12px;
}

/* Footer */
.footer {
  border-top: 1px solid #ebeef5;
  background: #ffffff;
  margin-top: 24px;
}

.footer-inner {
  max-width: 1100px;
  margin: 0 auto;
  padding: 12px 16px 20px;
  font-size: 12px;
  color: #909399;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
}

/* 响应式 */
@media (max-width: 768px) {
  .header-inner {
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .nav {
    display: none; /* v1 先简化移动端导航，后续可加折叠菜单 */
  }

  .hero-title {
    font-size: 24px;
  }

  .grey-section {
    margin: 24px -8px;
    padding: 32px 12px;
  }
}
</style>