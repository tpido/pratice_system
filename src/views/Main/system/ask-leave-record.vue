<template>
  <div id="check-in-record">
    <el-table :data="tableData1" border style="width: 100%">
      <el-table-column prop="leaveTime" label="请假日期" width="180" />
      <el-table-column prop="markName" label="批阅老师" />
      <el-table-column prop="leaveType2" label="请假状态" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import AskForLeaveRecord from "@/service/request/leaves/ask-for-leave-record";
import Cache from "@/utils/Cache";
const id = Number(Cache.getCache("id"));
const { object: tableData1 }: any = await AskForLeaveRecord(id);

tableData1.forEach((el: any) => {
  if (el.leaveType === 0) el.leaveType2 = "没通过";
  if (el.leaveType === 1) el.leaveType2 = "通过";
  if (el.leaveType === 2) el.leaveType2 = "审核中";
});
</script>

<style lang="less" scoped></style>
