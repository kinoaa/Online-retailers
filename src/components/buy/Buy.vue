<template>
  <div class="seckill">
    <buy-top></buy-top>
    <Worth :worthten="worthten"></Worth>
    <promotion :promotion="promotion"></promotion>
    <ranking :ranking="ranking"></ranking>
  </div>
</template>

<script>
import { getSlidesBuy, getPromotion, getRanking } from '@/api/index.js'
import BuyTop from '@/components/Buy/components/BuyTop'
import Worth from '@/components/Buy/components/Worth'
import Promotion from '@/components/Buy/components/promo/Promotion'
import Ranking from '@/components/Buy/components/Ranking'
export default {
  name: 'Buy',
  data () {
    return {
      worthten: [],
      promotion: {},
      ranking: {}
    }
  },
  components: {
    Worth,
    Promotion,
    Ranking,
    BuyTop
  },
  created () {
    getSlidesBuy().then(({ data }) => {
      this.worthten = data.data
    })
    getPromotion().then(({ data }) => {
      this.promotion = data.data
    })
    getRanking().then(({ data }) => {
      this.ranking = data.data
    })
  }
}
</script>

<style lang="less" scoped>
.seckill {
  margin-bottom: 50px;
}
</style>
