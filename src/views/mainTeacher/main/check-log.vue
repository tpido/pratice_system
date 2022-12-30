<template>
  <div id="check-log">
    <el-table :data="data.object" border>
      <el-table-column prop="name" label="提交人" width="180" />
      <el-table-column
        prop="activeName"
        label="活动名称"
        width="180"
      ></el-table-column>
      <el-table-column prop="content" label="日志信息" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import teacherGetLogs from "@/service/request/teacher-get-logs";
import Cache from "@/utils/Cache";

const id = Number(Cache.getCache("id"));

const data: any = await teacherGetLogs(id);
console.log(data);
</script>

<style lang="less" scoped></style>
