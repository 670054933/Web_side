<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
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
                prop="name"
                label="All members"
                width="143">
            </el-table-column>
          </el-table>
        </div>
        <div class="up">
          <el-input
              type="textarea"
              :rows="21"
              placeholder="Please input the message"
              v-model="textarea"
          >
          </el-input>
        </div>
        <div class="down">
          <img src="../image/图片.png">
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
  props: {
    tableData: {
      type: Array,
    }
  },
  data() {
    return {
      textarea: '',
    }
  }
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
  width: 1103.2px;
  height: 450px;
  border-bottom: 1px solid #b0b5cd;
  float: left;
}
.down{
  width: 1103.2px;
  height: 247px;
  float: left;
}
</style>