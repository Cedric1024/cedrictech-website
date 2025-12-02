<template>
  <el-card class="case-card" shadow="hover">
    <!-- 产品截图 -->
    <div class="case-image-wrapper">
      <img src="@/assets/GrowledgeDemo.png" class="case-image" alt="Growledge Demo" />
      <div class="case-image-note">产品界面示意</div>
    </div>

    <!-- 标题 -->
    <h3 class="case-title">Growledge：AI 驱动的个人知识体系构建平台</h3>

    <!-- 描述 -->
    <p class="case-desc">
      一个从 0 到 1 完整自主研发的产品级 Demo，
      提供学习规划、知识库管理、AI 助教、智能复习等能力。
      展示 CedricTech 的全栈开发、AI 系统构建与产品设计能力。
    </p>

    <!-- 标签 -->
    <div class="case-tags">
      <el-tag v-for="tag in tags" :key="tag" class="case-tag" type="info">{{ tag }}</el-tag>
    </div>
  </el-card>
</template>

<script setup>
const tags = [
  "AI 助手",
  "学习规划",
  "知识库",
  "智能复习",
  "Spring AI",
  "Redis Vector Store",
  "Vue3",
  "全栈开发",
  "MVP 产品"
];
</script>

<style scoped>
.case-card {
  max-width: 780px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 14px;
}

.case-image-wrapper {
  text-align: center;
  margin-bottom: 16px;
}

.case-image {
  width: 100%;
  max-width: 720px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
}

.case-image-note {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
}

.case-title {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin: 16px 0 10px;
}

.case-desc {
  font-size: 14px;
  color: #606266;
  line-height: 1.7;
  text-align: center;
  margin-bottom: 16px;
}

.case-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.case-tag {
  border-radius: 999px;
}
</style>