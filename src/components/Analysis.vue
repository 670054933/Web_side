<template>
<!--  <el-button type="text" @click="dialogFormVisible = true">-->
<!--    Personal Analysis-->
<!--  </el-button>-->

  <!--  弹窗-->
  <el-dialog
      :visible.sync="show"
      title="Personal Analysis"
      @opened="opened"
      @close="close"
      width="650px">
    <div class="name">
      <p>{{ name }}</p>
    </div>
    <!--选择栏-->
    <el-select v-model="form.subject" placeholder="Score" @change="change">
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
import {queryGrade} from "@/api/api";

export default {
  name: "Analysis",
  props: {
    grade:{
      type:Object,
    },
    term:{
      type:String,
    }
  },
  data() {
    return {
      show:false,
      form:{
        semNo: "",
        stuId: "",
        subject:"total",
      },
      // msg: "Welcome to Your Vue.js App",
      //选择栏选项数据
      options: [
        {
          value: "total",
          label: "Total",
        },
        {
          value: "chinese",
          label: "Chinese",
        },
        {
          value: "math",
          label: "Maths",
        },
        {
          value: "english",
          label: "English",
        },
        {
          value: "chemistry",
          label: "Chemistry",
        },
        {
          value: "physics",
          label: "Physics",
        },
        {
          value: "biology",
          label: "Biology",
        },
      ],
      lineData: [],
      name: "",
    };
  },
  mounted() {
  },

  methods: {
    opened(){
      this.$nextTick(() => {
        this.form.semNo = this.term
        this.name = this.grade.stuname
        this.form.stuId = this.grade.stuid
        this.queryGrades()
        setTimeout(() =>{
          this.drawLine()
        },200)

      })
    },
    change(){
      this.queryGrades()
      setTimeout(() =>{
        this.drawLine()
      },300)
      console.log(this.form)
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
            data: this.lineData,
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
      this.name = ""
    },
    queryGrades(param){
      param={
        ...this.form
      }
      queryGrade(param).then(res =>{
        this.lineData = res.data.data;
        console.log(this.lineData)
      })
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
