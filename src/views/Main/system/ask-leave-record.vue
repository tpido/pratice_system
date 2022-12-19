<template>
  <div id="check-in-record">
    <el-table :data="tableData1" border style="width: 100%">
      <el-table-column prop="leaveTime" label="请假日期" width="180" />
      <el-table-column prop="markName" label="批阅老师" />
      <!-- <el-table-column prop="address" label="请假是否通过" /> -->
    </el-table>
  </div>
</template>

<script setup lang="ts">
import AskForLeaveRecord from "@/service/request/leaves/ask-for-leave-record";
import Cache from "@/utils/Cache";
const id = Number(Cache.getCache("id"));
const { object: tableData1 }: any = await AskForLeaveRecord(id);
</script>

<style lang="less" scoped></style>
