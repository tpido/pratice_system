<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="实习时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.startTime"
          type="date"
          placeholder="实习开始时间"
          style="width: 100%"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-date-picker
          v-model="form.endTime"
          type="date"
          label="Pick a time"
          placeholder="实习结束时间"
          style="width: 100%"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="实习活动名称">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="实习活动地点">
      <el-input v-model="form.location" />
    </el-form-item>
    <el-form-item label="实习负责老师">
      <el-select v-model="form.teacherId" placeholder="选择请假老师">
        <template v-for="(item, index) in res">
          <el-option :label="item.name" :value="item.teacherId"></el-option>
        </template>
      </el-select>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitAction">提交实习活动</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import getAllTeacher from "@/service/request/get-all-teacher";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
import postMessage from "@/service/request/post-message";
// do not use same name with ref
const form = reactive({
  teacherId: "",
  startTime: "",
  endTime: "",
  name: "",
  location: "",
});

const { object: res }: any = await getAllTeacher();
console.log(res);
//
const submitAction = async () => {
  console.log(form);
  const res: any = await postMessage({ ...form });
  console.log(res);
  if (res.code === 200) {
    ElMessage({
      message: res.message,
      type: "success",
    });
  } else {
    ElMessage({
      message: res.message,
      type: "error",
    });
  }
  console.log("submit!,", form);
};
</script>

<style lang="less" scoped>
.el-form {
  width: 800px;
  margin: auto;
}
</style>
