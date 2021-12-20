<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers :isShow="isShow"></Headers>
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
import Headers from "@/components/Headers";
export default {
  name: "Communicate",
  components: {Theme,Headers},
  data(){
    return{
      isShow:true
    }
  }
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
