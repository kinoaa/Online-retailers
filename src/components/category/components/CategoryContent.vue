<template>
  <div>
    <category></category>
    <catekind></catekind>
    <div class="heng">
      <ul ref="myheng">
        <li v-for="(a,i) in conspan" :key="i">
          <span>{{a.text}}</span>
        </li>
      </ul>
    </div>
    <div class="content">
      <ul v-for="(c,i) in content" :key="i">
        <li class="left">
          <img :src="c.img1" alt />
        </li>
        <li class="right">
          <span class="text1">{{c.text1}}</span>
          <span class="text2">{{c.text2}}</span>
          <br />
          <img :src="c.img2" alt class="img2" />
          <br />
          <span class="text3">{{c.text3}}</span>
          <br />
          <img :src="c.img3" class="img3" />
          <span class="text5">{{c.text5}}</span>
          <span class="text6">{{c.text6}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Category from '@/components/category/components/CategoryTop'
import Catekind from '@/components/category/components/Catekind'
import { getCategorycontent, getcontent } from '@/api/index'
export default {
  name: 'CategoryContnet',
  data () {
    return {
      conspan: [],
      content: []
    }
  },

  components: {
    Category,
    Catekind
  },
  created () {
    getCategorycontent().then(({ data }) => {
      this.conspan = data.data
    })
    getcontent().then(({ data }) => {
      this.content = data.data
      // console.log(this.content[0].img1)
    })
  },
  watch: {
    conspan (to, from) {
      this.$refs.myheng.style.width = to.length * 100 + 'px'
      // console.log(to.length)
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.$store.commit('hideNav')
  },
  destroyed () {
    this.$store.commit('showNav')
  },
  methods: {
    handleScroll () {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      // console.log(scrollTop)
      if (scrollTop >= 100 && scrollTop <= 150) {
        document.querySelector('.heng').style.position = 'fixed'
        document.querySelector('.heng').style.top = 0
      } else if (scrollTop === 0) {
        document.querySelector('.heng').style.position = ''
      }
    }

  }
}
</script>
<style lang='less'>
.heng {
  background: white;
  z-index: 10;
  width: 100%;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    width: 0.1rem;
    height: 0.2rem;
    background: rgba(134, 134, 134, 0.5);
  }
  ul {
    display: flex;
    width: 100%;
    span {
      display: inline-block;
      width: 1.5rem;
      height: 0.5rem;
      background: #e7e5e5;
      font-size: 0.25rem;
      margin-left: 0.2rem;
      text-align: center;
      line-height: 0.5rem;
    }
  }
}
.content {
  height: 3rem;
  ul {
    width: 100%;
    display: flex;
    .left {
      width: 34%;
      margin-left: 3%;
      img {
        width: 100%;
      }
    }
    .right {
      margin-top: 0.3rem;
      width: 62%;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid #cecbcb;
      .img2 {
        width: 0.8rem;
        height: 0.3rem;
        margin-top: 0.2rem;
      }
      .img3 {
        width: 0.5;
        height: 0.3rem;
      }
      .text1 {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 15px;
      }
      .text2 {
        color: #999999;
        display: inline-block;
        background: #e9e9e9;
        font-size: 14px;
      }
      .text3 {
        font-size: 18px;
        color: red;
      }
      .text5,
      .text6 {
        color: #999999;
      }
    }
  }
}
</style>
