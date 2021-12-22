<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers :isShow="isShow"></Headers>
      <div class="main">
        <div class="notice">
          <span>You can send notifications to students or parents.</span>
        </div>
        <div class="choice">
          <div class="class_top">
            <div class="class1" @click="class11_student">
              <p class="s">Students in Class 1</p>
            </div>
            <div class="class2" @click="class11_parent">
              <p class="p">Parents in Class 1</p>
            </div>
          </div>
          <div class="class_bottom">
            <div class="class1" @click="class12_student">
              <p class="s">Students in Class 2</p>
            </div>
            <div class="class2" @click="class12_parent">
              <p class="p">Parents in Class 2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Headers from "@/components/Headers";
import {querySfromC} from '@/api/api';
export default {
  name: "Communicate",
  components: {Theme,Headers},
  data(){
    return{
      isShow:true
    }
  },
  methods: {
    class11_student() {
      // console.log('class1 students chatting room')
      this.querySname(1)
    },
    class11_parent() {
      // console.log('class1 parents chatting room')
      this.querySname(1)
    },
    class12_student() {
      // console.log('class2 students chatting room')
      this.querySname(2)
    },
    class12_parent() {
      // console.log('class2 parents chatting room')
      this.querySname(2)
    },
    querySname(param){
      querySfromC({classNo: param}).then(res =>{
        console.log(res)
        this.$router.push({
          path: "/CommunicateDetail",
          param: { studentList: res.data.data},
        })
      })
    }
  },
}
</script>

<style lang="less" scoped>
.right {
  width: 1303.2px;
  float: left;
}

.main {
  width: 100%;
  overflow-y:hidden;
  height: 700px;
}
.notice{
  width: 100%;
  height: 5%;
  padding-left: 20px;
  color: #9f9c96;
  font-size: 24px;
}
.choice{
  width: 100%;
  height: 90%;
}
.class_top{
  width: 100%;
  height: 40%;
}

.class_bottom{
  width: 100%;
  height: 40%;
}

.class1{
  float: left;
  width: 300px;
  height: 150px;
  margin-top: 30px;
  margin-left: 100px;
  margin-right: 100px;
  background: rgba(0, 0, 0, 0) url("../image/student.png") no-repeat;
  background-size: 100%;
}

.class2{
  float: left;
  width: 300px;
  height: 150px;
  margin-top: 30px;
  margin-left: 150px;
  background: rgba(0, 0, 0, 0) url("../image/parent.png") no-repeat;
  background-size: 100%;
}
.s{
  color: #6284d0;
  font-size: 20px;
  margin-left: 30%;
  margin-top: 15%;
}
.p{
  color: #9f7037;
  font-size: 20px;
  margin-left: 30%;
  margin-top: 15%;
}
</style>
