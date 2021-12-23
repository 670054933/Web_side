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
      <div class="return">
        <img src="../image/返回.png" height="48" width="48" @click="gotoLogin">
      </div>
      <div class="user">
        <p>Teacher register</p>
        <el-form :rules="addUserRules" ref="addUser">
          <el-form-item label="Email registration" prop="email">
            <el-input v-model="form.email"/>
          </el-form-item>
          <el-form-item label="UserName" prop="userName">
            <el-input v-model="form.userName"/>
          </el-form-item>
          <el-row>
            <el-col span="12">
              <el-form-item label="Subject" prop="subject">
                <el-select v-model="form.subject" filterable placeholder="Subject">
                  <el-option
                      v-for="item in Subjects"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col span="12">
              <el-form-item label="Class" prop="classNo">
                <el-select v-model="form.classNO" placeholder="class" clearable filterable
                           style="margin-right: 15px">
                  <el-option label="Class1" value="1"></el-option>
                  <el-option label="Class2" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-form-item label="Set password" prop="password">
            <el-input
                v-model="form.password"
                type="password"
                show-password
            />
          </el-form-item>
          <el-form-item label="Confirm password" prop="Cpassword">
            <el-input
                v-model="Cpassword"
                type="Cpassword"
                show-password
            />
          </el-form-item>
          <el-form-item>
            <el-button class="confirm" @click="submitForm">Complete Registration</el-button>
          </el-form-item>
        </el-form>
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
      } else if (value !== this.form.password) {
        cb(new Error("两次输入密码不一致!"));
      } else {
        cb();
      }
    };
    return {
      form: {
        username: "",
        password: "",
        subject: '',
        email: "",
        classNO: ''
      },
      Cpassword: "",
      Subjects: [
        {
          value: "chinese",
          label: "Chinese",
        },
        {
          value: "math",
          label: "Maths",
        },
        {
          value: "english",
          label: "English",
        },
        {
          value: "chemistry",
          label: "Chemistry",
        },
        {
          value: "physics",
          label: "Physics",
        },
        {
          value: "biology",
          label: "Biology",
        },
      ],
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
      },
    };
  },
  methods: {
    // gotoLogin() {
    //   this.$router.push({ path: "/Login" });
    // },
    gotoHomePage() {
      this.$router.push({path: "/HomePage"});
    },
    gotoLogin() {
      this.$router.push({path: "/Login"});
    },
    submitForm(param) {
      param = {
        ...this.submitForm
      }

      register(param).then(res => {
        console.log(res.data)

      })
    },
  },
};
</script>
<style lang="less" scoped>
.bgBackground {
  background-size: 100% 100%;
  height: 98%;
  position: fixed;
  width: 1520px;

  .shadow {
    background-size: 100% 100%;
    height: 98%;
    position: fixed;
    width: 1520px;
    background-color: rgba(67, 66, 66, 0.72);
  }
  .user {
    height: 610px;
    //width: 350px;
    padding-left: 20px;
    margin: 50px 530px;
    color: #fcfafa;
    background-color: rgba(67, 66, 66, 0.76);
    font-size: 20px;
  }
}
.return{
  float: left;
  height: 50px;
  width: 50px;
  margin-left: 30%;
  margin-top: 300px;
}
/deep/ .el-form-item{
  height: 80px;
}
/*.user input {*/
/*  height: 30px;*/
/*  width: 350px;*/
/*}*/
/deep/ .el-row{
  height: 80px;
}

.tag1 {
  float: left;
  margin-left: 200px;
}

.tag {
  float: left;
}
.el-input{
  width: 96%;
  height: 30px;
}
.el-select{
  margin-right: 20px;
}
.confirm {
  margin-left: 25%;
}
</style>
