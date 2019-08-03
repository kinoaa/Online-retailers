<template>
  <div class="cartcen">
    <div class="content" v-for="(l,i) in cartcen" :key="i">
      <ul ref="myul">
        <li v-for="(h,i) in l.top" :key="i" :class="{'active':l.flag}" class="li">
          <div class="contentLeft">
            <img :src="h.pic" alt />
          </div>
          <div class="contentRight">
            <span class="text">{{h.text}}</span>
            <br />
            <span class="a" v-show="h.a">{{h.a}}</span>
            <br />
            <span class="price" v-if="h.price">{{h.price}}</span>
            <br />
            <span class="oldprice" v-if="h.oldprice">{{h.oldprice}}</span>
            <span class="inp">{{h.inp}}</span>
            <span class="inp1" v-if="h.inp1">{{h.inp1}}</span>
          </div>
        </li>
      </ul>
      <div class="contentTop">
        <a class="span">{{l.title.span}}</a>
        <a class="span1">{{l.title.span1}}</a>
      </div>
      <div class="contentBottom" v-for="(n,i) in l.bot" :key="i">
        <ul>
          <li>
            <img :src="n.pic" alt />
            <span class="text">{{n.text}}</span>
            <br />
            <span class="text1">{{n.text1}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'cartCen',
  props: ['cartcen']
}
</script>
<style lang="less" scoped>
.cartcen {
  ul .li {
    border-bottom: 2px solid #f6f6f6;
    padding: 20px 2% 50px 2%;
    position: relative;
    .contentLeft {
      display: inline-block;
      width: 36%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .contentRight {
      padding: 0px 0px 20px 0px;
      // background:pink;
      height: 150px;
      margin-top: 10px;
      position: absolute;
      display: inline-block;
      width: 60%;
      .text {
        font-size: 18px;
        font-weight: normal;
        margin-bottom: 5px;
        line-height: 20px;
      }
      .a {
        display: inline-block;
        padding: 0px 5px;
        height: 25px;
        line-height: 25px;
        margin-top: 10px;
        text-align: center;
        border: 1px solid red;
        border-radius: 5px;
        margin-bottom: 40px;
        color: red;
      }
      .price {
        font-size: 26px;
        color: #e93b3d;
        margin-bottom: 20px;
        top: 100px;
      }
      .oldprice {
        font-size: 16px;
        text-decoration-line: line-through;
        color: #999999;
        margin-top: 10px;
      }
      .inp {
        position: absolute;
        width: 100px;
        height: 35px;
        top: 80px;
        right: 0px;
        border-radius: 20px;
        background: linear-gradient(to right, #eb4141, #fe8f71);
        line-height: 35px;
        text-align: center;
        font-size: 16px;
        color: white;
      }
      .inp1 {
        position: absolute;
        width: 110px;
        height: 20px;
        top: 125px;
        right: 0px;
        border-radius: 12px;
        background: linear-gradient(to right, #eb4141, #ffcac1);
        line-height: 20px;
        text-align: center;
        font-size: 14px;
        color: white;
      }
    }
  }
  ul .li:nth-child(6) {
    border-bottom: none;
  }
  ul .li:nth-child(1) {
    padding-top: 60px;
  }
}
.contentTop {
  padding: 10px 10px;
  margin-bottom: 10px;
  background: #e7e7e5;
  .span {
    width: 48%;
    font-size: 18px;
    display: inline-block;
    color: black;
  }
  .span1 {
    width: 49%;
    font-size: 16px;
    display: inline-block;
    text-align: right;
    color: red;
  }
}
.contentBottom {
  background: #ccc;
  width: 100%;
  ul {
    width: 100%;
    li {
      width: 32%;
      float: left;
      margin-bottom: 30px;
      img {
        width: 100%;
        margin-bottom: 15px;
      }
    }
  }
  ul li:nth-child(1) {
    padding-left: 1%;
  }
  .text {
    color: #e93b3d;
    font-size: 22px;
  }
  .text1 {
    color: #ccc;
    text-decoration-line: line-through;
    font-size: 19px;
    margin-top: 6px;
  }
}
</style>
