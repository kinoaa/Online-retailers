<template>
  <div class="worth" @click="toDemo">
    <a href="javascript:;" v-for="(worth, index) in worthten" :key="index">
      <img :src="worth" alt />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Worth',
  props: ['worthten'],
  methods: {
    toDemo () {
      this.$router.push({ path: '/obp' })
    }
  }

}
</script>

<style lang="less" scoped>
.worth {
  border-top: 1px solid #ccc;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 60px;
  width: 100%;
  a {
    border-top: 1px solid #eeeeee;
    border-right: 1px solid #eeeeee;
    box-sizing: border-box;
    width: calc(100% / 5);
    img {
      width: 100%;
    }
  }
}
</style>
