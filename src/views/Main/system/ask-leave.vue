<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="请假时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.startTime"
          type="date"
          placeholder="Pick a date"
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
          placeholder="Pick a time"
          style="width: 100%"
          format="YYYY/MM/DD"
          value-format="YYYY-MM-DD"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="请假老师">
      <el-select v-model="form.teacherId" placeholder="选择请假老师">
        <template v-for="(item, index) in resArr">
          <el-option :label="item.name" :value="item.teacherId"></el-option>
        </template>
      </el-select>
    </el-form-item>
    <el-form-item label="请假理由">
      <el-input v-model="form.message" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitAction">提交请假申请</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import getAllTeacher from "@/service/request/get-all-teacher";
import askForLeave from "@/service/request/leaves/ask-for-leave";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
import { reactive } from "vue";
// do not use same name with ref
const form = reactive({
  userId: Number(window.localStorage.getItem("id")) || 1,
  teacherId: "",
  startTime: "",
  endTime: "",
  message: "",
});

const id = Number(Cache.getCache("id"));
const { object: resArr }: any = await getAllTeacher();
console.log(resArr);

//
const submitAction = async () => {
  const res: any = await askForLeave({ ...form });
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
