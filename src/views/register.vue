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
        <el-form :model="addUser" :rules="addUserRules" ref="addUser">
          <el-form-item prop="email">
            <el-input v-model="addUser.email"/>
          </el-form-item>
          <p>UserName</p>
          <el-form-item prop="userName">
            <el-input v-model="addUser.userName"/>
          </el-form-item>
        </el-form>
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
          <br/>
        </div>
        <div>
          <el-form :model="addUser" :rules="addUserRules" ref="addUser">
            <p>Set password</p>
            <el-form-item prop="password">
              <el-input
                  v-model="addUser.password"
                  type="password"
                  show-password
              />
            </el-form-item>
            <p>Confirm password</p>
            <el-form-item prop="Cpassword">
              <el-input
                  v-model="addUser.Cpassword"
                  type="Cpassword"
                  show-password
              />
            </el-form-item>
            <div class="b">
              <input
                  type="button"
                  value="Complete Registration"
                  @click="submitForm"
              />
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {register} from "@/api/api";

export default {
  name: "register",
  data() {
    var checkEmail = (rule, value, cb) => {
      // 验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
      if (regEmail.test(value)) {
        // 合法的邮箱
        return cb();
      }
      cb(new Error("Please enter a valid email"));
    };
    var checkName = (rule, value, cb) => {
      // 验证名字的正则表达式
      const regName = /^([a-zA-Z0-9_-])+/;
      if (regName.test(value)) {
        // 合法的用户名
        return cb();
      }
      cb(new Error("Please enter a valid user name"));
    };
    var checkPass = (rule, value, cb) => {
      const regPass = /^([a-zA-Z0-9_-])+/;
      if (value === "") {
        cb(new Error("请再次输入密码"));
      } else if (value !== this.addUser.password) {
        cb(new Error("两次输入密码不一致!"));
      } else {
        cb();
      }
    };
    return {
      addUser: {
        username: "",
        password: "",
        Cpassword: "",
        email: "",
      },
      addUserRules: {
        password: [
          {
            required: true,
            message: "Please enter your password",
            trigger: "blur",
          },
          {
            validator: checkPass,
            message: "Please enter the correct password",
            trigger: "blur",
          },
        ],
        Cpassword: [
          {
            required: true,
            message: "Please enter your password again",
            trigger: "blur",
          },
          {
            validator: checkPass,
            message: "The password entered twice is inconsistent!",
            trigger: "blur",
          },
        ],
        email: [
          {
            required: true,
            message: "Please enter your email address",
            trigger: "blur",
          },
          {
            validator: checkEmail,
            message: "Please enter the correct email address",
            trigger: "blur",
          },
        ],
        userName: [
          {
            required: true,
            message: "Please enter your user name",
            trigger: "blur",
          },
          {
            validator: checkName,
            message: "Please enter the correct user name",
            trigger: "blur",
          },
        ],
      },
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
    // gotoLogin() {
    //   this.$router.push({ path: "/Login" });
    // },
    submitForm(param) {
      param = {
        ...this.addUser
      }

      register(param).then(res => {
        console.log(res.data)

      })

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
  height: 500px;
  width: 350px;
  padding-left: 20px;
  margin: 50px 600px;
  color: #fcfafa;
  background-color: rgba(67, 66, 66, 0.76);
  font-size: 15px;
}

.user input {
  height: 30px;
  width: 350px;
}

.b input {
  position: relative;
  top: -40px;
  width: 250px;
  background-color: rgba(67, 66, 66, 0.8);
  font-size: 15px;
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
  margin: 0px 10px;
}

.o select {
  float: left;
  height: 20px;
  width: 75px;
  margin: 0px 10px;
}

.cp {
  position: relative;
  top: -30px;
}

.p {
  position: relative;
  top: -40px;
}
</style>
