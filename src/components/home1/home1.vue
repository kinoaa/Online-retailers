<template>
  <div class="home1">
    <homeTop></homeTop>
    <search></search>
    <carousel :slidesImg="slides"></carousel>
    <img
      class="advimg"
      src="https://m.360buyimg.com/mobilecms/jfs/t1/57978/17/5846/82244/5d387db1E1fa4f4cc/a8f3d9eca5587cc3.gif!q70.webp"
      alt
    />
    <brand :brand="brand"></brand>
    <img
      class="advimg advimg1"
      src="https://m.360buyimg.com/babel/jfs/t1/63251/14/5142/128329/5d3443d5Ef8762e87/aeb5f07cf64dd4a5.gif!q70.webp"
      alt
    />
    <buy :spike="spike"></buy>
    <sale :sale="sale"></sale>
    <img
      class="advimg advimg1"
      src="https://m.360buyimg.com/babel/jfs/t1/35800/21/13427/199949/5d388e09E9f64c6d1/b16b2739e7af827f.gif!q70.webp"
      alt
    />
    <value :value="value"></value>
    <recommend :recommends="recommends"></recommend>
  </div>
</template>

<script>
import { getSlides, getBrand1, getSpike1, getBrand2, getValue, getRecommend } from '@/api/index'
import homeTop from '@/components/home1/components/homeTop'
import search from '@/components/home1/components/search'
import carousel from '@/components/home1/components/carousel'
import brand from '@/components/home1/components/Brand'
import buy from '@/components/home1/components/buy'
import sale from '@/components/home1/components/sale'
import value from '@/components/home1/components/value'
import recommend from '@/components/home1/components/recommend'
export default {
  name: 'home1',
  components: {
    homeTop,
    search,
    carousel,
    brand,
    buy,
    sale,
    value,
    recommend
  },
  data () {
    return {
      slides: [],
      brand: {},
      spike: {},
      sale: {},
      value: {},
      recommends: {}
    }
  },
  created () {
    getSlides().then(({ data }) => {
      this.slides = data.slides
    })
    getBrand1().then(({ data }) => {
      this.brand = data.data
    })
    getSpike1().then(({ data }) => {
      this.spike = data
    })
    getBrand2().then(({ data }) => {
      this.sale = data
    })
    getValue().then(({ data }) => {
      this.value = data
    })
    getRecommend().then(({ data }) => {
      this.recommends = data
    })
  }
}
</script>

<style>
.home1 {
  background: #f6f6f6;
  /* background: red; */
  margin-bottom: 61px;
  overflow-x: hidden;
}
.home1 .advimg {
  width: 100%;
}
.home1 .advimg1 {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
