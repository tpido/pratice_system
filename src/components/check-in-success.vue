<template>
  <div id="check-in-success">
    <div class="check-in-btn">
      <div class="discrib">打卡成功</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
</script>

<style lang="less" scoped>
#check-in-success {
  height: 100%;
  display: flex;
  justify-content: center;

  .check-in-btn {
    border-radius: 50%;
    background-color: rgb(139, 204, 158);
    height: 200px;
    width: 200px;
    transform: translate(-5%, 60%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: 600;
    transition: all 200ms ease;
    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
