<template>
  <div id="check-in-record">
    <el-table :data="resArr" border style="width: 100%">
      <el-table-column prop="teacherName" label="老师名字" width="180" />
      <el-table-column prop="startTime" label="开始时间" />
      <el-table-column prop="endTime" label="结束时间" />
      <el-table-column prop="activeName" label="活动名称" />
      <el-table-column prop="location" label="实习地点" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import getMessage from "@/service/request/get-message";
const { object: resArr }: any = await getMessage();
console.log(resArr);
</script>

<style lang="less" scoped></style>
