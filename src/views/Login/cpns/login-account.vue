<template>
  <div id="LoginAccount">
    <el-form label-width="70px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="account.password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";
import { rules } from "../config/rules-config";
import Cache from "@/utils/Cache";
import { ElForm, ElMessage } from "element-plus";
import { useStore } from "vuex";
import { loginAuthorization } from "@/service/request/login/login";
import { useRouter } from "vue-router";

const store = useStore();
const router = useRouter();

const account = reactive({
  name: Cache.getCache("name") ?? "",
  password: Cache.getCache("password") ?? "",
});

const formRef = ref<InstanceType<typeof ElForm>>();

const loginAction = (isKeepAccount: boolean, isStudent: number) => {
  console.log("login_account");
  formRef.value?.validate(async (valid) => {
    if (valid) {
      if (isKeepAccount) {
        Cache.setCache("name", account.name);
        Cache.setCache("password", account.password);
        Cache.setCache("type", isStudent);
      } else {
        Cache.removeCache("name");
        Cache.removeCache("password");
        Cache.removeCache("type");
      }

      const LoginRes: any = await loginAuthorization({
        ...account,
        type: isStudent,
      });

      if (LoginRes.code === 200) {
        ElMessage({
          message: LoginRes.message,
          type: "success",
        });
      } else {
        ElMessage({
          message: LoginRes.message,
          type: "error",
        });
      }
      console.log(LoginRes);
      if (LoginRes.object.token) {
        Cache.setCache("token", LoginRes.object.token);
        Cache.setCache("id", LoginRes.object.id);
      }

      if (isStudent === 1) router.push("/main");
      else if (isStudent === 2) router.push("/main-admin");
      else router.push("/main-teacher");
    }
  });
};

defineExpose({
  loginAction,
});
</script>

<style lang="less" scoped></style>
