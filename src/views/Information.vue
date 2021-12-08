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
import Header from "@/components/Headers";
import {gradeQuery} from "@/api/api";

export default {
  name:'Information',
  components: {Theme,Header},
  setup() {},
  methods: {
    gotoScoreStatistics() {
      this.$router.push({ path: "/ScoreStatistics" });
    },
    queryGrade(p){
      p = {
        subject:'Chinese',
      }
      gradeQuery(p).then(res =>{
          console.log(res)
      })


    }
  },
};
</script>

<style lang="less" scoped>

</style>