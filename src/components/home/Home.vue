<template>
  <div class="home">
    <!-- 头部 -->
    <home-top ref="top"></home-top>
    <!-- 轮播 -->
    <carousel :slidesImg="slides"></carousel>
    <!-- 轮播下的广告图 -->
    <img
      class="advimg"
      src="https://m.360buyimg.com/mobilecms/jfs/t1/38596/26/12202/275725/5d35de97E281b1a88/81b1a8e2d53d0ea0.gif"
      alt
    />
    <!-- 手动轮播  -->
    <brand :brand="brand"></brand>
    <!-- 倒计时 -->
    <spike :spike="spike"></spike>
    <!-- 新人专享 -->
    <new :news="news"></new>
    <!-- 某东小院 -->
    <courtyard :courtyard="courtyard"></courtyard>
    <!-- 某东每日购 -->
    <everyday :everyday="everyday"></everyday>
    <!-- 某东每日购 -->
    <recommend :recommend="recommend"></recommend>
  </div>
</template>

<script>
import { getSlides, getBrand, getSpike, newPeople, courtyard, everyday, recommend } from '@/api/index'
import HomeTop from '@/components/home/components/HomeTop'
import Carousel from '@/components/home/components/Carousel'
import Brand from '@/components/home/components/Brand'
import Spike from '@/components/home/components/spikes/Spike'
import New from '@/components/home/components/New'
import Courtyard from '@/components/home/components/Courtyard'
import Everyday from '@/components/home/components/Everyday'
import Recommend from '@/components/home/components/Recommend'
export default {
  name: 'Home',
  components: {
    HomeTop,
    Carousel,
    Brand,
    Spike,
    New,
    Courtyard,
    Everyday,
    Recommend
  },
  data () {
    return {
      slides: [],
      brand: {},
      spike: {},
      news: [],
      courtyard: {},
      everyday: {},
      recommend: {}
    }
  },
  created () {
    // 轮播1数据
    getSlides().then(({ data }) => {
      this.slides = data.slides
    })
    // 分类
    getBrand().then(({ data }) => {
      this.brand = data.data
    })
    // 倒计时
    getSpike().then(({ data }) => {
      this.spike = data
    })
    // 新人福利
    newPeople().then(({ data }) => {
      this.news = data.imgs
    })
    // 某东小院
    courtyard().then(({ data }) => {
      this.courtyard = data
    })
    // 某东每日购
    everyday().then(({ data }) => {
      this.everyday = data
    })
    // 某东每日购
    recommend().then(({ data }) => {
      this.recommend = data
    })
  },
  methods: {
    // 页面防抖
    debounce (func, wait) {
      let timeout
      return function () {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        timeout = setTimeout(() => {
          func.apply(context, args)
        }, wait)
      }
    },
    handleScroll () {
      if (!this.$refs.top) {
        return
      }
      var scrollTop = document.documentElement.scrollTop ||
        window.pageYOffset ||
        document.body.scrollTop
      if (scrollTop > 60) {
        this.$refs.top.showRed()
      } else if (scrollTop <= 60) {
        this.$refs.top.notShowRed()
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.debounce(this.handleScroll, 30), true) || window.addEventListener('DOMMouseScroll', this.debounce(this.handleScroll, 300), false)
  }
}
</script>

 <style lang="less" scoped>
.home {
  background: #f6f6f6;
  margin-bottom: 60px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
  .advimg {
    width: 100%;
  }
}
.home::-webkit-scrollbar {
  display: none;
}
</style>
