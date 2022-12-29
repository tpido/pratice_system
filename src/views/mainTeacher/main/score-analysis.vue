<template>
  <div id="score-analysis">
    <h1>成绩分析</h1>
    <div id="main"></div>
    <div id="main2"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";
import getClassesAverageScore from "@/service/request/get-classes-average-score";
type EChartsOption = echarts.EChartsOption;

const { object: resArr1 }: any = await getClassesAverageScore(1);
const { object: resArr2 }: any = await getClassesAverageScore(2);
console.log(resArr1, resArr2);
onMounted(() => {
  var chartDom = document.getElementById("main")!;
  var myChart = echarts.init(chartDom);
  var option: EChartsOption;

  option = {
    title: {
      text: "成绩中位数",
    },
    xAxis: {
      type: "category",
      data: [resArr1.className, resArr2.className],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [resArr1.median, resArr2.median],
        type: "bar",
      },
    ],
  };

  var chartDom2 = document.getElementById("main2")!;
  var myChart2 = echarts.init(chartDom2);
  var option2: EChartsOption;

  option2 = {
    title: {
      text: "成绩平均数",
    },
    xAxis: {
      type: "category",
      data: [resArr1.className, resArr2.className],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [resArr1.median, resArr2.median],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
  option2 && myChart2.setOption(option2);
});
</script>

<style lang="less" scoped>
#main {
  display: inline-block;
  height: 500px;
  width: 500px;
}

#main2 {
  display: inline-block;

  height: 500px;
  width: 500px;
}
</style>
