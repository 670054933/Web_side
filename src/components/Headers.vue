<template>
  <el-header>
    <el-button
    icon="el-icon-arrow-left"
    style="float: left;margin-top: 10px"
    @click="back"
    ></el-button>
    <el-button
        icon="el-icon-switch-button"
        circle
        style="color: red;float: right;margin-top: 10px"
    ></el-button>
  </el-header>
</template>

<script>
export default {
  name: "Headers",
  methods:{
    back(){
      console.log(111)
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #c3c2c2;
  display: inline-block;
  align-items: center;
  width: 100%;
}
</style>
