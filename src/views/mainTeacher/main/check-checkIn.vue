<template>
  <div id="check-checkin">
    <el-card>
      <el-select
        v-model="idRef"
        class="m-2"
        placeholder="请选择一个同学"
        size="large"
      >
        <el-option
          v-for="item in studentsArr"
          :label="item.username"
          :value="item.id"
        />
      </el-select>
      <el-button type="primary" @click="selectSudentsAction"
        >选择同学</el-button
      >
    </el-card>

    <el-table :data="checkInRecordArrRef" border>
      <el-table-column prop="activeName" label="实习活动名称" width="180" />
      <el-table-column
        prop="location"
        label="实习地点"
        width="180"
      ></el-table-column>
      <el-table-column prop="signTime" label="打卡时间" />
    </el-table>
  </div>
</template>

<script setup lang="ts">
import checkInRecord from "@/service/request/check-in-record";
import getAllStudents from "@/service/request/get-all-students";
import Cache from "@/utils/Cache";
import { ref } from "vue";

const idRef = ref(1);

const id = Number(Cache.getCache("id"));
const { object: studentsArr }: any = await getAllStudents(id);
console.log(studentsArr);

const checkInRecordArrRef = ref([]);
const selectSudentsAction = async () => {
  const { object: checkInRecordArr }: any = await checkInRecord(idRef.value);
  checkInRecordArrRef.value = checkInRecordArr;
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 20px;
}

.el-card {
  margin: 20px;
}
</style>
