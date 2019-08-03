<template>
    <div class="home-top" :class="{active:isRed}">
        <div class="logo">
            <i class="iconfont">&#xe607;</i>
        </div>
        <div class="inp" @click="toSearch">
            <i class="iconfont logo">&#xe628;</i>
            <i class="iconfont finds">&#xe660;</i>
            <input type="text" placeholder="心灵旅行日">
        </div>
        <div class="muen" @click="toLogoin">
            <i class="iconfont">登录</i>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeTop',
  data () {
    return {
      imgHeight: 2,
      isRed: false
    }
  },
  methods: {
    showRed () {
      this.isRed = true
    },
    notShowRed () {
      this.isRed = false
    },
    toLogoin () {
      this.$router.push({ path: '/logoin' })
    },
    toSearch () {
      this.$router.push({ path: '/search' })
    }
  }
}
</script>

<style lang="less" scoped>
.active{
    background: #e3302f !important;
}
.home-top {
    position: fixed;
    top: 0;
    z-index: 99;
    width: 100%;
    height: 60px;
    display: flex;
    // background: #e3302f;
    background: rgba(247, 238, 238, 0.05);
    .logo{
        width: 10%;
        text-align: center;
        .iconfont {
            font-size: 30px;
            line-height: 60px;
            color: #fff;
        }
    }
    .inp {
    width: 80%;
    height: 60%;
    background: #fff;
    border-radius: 50px;
    margin-top: 10px;
    position: relative;
        .iconfont{
            width: 8%;
            color: #b5bec5;
            font-size: 25px;
            padding-left: 5%;
            position: absolute;
            top: 7px;
        }
        .logo{
            color: #e3302f;
            border-right:solid #c4bfbf 1px;
            padding-right:3%;
        }
        .finds{
            padding-left: 18%;
            font-size: 20px;
            top: 9px;
        }
        input{
        width: 75%;
        height: 100%;
        border-radius: 50px;
        border: none;
        background: #fff;
        font-size: 18px;
        position: absolute;
        right: 0;
        padding-left: 3px;
        }
    }
    .muen{
        width: 10%;
        text-align: center;
        .iconfont{
            font-size: 15px;
            color: #fff;
            line-height: 60px;
        }
    }
}
input::-webkit-input-placeholder{
    color: #232326;
    font-size: 15px;
    padding-left: 5%;
}
input:-moz-placeholder{
    color: #c4bfbf;
}
input::-moz-placeholder{
    color: #c4bfbf;
}
input:-ms-input-placeholder{
    color: #c4bfbf;
}
</style>
