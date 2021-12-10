<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div class="main">
        <div class="title">
          <img src="@/image/头像.png" alt=""/>
          <p class="char">Name: {{ name }}</p>
          <p class="char">Post: {{ post }}</p>
          <p class="char">Class taught: {{ classtaught }}</p>
        </div>
        <!--  表单  -->
        <el-form ref="form" :model="form" label-width="120px">
          <el-row>
            <el-col :span="11">
              <el-form-item label="Phone number:"  label-width="180px">
                <el-input v-model="form.phoneNO"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="11">
              <el-form-item label="E-mail:"  label-width="180px">
                <el-input v-model="form.email"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item label="Subjects taught:" label-width="180px">
            <el-input v-model="form.subject"></el-input>
          </el-form-item>
          <el-form-item label="Professional ranks:" label-width="180px">
            <el-input v-model="form.profession"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button>Modify</el-button>
            <el-button @click="onSubmit">Confirm</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Header from "@/components/Headers";
import {gradeQuery} from "@/api/api";

export default {
  name: 'Information',
  components: {Theme, Header},
  setup() {
  },
  data() {
    return {
      form: {
        phoneNO: '',
        email: '',
        subject: '',
        profession: '',
        desc: '',
      },
      name: "Ann",
      post: "Head teacher",
      classtaught: "Class 11, Class 12",
    }
  },
  methods: {
    gotoScoreStatistics() {
      this.$router.push({path: "/ScoreStatistics"});
    },
    queryGrade(p) {
      p = {
        subject: 'Chinese',
      }
      gradeQuery(p).then(res => {
        console.log(res)
      })
    },
    onSubmit() {
      console.log('submit!')
    }
    ,
  },
}
;
</script>

<style lang="less" scoped>
.home-container {
  height: 100%;
}

.right {
  width: 1303.2px;
  float: left;
}

.main {
  width: 100%;
  overflow-y: auto;
  height: 700px;
}

.title{
  width: 100%;
  height: 120px;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%; //图片变为圆角图片
    margin-left: 130px;
    padding: 20px 35px;
    float: left;
  }
  .char {
    font-size: 20px;
    margin: 40px 30px;
    float: left;
  }
}


.el-form {
  width: 1100px;
  height: 450px;
  border: 3px solid #98abc7;
  border-radius: 1%;
  margin: 20px 100px 20px 100px;
}

.el-form-item {
  margin-left: 20px;
  margin-top: 20px;
}

.el-input {
  width: 350px;
  height: 50px;
}

.el-button {
  border: 2px solid #98abc7;
  border-radius: 2%;
  margin: 20px 30px;
}
</style>
