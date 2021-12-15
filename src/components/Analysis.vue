<template>
<!--  <el-button type="text" @click="dialogFormVisible = true">-->
<!--    Personal Analysis-->
<!--  </el-button>-->

  <!--  弹窗-->
  <el-dialog
      :visible.sync="show"
      title="Personal Analysis"
      @opened="opened"
      width="650px">
    <div class="name">
      <p>{{ name }}</p>
    </div>
    <!--选择栏-->
    <el-select v-model="value1" placeholder="Score">
      <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
      >
      </el-option>
    </el-select>

    <!--折线图-->
    <div id="lineChart" ref="chart" :style="{ width: '600px', height: '360px' }"></div>
  </el-dialog>

</template>

<script>
export default {
  name: "Analysis",
  props: {
    grade:{
      type:Object,
    }
  },
  data() {
    return {
      show:false,
      // msg: "Welcome to Your Vue.js App",
      //选择栏选项数据
      options: [
        {
          value: [100,200,300,400],
          label: "Total",
        },
        {
          value: [400,300,200,100],
          label: "Chinese",
        },
        {
          value: "option3",
          label: "Maths",
        },
        {
          value: "option4",
          label: "English",
        },
        {
          value: "option5",
          label: "Chemistry",
        },
        {
          value: "option6",
          label: "Physics",
        },
        {
          value: "option7",
          label: "Biology",
        },
      ],
      value1: [],
      value2: "",
      name: this.grade.stuname,
    };
  },
  mounted() {

  },

  methods: {
    opened(){
      this.$nextTick(() => {
        this.drawLine()
      })
    },
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      // const line_dv = this.$refs.chart;
      let lineChart = this.$echarts.init(this.$refs.chart);
      // 绘制图表
      lineChart.setOption({
        xAxis: {
          type: "category",
          data: [
            "Monthly exam1",
            "Midterm exam",
            "Monthly exam2",
            "Final exam",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: this.value1,
            type: "line",
            //在数据点处显示数值
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 10,
              },
            },
          },
        ],
      });
    },
    open(){
      this.show = true
    },
    close(){
      this.show = false
    },
  },
}
</script>

<style>
.name {
  float: left;
  height: 40px;
  width: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-left: 32px;
  padding: 5px 5px;
  color: #3f3e3d;
}
</style>
