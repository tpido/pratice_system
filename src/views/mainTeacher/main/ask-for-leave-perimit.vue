<template>
  <div id="ask-for-leave-perimit">
    <el-table :data="resArr" border style="width: 100%" :key="itemkey">
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
import { useRouter } from "vue-router";
const id = Number(Cache.getCache("id"));
let { object: resArr }: any = await getAskForLeave(id);
resArr.forEach((el: any) => {
  if (el.leaveType === 0) el.leaveType2 = "没通过";
  if (el.leaveType === 1) el.leaveType2 = "通过";
  if (el.leaveType === 2) el.leaveType2 = "审核中";
});

let itemkey = Math.random();
const router = useRouter();

const handlePermitted = async (row: any, index: number) => {
  const data = await permittAskForLeave(row.leaveId, 1);
  router.go(0);
  itemkey = Math.random();
  console.log(itemkey);
  ElMessage({
    message: "批准成功！",
    type: "success",
  });
};
</script>

<style lang="less" scoped></style>
