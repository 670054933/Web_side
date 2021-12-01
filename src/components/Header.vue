<template>
  <el-header>
    <el-button
        icon="el-icon-switch-button"
        circle
        style="color: red; background-color: #c3c2c2"
    ></el-button>
  </el-header>
</template>

<script>
export default {
  name: "header"
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>