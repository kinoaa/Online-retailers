<template>
  <div>
    <div class="box">
      <ul>
        <li v-for="(d,i) in seckillnavs" :key="i">
          <h3>{{d.time}}</h3>
          <span>{{d.text}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ['seckillnavs']
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 1rem;
  /* position: fixed; */
  top: 0;
  z-index: 999;
}
.box ul {
  width: 100%;
  height: 100%;
  background: red;
  display: flex;
  overflow-x: scroll;
}
.box ul li {
  padding-top: 0.15rem;
  margin-left: 0.2rem;
  text-align: center;
}
.box ul li h3 {
  display: inline-block;
  font-size: 0.34rem;
  width: 1.5rem;
  margin-bottom: 0.1rem;
  color: white;
}
.box ul li span {
  font-size: 0.23rem;
  color: white;
}
</style>
