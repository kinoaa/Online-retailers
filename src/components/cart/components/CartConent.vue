<template>
  <div class="cartconent">
    <div class="register">
      <img
        src="http://img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png"
        alt
      />
      <p>登录后可同步购物车中商品</p>
      <router-link tag="a" to="/logoin">登录</router-link>
    </div>
    <div class="receive">
      <div class="left">
        <i></i>
        <p>新用户福利 ▪ 专属优惠礼包</p>
        <i></i>
      </div>
      <div class="right">一键领取</div>
    </div>
    <div class="more">
      <li>
        <a>东券</a>
        <p>
          <span>￥9</span>
          全品可用
        </p>
        <div class="over">满150可用</div>
      </li>
      <li>
        <a>东券</a>
        <p>
          <span>￥6</span>
          全品可用
        </p>
        <div class="over">满120可用</div>
      </li>
      <li>
        <a>运费</a>
        <p>
          <span class="span">￥8</span>
          运费券
        </p>
        <div class="over1">满0可用</div>
      </li>
    </div>
    <div class="line">
      <div class="left"></div>
      <div class="center">京东秒杀</div>
      <div class="right"></div>
      <a></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartConent'
}
</script>
<style lang="less" scoped>
.register {
  background: #f8f8f8;
  padding-top: 90px;
  padding-bottom: 20px;
  text-align: center;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    font-size: 16px;
    font-weight: normal;
    margin-top: 10px;
  }
  a {
    display: inline-block;
    color: red;
    width: 65px;
    height: 30px;
    border: 1px solid red;
    border-radius: 5px;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    margin-top: 10px;
  }
}
.receive {
  padding-bottom: 35px;
  padding-top: 20px;
  .left {
    float: left;
    margin-left: 10px;
    p {
      font-size: 16px;
    }
  }
  .right {
    width: 90px;
    height: 32px;
    background: linear-gradient(to right, #fd8e6f, #ea3f3f);
    float: right;
    margin-top: -8px;
    margin-right: 10px;
    border-radius: 40px;
    line-height: 32px;
    text-align: center;
    color: white;
  }
}
.more {
  border-top: 1px solid #ccc;
  padding: 5px 3px;
  li {
    width: 32%;
    float: left;
    position: relative;
    padding-bottom: 20px;
    overflow: hidden;
    list-style: none;
    margin-left: 3px;
    a {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border-radius: 50%;
      border: 2px solid #eee;
      position: absolute;
      top: -13px;
      color: #ccc;
    }
    p {
      margin-top: 10px;
      z-index: 999;
      span {
        color: #6acfd1;
        font-size: 20px;
      }
      .span {
        color: #74a1cb;
        font-size: 20px;
      }
    }
    .over .over1 {
      width: 100%;
      background: #6acfd1;
    }
    .over {
      background: #6acfd1;
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      border-radius: 3px;
      color: white;
    }
    .over1 {
      background: #74a1cb;
      height: 20px;
      line-height: 20px;
      margin-top: 5px;
      border-radius: 3px;
      color: white;
    }
  }
}
.line {
  width: 100%;
  height: 10px;
  line-height: 20px;
  margin-top: 80px;
  margin-bottom: 10px;
  text-align: center;
  .center {
    width: 15%;
    height: 30px;
    float: left;
    margin-top: -10px;
    text-align: center;
    color: #666;
    font-size: 10px;
  }
  .left {
    float: left;
    width: 40%;
    height: 1px;
    background: #ccc;
    position: relative;
    margin-right: 15px;
  }
  .left::after {
    content: "";
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #ccc;
    border-radius: 50%;
    top: -2px;
    left: 100%;
  }
  .right::before {
    content: "";
    position: absolute;
    display: inline-block;
    width: 5px;
    height: 5px;
    background: #ccc;
    border-radius: 50%;
    top: -2px;
    left: 0%;
  }
  .right {
    float: right;
    width: 40%;
    height: 1px;
    background: #ccc;
    position: relative;
  }
}
</style>
