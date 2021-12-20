<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers :isShow="isShow"></Headers>
      <div class="main">
        <!--选择栏-->
        <div class="block-col-4">
          <el-select v-model="form.subject" filterable placeholder="Subject" class="choose" @change="change">
            <el-option
                v-for="item in Subjects"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="form.semNo" filterable placeholder="Term" class="choose" @change="change">
            <el-option
                v-for="item in Terms"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="form.examNo" filterable placeholder="Test" class="choose" @change="change">
            <el-option
                v-for="item in Exams"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
          </el-select>

          <el-select v-model="form.classNo" filterable placeholder="Class" class="choose" @change="change">
            <el-option
                v-for="item in Classes"
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
              height="400px"
              @row-click="rowClick"
              :row-style="tableRowStyle"
              :header-cell-style="tableHeaderColor"
              style="width: 100%"
          ><!--stripe表示斑马纹;header-row-style表头行的 style 的回调方法;row-style 行的 style 的回调方法-->
            <el-table-column prop="stuid" label="StudentID" width="120"/>
            <el-table-column prop="stuname" label="Name" width="120"/>
            <el-table-column prop="chinese" label="Chinese" width="120"/>
            <el-table-column prop="math" label="Maths" width="120"/>
            <el-table-column prop="english" label="English" width="120"/>
            <el-table-column prop="chemistry" label="Chemistry" width="120"/>
            <el-table-column prop="physics" label="Physics" width="120"/>
            <el-table-column prop="biology" label="Biology" width="120"/>
            <el-table-column prop="total" label="Sum" width="120"/>
            <el-table-column
                prop="rank"
                label="Class Ranking"
                width="165px"
            />
          </el-table>
        </div>

        <!--弹窗-->
        <Analysis :grade="grade" :term="this.form.semNo" ref="analysis"></Analysis>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Headers from "@/components/Headers";
import Analysis from "@/components/Analysis";
import {queryStudent,scoreLevel} from "@/api/api";

export default {
  name: "ScoreReport",
  components: {Headers, Theme, Analysis},
  data() {
    return {
      isShow: true,
      form: {
        subject: "total",
        semNo: "212",
        examNo: "1",
        classNo: "1",
      },
      grade: {},
      // msg: "Welcome to Your Vue.js App",
      //选择栏选项数据
      Subjects: [
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
      Terms: [
        {
          value: "212",
          label: "202102",
        },
        {
          value: "211",
          label: "202101",
        },
        {
          value: "202",
          label: "202002",
        },
        {
          value: "201",
          label: "202001",
        },
      ],
      Exams: [
        {
          value: "1",
          label: "Monthly exam1",
        },
        {
          value: "2",
          label: "Midterm exam",
        },
        {
          value: "3",
          label: "Monthly exam2",
        },
        {
          value: "4",
          label: "Final exam",
        },
      ],
      Classes: [
        {
          value: "1",
          label: "Class11",
        },
        {
          value: "2",
          label: "Class12",
        },
      ],

      //表格数据
      pieChart:'',
      tableData: [],
      typeName:[],
      typeNum:[],

    };
  },

  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      this.pieChart = this.$echarts.init(document.getElementById("pieChart"))
      // 绘制图表
      this.pieChart.setOption({
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
            data: [],
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
    rowClick(row) {
      this.grade = row;
      this.$refs.analysis.open();
    },

    queryStudents(param) {
      param = {
        ...this.form
      }

      queryStudent(param).then(res => {
        this.tableData = res.data.data
        console.log(this.tableData)
      })
    },
    queryScoreLevel(param){
      param = {
        ...this.form
      }
      scoreLevel(param).then(res =>{
        const getData = []
        for (let i = 0; i < res.data.data.length;i++){
          const obj = new Object();
          obj.name = res.data.data[i].name;
          obj.value = res.data.data[i].value;
          getData[i] = obj;
        }
        this.pieChart.setOption({
          series:[{
            data:getData,
          }]
        })
        console.log(res)
      })
    },

    change(){
      this.queryStudents();
      this.queryScoreLevel()
      this.drawLine();
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
    this.queryStudents();
    this.queryScoreLevel()
    this.drawLine();
  },
}
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
  overflow-y: auto;
  height: 700px;
  border-right: 1px solid #b0b5cd;
  border-bottom: 1px solid #b0b5cd;
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

/deep/ .el-table--scrollable-y ::-webkit-scrollbar {
  display: none;
}

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
