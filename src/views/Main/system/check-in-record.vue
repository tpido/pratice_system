<template>
  <div id="check-in-record">
    <el-table :data="object" border style="width: 100%">
      <el-table-column prop="location" label="打卡地点" width="180" />
      <el-table-column prop="signTime" label="打卡时间" />
      <el-table-column prop="activeName" label="实习活动名称" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
//表单要发送网络请求
import checkInRecord from "@/service/request/check-in-record";
import Cache from "@/utils/Cache";

const id = Cache.getCache("id");
const { object }: any = await checkInRecord(Number(id));

console.log(object);
</script>

<style lang="less" scoped></style>
