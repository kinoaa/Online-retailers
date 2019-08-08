<template>
  <div id="app">
    <router-view/>
    <!-- 底部导航组件 -->
    <Navlist></Navlist>
  </div>
</template>

<script>
import Navlist from '@/common/Navlist'
export default {
  name: 'App',
  components: {
    Navlist
  },
  updated () {
    window.scroll(0, 0)
  }
}
</script>

<style>

</style>
