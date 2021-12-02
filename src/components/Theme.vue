<template>
    <el-aside width="200px">
      <div class="avater_box">
        <img src="@/image/头像.png" alt=""/>
      </div>
      <!--侧边栏菜单区-->
      <el-menu
          active-text-color="#ffd04b"
          background-color="#656161"
          text-color="#faf4f4"
          :router="true"
      >
        <el-menu-item index="/Home">
          <template #title>
            <i class="el-icon-s-home"></i>
            <span>Home Page</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/ScoreStatistics">
          <template #title>
            <i class="el-icon-s-order"></i>
            <span>Score Report</span>
          </template>
        </el-menu-item>
        <el-menu-item index="/SchoolAssignment">
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
</template>

<script>
export default {
  name: "Theme"
}
</script>

<style lang="less" scoped>

.el-aside {
  background-color: #656161;
  height:760px;
  float: left;
}

.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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

</style>