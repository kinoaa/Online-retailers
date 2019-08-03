<template>
  <div class="promotion">
    <p class="title">
      {{promotion.worthTitle}}
      <router-link tag="a" herf="http://z.dangdang.com/optimize/today_promote" class="iconfont">{{promotion.worthA}}&#xe68b;</router-link>
    </p>
    <div class="proa">
      <a href="javascript:;" v-for="(promotions, i) in promotion.slides" :key="i" class="pslides">
        <span class="ptxt">{{promotions.worthTxt}}</span>
        <span class="pprice">{{promotions.worthPrice}}</span>
        <img :src="promotions.worthImg" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promotion',
  props: ['promotion'],
  methods: {
    toObp () {
      this.$router.push({ path: '/obp' })
    }
  }
}
</script>

<style lang="less" scoped>
.promotion {
  padding: 0 10px;
  background: url(http://z.dangdang.com/static/img/%E4%B9%9D%E5%AE%AB%E6%A0%BC.5e5e35d.png);
  background-size: 100%;
  padding-bottom: 10px;
  .title {
    width: 100%;
    color: #fff;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    position: relative;
    a {
      position: absolute;
      color: #fff;
      font-size: 12px;
      right: 0;
    }
  }
  .proa {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    .pslides {
      width: calc(100% / 3 - 5px);
      display: inline-block;
      border-radius: 5px;
      background: #fff;
      margin-bottom: 5px;
      padding-top: 3px;
      .ptxt {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #565656;
        font-size: 14px;
      }
      .pprice {
        color: #943dff;
        font-size: 12px;
        line-height: 20px;
      }
      img {
        width: 80%;
        display: block;
        margin: 10px auto;
        margin-bottom: 5px;
      }
    }
  }
}
</style>
