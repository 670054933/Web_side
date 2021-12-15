<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Header></Header>
      <div>
        <p>You can send notifications to students or parents.</p>
      </div>
      <div>
        <span>Student:</span>
        <span>Parent:</span>
      </div>
      <div class="class11">

        <div class="studentsCommunication">
<!--          <img src="@/image/studentCommunication.png" alt="">-->
        </div>
        <div class="parentsCommunication">
<!--          <img src="@/image/parentCommunication.png" alt="">-->
        </div>
      </div>
      <div class="class12">
        <div class="studentsCommunication">
<!--          <img src="@/image/studentCommunication.png" alt="">-->
        </div>
        <div class="parentsCommunication">
<!--          <img src="@/image/parentCommunication.png" alt="">-->
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
.class11{
  width: 100%;
  height: 200px;
}
.class12{
  width: 100%;
  height: 200px;
}
.studentsCommunication{
  width: 200px;
  height: 100px;
  //background: rgba(0, 0, 0, 0)
  //background-image: url("../image/studentCommunication.png") no-repeat scroll 100% 100%;
  //background-image: url("../image/studentCommunication.png");
  background-size: auto;
  background-size: cover;
}
</style>
