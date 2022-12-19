<template>
  <div id="ask-for-leave-perimit">
    <el-table :data="resArr" border style="width: 100%">
      <el-table-column prop="leaveTime" label="离开时间" width="180" />
      <el-table-column prop="applicant" label="申请人" width="180" />
      <el-table-column prop="leaveType2" label="状态" width="180">
      </el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <el-button
            :key="scope.$index"
            size="small"
            @click="handlePermitted(scope.row, scope.$index)"
            >批准</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import getAskForLeave from "@/service/request/leaves/get-ask-for-leave";
import permittAskForLeave from "@/service/request/leaves/permittAskForLeave";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
const id = Number(Cache.getCache("id"));
let { object: resArr }: any = await getAskForLeave(id);

resArr.forEach((el: any) => {
  if (el.leaveType === 0) el.leaveType2 = "没通过";
  if (el.leaveType === 1) el.leaveType2 = "通过";
  if (el.leaveType === 2) el.leaveType2 = "审核中";
});

const handlePermitted = async (row: any, index: number) => {
  const data = await permittAskForLeave(row.leaveId, 1);
  ElMessage({
    message: "批准成功！",
    type: "success",
  });
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
