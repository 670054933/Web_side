<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header :isShow="isShow"></Header>
      <div class="main">
        <div class="S_List">
          <el-table
              :data="tableData"
              border
              height="700px"
              style="width: 100%">
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                prop="stuName"
                label="All members"
                width="143">
            </el-table-column>
          </el-table>
        </div>
        <div class="up">
          <!--v-for进行列表渲染，使用v-model来处理用户输入，使用v-on来绑定点击事件。-->
          <ul>
            <li v-for="item in message_array">{{ item }}</li>
          </ul>
        </div>
        <div class="down">
          <div class="expression">
            <img src="../image/表情.png">
            <img src="../image/图片.png">
            <img src="../image/截图.png" id="screenshots">
          </div>
          <div class="input">
            <el-input
                type="textarea"
                :rows="5"
                placeholder="Please input the message"
                v-model="textarea"
            >
            </el-input>
          </div>
          <div class="sendbox">
            <el-button class="send" v-on:click="dealMessage">Send</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Header from "@/components/Headers";

export default {
  name: "CommunicateDetail",
  components: {Theme, Header},
  data() {
    return {
      isShow: true,
      textarea: '',
      message_array: [],
      tableData: '',
    }
  },
  methods: {
    dealMessage: function () {
      this.message_array.push(this.textarea);
      this.textarea = '';
    }
  },
  created() {
    this.tableData = this.$route.query.studentList;

  },
  mounted() {
  },
}
</script>

<style lang="less" scoped>
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

/deep/ .el-table--scrollable-y ::-webkit-scrollbar {
  display: none;
}

.S_List {
  width: 200px;
  height: 100%;
  float: left;
}

.up {
  width: 1100px;
  height: 450px;
  border-bottom: 1px solid #b0b5cd;
  float: left;
}
.li{
  font-size: 12px;
}
.down {
  width: 1100px;
  height: 247px;
  float: left;
}

.expression {
  width: 500px;
  height: 50px;
}

.input {
  width: 1100px;
  height: 125px;
}

#screenshots {
  height: 40px;
  width: 40px;
  margin-bottom: 3px;
  margin-left: 4px;
}

.sendbox {
  width: 100px;
  height: 40px;
  float: right;
  margin-right: 5px;
}

.send {
  color: white;
  background-color: dodgerblue;
  font-size: 20px;
}
</style>
