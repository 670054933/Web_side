<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-aside width="200px">
        <div class="avater_box">
          <img src="@/image/头像.png" alt=""/>
        </div>
        <el-menu
            active-text-color="#ffd04b"
            background-color="#656161"
            text-color="#faf4f4"
            :router="true"
        >
          <el-menu-item index="/Home">
            <!--一级菜单的模板区-->
            <template #title>
              <!--图标-->
              <!--改变图标颜色 style="color:#ffd04b"-->
              <i class="el-icon-s-home"></i>
              <!--文本-->
              <span>Home Page</span>
            </template>
          </el-menu-item>

          <el-menu-item index="/ScoreStatistics">
            <template #title>
              <i class="el-icon-s-order"></i>
              <span>Score Report</span>
            </template>
          </el-menu-item>

          <el-menu-item index="3">
            <i class="el-icon-reading"></i>
            <span>School Assignment</span>
          </el-menu-item>

          <el-menu-item index="/Communicate">
            <i class="el-icon-chat-line-round"></i>
            <span>Communicate</span>
          </el-menu-item>

          <el-menu-item index="/Information">
            <i class="el-icon-s-custom"></i>
            <span>Information</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
    </el-col>
    <router-view></router-view>
  </el-row>
</template>

<script>
export default {
  name: "HomePage",
  methods: {
  }
}
</script>

<style lang="less" scoped>
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

</style>