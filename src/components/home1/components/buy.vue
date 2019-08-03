<template>
  <div class="buy">
    <p>
      <img class="img" :src="spike.title" />
    </p>
    <div class="time">
      <div class="times">08:00</div>
      <div class="times">12:00</div>
      <div class="times">16:00</div>
      <div class="times">20:00</div>
    </div>
    <div class="list">
      <ul ref="myul">
        <li v-for="(l, i) in spike.data" :key="i">
          <img :src="l.pic" alt />
          <span class="text">{{l.text}}</span>
          <span class="oldprice">&yen;{{l.oldprice}}</span>
          <span class="price">&yen;{{l.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'buy',
  props: ['spike'],
  watch: {
    spike (to, from) {
      this.$refs.myul.style.width = to.data.length * (180 + 10) + 'px'
      // this.tmp(to.time)
      // this.time.t = setInterval(() => {
      //   this.tmp(to.time)
      // }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.buy {
  background: white;
  margin-bottom: 10px;
  overflow-x: hidden;
}
.buy .img {
  width: 100%;
}
.buy .time {
  width: 100%;
  height: 47px;
  overflow: hidden;
}
.buy .time .times {
  float: left;
  width: calc(90% / 4);
  height: 30px;
  line-height: 30px;
  background-size: 22.1333px 61.333px;
  border-radius: 30.667px;
  font-size: 20px;
  color: #505050;
  text-align: center;
  background-color: #f6f6f6;
  margin-top: 8px;
  margin-left: 2%;
}
.buy {
  .list {
    width: 100%;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      background: transparent;
    }
    li {
      width: 170px;
      height: 249px;
      margin: 0 8px 5px;
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
        -webkit-line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #505050;
        font-size: 17px;
      }
      .price {
        display: block;
        font-size: 25px;
        font-weight: bold;
      }
      .oldprice {
        display: block;
        text-decoration: line-through;
        color: #838383;
        font-size: 17px;
      }
    }
  }
}
</style>
