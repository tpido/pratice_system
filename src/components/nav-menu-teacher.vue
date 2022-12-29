<template>
  <div id="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span>实习管理系统(老师)</span>
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
          <span>请假管理</span>
        </template>
        <el-menu-item index="/main-teacher/ask-for-leave-perimit">
          历史请假
        </el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="2">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>实习管理</span>
        </template>
        <el-menu-item index="/main-teacher/post-message"
          >发布实习通知</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>作业管理</span>
        </template>
        <el-menu-item index="/main-teacher/check-log">工作日志</el-menu-item>
        <el-menu-item index="/main-teacher/check-pratice-report"
          >实习报告</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="4">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>考勤情况</span>
        </template>
        <el-menu-item index="/main-teacher/check-checkIn"
          >考勤情况</el-menu-item
        >
      </el-sub-menu>
      <el-sub-menu index="5">
        <template #title>
          <el-icon><Promotion /></el-icon>
          <span>成绩管理</span>
        </template>
        <el-menu-item index="/main-teacher/score-report">
          成绩报告于评定
        </el-menu-item>
        <el-menu-item index="/main-teacher/score-analysis">
          成绩分析
        </el-menu-item>
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
