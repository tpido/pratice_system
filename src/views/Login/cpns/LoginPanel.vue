<template>
  <div id="LoginPanel">
    <el-tabs type="border-card" :stretch="true">
      <el-tab-pane>
        <template #label>
          <el-icon><User /></el-icon>
          登录
        </template>
        <login-account ref="accountRef" />
      </el-tab-pane>
    </el-tabs>
    <div class="account-control">
      <el-checkbox v-model="isKeepAccount">记住密码</el-checkbox>
      <!-- <el-checkbox v-model="isStudent" :true-label="0">老师</el-checkbox> -->
      <el-checkbox v-model="isStudent" :true-label="0" :false-label="-1"
        >老师</el-checkbox
      >
      <el-checkbox v-model="isStudent" :true-label="1" :false-label="-1"
        >学生</el-checkbox
      >
      <el-checkbox v-model="isStudent" :true-label="2" :false-label="-1"
        >管理员</el-checkbox
      >
      <!-- <el-checkbox-group v-model="isStudent" :max="1">
        <el-checkbox label="Option A" :true-label="0" />
        <el-checkbox label="Option B" :true-label="1" />
        <el-checkbox label="Option C" :true-label="2" />
      </el-checkbox-group> -->
    </div>
    <el-button type="primary" class="el-btn" @click="handleBtnClick">
      点击登录
    </el-button>
  </div>
</template>

<script setup lang="ts">
import { Iphone, User } from "@element-plus/icons";
import { ref } from "vue";
import LoginAccount from "./login-account.vue";
const isKeepAccount = ref(true);
const isStudent = ref(0);
const accountRef = ref<InstanceType<typeof LoginAccount>>();

const handleBtnClick = () => {
  accountRef.value?.loginAction(isKeepAccount.value, isStudent.value);
};
</script>

<style lang="less" scoped>
#LoginPanel {
  width: 320px;
  margin-bottom: 150px;
  margin-top: 10px;
}

.account-control {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-btn {
  margin-top: 5px;
  width: 100%;
}
</style>
