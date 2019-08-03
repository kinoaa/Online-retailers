<template>
  <div class="spike">
    <router-link tag="p" to="/seckill">
      <img class="src" :src="spike.title" />
      <div class="time">
        <p>
          <span class="col">{{time.h}}</span>
          <span>时</span>
          <span class="col">{{time.m}}</span>
          <span>分</span>
          <span class="col active">{{time.s}}</span>
          <span>秒</span>
        </p>
      </div>
      <div class="list">
        <ul ref="myul">
          <li v-for="(l, i) in spike.data" :key="i">
            <img :src="l.pic" alt />
            <span class="price">{{l.price}}</span>
            <span class="oldprice">{{l.oldprice}}</span>
          </li>
        </ul>
      </div>
    </router-link>
  </div>
</template>

<script>
import countDown from '@/util/countDown'
export default {
  name: 'Spike',
  props: ['spike'],
  data () {
    return {
      time: {
        h: '',
        m: '',
        s: '',
        t: {}
      }
    }
  },
  methods: {
    tmp (end) {
      var s = countDown(end)
      if (s === 'over') { // 秒杀结束
        clearInterval(this.time.t)
      } else {
        var arr = s.split(',')
        this.time.h = arr[0]
        this.time.m = arr[1]
        this.time.s = arr[2]
      }
    }
  },
  watch: {
    spike (to, from) {
      this.$refs.myul.style.width = to.data.length * (100 + 10) + 'px'
      this.tmp(to.time)
      this.time.t = setInterval(() => {
        this.tmp(to.time)
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.spike {
  background: #fff;
  margin: 10px 10px 0 10px;
  .src {
    width: 100%;
  }
  .time {
    height: 50px;
    text-align: center;
    p {
      font-size: 15px;
      span {
        display: inline-block;
        line-height: 30px;
        vertical-align: middle;
      }
      .col {
        color: #fff;
        display: inline-block;
        width: 20px;
        height: 30px;
        background: #323232;
        border-radius: 5px;
        margin-left: 5px;
      }
      .active {
        background: #f3344a;
      }
    }
  }
  .list {
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      background: transparent;
    }
    li {
      width: 100px;
      display: inline-block;
      margin-left: 10px;
      img {
        width: 100%;
      }
      span {
        margin-top: 5px;
      }
      .text {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #323232;
      }
      .price {
        display: block;
        color: red;
        font-size: 18px;
        font-weight: bold;
      }
      .oldprice {
        display: block;
        text-decoration: line-through;
        color: #bababa;
        margin-bottom: 7px;
      }
    }
  }
}
</style>
