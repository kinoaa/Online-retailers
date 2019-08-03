<template>
  <div>
    <div v-for="(s,i) in seckillshopps" :key="i" class="box">
      <div class="box1">
        <img :src="s.img" alt />
      </div>
      <div class="box2">
        <div class="box3">
          <h3>{{s.title}}</h3>
          <span>{{s.alt}}</span>
        </div>
        <div class="box4">
          <div class="box5">
            <p>{{s.money}}</p>
            <span>{{s.oldmoney}}</span>
          </div>
          <div class="box6">
            <p>{{s.begin}}</p>
            <span>{{s.over}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['seckillshopps']
}
</script>
<style scoped>
.box {
  width: 100%;
  height: 2.6rem;
  border-bottom: 1px dashed gray;
  display: flex;
}
.box .box1 {
  width: 30%;
  padding-top: 0.15rem;
}
.box .box1 img {
  width: 100%;
}
.box .box2 {
  width: 70%;
  margin-bottom: 0.4rem;
}
.box .box2 h3 {
  margin-top: 0.18rem;
  margin-bottom: 0.1rem;
}
.box .box2 span {
  display: inline-block;
  border: 1px solid red;
  font-size: 0.2rem;
  padding: 0.05rem 0.05rem;
  color: red;
}
.box .box2 .box3 {
  margin-bottom: 0.3rem;
}
.box .box2 .box4 {
  display: flex;
}
.box .box2 .box4 .box5 {
  margin-right: 1.8rem;
  margin-top: 0.3rem;
}
.box .box2 .box4 .box5 p {
  font-size: 0.38rem;
  color: red;
  margin-bottom: 0.12rem;
}
.box .box2 .box4 .box5 span {
  color: gray;
  border: none;
  text-decoration: line-through;
}
.box .box2 .box4 .box6 p {
  width: 1.6rem;
  height: 0.6rem;
  background: red;
  border-radius: 2rem;
  text-align: center;
  line-height: 0.6rem;
  color: white;
  margin-bottom: 0.2rem;
  margin-left: 0.1rem;
  opacity: 0.8;
}
.box .box2 .box4 .box6 span {
  width: 1.7rem;
  height: 0.15rem;
  background: red;
  color: white;
  border-radius: 1rem;
  line-height: 0.2rem;
  opacity: 0.8;
}
</style>
