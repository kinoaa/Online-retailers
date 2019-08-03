<template>
  <div class="signCen">
    <div class="top">
      <div class="inp1">
        <input type="text" placeholder="用户名/邮箱/已验证手机" id="user" ref="inp" v-model="inpval" @click="get()"/>
      </div>
      <div class="inp2">
        <input type="password" placeholder="请输入密码" id="pass"  ref="pass" v-model="passval" @click="get()"/>
        <button class="but">忘记密码</button>
      </div>
      <div class="kong"></div>
      <a href="#" class="btn" ref="logo">登 录</a>
      <div class="ce">
        <a href="#" class="left">
          <span>短信验证码登录</span>
        </a>
        <a href="#" class="right">
          <span>手机快速注册</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signCen',
  data () {
    return {
      inpval: '',
      passval: ''
    }
  },
  methods: {
    get () {
      if (this.inpval !== '') {
        this.$refs.logo.style.background = 'red'
      } else {
        this.$refs.logo.style.background = '#f23030'
      }
    }
  }
}
</script>

<style scoped>
.signCen {
  background: #fff;
  padding: 0 25px 25px;
}
.top .inp1 {
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  background: #fff;
  border-bottom: 1px solid #efefef;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.top .inp1 #user {
  width: 100%;
  padding: 0 30px 0 0;
  font-size: 18px;
}
.top .inp2 {
  height: 50px;
  padding-top: 10px;
  padding-bottom: 10px;
  position: relative;
  overflow: hidden;
  margin-top: 20px;
  background: #fff;
  border-bottom: 1px solid #efefef;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.top .inp2 #pass {
  width: 100%;
  padding: 0 150px 0 0;
  font-size: 18px;
}
.top .inp2 .but {
  position: absolute;
  height: 23px;
  line-height: 23px;
  right: 0;
  top: 12.5px;
  background-color: #fff;
  color: #222;
  font-size: 14px;
  border: 0;
  outline: 0;
  border-radius: 2px;
  text-align: center;
  padding-left: 16px;
  border-left: 1px solid #ccc;
  -webkit-box-shadow: none;
  box-shadow: none;
}
.top .kong {
  font-size: 14px;
  line-height: 30px;
  color: #f23030;
  min-height: 25px;
  text-align: left;
}
.top .btn {
  box-shadow: none;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: block;
  background-color: #efefef;
  border-radius: 25px;
  font-size: 16px;
  color: #fff;
  background-image: linear-gradient(90deg, #fab3b3, #ffbcb3 73%, #ffcaba);
  text-align: center;
  font-family: PingFangSC-Semibold;
}
.top .ce {
  margin-top: 20px;
  text-align: center;
  position: relative;
}
.top .ce .left {
  color: #999;
  line-height: 22px;
  font-family: PingFang-SC-Regular;
  position: absolute;
  left: 0;
}
.top .ce .right {
  color: #999;
  line-height: 22px;
  font-family: PingFang-SC-Regular;
  position: absolute;
  right: 0;
}
</style>
