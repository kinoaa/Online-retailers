<template>
  <div class="vuer">
    <ul>
      <li v-for="(l, i) in books" :key="i">
        <img class="pic" :src="l.img" />
        <span class="text">{{l.text}}</span>
        <span class="price">{{l.price}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import { getVuer } from '@/api/index'
export default {
  name: 'vuer',
  props: ['books'],
  data () {
    return {
      vuer: {}
    }
  },
  created () {
    getVuer().then(({ data }) => {
      this.vuer = data
      console.log(this.vuer)
    })
  }
}
</script>

<style>
.vuer ul {
  width: 100%;
}
.vuer ul li {
  display: flex;
  width: calc(100% / 3);
  display: inline-block;
  box-sizing: border-box;
  margin-bottom: 15px;
  position: relative;
  padding: 12px 6px 0;
}
.vuer ul li img {
  width: 100%;
}
.vuer ul li .text {
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  overflow: hidden;
  line-height: 17px;
  font-size: 16.5px;
  margin-bottom: 20px;
}
.vuer ul li .price {
  font-size: 25px;
}
</style>
