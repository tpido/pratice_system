<template>
  <div id="join-class">
    <el-form :model="form">
      <el-form-item label="选择班级">
        <el-select v-model="form.classId" placeholder="请选择你的班级">
          <template v-for="(item, index) in classArr">
            <el-option :label="item.name" :value="item.classId" />
          </template>
        </el-select>
      </el-form-item>
    </el-form>
    <el-button type="primary" @click="submitAction">加入班级</el-button>
  </div>
</template>

<script setup lang="ts">
import getAllClasses from "@/service/request/classes/get-all-classes";
import joinClasses from "@/service/request/classes/join-classes";
import Cache from "@/utils/Cache";
import { ElMessage } from "element-plus";
import { reactive } from "vue";

const form = reactive({
  classId: 1,
});

const { object: classArr }: any = await getAllClasses();
console.log(classArr);
const id = Number(Cache.getCache("id"));

const submitAction = async () => {
  const data: any = await joinClasses(form.classId, id);
  console.log(data);
  if (data.code === 200) {
    ElMessage({
      message: "加入成功！",
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

<style lang="less" scoped>
.el-button {
  margin-left: 10px;
}
</style>
