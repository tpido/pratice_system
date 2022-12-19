<template>
  <div id="score-analysis">
    <h1>成绩分析</h1>
    <div id="main"></div>
  </div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import { onMounted } from "vue";

type EChartsOption = echarts.EChartsOption;

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
      data: ["201", "202", "203", "204", "205", "206", "207"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 200, 150, 80, 70, 110, 130],
        type: "bar",
      },
    ],
  };

  option && myChart.setOption(option);
});
</script>

<style lang="less" scoped>
#main {
  height: 500px;
  width: 500px;
}
</style>
