<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers :is-show="isShow"></Headers>
      <div class="main">
        <div class="w">
          <el-carousel type="card" height="600px">
            <el-carousel-item  v-for="(item, index) in list_img" :key="index">
              <h3 class="small">
                <img :src="item.url" alt />
              </h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Headers from "@/components/Headers";
export default {
  name: 'Home',
  components: {Headers, Theme},
  data(){
    return{
      isShow:false,
      list_img: [
        { url: require('../image/1.png') },
        { url: require('../image/2.png') },
        { url: require('../image/3.png') },
        { url: require('../image/4.png') },
      ],
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
  overflow-y:auto;
  height: 700px;
  border-right:1px solid #b0b5cd;
  border-bottom: 1px solid #b0b5cd;
}
.w {
  margin: 0 auto;
  margin-top: 50px;
  width: 1303.2px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 1;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

//.el-carousel__item:nth-child(2n) {
//  background-color: #99a9bf;
//}
//
//.el-carousel__item:nth-child(2n + 1) {
//  background-color: #d3dce6;
//}

.small img {
  margin-top: 50px;
  width: 100%;
  height: 100%;
}

.el-carousel__container {
  width: 1226px;
  height: 460px;
}
</style>