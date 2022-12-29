<template>
  <div id="check-pratice-report">
    <el-table :data="tableData1" border>
      <el-table-column prop="name" label="提交人" width="180" />
      <el-table-column
        prop="time"
        label="提交日期"
        width="180"
      ></el-table-column>
      <el-table-column prop="activeName" label="实习报告名称" />
      <el-table-column prop="content" label="实习报告内容" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import teacherGetReports from "@/service/request/teacherGetReports";
import Cache from "@/utils/Cache";

const id = Number(Cache.getCache("id"));
const { object: tableData1 }: any = await teacherGetReports(id);
console.log(tableData1);
const tableData = [
  {
    date: "2016-05-03",
    name: "9:43",
    address: "true",
  },
  {
    date: "2016-05-02",
    name: "9:43",
    address: "true",
  },
  {
    date: "2016-05-04",
    name: "9:43",
    address: "true",
  },
  {
    date: "2016-05-01",
    name: "9:43",
    address: "true",
  },
];
</script>

<style lang="less" scoped></style>
