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
      <div class="user">
        <p>Teacher Login</p>
        <p>Account number</p>
        <input type="text" v-model="form.userName"/>
        <p>Password</p>
        <input type="text" v-model="form.password"/>
        <br/>
        <div class="b">
          <input type="button" value="Login" @click="login"/>
          <input type="button" value="Register" @click="gotoRegister"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {login} from "@/api/api";

export default {
  name: "login",
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
        isBtnLoading: false,
      },
      form: {
        userName: '',
        password: '',
      },
      head: {
        activeIndex: "1",
        activeIndex2: "1",
      },
      // methods: {
      //   handleSelect(key, keyPath) {
      //     console.log(key, keyPath);
      //   },
      // },
      submitLogin() {

      },
    };
  },
  // created() {
  //   if (
  //       JSON.parse(localStorage.getItem("user")) &&
  //       JSON.parse(localStorage.getItem("user")).userName
  //   ) {
  //     this.userName = JSON.parse(localStorage.getItem("user")).userName;
  //     this.password = JSON.parse(localStorage.getItem("user")).password;
  //   }
  // },
  // computed: {
  //   btnText() {
  //     if (this.isBtnLoading) return "登录中...";
  //     return "登录";
  //   },
  // },
  methods: {
    login(param) {
      param = {
        ...this.form
      }
      login(param).then(res => {
        console.log(res.data.token)
        if (res.status === 200) {
          this.$store.commit('SET_TOKEN', res.data.token)
          this.$store.commit('GET_USER', res.data.user)
          this.$message({
            message: '登陆成功',
            type: 'success'
          })
          this.$router.push({name: 'Home'})
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    gotoRegister() {
      this.$router.push({path: "/register"});
    },
  },
}
</script>
<style>
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
  height: 330px;
  width: 330px;
  padding-left: 20px;
  margin: 150px 600px;
  color: #fcfafa;
  background-color: rgba(67, 66, 66, 0.76);
  font-size: 20px;
}

.user input {
  height: 30px;
  width: 300px;
}

.b input {
  height: 40px;
  width: 100px;
  margin: 40px 30px;
  background-color: rgba(67, 66, 66, 0.8);
  font-size: 20px;
  color: #fda220;
}

.tag1 {
  float: left;
  margin-left: 200px;
}

.tag {
  float: left;
}
</style>
