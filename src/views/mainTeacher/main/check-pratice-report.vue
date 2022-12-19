<template>
  <div id="check-pratice-report">
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="提交人" width="180" />
      <el-table-column
        prop="address"
        label="提交日期"
        width="180"
      ></el-table-column>
      <el-table-column prop="name" label="实习报告" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
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
