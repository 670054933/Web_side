<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers :is-show="isShow"></Headers>
      <div class="main">
        <div class="title">
          <img src="@/image/头像.png" alt=""/>
          <p class="char">Name: {{ name }}</p>
          <p class="char">Post: {{ post }}</p>
          <p class="char">Class taught: {{ classtaught }}</p>
        </div>
        <!--  表单  -->
        <el-form ref="form" :model="form">
          <div class="input">
            <el-row>
              <el-col :span="11">
                <el-form-item label="Phone number:" label-width="40%">
                  <el-input :disabled="isModified" v-model="form.phoneNO"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="11">
                <el-form-item label="E-mail:" label-width="40%">
                  <el-input :disabled="isModified" v-model="form.email"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="Subjects taught:" label-width="18%">
              <el-input :disabled="isModified" v-model="form.subject"></el-input>
            </el-form-item>
            <el-form-item label="Professional ranks:" label-width="18%">
              <el-input :disabled="isModified" v-model="form.profession"></el-input>
            </el-form-item>
          </div>
          <div class="button">
            <el-form-item>
              <el-button @click="onModify">Modify</el-button>
              <el-button @click="onConfirm">Confirm</el-button>
            </el-form-item>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Headers from "@/components/Headers";
import {gradeQuery} from "@/api/api";

export default {
  name: 'Information',
  components: {Theme, Headers},
  setup() {
  },
  data() {
    return {
      isShow:true,
      isModified:true,
      //title数据
      name: "Ann",
      post: "Head teacher",
      classtaught: "Class 11, Class 12",

      //表单数据
      form: {
        phoneNO: '',
        email: '',
        subject: '',
        profession: '',
        desc: '',
      },
    }
  },
  methods: {
    queryGrade(p) {
      p = {
        subject: 'Chinese',
      }
      gradeQuery(p).then(res => {
        console.log(res)
      })
    },
    onModify() {
      console.log('modify!')
      this.isModified = false;
    },
    onConfirm() {
      this.$confirm('Are you sure?').then(_=>{
        console.log('submit!')
      })
      this.isModified = true;
    },
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

.title {
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
  background-color: #fbfafa;
}

.input{
  width: 100%;
  height: 66%;
}

.el-row{
  margin-top: 3%;
  margin-bottom: 3%;
  height: 20%;
}
.el-form-item {
  margin-left: 1%;
  padding-bottom: 3%;
}
.el-input {
  width: 350px;
  height: 50px;
  background-color: #fbfafa;
}
.button{
  width: 100%;
  height: 33%;
}

.el-button {
  height: 8%;
  width: 15%;
  background-color: #fbfafa;

  border: 2px solid #98abc7;
  border-radius: 3%;
  margin: 0% 23%;
  //字的大小及颜色
  font-size: 20px;
  color: #51504e;
}
.main{
  width: 100%;
  overflow-y:auto;
  height: 700px;
  border-right:1px solid #b0b5cd;
  border-bottom: 1px solid #b0b5cd;
}
</style>
