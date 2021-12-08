<template>
  <div>
    <Theme></Theme>
    <div class="right">
      <Headers></Headers>
      <div>
        <div id="app">
          <div class="container">
            <ul v-bind:style="{ marginLeft: mLeft + 'px' }">
              <li v-for="img in imgs" :key="img.imgs">
                <img v-bind:src="img.url" alt="" />
              </li>
            </ul>
          </div>
          <div class="btnControl">
            <button @click="move(-1)">上一张</button>
            <button @click="move(1)">下一张</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Theme from "@/components/Theme";
import Headers from "@/components/Headers";
export default {
  name:'Home',
  components: {Headers, Theme},
  data: {
    imgs: [
      {
        id: 1,
        url: "https://wx2.sinaimg.cn/mw690/56155fd3gy1gawavtsqc3j21xg1abb2b.jpg",
      },
      {
        id: 2,
        url: "https://wx3.sinaimg.cn/mw690/56155fd3gy1gawaw5ofhgj21xg1abx6q.jpg",
      },
      {
        id: 3,
        url: "https://wx4.sinaimg.cn/mw690/56155fd3gy1gawawg18zpj21xg1abkjm.jpg",
      },
      {
        id: 4,
        url: "https://wx2.sinaimg.cn/mw690/56155fd3gy1gawawp8hd4j21xg1abx6q.jpg",
      },
    ],
    i: 0, // 现在正在显示第0张(默认值)
    mLeft: 0, // 图片ul的默认左边距为0 显示第0张
    timer: null, // timer设置为定时器
  },
  setup() {},
  methods: {
    gotoScoreStatistics() {
      this.$router.push({ path: "/ScoreStatistics" });
    },
    move: function (to) {
      if (to == undefined) {
        // 如果不传入参数, 默认为移动到下一张
        to = 1;
      }
      this.i = this.i + to; // 移动到下一张或者上一张
      if (this.i > 3) {
        // 正着走到最后一张时跳到第一张
        this.i = 0;
      }
      if (this.i < 0) {
        // 倒着走到第一张时跳到最后一张
        this.i = 3;
      }
      this.mLeft = -400 * this.i; // 设置data里表示图片ul的左边距为-400 / -800 / -1200, 分别显示第二张, 第三张, 第四章
      console.log(this.mLeft); // 获取到每调用一次move函数, mLeft的最终值(控制图片显示)
    },
    created: function () {
      // 生命周期钩子函数, 实例被创建时设置一个定时器, 每隔3秒钟调用一次无参数的move()函数
      this.timer = setInterval(() => {
        this.move();
      }, 3000);
    },
  },
};
</script>

<style lang="less" scoped>

</style>