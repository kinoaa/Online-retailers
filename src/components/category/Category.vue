<template>
  <div class="category">
    <category-top></category-top>
    <div class="box">
      <div class="left" ref="left">
        <ul ref="leftul">
          <li
            @click="getRightData(d.id)"
            v-for="(d, i) in leftData"
            :key="i"
            :class="{leftactive:left==i+1}"
          >{{d.title}}</li>
        </ul>
      </div>
      <div class="right" ref="right">
        <ul ref="rightul">
          <li v-for="(d, i) in getrightDatas" :key="i">
            <router-link tag="a" to="/CategoryContnet">
              <img :src="d.title" alt />
              <br />
              <p>{{d.text}}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from '@better-scroll/core'
import { getCategory } from '@/api/index'
import CategoryTop from '@/components/category/components/CategoryTop'
export default {
  name: 'Category',
  data () {
    return {
      left: 1,
      leftData: [],
      rightDatas: {},
      getrightDatas: {},
      rightData: []
    }
  },
  created () {
    getCategory().then(({ data }) => {
      this.leftData = data.data.leftData
      this.rightDatas = data.data.rightData
      // console.log(this.rightDatas)
      this.getRightData(1)
    })
  },
  mounted () {
    // 设置两边滚动盒子的外容器的高度
    var h = window.screen.availHeight - 60 - 60 + 'px'
    this.$refs.left.style.height = h
    this.$refs.right.style.height = h
    // 初始化数据id为1的数据
    // this.getRightData(1)
    // 页面加载后执行
    this.$nextTick(() => {
      /* eslint-disable */
      new BScroll('.left', { click: true })
      new BScroll('.right')
    })

  },
  methods: {
    getRightData(id) {
      this.rightData = this.rightDatas.filter(e => {
        return e.id === id
      })[0].data
      this.getrightDatas = this.rightData
      // console.log(this.rightData)
      this.left = id
    }
  },
  watch: {
    leftData(to, from) {
      // console.log(to)
      var hul = to.length * 40 + 'px'
      this.$refs.leftul.style.height = hul
      /* eslint-disable */
      new BScroll('.left', { click: true })
    },
    rightData(to, from) {
      // console.log(to)
      var hul2 = to.length * 50 + 'px'
      this.$refs.rightul.style.height = hul2
      /* eslint-disable */
      new BScroll('.right', { click: true })
    }
  },
  components: {
    CategoryTop
  }
}
</script>
<style lang="less" scoped>
.category {
  background: #eee;
}
.box {
  display: flex;
}
.box .left {
  width: 100px;
  overflow: hidden;
  ul {
    background: #fff;
    li {
      height: 40px;
      line-height: 40px;
      text-align: center;
    }
  }
}
.leftactive {
  color: red;
  background: #eee;
}
.box .right {
  flex: 1;
  overflow: hidden;
  margin-left: 10px;
  ul {
    background: #fff;
    display: flex;
    flex-wrap: wrap;
    li {
      display: inline-block;
      width: calc(100% / 3);
      text-align: center;
      margin-top: 10px;
      img {
        width: 100%;
      }
      p {
        font-size: 15px;
        margin-top: 10px;
      }
    }
  }
}
</style>
