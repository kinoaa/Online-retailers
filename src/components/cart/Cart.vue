<template>
  <div class="cart">
    <div class="shop">
      <cart-top></cart-top>
      <cart-conent></cart-conent>
      <spike :spike="spike"></spike>
      <recommend :recommend="recommend"></recommend>
    </div>
  </div>
</template>

<script>
import { getSpike, recommend } from '@/api/index.js'
import CartTop from '@/components/Cart/components/CartTop'
import CartConent from '@/components/Cart/components/CartConent'
import Spike from '@/components/Cart/components/Spike'
import Recommend from '@/components/Cart/components/Recommend'
export default {
  name: 'Cart',
  data () {
    return {
      spike: {},
      recommend: {}
    }
  },
  components: {
    CartTop,
    CartConent,
    Spike,
    Recommend
  },
  created () {
    getSpike().then(({ data }) => {
      this.spike = data
    })
    recommend().then(({ data }) => {
      this.recommend = data
    })
  }
}
</script>

<style lang="less" scoped>
.cart{
  margin-bottom: 60px;
}
</style>
