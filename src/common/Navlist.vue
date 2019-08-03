<template>
<transition name="fade">
<div v-show="isShow">
  <ul class="navlist">
    <router-link tag="li" to="/">
    <i class="iconfont">&#xe601;</i>
    <p>Home</p>
    </router-link>
    <router-link tag="li" to="/category">
    <i class="iconfont">&#xe600;</i>
    <p>Category</p>
    </router-link>
    <router-link tag="li" to="/buy">
    <i class="iconfont">&#xe71d;</i>
    <p>Buy</p>
    </router-link>
    <router-link tag="li" to="/cart">
    <i class="iconfont">&#xe602;</i>
    <p>Cart</p>
    </router-link>
    <router-link tag="li" to="/my">
    <i class="iconfont">&#xe60a;</i>
   <p>My</p>
    </router-link>
  </ul>
  </div>
  </transition>
</template>
<script>
export default {
  name: 'Navlist',
  computed: {
    isShow () {
      return this.$store.state.isShowNav
    }
  }

}
</script>
<style lang="less">
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.navlist {
  z-index: 999;
  width: 100%;
  list-style: none;
  height: 60px;
  border-top: 1px solid #ddd;
  position: fixed;
  bottom: 0;
  display: flex;
  background: #fff;
  .iconfont{
    font-size: 30px;
  }
  li {
    margin-top: 9px;
    display: flex;
    flex: 1;
    flex-direction: column;
    text-align: center;
    &.router-link-exact-active.router-link-active{
      color: red;
    }
  }
}
</style>
