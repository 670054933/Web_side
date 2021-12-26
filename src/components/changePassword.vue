<template>
  <el-dialog
    :visible.sync="show"
    @close="close"
    width="650px"
    >

  </el-dialog>
</template>

<script>
export default {
  name: "changePassword",
  data(){
    return{
      show:false,
    }
  },
  methods: {
    open(){
      this.show = true
    },
    close(){
      this.show = false
    },
  }
}
</script>

<style scoped>

</style>