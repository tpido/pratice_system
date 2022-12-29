<template>
  <div id="write-log">
    <el-form :data="form">
      <el-form-item label="实习报告">
        <el-input
          v-model="form.desc"
          :rows="20"
          type="textarea"
          placeholder="Please input"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitPraticeAction">
          提交实习报告
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";
import postPraticeReport from "@/service/request/post-pratice-report";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
const form = reactive({
  desc: "",
});

const id = Number(Cache.getCache("id"));
const submitPraticeAction = async () => {
  // console.log("submitPraticeAction");
  const data: any = await postPraticeReport(id, form.desc);
  console.log(data);
  if (data.code === 200) {
    ElMessage({
      message: data.message,
      type: "success",
    });
  }
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 66px;
}
</style>
