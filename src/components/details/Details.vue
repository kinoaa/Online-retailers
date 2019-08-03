<template>
  <div class="details">
    <rotary :rotary="rotary"></rotary>
    <discuss :discuss="discuss"></discuss>
    <arrival :arrival="arrival"></arrival>
    <div class="tiao"></div>
    <pic :pic="pic"></pic>
  </div>
</template>

<script>
import { getRotary, getDiscuss, getArrival, getPic } from '@/api/index.js'

import Rotary from '@/components/details/components/Rotary'
import Discuss from '@/components/details/components/Discuss'
import Arrival from '@/components/details/components/Arrival'
import Pic from '@/components/details/components/Pic'
export default {
  name: 'Details',
  components: {
    Rotary,
    Discuss,
    Arrival,
    Pic
  },
  data () {
    return {
      rotary: [],
      discuss: {},
      arrival: {},
      pic: []
    }
  },
  created () {
    getRotary().then(({ data }) => {
      this.rotary = data.data
      // console.log(this.rotary)
    })
    getDiscuss().then(({ data }) => {
      this.discuss = data.data
      // console.log(this.discuss)
    })
    getArrival().then(({ data }) => {
      this.arrival = data.data
      // console.log(this.arrival)
    })
    getPic().then(({ data }) => {
      this.pic = data.data
    })
  }
}
</script>

<style lang="less" scoped>
.details {
  margin-bottom: 400/2px;
  .tiao {
    width: 100%;
    height: 20/2px;
    background: #e8e8ed;
  }
}
</style>
