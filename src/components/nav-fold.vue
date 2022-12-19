<template>
  <div id="NavFold">
    <div class="left">
      <div class="fold-icon" @click="foldHandle">
        <el-icon size="20px" v-if="isFold"><Fold /></el-icon>
        <el-icon size="20px" v-else><Expand /></el-icon>
      </div>
      <div class="info">
        <!-- <my-bread-crumb :breadcbreadrumbs="breadCrumbsArr"></my-bread-crumb> -->
      </div>
    </div>
    <div class="right">
      <el-avatar :icon="UserFilled"></el-avatar>
      <el-dropdown trigger="click">
        <span> tpido </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logoutClick">退出登录</el-dropdown-item>
            <el-dropdown-item divided>用户信息</el-dropdown-item>
            <el-dropdown-item>系统管理</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cache from "@/utils/Cache";
import { Expand, Fold, UserFilled } from "@element-plus/icons";
import { computed, defineEmits } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

/* 是否折叠处理逻辑 */
const emit = defineEmits(["FoldAction"]);
const isFold = ref(true);
const foldHandle = () => {
  isFold.value = !isFold.value;
  emit("FoldAction", isFold);
};

/* 登出处理逻辑 */
const router = useRouter();
const logoutClick = () => {
  Cache.removeCache("token");
  router.push({
    path: "/login",
  });
};
</script>

<style lang="less" scoped>
#NavFold {
  display: flex;
  justify-content: space-between;
  width: 100%;

  .left {
    display: flex;
    align-items: center;
    .fold-icon {
      cursor: pointer;
      margin-right: 10px;
    }
  }

  .right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    & span {
      font-weight: 700;
    }

    .el-avatar {
      margin-right: 5px;
    }
  }
}
</style>
