<template>
  <div>
    <div class="kindsOf" style="color: black;">
      <span
        class="con"
        v-for="(a, index) in msg"
        :key="index"
        :class="{red:i === index}"
        @click="change(index)"
      >{{a.text}}</span>
    </div>
    <ul class="touch" style="display: none;">
      <li class="first">
        <span>综合</span>
        <i>√</i>
      </li>
      <li>
        <span>最新上架</span>
      </li>
      <li>
        <span>价格最低</span>
      </li>
      <li>
        <span>价格最高</span>
      </li>
      <li>
        <span>评论最高</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CateKind',
  data () {
    return {
      msg: [
        { id: 1, text: '综合▼' },
        { id: 2, text: '销量▼' },
        { id: 3, text: '服务▼' },
        { id: 4, text: '筛选▼' }
      ],
      i: null
    }
  },
  methods: {
    change (index) {
      this.i = index
      var a = document.querySelector('.touch')
      //   a.style.display = 'block'
      if (a.style.display === 'none') {
        a.style.display = 'block'
      } else if (a.style.display === 'block') {
        a.style.display = 'none'
      }

      //   console.log(b.style.color)
    }
  }
}
</script>
<style lang='less' scoped>
.kindsOf {
  display: flex;
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  text-align: center;
  background: white;

  span {
    flex: 1;
  }
  .red {
    color: red;
  }
}
ul {
  z-index: 99;
  width: 100%;
  background: white;
  position: absolute;
  li {
    line-height: 0.8rem;
    border-bottom: 1px solid #e7e7e7;
    span {
      margin-left: 2%;
    }
  }
  .first {
    color: red;
    i {
      float: right;
      margin-right: 3%;
    }
  }
}
</style>
