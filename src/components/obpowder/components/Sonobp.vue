<template>
  <div class="obp" v-if="obpowder">
    <div class="back">
      <div class="thry" v-for="(san,index) in obpowder" :key="index">
        <div
          class="orange"
          :style="{background:`url(${san.orange.backimg}) no-repeat center center`}"
        >
          <div class="left">
            <p class="title">{{san.orange.lists.listTitle}}</p>
            <img :src="san.orange.goimg" alt class="goimg" />
          </div>
          <div class="right">
            <div class="r-top">
              <p>{{san.orange.lists.listTxt1}}</p>
              <p>{{san.orange.lists.listTxt2}}</p>
            </div>
            <div class="r-bottom">
              <img :src="san.orange.lists.listImg1" alt />
              <img :src="san.orange.lists.listImg2" alt />
              <img :src="san.orange.lists.listImg3" alt />
            </div>
          </div>
        </div>
        <div class="blue" :style="{background:`url(${san.blue.backimg}) no-repeat center center`}">
          <div class="left">
            <p class="title">{{san.blue.lists.listTitle}}</p>
            <img :src="san.blue.goimg" alt class="goimg" />
          </div>
          <div class="right">
            <div class="r-top">
              <p>{{san.blue.lists.listTxt1}}</p>
              <p>{{san.blue.lists.listTxt2}}</p>
            </div>
            <div class="r-bottom">
              <img :src="san.blue.lists.listImg1" alt />
              <img :src="san.blue.lists.listImg2" alt />
              <img :src="san.blue.lists.listImg3" alt />
            </div>
          </div>
        </div>
        <div
          class="powder"
          :style="{background:`url(${san.powder.backimg}) no-repeat center center`}"
        >
          <div class="left">
            <p class="title">{{san.powder.lists.listTitle}}</p>
            <img :src="san.powder.goimg" alt class="goimg" />
          </div>
          <div class="right">
            <div class="r-top">
              <p>{{san.powder.lists.listTxt1}}</p>
              <p>{{san.powder.lists.listTxt2}}</p>
            </div>
            <div class="r-bottom">
              <img :src="san.powder.lists.listImg1" alt />
              <img :src="san.powder.lists.listImg2" alt />
              <img :src="san.powder.lists.listImg3" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['obpowder'],
  created () {

  }
}
</script>

<style lang="less" scoped>
.obp {
  width: 100%;
  .back {
    width: 100%;
    background: url("http://z.dangdang.com/static/img/%E8%83%8C%E6%99%AF%E8%A3%85%E9%A5%B0@2x.5bbe557.png")
        no-repeat center center,
      linear-gradient(#fd573e, #8d1452);
    background-size: 100% 100%;
    padding: 10px 0;
    .thry {
      width: 100%;
      .orange {
        color: #ff4d35;
      }
      .blue {
        color: #943dff;
      }
      .powder {
        color: #ff49af;
      }
      .orange,
      .blue,
      .powder {
        width: 96%;
        margin: 20px auto;
        display: flex;
        background-size: 100% 100% !important;
        .left {
          width: 26%;
          .title {
            font-size: 18px;
            color: #fff;
            margin-top: 24px;
            width: 55px;
            margin-left: auto;
            margin-right: auto;
          }
          .goimg {
            display: block;
            width: 70%;
            margin-top: 0.23rem;
            margin-left: auto;
            margin-right: auto;
          }
        }
        .right {
          width: 70%;
          padding-bottom: 5%;
          .r-top {
            margin-top: 15px;
            font-size: 14px;
            text-align: center;
            p {
              line-height: 25px;
              font-size: 12px;
            }
          }
          .r-bottom {
            margin-top: 10px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            img {
              height: 50%;
              display: inline-block;
              width: 28%;
            }
          }
        }
      }
    }
  }
}
</style>
