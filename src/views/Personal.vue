<template>
  <el-container class="home-container">
    <!--侧边栏-->
    <el-aside width="200px">
      <div class="avater_box">
        <img src="../assets/avatar.png" alt="" />
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
        <div class="name">
          <p>Feliciano</p>
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

        <el-select v-model="value2" placeholder="Rank">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
        <!--折线图-->
        <div id="lineChart" :style="{ width: '600px', height: '360px' }"></div>
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
    };
  },
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      var lineChart = this.$echarts.init(document.getElementById("lineChart"));
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
}
.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-main {
  background-color: #fdfcfb;
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

.name {
  float: left;
  height: 40px;
  width: 150px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  margin-left: 32px;
  padding: 5px 5px; //上右下左
  color: #3f3e3d; //字体颜色
}

.block-col-2 {
  margin-left: 600px;
  margin-top: 30px;
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

.el-select{
  margin: 30px 10px;
}

.lineChart {
  color: #6f747a;
}
</style>