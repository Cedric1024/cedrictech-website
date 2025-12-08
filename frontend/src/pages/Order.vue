<template>
  <div class="order-page">
    <main class="order-main">

      <!-- 标题区域 -->
      <section class="order-header">
        <h1 class="order-title">提交你的需求，我们来帮你落地</h1>
        <p class="order-subtitle">
          不需要一次性写得很详细，只需要告诉我：你想解决什么问题。
        </p>
      </section>

      <!-- 表单 -->
      <el-card class="order-card" shadow="never">
        <el-form
          ref="formRef"
          :model="form"
          :rules="rules"
          label-width="90px"
          class="order-form"
        >
          <el-form-item label="你的称呼" prop="name">
            <el-input v-model="form.name" placeholder="例如：小王 / 运营同学 / 某高校学生" />
          </el-form-item>

          <el-form-item label="联系方式" prop="contact">
            <el-input
              v-model="form.contact"
              placeholder="微信号 / 邮箱（至少填一个）"
            />
          </el-form-item>

          <el-form-item label="需求内容" prop="description">
            <el-input
              v-model="form.description"
              type="textarea"
              :rows="5"
              placeholder="例如：想做一个 Python 自动化脚本、数据分析小工具、AI 接口、Web 小系统等…"
            />
          </el-form-item>

          <el-form-item label="预算预期">
            <el-input
              v-model="form.budget"
              placeholder="可选，例如：几百 / 1000 左右 / 再看方案报价 等"
            />
          </el-form-item>

          <el-form-item>
            <el-button type="primary" size="large" @click="onSubmit">
              提交需求
            </el-button>
            <span class="form-tip">* 提交后 10–60 分钟内一般会回复你</span>
          </el-form-item>
        </el-form>
      </el-card>

      <!-- 微信卡片 -->
      <section class="wechat-card-section">
        <el-card class="wechat-card" shadow="never">
          <h3>也可以直接添加微信联系</h3>
          <ul class="wechat-info">
            <li><strong>微信：</strong> CedricChan-dc</li>
            <li><strong>备注建议：</strong> “稳码咨询 + 简要需求”</li>
            <li><strong>响应时间：</strong> 10:00–22:00</li>
          </ul>
          <el-button type="success" size="large" @click="goToWechatQR">
            查看微信二维码
          </el-button>
        </el-card>
      </section>

    </main>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";

const router = useRouter();

const formRef = ref();

const form = reactive({
  name: "",
  contact: "",
  description: "",
  budget: ""
});

const rules = {
  name: [{ required: true, message: "请填写称呼", trigger: "blur" }],
  contact: [{ required: true, message: "请填写联系方式", trigger: "blur" }],
  description: [{ required: true, message: "请描述你的需求", trigger: "blur" }]
};

// 小红书用户提需求后提交
const onSubmit = () => {
  formRef.value.validate(async (valid: boolean) => {
    if (!valid) return;

    // 这里未来可以接入你自己的后端接口 或 飞书表单 Webhook
    // 目前先提示（你的官网已有同样逻辑）
    ElMessage.success("需求已提交，我会尽快联系你～");
  });
};

// 去二维码页（你可以换成你的二维码页面路由）
const goToWechatQR = () => {
  router.push("/wechat");
};
</script>

<style scoped>
.order-page {
  min-height: 100vh;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
  padding: 40px 16px;
}

.order-main {
  max-width: 700px;
  width: 100%;
}

.order-header {
  text-align: center;
  margin-bottom: 32px;
}

.order-title {
  font-size: 26px;
  font-weight: 700;
  margin-bottom: 8px;
}

.order-subtitle {
  font-size: 14px;
  color: #909399;
}

.order-card {
  padding: 24px;
  border-radius: 16px;
}

.order-form {
  margin-top: 10px;
}

.form-tip {
  font-size: 12px;
  color: #c0c4cc;
  margin-left: 16px;
}

.wechat-card-section {
  margin-top: 24px;
}

.wechat-card {
  padding: 16px;
  border-radius: 16px;
  text-align: center;
}

.wechat-info {
  list-style: none;
  padding: 0;
  font-size: 14px;
  margin: 0 0 16px 0;
  color: #606266;
}

.wechat-info li {
  margin-bottom: 6px;
}
</style>