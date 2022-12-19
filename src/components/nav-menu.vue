<template>
  <div id="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span>实习管理系统(学生)</span>
    </div>

    <el-menu
      background-color="#001529"
      text-color="white"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :router="true"
      default-active="/main/checkin"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><Calendar /></el-icon>
          <span>打卡管理</span>
        </template>
        <el-menu-item index="/main/checkin"> 立即打卡 </el-menu-item>
        <el-menu-item index="/main/checkin-record"> 打卡记录 </el-menu-item>
        <el-menu-item index="/main/askleave">申请请假</el-menu-item>
        <el-menu-item index="/main/askleave-record">请假记录</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>工作管理</span>
        </template>
        <el-menu-item index="/main/writelog">撰写工作日志</el-menu-item>
        <el-menu-item index="/main/wirtepraticereport">
          撰写实习报告
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>班级管理</span>
        </template>
        <el-menu-item index="/main/join-class">加入班级</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { Calendar, Promotion } from "@element-plus/icons";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps<{
  isCollapse: boolean;
}>();
</script>

<style lang="less" scoped>
#nav-menu {
  height: 100%;
  background-color: #001529;
  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    justify-content: flex-start;
    align-items: center;

    img {
      height: 100%;
      margin-right: 21px;
    }

    span {
      white-space: nowrap;
      font-weight: 700;
      color: rgb(13, 220, 186);
    }
  }

  .el-menu {
    border-right: none;
  }
}
</style>
