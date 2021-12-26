<template>
  <div :style="background" class="bgBackground">
    <div class="shadow">
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
      <div class="return">
        <img src="../image/返回.png" height="48" width="48" @click="gotoHomePage">
      </div>
      <div class="user">
        <p>Teacher Login</p>
        <p>Account number</p>
        <input type="text" v-model="form.email"/>
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
        email: 'Field@education.com',
        password: '933483',
      },
      head: {
        activeIndex: "1",
        activeIndex2: "1",
      },
      submitLogin() {

      },
    };
  },
  methods: {
    login(param) {
      param = {
        ...this.form
      }
      login(param).then(res => {
        if (res.data.code === 0) {
          this.$store.commit('SET_TOKEN', res.data.data.tokenValue)
          this.$store.commit('GET_USER', res.data.data.username)
          this.$message({
            message: res.data.msg,
            type: 'success'
          })
          this.$router.push({name: 'Home'})

        }else {
          this.$message({
            message: res.data.msg,
            type: 'warning'
          })
        }
      }).catch(function (error) {
        console.log(error)
      })
    },
    gotoRegister() {
      this.$router.push({path: "/register"});
    },
    gotoHomePage(){
      this.$router.push({ path: "/HomePage" });
    }
  },
}
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
.return{
  float: left;
  height: 1px;
  width: 50px;
  margin-left: 35%;
  padding-top: 18%;
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
