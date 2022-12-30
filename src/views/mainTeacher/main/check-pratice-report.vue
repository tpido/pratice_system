<template>
  <div id="check-pratice-report">
    <el-table :data="tableData1" border>
      <el-table-column prop="name" label="提交人" width="180" />
      <el-table-column
        prop="time"
        label="提交日期"
        width="180"
      ></el-table-column>
      <el-table-column prop="activeName" label="实习报告名称" />
      <el-table-column label="实习报告内容">
        <template #default="scope">
          <el-button type="primary" @click="checkReportAction(scope.row)"
            >查看实习报告</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="实习报告">
      <el-form :model="form">
        <el-form-item :label-width="formLabelWidth">
          {{ form.content }}
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
import teacherGetReports from "@/service/request/teacherGetReports";
import Cache from "@/utils/Cache";
import { ref, reactive } from "vue";

const id = Number(Cache.getCache("id"));
const { object: tableData1 }: any = await teacherGetReports(id);
console.log(tableData1);

const dialogFormVisible = ref(false);
const form = reactive({
  content: "",
});
const checkReportAction = (row: any) => {
  dialogFormVisible.value = true;
  console.log(row);
  form.content = row.content;
};

const formLabelWidth = "140px";
</script>

<style lang="less" scoped></style>
