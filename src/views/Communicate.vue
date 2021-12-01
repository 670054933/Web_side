<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div>
        内容写在这里
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Header from "@/components/Header";
export default {
  name: "Communicate",
  components: {Theme,Header},
}
</script>

<style lang="less" scoped>
.right{
  width: 86%;
  float: left;
}
</style>