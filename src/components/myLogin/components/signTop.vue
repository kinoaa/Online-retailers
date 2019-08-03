<template>
  <div class="signTop">
    <a href="javascript:history.go(-1);" class="iconfont">&#xe616;</a>
    <span class="jd">京东登录</span>
  </div>
</template>

<script>
export default {
  name: 'signTop'
}
</script>

<style scoped>
.signTop {
  text-align: center;
  position: relative;
  height: 44px;
  line-height: 044px;
  background: #fff;
  font-size: 17px;
  z-index: 999;
}
.iconfont {
  left: 20px;
  width: 24px;
  height: 24px;
  font-size: 18px;
  display: inline-block;
  position: absolute;
  background-size: 100% auto;
}
</style>
