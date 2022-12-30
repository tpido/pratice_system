<template>
  <div id="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span>实习管理系统(管理员)</span>
    </div>

    <el-menu
      background-color="#001529"
      text-color="white"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      :router="true"
      default-active="/main/checkin"
    >
      <el-menu-item index="/main-admin/regeister">注册管理</el-menu-item>
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
