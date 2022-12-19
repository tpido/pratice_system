<template>
  <div id="write-log">
    <el-form :data="form">
      <el-form-item label="工作日志">
        <el-input
          v-model="form.desc"
          :rows="20"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLogAction">
          提交工作日志
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const form = reactive({
  desc: "",
});

const submitLogAction = () => {
  console.log("submitLogAction");
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 66px;
}
</style>
