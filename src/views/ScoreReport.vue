<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div class="main">
        <!--选择栏-->
        <div class="block-col-4">
          <el-select v-model="value1" filterable placeholder="Subject" class="choose">
            <el-option
                v-for="item in options1"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="value2" filterable placeholder="Term" class="choose">
            <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="value3" filterable placeholder="Test" class="choose">
            <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="value4" filterable placeholder="Class" class="choose">
            <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>
        </div>
        <!-- 饼状分析图 -->
        <div id="pieChart">
        </div>

        <!--表格-->
        <div id="scoreTable">
          <el-table
              :data="tableData"
              border
              stripe
              @row-click="aa"
              :row-style="tableRowStyle"
              :header-cell-style="tableHeaderColor"
              style="width: 100%"
          ><!--stripe表示斑马纹;header-row-style表头行的 style 的回调方法;row-style 行的 style 的回调方法-->

            <el-table-column prop="name" label="Name" width="120"/>
            <el-table-column prop="studentID" label="StudentID" width="120"/>
            <el-table-column prop="chinese" label="Chinese" width="120"/>
            <el-table-column prop="maths" label="Maths" width="120"/>
            <el-table-column prop="english" label="English" width="120"/>
            <el-table-column prop="chemistry" label="Chemistry" width="120"/>
            <el-table-column prop="physics" label="Physics" width="120"/>
            <el-table-column prop="biology" label="Biology" width="120"/>
            <el-table-column prop="sum" label="Sum" width="120"/>
            <el-table-column
                prop="classRanking"
                label="Class Ranking"
            />
          </el-table>
        </div>

        <!--弹窗-->
        <Analysis :grade="grade" ref="analysis"></Analysis>
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
      grade:{},
      // msg: "Welcome to Your Vue.js App",
      //选择栏选项数据
      options1: [
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
      options2: [
        {
          value: "option1",
          label: "202102",
        },
        {
          value: "option2",
          label: "202101",
        },
        {
          value: "option3",
          label: "202002",
        },
        {
          value: "option4",
          label: "202001",
        },
      ],
      options3: [
        {
          value: "option1",
          label: "Monthly exam1",
        },
        {
          value: "option2",
          label: "Midterm exam",
        },
        {
          value: "option3",
          label: "Monthly exam2",
        },
        {
          value: "option4",
          label: "Final exam",
        },
      ],
      options4: [
        {
          value: "option1",
          label: "Class11",
        },
        {
          value: "option2",
          label: "Class12",
        },
      ],
      value1: "",
      value2: "",
      value3: "",
      value4: "",
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
    aa(row){
      this.grade = row;
      console.log(this.grade)
      this.$refs.analysis.open();
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

.right {
  width: 1303.2px;
  float: left;
}

.main {
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
  height: 53px;
}
.choose {
  width: 246px;
  height: 53px;
  margin: 30px 20px 30px 50px;
}
//.chosen {
//  background-color: #eee;
//  border: 1px solid #c2bfbc;
//  color: #656361;
//}


#pieChart {
  width: 600px;
  height: 460px;
  margin: 20px 100px 20px 100px;
  padding: 30px 20px 10px 20px; //上右下左
  float: left;
  //display: flex;
}

#scoreTable {
  margin: 5px 20px;
}

.subject {
  display: inline-block;
  float: left;
  margin-left: 100px;
}

.term {
  display: inline-block;
  float: left;
  margin-left: 100px;
}

.test {
  display: inline-block;
  float: left;
  margin-left: 100px;
}

.classes {
  display: inline-block;
  float: left;
  margin-left: 100px;
}
</style>
