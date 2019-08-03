<template>
  <div class="my">
    <signTop></signTop>
    <signCen></signCen>
    <signBom></signBom>
  </div>
</template>

<script>
import signTop from '@/components/myLogin/components/signTop'
import signCen from '@/components/myLogin/components/signCen'
import signBom from '@/components/myLogin/components/signBom'
export default {
  name: 'Logoin',
  components: {
    signTop,
    signCen,
    signBom
  },
  mounted () {
    this.$store.commit('hideNav')
  },
  destroyed () {
    this.$store.commit('showNav')
  }
}
</script>

<style>
</style>
