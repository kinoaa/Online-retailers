<template>
  <div class="sale">
    <div>
      <img class="img" :src="sale.title" />
    </div>
    <div class="pic">
      <img class="img1" :src="sale.title1" />
    </div>
    <div class="list">
      <ul ref="myul">
        <li v-for="(l, i) in sale.data" :key="i">
          <img :src="l.pic" alt />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sale',
  props: ['sale'],
  watch: {
    sale (to, from) {
      this.$refs.myul.style.width = to.data.length * (135 + 10) + 'px'
      // this.tmp(to.time)
      // this.time.t = setInterval(() => {
      //   this.tmp(to.time)
      // }, 1000)
    }
  }
}
</script>

<style scoped lang="less">
.sale {
  background: white;
  width: 100%;
  overflow-x: hidden;
}
.sale .img {
  width: 100%;
}
.sale .pic {
  width: 100%;
}
.sale .pic .img1 {
  display: block;
  width: 92%;
  padding-left: 20px;
  padding-right: 20px;
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
    padding-left: 20px;
    li {
      width: 131px;
      height: 131px;
      display: inline-block;
      margin-right: 10px;
      margin-bottom: 20px;
      img {
        width: 100%;
        display: inline-block;
      }
    }
  }
}
</style>
