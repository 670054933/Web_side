/* eslint-disable space-before-blocks */
/* eslint-disable space-before-blocks */
<template>
  <div :style="background" class="bgBackground">
    <div :style="backgroundshadow" class="shadow">
      <div class="head">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#515151"
          text-color="#faf4f4"
          active-text-color="#fda200"
        >
          <div class="tag1" @click="gotoHomePage">
            <el-menu-item>Home page</el-menu-item>
          </div>
          <div class="tag">
            <el-menu-item>About us</el-menu-item>
          </div>
          <div class="tag">
            <el-menu-item>Customer Service</el-menu-item>
          </div>
          <div class="tag">
            <el-menu-item>Forget Password</el-menu-item>
          </div>
        </el-menu>
      </div>
      <div class="slogan">
        <h2 style="color: #fda220;font-size: 70px;margin-top: 209px;text-align: center;opacity: 60%">It's all about education</h2>
      </div>
      <div class="b">
        <input type="button" value="Teacher" style="opacity: 60%" @click="gotoLogin" />
        <input type="button" value="Student" style="opacity: 60%" />
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      background: {
        // 背景图片地址
        backgroundImage: "url(" + require("@/image/背景.jpg") + ")",
        // 背景图片是否重复
        backgroundRepeat: "no-repeat",
        // 背景图片大小
        backgroundSize: "cover",
        // 背景颜色
        backgroundColor: "#434242",
        // 背景图片位置
        backgroundPosition: "center top",
        email: "",
        password: "",
        isBtnLoading: false,
      },
      head: {},
      backgroundshadow: "",
      activeIndex: "1",
      activeIndex2: "1",
      handleSelect: "",
      select: "",
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        },
      },
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ path: "/Login" });
    },
    gotoHomePage(){
      this.$router.push({ path: "/HomePage" });
    }
  },
};
</script>
<style lang="less" scoped>
.bgBackground {
  background-size: 100% 100%;
  height: 98%;
  position: fixed;
  width: 1520px;
}
.shadow {
  background-size: 100% 100%;
  height: 98%;
  position: fixed;
  width: 1520px;
  background-color: rgba(67, 66, 66, 0.72);
}
.b {
  text-align: center;
  margin: 0;
}
.b input {
  height: 80px;
  width: 200px;
  background-color: rgba(82, 80, 80, 0.6);
  font-size: 30px;
  color: #fda220;
  border-radius: 10px;
  border-color: #c9e1e4;
  border-width: 0.3px;
}

.tag1 {
  float: left;
  margin-left: 200px;
}

.tag {
  float: left;
}
</style>
