<template>
  <el-header>
    <el-button
        v-show="isShow"
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
  props: {
    isShow: {
      type: Boolean
    }
  },
  data() {
    return {}
  },
  methods: {
    back() {

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
