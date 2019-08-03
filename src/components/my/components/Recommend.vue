<template>
  <div class="recommend">
    <div class="title">
      <img :src="recommend.title" alt />
    </div>
    <div class="list">
      <ul ref="myul">
        <router-link tag="a" to="/details">
          <li v-for="(l, i) in recommend.data" :key="i">
            <img :src="l.img1" alt />
            <div class="lis">
              <span class="text">{{l.text}}</span>
              <p>
                <span class="price">{{l.price}}</span>
                <span class="sim">{{l.sim}}</span>
              </p>
              <p class="p"></p>
            </div>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Recommend',
  props: ['recommend']
}
</script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  // background: #f0f2f5;
  background: pink;
}
.recommend .title img {
  width: 100%;
}
.recommend .list {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10px 0 10px;
}
.recommend .list ul li:nth-child(2n + 1) {
  padding-right: 5px;
}
.recommend .list ul li:nth-child(2n) {
  padding-left: 2px;
}
.recommend .list ul li {
  width: calc(100% / 2);
  display: inline-block;
  /* background: pink; */
  box-sizing: border-box;
  margin-bottom: 10px;
  position: relative;
}
.recommend .list ul li .lis {
  background: #fff;
  padding-top: 10px;
}
.recommend .list ul li img {
  width: 100%;
}
.recommend .list ul li .text {
  box-sizing: border-box;
  height: 31px;
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  color: #232326;
  margin-top: 5px;
  line-height: 16px;
  margin-bottom: 3px;
  padding: 0 4px;
}
.recommend .list ul li p {
  position: relative;
}
.recommend .list ul li p .price {
  color: #f23030;
  display: inline-block;
  padding: 0 5px 0 4px;
  position: relative;
  top: 1px;
  height: 25px;
  line-height: 25px;
}
.recommend .list ul li p .sim {
  display: block;
  position: absolute;
  top: 0;
  right: 8px;
  text-align: center;
  color: #686868;
  font-size: 12px;
  width: 49px;
  height: 24px;
  line-height: 25px;
}
.recommend .list ul li p .sim::after {
  content: "";
  width: 200%;
  height: 200%;
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #bfbfbf;
  border-radius: 4px;
  -webkit-transform: scale(0.5, 0.5);
  transform: scale(0.5, 0.5);
  -webkit-transform-origin: top left;
  transform-origin: top left;
}
.recommend .list ul li .p {
  position: relative;
  height: 50px;
}
</style>
