<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(img,index) in rotary" :key="index">
      <img class="pic" :src="img" />
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Rotary',
  props: ['rotary'],
  data () {
    return {
      swiperOption: {
        autoplay: 2000,
        loop: true,
        pagination: '.swiper-pagination',
        cancelable: 'true'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  }
}
</script>

<style lang="less" scoped>
.pic {
  width: 100%;
}
.swiper-slide
  /deep/.swiper-slide-duplicate
  .swiper-slide-active
  .swiper-slide-duplicate-next {
  color: #fff;
}
</style>
