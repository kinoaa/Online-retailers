<template>
  <div class="app">
    <div class="box" v-for="(item, index) in gengduo.datas" :key="index">
      <div class="left">
        <!-- {{i.leftData}} -->
        <h3>{{item.text1}}</h3>
        <a href="#">{{item.text2}}</a>
      </div>
      <div class="right">
        <div>
          <p>{{item.text3}}</p>
          <span>{{item.text4}}</span>
          <ul>
            <li>
              <img :src="item.img[0]" />
              <img :src="item.img[1]" />
              <img :src="item.img[2]" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getGengduo } from '@/api/index'
export default {
  data () {
    return {
      name: 'salcashchoahosc',
      gengduo: []
    }
  },
  created () {
    getGengduo().then(({ data }) => {
      this.gengduo = data.data
      // console.log(data.data[0].leftData)
    })
  }
}
</script>

<style scoped>
.app {
  background: powderblue;
  padding-top: 0.3rem;
}
.box {
  display: flex;
  width: 94%;
  margin-left: 3%;
}
.box .left {
  width: 25%;
  background: blue;
  height: 100%;
  text-align: center;
  padding-top: 0.4rem;
}
.box .left h3 {
  font-size: 0.4rem;
}
.box .left a {
  display: inline-block;
  width: 94%;
  height: 0.5rem;
  border-radius: 0.5rem;
  background: wheat;
  margin-top: 0.3rem;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.4rem;
}
.box .right {
  width: 80%;
  height: 100%;
  background: wheat;
  text-align: center;
}
.box .right p {
  margin-top: 0.4rem;
  margin-bottom: 0.3rem;
}
.box .right span {
  font-size: 0.24rem;
}
.box .right ul {
  display: flex;
  width: 100%;
  background: yellow;
}
.box .right ul li img {
  width: 32%;
}
</style>
