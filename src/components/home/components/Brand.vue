<template>
 <div class="brand">
   <swiper class="swiper" :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide class="swipers" v-for="(slide,index) in brand.slides" :key="index">
          <ul class="slide">
            <li v-for="(b, i) in slide.item" :key="i">
              <router-link tag="a" to="/home1">
                <img :src="b.img" alt="">
              </router-link>
              <p>{{b.text}}</p>
            </li>
          </ul>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
 </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'Brand',
  props: ['brand'],
  data () {
    return {
      swiperOption: {
        // autoplay: 5000,
        loop: true,
        pagination: '.swiper-pagination',
        cancelable: 'true'
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toHome1 () {
      this.$router.push({ path: '/home1' })
    }
  }
}
</script>

<style lang="less" scoped>
.brand{
  // border-radius: 10px 10px 0 0;
  background: #fff;
  .swiper{
    .swiper-wrapper .swipers{
      padding-bottom: 20px;
    }
    .swiper-pagination-bullets{
      bottom: 0;
    }
    .src{
    width: 100%;
  }
  .slide{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    li{
      width: calc(100% / 5);
      text-align: center;
      margin-top: 5px;
      img{
        width: 65%;
      }
      p{
        margin-top: 5px;
      }
    }
  }
  }
}

</style>
