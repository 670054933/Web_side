<template>
  <el-container class="home-container">
    <!--侧边栏-->
    <el-aside width="200px">
      <div class="avater_box">
        <img src="@/image/头像.png" alt="" />
      </div>
      <!--侧边栏菜单区-->
      <el-menu
        default-active="1.1"
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
            <el-icon><home-filled /></el-icon>
            <!--文本-->
            <span index="1.1">Home Page</span>
          </template>
        </el-menu-item>

        <el-menu-item index="2" @click="gotoScoreStatistics">
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
          @click="logout"
        ></el-button>
      </el-header>
      <!--右侧内容主体-->
      <el-main>
        <div></div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import {gradeQuery} from "@/api/api";

export default {
  name:'Information',
  setup() {},
  methods: {
    gotoScoreStatistics() {
      this.$router.push({ path: "/ScoreStatistics" });
    },
    queryGrade(p){
      p = {
        subject:'Chinese',
      }
      gradeQuery(p).then(res =>{
          console.log(res)
      })


    }
  },
};
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}
.el-aside {
  background-color: #656161;
  height: 100%;
}
.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-main {
  background-color: #eee;
  height: 100%;
}
.avater_box {
  height: 80px;
  width: 80px;
  border: 1px solid #eee; //加边框
  border-radius: 50%; //圆角边框
  padding: 2px; //图片与边框之间有间隙
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%; //图片变为圆角图片
  background-color: #eee;
}
</style>