<template>
  <div class="value">
    <div>
      <img class="img" :src="value.title" />
    </div>
    <div class="bom">
      <p>
        <img class="img1" :src="value.title1" />
      </p>
      <ul>
        <li v-for="(l, i) in value.data" :key="i">
          <img :src="l.pic" alt />
          <span class="text">{{l.text}}</span>
          <span class="price">{{l.price}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'value',
  props: ['value']

}
</script>

<style scoped>
.value {
  background: white;
  margin-bottom: 10px;
  overflow-x: hidden;
}
.value .img {
  width: 100%;
}
.value .bom {
  padding-left: 4%;
  padding-bottom: 10px;
  overflow: hidden;
  width: 100%;
}
.value .bom p {
  float: left;
  width: 34%;
}
.value .bom p img {
  display: inline-block;
  width: 100%;
}
.value .bom ul {
  width: 66%;
  float: left;
}
.value .bom ul li {
  width: calc(100% / 3);
  float: left;
  margin-left: 10%;
}
.value .bom ul li img {
  width: 100%;
  display: block;
  margin: 17px auto 0;
}
.value .bom ul li .text {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #505050;
  font-size: 15px;
  margin-top: 8px;
  margin-bottom: 6px;
  line-height: 16px;
}
.value .bom ul li .price {
  font-size: 19px;
  text-align: center;
  display: block;
  width: 100%;
}
</style>
