<template>
  <div class="cart">
    <cart-top></cart-top>
    <cart-cen :cartcen="cartcen"></cart-cen>
  </div>
</template>
<script>
import { getcartCen } from '@/api/index.js'
import cartTop from '@/components/myCart/components/cartTop'
import cartCen from '@/components/myCart/components/cartCen'
export default {
  name: 'MyCart',
  data () {
    return {
      cartcen: []
    }
  },
  components: {
    cartTop,
    cartCen
  },
  created () {
    getcartCen().then(({ data }) => {
      this.cartcen = data.data
      console.log(this.cartcen)
    })
  },
  mounted () {
    this.$store.commit('hideNav')
  },
  destroyed () {
    this.$store.commit('showNav')
  }
}
</script>
