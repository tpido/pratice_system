<template>
  <div id="check-in">
    <div class="check-in-btn" ref="CheckInBtn" v-if="isCheckIn !== 'true'">
      <div class="discrib" @click="checkinHandle" ref="discribRef">
        点击打卡
      </div>
    </div>

    <div class="check-in-btn ischeck-in" ref="CheckInBtn" v-else>
      <div class="discrib" ref="discribRef">打卡过了</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Cache from "@/utils/Cache";
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

/*打卡业务逻辑 */
const isCheckIn = ref(Cache.getCache("isCheckIn") || "false");
const CheckInBtn = ref();
const discribRef = ref();

const checkinHandle = () => {
  console.log(isCheckIn.value);
  if (isCheckIn.value !== "true") {
    isCheckIn.value = "true";
    CheckInBtn.value!.style.cursor = "not-allowed";
    CheckInBtn.value!.style.backgroundColor = "red";
    discribRef.value.innerHTML = "打过卡了";
    window.localStorage.setItem("isCheckIn", isCheckIn.value);
    //发送网络请求

    router.push("/main/checkin-success");
  }
};
</script>

<style lang="less" scoped>
#check-in {
  height: 100%;
  display: flex;
  justify-content: center;

  .check-in-btn {
    border-radius: 50%;
    background-color: rgb(78, 159, 172);
    height: 200px;
    width: 200px;
    transform: translate(-5%, 60%);
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 200ms ease;
    &:hover {
      box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }
  }

  .ischeck-in {
    background-color: red;
    cursor: not-allowed;
  }
}
</style>
