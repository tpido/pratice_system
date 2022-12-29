<template>
  <div id="score-report">
    <el-card>
      <el-select
        v-model="classIdRef"
        class="m-2"
        placeholder="请选择一个班级"
        size="large"
      >
        <el-option
          v-for="item in classArr"
          :label="item.name"
          :value="item.id"
        />
      </el-select>
      <el-button type="primary" @click="selectclassAction">选择班级</el-button>
    </el-card>

    <el-table :data="studentsScoreArrRef" border>
      <el-table-column prop="activeName" label="活动名称" />
      <el-table-column prop="studentName" label="学生姓名" />
      <el-table-column prop="signCnt" label="打卡次数" />
      <el-table-column prop="logCnt" label="上传日志次数" />
      <el-table-column prop="hasReport" label="是否提交实验报告" />
      <el-table-column prop="level" label="实习能力水平" />
      <el-table-column prop="score" label="实习成绩" />
      <el-table-column label="修改栏">
        <template #default="scope">
          <el-button
            size="small"
            type="primary"
            @click="correctAction(scope.row)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog v-model="dialogFormVisible" title="修改">
      <el-form :model="form">
        <el-form-item label="修改实习成绩" :label-width="formLabelWidth">
          <el-input v-model="form.score" autocomplete="off" />
        </el-form-item>
        <el-form-item label="修改实习评定水平" :label-width="formLabelWidth">
          <el-select v-model="form.level" placeholder="Please select a zone">
            <el-option label="A" value="A" />
            <el-option label="B" value="B" />
            <el-option label="C" value="C" />
            <el-option label="D" value="D" />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取消</el-button>
          <el-button type="primary" @click="submitAction"> 确认提交 </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import getTeacherClass from "@/service/request/get-teacher-class";
import teacherSaveStudentScore from "@/service/request/teacher-save-student-score";
import teacherGetStudentStatus from "@/service/teacher-get-student-status";
import Cache from "@/utils/Cache";
import { ref, reactive } from "vue";

const classIdRef = ref();
const id = Number(Cache.getCache("id"));
const { object: classArr }: any = await getTeacherClass(id);
console.log(classArr);

//选择班级业务逻辑
const studentsScoreArrRef = ref([]);
const selectclassAction = async () => {
  console.log(classIdRef.value);
  const { object: studentScoreArr }: any = await teacherGetStudentStatus(
    classIdRef.value
  );
  console.log(studentScoreArr);
  studentsScoreArrRef.value = studentScoreArr;
};

const form = reactive({
  activeId: -1,
  scoreId: -1,
  id: -1,
  level: "",
  score: -1,
});
const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const correctAction = (row: any) => {
  form.activeId = row.activeId;
  form.id = row.userId;
  form.level = row.level;
  form.score = row.score;
  form.scoreId = row.scoreId;
  console.log(row, form.activeId);
  dialogFormVisible.value = true;
};

const submitAction = async () => {
  dialogFormVisible.value = false;
  const data = await teacherSaveStudentScore({ ...form });
  console.log(data);
  const { object: studentScoreArr }: any = await teacherGetStudentStatus(
    classIdRef.value
  );
  console.log(studentScoreArr);
  studentsScoreArrRef.value = studentScoreArr;
};
</script>

<style lang="less" scoped>
.el-button {
  margin-left: 20px;
}

.el-table {
  margin-top: 20px;
}

.el-input {
  width: 300px;
}
</style>
