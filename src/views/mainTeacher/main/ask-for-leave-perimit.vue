<template>
  <div id="ask-for-leave-perimit">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="date" label="申请人" width="180" />
      <el-table-column prop="name" label="开始日期" width="180" />
      <el-table-column prop="name" label="结束日期" width="180" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            type="success"
            size="small"
            @click="handlePermitted(scope.row)"
            >批准</el-button
          >
          <el-button
            size="small"
            type="danger"
            @click="handleNotPermitted(scope.row)"
            >不批准</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
const handlePermitted = (row: any) => {
  console.log(row);
};

const handleNotPermitted = (row: any) => {
  console.log(row);
};

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
