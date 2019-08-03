<template>
    <div class="search">
      <search-top></search-top>
      <search-bot :searchs="searchs"></search-bot>
    </div>
</template>

<script>
import { getSearch } from '@/api/index'
import SearchTop from '@/components/search/components/SearchTop'
import SearchBot from '@/components/search/components/SearchBot'
export default {
  name: 'Search',
  data () {
    return {
      searchs: {}
    }
  },
  components: {
    SearchTop,
    SearchBot
  },
  mounted () {
    this.$store.commit('hideNav')
  },
  destroyed () {
    this.$store.commit('showNav')
  },
  created () {
    getSearch().then(({data}) => {
      this.searchs = data
      console.log(this.searchs)
    })
  }
}
</script>

<style scoped>
</style>
