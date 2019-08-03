<template>
  <div class="recommend">
    <div>
      <img class="img" :src="recommends.title" />
    </div>
    <div class="list">
      <ul ref="myul">
        <li v-for="(l, i) in recommends.data" :key="i" @click="getId(l.id)" :class="{act:num==i+1}">
          <span class="text">{{l.text}}</span>
          <span :class="{act:num==i+1}"></span>
        </li>
      </ul>
    </div>
    <vuer :books="books"></vuer>
  </div>
</template>

<script>
import { getVuer } from '@/api/index'
import vuer from '@/components/home1/components/components/vuer'
export default {
  name: 'recommend',
  props: ['recommends'],
  data () {
    return {
      books: {},
      vuer: {},
      num: 1
    }
  },
  components: {
    vuer
  },
  methods: {
    getId (id) {
      getVuer().then(({ data }) => {
        // console.log(data.result);
        var arr = data.result.filter(a => {
          return a.cid === id
        })
        this.books = arr[0].data
      })
      this.num = id
    }
  },
  created () {
    getVuer().then(({ data }) => {
      console.log(data.result[0])
      this.books = data.result[0].data
    })
  }
}
</script>

<style scoped lang="less">
.recommend {
  background: white;
  overflow-x: hidden;
}
.recommend .img {
  width: 100%;
}
.list {
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;
  }
  ul {
    height: 60px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.03);
    white-space: nowrap;
    overflow-x: auto;
    li {
      width: 111px;
      height: 59px;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 20px;
      .text {
        width: 78px;
        height: 55px;
        display: inline-block;
        line-height: 55px;
        margin: 0 17px;
        text-align: center;
        color: #555;
        font-size: 20px;
      }
      .act {
        margin: 0 17px;
        width: 78px;
        height: 4px;
        background-color: #fa610f;
        border-radius: 2px;
        display: block;
      }
    }
  }
}
</style>
