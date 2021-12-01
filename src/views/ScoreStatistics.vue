<template>
  <el-container class="home-container">
    <!--侧边栏-->
    <el-aside width="200px">
      <div class="avater_box">
        <img src="../image/头像.png" alt="" />
      </div>
      <!--侧边栏菜单区-->
      <el-menu
        active-text-color="#ffd04b"
        background-color="#656161"
        text-color="#faf4f4"
      >
        <!--一级菜单-->
        <el-menu-item index="1">
          <!--一级菜单的模板区-->
          <template #title>
            <!--图标-->
            <!--改变图标颜色 style="color:#ffd04b"-->
            <i class="el-icon-s-home"></i>
            <!--文本-->
            <span>Home Page</span>
          </template>
        </el-menu-item>

        <el-menu-item index="2">
          <template #title>
            <i class="el-icon-s-order"></i>
            <span>Score Report</span>
          </template>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-reading"></i>
          <span>School Assignment</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-chat-line-round"></i>
          <span>Communicate</span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-s-custom"></i>
          <span>Information</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--主体区-->
    <el-container>
      <!--头部区-->
      <el-header>
        <el-button
          icon="el-icon-switch-button"
          circle
          style="color: red; background-color: #c3c2c2"
        ></el-button>
      </el-header>
      <!--右侧内容主体-->
      <el-main>
        <!--选择栏-->
        <el-row class="block-col-4" justify="center">
          <!--Score-->
          <el-col :span="6">
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
          </el-col>

          <!--Term-->
          <el-col :span="6">
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
          </el-col>

          <!--Test-->
          <el-col :span="6">
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
          </el-col>

          <!--Class-->
          <el-col :span="6">
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
          </el-col>
        </el-row>

        <!-- 饼状分析图 -->
        <div id="pieChart" :style="{ width: '600px', height: '460px' }"></div>

        <!--表格-->
        <el-table
          :data="tableData"
          border
          stripe
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
            width="120"
          />
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "eCharts",
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
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var pieChart = this.$echarts.init(document.getElementById("pieChart"));
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
              { value: 1048, name: "A(85-100)" },
              { value: 735, name: "B(70-84)" },
              { value: 580, name: "C(60-69)" },
              { value: 484, name: "D(0-59)" },
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
      });
    },
    //设置表头行的样式
    tableHeaderColor({ row, column, rowIndex, columnIndex }) {
      return "background-color:#e5e3e1;color:#3f3e3d;font-wight:500;font-size:30;text-align:center";
    },
    //设置表格行的样式
    tableRowStyle({ row, rowIndex }) {
      return "background-color:pink;font-size:15px;text-align:center";
    },
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-aside {
  background-color: #656161;
  height: auto;
}
.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-main {
  background-color: #fdfcfb;
  height: 100%;
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
  margin-left: 100px;
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
  margin: 50px 100px 40px 100px;
  padding: 50px 20px 10px 20px; //上右下左
}
</style>