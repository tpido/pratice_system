<template>
  <el-form :model="form" label-width="120px">
    <el-form-item label="请假人">
      <el-input v-model="form.name" />
    </el-form-item>

    <el-form-item label="请假时间">
      <el-col :span="11">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </el-col>
    </el-form-item>

    <el-form-item label="请假类型">
      <el-radio-group v-model="form.type">
        <el-radio label="病假" name="type" />
        <el-radio label="事假" name="type" />
        <el-radio label="丧假" name="type" />
      </el-radio-group>
    </el-form-item>
    <el-form-item label="请假老师">
      <el-select v-model="form.region" placeholder="选择请假老师">
        <el-option label="张三" value="zhangsan" />
        <el-option label="李四" value="lisi" />
      </el-select>
    </el-form-item>
    <el-form-item label="请假理由">
      <el-input v-model="form.desc" type="textarea" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitAction">提交请假申请</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive } from "vue";

// do not use same name with ref
const form = reactive({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});

//
const submitAction = () => {
  console.log("submit!,", form);
};
</script>

<style lang="less" scoped>
.el-form {
  width: 800px;
  margin: auto;
}
</style>
