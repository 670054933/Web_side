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
          <div class="tag1">
            <el-menu-item @click="gotoHome">Home page</el-menu-item>
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
      <div class="user">
        <p>Teacher register</p>
        <p>Email registration</p>
        <input type="text" v-model="Email" />
        <p>UserName</p>
        <input type="text" v-model="userName" />
        <br />
        <div class="o">
          <p>Grade</p>
          <select name="Grade">
            <option
              selected="selected"
              disabled="disabled"
              style="display: none"
              value=""
            ></option>
            <option value="Grade10">Grade10</option>
            <option value="Grade11">Grade11</option>
            <option value="Grade12">Grade12</option>
          </select>
          <p>Class</p>
          <select name="Class">
            <option
              selected="selected"
              disabled="disabled"
              style="display: none"
              value=""
            ></option>
            <option value="class1">class1</option>
            <option value="class2">class2</option>
            <option value="class3">class3</option>
          </select>
          <br /><br /><br />
        </div>
        <p>Set password</p>
        <input type="text" v-model="Email" />
        <p>Confirm password</p>
        <input type="text" v-model="userName" />
        <br />
        <div class="b">
          <input
            type="button"
            value="Complete Registration"
            @click="gotoHome"
          />
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "register",
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
        userName: "",
        password: "",
        isBtnLoading: false,
      },
      head: {
        activeIndex: "1",
        activeIndex2: "1",
        // },
        // methods: {
        //   handleSelect(key, keyPath) {
        //     console.log(key, keyPath);
        //   },
      },
    };
  },
  created() {
    if (
      JSON.parse(localStorage.getItem("user")) &&
      JSON.parse(localStorage.getItem("user")).userName
    ) {
      this.userName = JSON.parse(localStorage.getItem("user")).userName;
      this.password = JSON.parse(localStorage.getItem("user")).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return "登录中...";
      return "登录";
    },
  },
  methods: {
    gotoHome() {
      this.$router.push({ path: "/Home" });
    },
  },
};
</script>
<style scoped>
.bgBackground {
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
}
.shadow {
  background-size: 100% 100%;
  height: 100%;
  position: fixed;
  width: 100%;
  background-color: rgba(67, 66, 66, 0.72);
}
.user {
  height: 600px;
  width: 400px;
  padding-left: 20px;
  margin: 50px 600px;
  color: #fcfafa;
  background-color: rgba(67, 66, 66, 0.76);
  font-size: 20px;
}
.user input {
  height: 30px;
  width: 350px;
}
.b input {
  height: 40px;
  width: 250px;
  margin: 20px 65px;
  background-color: rgba(67, 66, 66, 0.8);
  font-size: 20px;
  color: hsl(35, 98%, 56%);
}
.tag1 {
  float: left;
  margin-left: 200px;
}
.tag {
  float: left;
}
.o p {
  float: left;
  margin: 30px 10px;
}
.o select {
  float: left;
  height: 35px;
  width: 90px;
  margin: 30px 10px;
}
</style>
