<template>
  <div class="carttop">
    <div class="logo">
      <a href="javascript:history.go(-1);" class="iconfont">&#xe603;</a>
    </div>
    <div class="inp">
      <span>京东秒杀</span>
    </div>
    <div class="muen">
      <i class="iconfont">&#xe61b;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cartTop'
}
</script>

<style lang="less" scoped>
.carttop {
  width: 100%;
  height: 50px;
  display: flex;
  position: fixed;
  background: white;
  z-index: 9999;
  .logo {
    width: 10%;
    text-align: center;
    .iconfont {
      font-size: 26px;
      line-height: 50px;
      color: #000;
    }
  }
  .inp {
    width: 78%;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
  }
  .muen {
    width: 10%;
    text-align: left;
    .iconfont {
      font-size: 30px;
      color: #000;
      line-height: 50px;
    }
  }
}
</style>
