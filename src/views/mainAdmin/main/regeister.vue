<template>
  <div id="regeister">
    <el-form :model="form" label-width="120px">
      <el-form-item label="账号">
        <el-input v-model="form.account" />
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" type="password" />
      </el-form-item>
      <el-form-item label="名称">
        <el-input v-model="form.nickname" />
      </el-form-item>
      <el-form-item label="类型">
        <el-select v-model="form.kind" placeholder="请选择类型">
          <el-option label="教师" :value="0" />
          <el-option label="学生" :value="1" />
          <el-option label="管理员" :value="2" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">创建账号</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import addPerson from "@/service/request/add-person";
import { ElMessage } from "element-plus";
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  account: "",
  password: "",
  nickname: "",
  kind: 0,
  classId: 1,
});

const onSubmit = async () => {
  console.log("submit!");
  const data: any = await addPerson({ ...form });
  console.log(data);
  if (data.code === 200) {
    ElMessage({
      type: "success",
      message: data.message,
    });
  } else {
    ElMessage({
      type: "error",
      message: "参数不合法或者账号已存在！",
    });
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 300px;
}
</style>
