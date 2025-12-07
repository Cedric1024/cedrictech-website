<template>
  <div class="wechat-page">
    <el-card class="wechat-card" shadow="hover">
      <h2 class="title">添加微信 · 快速沟通需求</h2>
      <p class="subtitle">扫一扫二维码，加我微信：<strong>CedricChan-dc</strong></p>

      <img class="qr-img" src="@/assets/wechat.jpg" alt="微信二维码" />

      <el-button type="success" size="large" class="copy-btn" @click="copyWechat">
        复制微信号：CedricChan-dc
      </el-button>

      <p class="note">备注建议：<strong>稳码咨询 + 简要需求</strong></p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";

const copyWechat = async () => {
  await navigator.clipboard.writeText("CedricChan-dc");
  ElMessage.success("微信号已复制");
};
</script>

<style scoped>
.wechat-page {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  padding: 60px 16px;
}

.wechat-card {
  max-width: 420px;
  width: 100%;
  padding: 24px;
  text-align: center;
  border-radius: 16px;
}

.title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 8px;
}

.subtitle {
  color: #606266;
  font-size: 14px;
  margin-bottom: 16px;
}

.qr-img {
  width: 240px;
  height: 240px;
  margin: 20px auto;
  border-radius: 12px;
  border: 1px solid #ebeef5;
}

.copy-btn {
  width: 100%;
  margin-top: 10px;
}

.note {
  margin-top: 16px;
  font-size: 13px;
  color: #909399;
}
</style>