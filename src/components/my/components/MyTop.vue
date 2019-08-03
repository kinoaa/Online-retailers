<template>
  <div class="mytop">
    <div class="logo">
      <a href="javascript:history.go(-1);" class="iconfont">&#xe603;</a>
    </div>
    <div class="inp">
      <span>我的某东</span>
    </div>
    <div class="muen">
      <i class="iconfont">&#xe61b;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyTop'
}
</script>

<style lang="less" scoped>
.mytop {
  width: 100%;
  height: 60px;
  display: flex;
  position: fixed;
  z-index: 9999;
  background: #fff;
  .logo {
    width: 10%;
    text-align: center;
    .iconfont {
      font-size: 30px;
      line-height: 60px;
      color: #000;
    }
  }
  .inp {
    width: 78%;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
  }
  .muen {
    width: 12%;
    text-align: left;
    .iconfont {
      font-size: 30px;
      color: #000;
      line-height: 60px;
    }
  }
}
</style>
