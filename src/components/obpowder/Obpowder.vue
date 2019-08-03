<template>
  <div class="obpowder">
    <Sonobp :obpowder="obp"></Sonobp>
  </div>
</template>

<script>
import { getObpowder } from '@/api/index.js'
import Sonobp from '@/components/obpowder/components/Sonobp'
export default {
  components: {
    Sonobp
  },
  data () {
    return {
      obp: null
    }
  },
  created () {
    getObpowder().then((data) => {
      this.obp = data.data.data
    })
  }
}
</script>

<style lang="less" scoped>
.obpowder{
  margin-bottom: 60px;
}
</style>
