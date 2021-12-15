<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div class="main">
        <div class="S_List">
            askdflkjaslkdfjl
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Header from "@/components/Headers";
export default {
  name: "Communicate",
  components: {Theme,Header},
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

.S_List{
  width: 100px;
  height: 100%;
}
</style>