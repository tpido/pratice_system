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
          <el-button
            :key="scope.$index"
            size="small"
            type="danger"
            @click="handlenotPermitted(scope.row, scope.$index)"
            >不批准</el-button
          >
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="请假理由" width="120">
        <template #default="scope">
          <el-button
            link
            type="primary"
            size="small"
            @click="handleClick(scope.row)"
            >请假理由</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="请假理由">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth">
          {{ form.reason }}
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import getAskForLeave from "@/service/request/leaves/get-ask-for-leave";
import permittAskForLeave from "@/service/request/leaves/permittAskForLeave";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { ref, reactive } from "vue";

const id = Number(Cache.getCache("id"));
let { object: resArr }: any = await getAskForLeave(id);
resArr.forEach((el: any) => {
  if (el.leaveType === 0) el.leaveType2 = "没通过";
  if (el.leaveType === 1) el.leaveType2 = "通过";
  if (el.leaveType === 2) el.leaveType2 = "审核中";
});
console.log(resArr);

let itemkey = ref(0);
const router = useRouter();

const handlePermitted = async (row: any, index: number) => {
  const data = await permittAskForLeave(row.leaveId, 1);

  router.go(0);
  // itemkey.value++;

  ElMessage({
    message: "批准成功！",
    type: "success",
  });
};

const handlenotPermitted = async (row: any, index: number) => {
  const data = await permittAskForLeave(row.leaveId, 0);

  router.go(0);
  // itemkey.value++;

  ElMessage({
    message: "不批准成功！",
    type: "success",
  });
};

const dialogFormVisible = ref(false);

const form = reactive({
  reason: "",
});

//请假按钮业务逻辑
const handleClick = (row: any) => {
  console.log(row);
  dialogFormVisible.value = true;
  form.reason = row.reason;
};

const formLabelWidth = "140px";
</script>

<style lang="less" scoped></style>
