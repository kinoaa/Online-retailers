<template>
  <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="(slide,index) in slidesImg" :key="index">
          <img class="pic" :src="slide" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Carousel',
  props: ['slidesImg'],
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

<style scoped>
.pic{
    width: 100%;
}
.swiper-slide /deep/.swiper-slide-duplicate .swiper-slide-active
.swiper-slide-duplicate-next{
  color: #fff;
}
</style>
