<template>
  <div id="check-in-record">
    <el-table :data="resArr" border style="width: 100%">
      <el-table-column prop="teacherName" label="老师名字" width="180" />
      <el-table-column prop="startTime" label="开始时间" />
      <el-table-column prop="endTime" label="结束时间" />
      <el-table-column prop="activeName" label="活动名称" />
      <el-table-column prop="location" label="实习地点" />
      <el-table-column label="参与实习活动">
        <template #default="scope">
          <el-button type="primary" @click="joinAction(scope.row)"
            >参与实习</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import getMessage from "@/service/request/get-message";
import joinActive from "@/service/request/join-Active";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
const { object: resArr }: any = await getMessage();
console.log(resArr);

const id = Number(Cache.getCache("id"));
const joinAction = async (row: any) => {
  console.log(row);
  const data: any = await joinActive(row.activeId, id);
  console.log(data);

  if (data.code === 200) {
    ElMessage({
      message: data.message,
      type: "success",
    });
  } else {
    ElMessage({
      message: data.message,
      type: "error",
    });
  }
};
</script>

<style lang="less" scoped></style>
