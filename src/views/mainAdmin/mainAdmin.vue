<template>
  <div id="main-admin">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu-admin :isCollapse="isCollapse"></nav-menu-admin>
      </el-aside>
      <el-container>
        <el-header><NavFold @fold-action="collapseHandle" /> </el-header>
        <el-main>
          <Suspense>
            <router-view> </router-view>
          </Suspense>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavFold from "@/components/nav-fold.vue";
import NavMenuAdmin from "@/components/nav-menu-admin.vue";
import { ref, Suspense } from "vue";

const isCollapse = ref(false);

const collapseHandle = () => {
  isCollapse.value = !isCollapse.value;
  // console.log(isCollapse.value);
};
</script>

<style lang="less" scoped>
#main-admin,
.main-content {
  height: 100%;
}

.el-aside,
.el-main {
  height: 100%;
}

.el-header {
  display: flex;
  align-items: center;
}

.el-main {
  background-color: #f0f2f5;
}

.el-aside {
  background-color: #001529;
  transition: width 300ms ease;
}
</style>
