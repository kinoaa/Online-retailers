<template>
  <div class="category-top">
    <div class="logo">
      <a href="javascript:history.go(-1);" class="iconfont">&#xe603;</a>
    </div>
    <div class="inp">
      <i class="iconfont">&#xe660;</i>
      <input type="text" placeholder="搜索商品/店铺/种类" />
    </div>
    <div class="muen">
      <i class="iconfont">&#xe61b;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CategoryTop'
}
</script>

<style lang="less" scoped>
.category-top {
  width: 100%;
  height: 60px;
  display: flex;
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
    width: 80%;
    height: 60%;
    background: #e8ecf0;
    border-radius: 50px;
    margin-top: 10px;
    position: relative;
    .iconfont {
      width: 8%;
      color: #b5bec5;
      font-size: 25px;
      padding-left: 3%;
      position: absolute;
      top: 7px;
    }
    input {
      width: 85%;
      height: 100%;
      border-radius: 50px;
      border: none;
      background: #e8ecf0;
      font-size: 20px;
      position: absolute;
      right: 0;
      padding-left: 3px;
    }
  }
  .muen {
    width: 10%;
    text-align: center;
    .iconfont {
      font-size: 30px;
      color: #000;
      line-height: 60px;
    }
  }
}
input::-webkit-input-placeholder {
  color: #c4bfbf;
  font-size: 18px;
}
input:-moz-placeholder {
  color: #c4bfbf;
}
input::-moz-placeholder {
  color: #c4bfbf;
}
input:-ms-input-placeholder {
  color: #c4bfbf;
}
</style>
