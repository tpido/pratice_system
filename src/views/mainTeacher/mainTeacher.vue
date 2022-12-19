<template>
  <div id="main-teacher">
    <el-container class="main-content">
      <el-aside :width="isCollapse ? '60px' : '210px'">
        <nav-menu-teacher :isCollapse="isCollapse"></nav-menu-teacher>
      </el-aside>
      <el-container>
        <el-header><NavFold @fold-action="collapseHandle" /> </el-header>
        <el-main>
          <router-view v-slot="{ Component }">
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import NavFold from "@/components/nav-fold.vue";
import NavMenuTeacher from "@/components/nav-menu-teacher.vue";
import { ref } from "vue";

const isCollapse = ref(false);

const collapseHandle = () => {
  isCollapse.value = !isCollapse.value;
  // console.log(isCollapse.value);
};
</script>

<style lang="less" scoped>
#main-teacher,
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
