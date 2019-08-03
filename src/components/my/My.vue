<template>
  <div class="my">
    <my-top></my-top>
    <!-- 登录/未登录 -->
    <div class="logoin">
      <div class="table">
        <div class="cell">
          <a class="login-link j_loginLink" href="javascript:void(0);" @click="toLogin()">登录/注册</a>
        </div>
      </div>
    </div>
    <!-- 待付款 -->
    <my-wait :logoin="logoin"></my-wait>
    <!-- 中部列表 -->
    <my-conent :myuls="myuls"></my-conent>
    <!-- 猜您喜欢 -->
    <recommend :recommend="recommend"></recommend>
  </div>
</template>
<script>
import { logoin, getUls, recommend } from '@/api/index.js'
import MyTop from '@/components/my/components/MyTop'
import MyWait from '@/components/my/components/MyWait'
import MyConent from '@/components/my/components/MyConent'
import Recommend from '@/components/home/components/Recommend'
export default {
  name: 'My',
  components: {
    MyTop,
    MyWait,
    MyConent,
    Recommend
  },
  data () {
    return {
      logoin: {},
      myuls: {},
      recommend: {}
    }
  },
  methods: {
    toLogin () {
      this.$router.push({ path: '/logoin' })
    }
  },
  created () {
    // 上部分
    logoin().then(({ data }) => {
      this.logoin = data
    })
    // 中部分
    getUls().then(({ data }) => {
      this.myuls = data
    })
    // 猜您喜欢
    recommend().then(({ data }) => {
      this.recommend = data
    })
  }
}
</script>
<style lang="less" scoped>
.my {
  margin-bottom: 60px;
  background: #eee;
}
.logoin {
  padding-top: 65px;
  min-height: 115px;
  background: url(http://img61.ddimg.cn/upload_img/00610/home/user-bg.jpg)
    no-repeat center center;
  background-size: 100% 100%;
  .table {
    display: table;
    width: 100%;
    height: 115px;
    .cell {
      display: table-cell;
      vertical-align: middle;
      text-align: center;
      .login-link {
        display: inline-block;
        padding: 10px;
        border: 1px solid #ffffff;
        border-radius: 20px;
        font-size: 18px;
        text-align: center;
        color: #ffffff;
      }
    }
  }
}
</style>
