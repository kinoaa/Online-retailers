<template>
  <div class="seckill">
    <div>
      <!-- 头部 -->
      <seckill-top></seckill-top>
      <!-- 抢购导航 -->
      <seckill-nav :seckillnavs="seckillnav"></seckill-nav>
      <!-- 商品列表 -->
      <seckill-shopp :seckillshopps="seckillshopp"></seckill-shopp>
    </div>
  </div>
</template>
<script>
import { getSeckillnav, getSeckillshopp } from '@/api/index'
import seckillNav from '@/components/home/components/spikes/spikechildren/seckillchildren/seckillnav'
import seckillShopp from '@/components/home/components/spikes/spikechildren/seckillchildren/seckillShopp'
import seckillTop from '@/components/home/components/spikes/spikechildren/seckillchildren/seckillTop'
export default {
  data () {
    return {
      seckillnav: [],
      seckillshopp: []
    }
  },
  created () {
    getSeckillnav().then(({ data }) => {
      this.seckillnav = data.data
    })
    getSeckillshopp().then(({ data }) => {
      this.seckillshopp = data.data
    })
  },
  components: {
    seckillNav,
    seckillShopp,
    seckillTop
  }

}
</script>
<style scoped>
.seckill{
  margin-bottom: 65px;
}
</style>
