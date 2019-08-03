<template>
  <div class="homeTop">
    <a href="javascript:history.go(-1);" class="iconfont zuo">&#xe616;</a>
    <span class="jd">京东登录</span>
    <span class="iconfont dian">&#xe61f;</span>
  </div>
</template>

<script>
export default {
  name: 'homeTop'
}
</script>

<style scoped>
.homeTop {
  text-align: center;
  position: relative;
  height: 44px;
  line-height: 044px;
  background: #fff;
  font-size: 17px;
  z-index: 999;
}
.zuo {
  left: 20px;
  width: 24px;
  height: 24px;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  background-size: 100% auto;
  color: black;
}
.homeTop .dian {
  right: 20px;
  width: 24px;
  height: 24px;
  font-size: 30px;
  display: inline-block;
  position: absolute;
  background-size: 100% auto;
}
</style>
