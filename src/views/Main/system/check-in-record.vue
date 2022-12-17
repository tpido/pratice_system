<template>
  <div id="check-in-record">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="打卡日期" width="180" />
      <el-table-column prop="name" label="打卡时间" width="180" />
      <el-table-column prop="address" label="是否准时打卡" />
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
