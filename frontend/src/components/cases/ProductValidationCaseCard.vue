<template>
  <el-card class="case-card" shadow="hover">
    <!-- 产品截图 -->
    <div class="case-image-wrapper">
      <img src="@/assets/ProductValidationDemo.png" class="case-image" alt="商品验证系统示意图" />
      <div class="case-image-note">产品界面示意</div>
    </div>

    <!-- 标题 -->
    <h3 class="case-title">商品链接验证系统：真实设备的移动端自动化检测</h3>

    <!-- 描述 -->
    <p class="case-desc">
      采用分布式移动端自动化测试技术，通过真实设备执行操作，
      稳定批量验证淘宝、京东、拼多多等平台商品链接是否下架。
      无需爬虫，规避平台风控风险，是批量商品检测场景的终极解决方案。
    </p>

    <!-- 标签 -->
    <div class="case-tags">
      <el-tag v-for="tag in tags" :key="tag" class="case-tag" type="info">
        {{ tag }}
      </el-tag>
    </div>
  </el-card>
</template>

<script setup>
const tags = [
  "移动端自动化",
  "真实设备执行",
  "分布式调度",
  "零风控风险",
  "商品状态检测",
  "Airtest",
  "Poco",
  "Python"
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