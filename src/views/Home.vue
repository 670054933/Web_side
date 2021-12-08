<template>
  <el-container class="home-container">
    <!--侧边栏-->
    <el-aside width="200px">
      <div class="avater_box">
        <img src="@/image/头像.png" alt="" />
      </div>
      <!--侧边栏菜单区-->
      <el-menu
        default-active="1.1"
        active-text-color="#ffd04b"
        background-color="#656161"
        text-color="#faf4f4"
      >
        <!--一级菜单-->
        <el-menu-item index="1">
          <!--一级菜单的模板区-->
          <template #title>
            <!--图标-->
            <!--改变图标颜色 style="color:#ffd04b"-->
            <i class="el-icon-s-home"></i>
            <el-icon><home-filled /></el-icon>
            <!--文本-->
            <span index="1.1">Home Page</span>
          </template>
        </el-menu-item>

        <el-menu-item index="2" @click="gotoScoreStatistics">
          <template #title>
            <i class="el-icon-s-order"></i>
            <span>Score Report</span>
          </template>
        </el-menu-item>

        <el-menu-item index="3">
          <i class="el-icon-reading"></i>
          <span>School Assignment</span>
        </el-menu-item>

        <el-menu-item index="4">
          <i class="el-icon-chat-line-round"></i>
          <span>Communicate</span>
        </el-menu-item>

        <el-menu-item index="5">
          <i class="el-icon-s-custom"></i>
          <span>Information</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!--主体区-->
    <el-container>
      <!--头部区-->
      <el-header>
        <el-button
          icon="el-icon-switch-button"
          circle
          style="color: red; background-color: #c3c2c2"
          @click="logout"
        ></el-button>
      </el-header>
      <!--右侧内容主体-->
      <el-main>
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
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name:'Home',
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
.home-container {
  height: 100%;
}
.el-aside {
  background-color: #656161;
  height: 100%;
}
.el-header {
  background-color: #c3c2c2;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-main {
  background-color: #eee;
  height: 100%;
}
.avater_box {
  height: 80px;
  width: 80px;
  border: 1px solid #eee; //加边框
  border-radius: 50%; //圆角边框
  padding: 2px; //图片与边框之间有间隙
}
img {
  width: 100%;
  height: 100%;
  border-radius: 50%; //图片变为圆角图片
  background-color: #eee;
}
.container {
  height: 200px;
  width: 200px;
}
</style>