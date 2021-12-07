<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div class="main">
        <div class="block-col-4">
          <div class="score">
            <el-dropdown trigger="click">
              <el-button class="choose">
                Score<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu class="chosen">
                  <el-dropdown-item>Total</el-dropdown-item>
                  <el-dropdown-item>Chinese</el-dropdown-item>
                  <el-dropdown-item>Maths</el-dropdown-item>
                  <el-dropdown-item>English</el-dropdown-item>
                  <el-dropdown-item>Chemistry</el-dropdown-item>
                  <el-dropdown-item>Physics</el-dropdown-item>
                  <el-dropdown-item>Biology</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="term">
            <el-dropdown trigger="click">
              <el-button class="choose">
                Term<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu class="chosen">
                  <el-dropdown-item>202102</el-dropdown-item>
                  <el-dropdown-item>202101</el-dropdown-item>
                  <el-dropdown-item>202002</el-dropdown-item>
                  <el-dropdown-item>202001</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="test">
            <el-dropdown trigger="click">
              <el-button class="choose">
                Test<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu class="chosen">
                  <el-dropdown-item>Monthly exam1</el-dropdown-item>
                  <el-dropdown-item>Midterm exam</el-dropdown-item>
                  <el-dropdown-item>Monthly exam2</el-dropdown-item>
                  <el-dropdown-item>Final exam</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
          <div class="classes">
            <el-dropdown trigger="click">
              <el-button class="choose">
                Class<i class="el-icon-arrow-down el-icon--right"></i>
              </el-button>
              <template #dropdown>
                <el-dropdown-menu class="chosen">
                  <el-dropdown-item>Class11</el-dropdown-item>
                  <el-dropdown-item>Class12</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </div>

        <!-- 饼状分析图 -->
        <div id="pieChart" >
        </div>

        <!--表格-->
        <div id="scoreTable">
          <el-table
              :data="tableData"
              border
              stripe
              :row-style="tableRowStyle"
              :header-cell-style="tableHeaderColor"
              style="width: 100%"
          ><!--stripe表示斑马纹;header-row-style表头行的 style 的回调方法;row-style 行的 style 的回调方法-->

            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="studentID" label="StudentID" width="120" />
            <el-table-column prop="chinese" label="Chinese" width="120" />
            <el-table-column prop="maths" label="Maths" width="120" />
            <el-table-column prop="english" label="English" width="120" />
            <el-table-column prop="chemistry" label="Chemistry" width="120" />
            <el-table-column prop="physics" label="Physics" width="120" />
            <el-table-column prop="biology" label="Biology" width="120" />
            <el-table-column prop="sum" label="Sum" width="120" />
            <el-table-column
                prop="classRanking"
                label="Class Ranking"
            />
          </el-table>
        </div>

        <!--弹窗-->
        <Analysis></Analysis>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Header from "@/components/Headers";
import Analysis from "@/components/Analysis";

export default {
  name: "ScoreReport",
  components: {Header, Theme, Analysis},
  data() {
    return {
      // msg: "Welcome to Your Vue.js App",
      //表格数据
      tableData: [
        {
          name: "Feliciano",
          studentID: "1101",
          chinese: "90",
          maths: "100",
          english: "98",
          chemistry: "98",
          physics: "95",
          biology: "99",
          sum: "580",
          classRanking: "1",
        },
        {
          name: "Garen",
          studentID: "1102",
          chinese: "92",
          maths: "90",
          english: "100",
          chemistry: "99",
          physics: "90",
          biology: "95",
          sum: "572",
          classRanking: "2",
        },
        {
          name: "Garen",
          studentID: "1102",
          chinese: "92",
          maths: "90",
          english: "100",
          chemistry: "99",
          physics: "90",
          biology: "95",
          sum: "572",
          classRanking: "2",
        },
        {
          name: "Garen",
          studentID: "1102",
          chinese: "92",
          maths: "90",
          english: "100",
          chemistry: "99",
          physics: "90",
          biology: "95",
          sum: "572",
          classRanking: "2",
        },
        {
          name: "Garen",
          studentID: "1102",
          chinese: "92",
          maths: "90",
          english: "100",
          chemistry: "99",
          physics: "90",
          biology: "95",
          sum: "572",
          classRanking: "2",
        },
        {
          name: "Garen",
          studentID: "1102",
          chinese: "92",
          maths: "90",
          english: "100",
          chemistry: "99",
          physics: "90",
          biology: "95",
          sum: "572",
          classRanking: "2",
        },
      ],
    };
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let pieChart = this.$echarts.init(document.getElementById("pieChart"))
      // 绘制图表
      pieChart.setOption({
        title: {
          text: "Score statistics", //标题名字
          // subtext: "Fake Data",
          left: "center",
        },
        //鼠标移上这个按钮的时候，就会显示tooltip的内容
        tooltip: {
          trigger: "item",
          formatter: "{a} <br> {b} : {c} <br>({d}%)",
        },
        //图例组件
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From", //系列名称，用于tooltip的显示，
            type: "pie", // 设置图表类型为饼图
            radius: "40%", // 饼图的半径，外半径为可视区尺寸（容器高宽中较小一项）的 40% 长度。

            //数据
            data: [
              {value: 1048, name: "A(85-100)"},
              {value: 735, name: "B(70-84)"},
              {value: 580, name: "C(60-69)"},
              {value: 484, name: "D(0-59)"},
            ],
            //高亮状态的扇区和标签样式。
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            //显示百分比
            label: {
              normal: {
                formatter: "{b}:({d}%)",
                textStyle: {
                  fontWeight: "normal",
                  fontSize: 15,
                },
              },
            },
          },
        ],
      })

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
  mounted() {
    this.drawLine();
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.right{
  width: 1303.2px;
  float: left;
 }
.main{
  width: 100%;
  //display: flex;
  height: 700px;
}
.avater_box {
  height: 80px;
  width: 80px;

  margin: 30px 50px; //调整头像位置

  border: 1px solid #eee; //加边框
  border-radius: 50%; //圆角边框
  padding: 2px; //图片与边框之间有间隙

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%; //图片变为圆角图片
    background-color: #eee;
  }
}

.block-col-4 {
  width: 100%;
  height: 50px;
}

.choose {
  background-color: #e5e3e1;
  //   width: 246;
  //   height: 53;
  border: 1px solid #c2bfbc;
  color: #656361;
}

.chosen {
  background-color: #eee;
  border: 1px solid #c2bfbc;
  color: #656361;
}

#pieChart {
  width: 600px;
  height: 460px;
  margin: 20px 100px 20px 100px;
  padding: 30px 20px 10px 20px; //上右下左
  float: left;
  //display: flex;
}
#scoreTable{
  margin: 5px 20px;
}
.score{
  display: inline-block;
  float: left;
  margin-left: 100px;
}
.term{
  display: inline-block;
  float: left;
  margin-left: 100px;
}
.test{
  display: inline-block;
  float: left;
  margin-left: 100px;
}
.classes{
  display: inline-block;
  float: left;
  margin-left: 100px;
}
</style>
