<template>
<!--  <el-button type="text" @click="dialogFormVisible = true">-->
<!--    Personal Analysis-->
<!--  </el-button>-->

  <!--  弹窗-->
  <el-dialog
      :visible.sync="show"
      title="Personal Analysis"
      @opened="opened">
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

<!--    <el-select v-model="value2" placeholder="Rank">-->
<!--      <el-option-->
<!--          v-for="item in options"-->
<!--          :key="item.value"-->
<!--          :label="item.label"-->
<!--          :value="item.value"-->
<!--      >-->
<!--      </el-option>-->
<!--    </el-select>-->

    <!--折线图-->
    <div id="lineChart" ref="chart" :style="{ width: '600px', height: '360px' }"></div>
    <!--名次显示框-->
<!--    <div class="rank">-->
<!--      Grade Rank:-->
<!--      <input class='showRank' type="text" name="gradeRank" readonly="readonly" value="NO.1">-->
<!--    </div>-->
<!--    <div class="rank">-->
<!--      Class Rank:-->
<!--      <input class='showRank' type="text" name="classRank" readonly="readonly" value="NO.1">-->
<!--    </div>-->
<!--    <template #footer>-->
<!--      <span class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">Cancel</el-button>-->
<!--        <el-button type="primary" @click="dialogFormVisible = false"-->
<!--        >Confirm</el-button-->
<!--        >-->
<!--      </span>-->
<!--    </template>-->
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
          value: "option1",
          label: "Total",
        },
        {
          value: "option2",
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
      value1: "",
      value2: "",
      name: "Feliciano",

    };
  },
  mounted() {
    // this.drawLine();

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
            data: [576, 569, 562, 580],
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
    //设置表头行的样式
    tableHeaderColor({row, column, rowIndex, columnIndex}) {
      return "background-color:#e5e3e1;color:#3f3e3d;font-wight:500;font-size:30;text-align:center";
    },
    //设置表格行的样式
    tableRowStyle({row, rowIndex}) {
      return "background-color:pink;font-size:15px;text-align:center";
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

.el-select {
  margin: 20px 5px;
}

.lineChart {
  color: #6f747a;
}

.rank {
  float: right;
}

.showRank {
  height: 25px;
  width: 40px;
  border: 1px solid #c2bfbc; /*加边框 */
  border-radius: 3px;
  background-color: #fbf9f8;
  margin: 5px;
}
</style>
