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
import postLog from "@/service/request/post-log";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
import { reactive } from "vue";

const form = reactive({
  desc: "",
});
const id = Number(Cache.getCache("id"));
const submitLogAction = async () => {
  console.log("submitLogAction");
  const data: any = await postLog(id, form.desc);
  console.log(data);
  if (data.code === 200) {
    ElMessage({
      message: data.message,
      type: "success",
    });
  } else {
    ElMessage({
      message: data.message,
      type: "error",
    });
  }
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 66px;
}
</style>
