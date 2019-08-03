<template>
  <div class="ranking" @click="toObp">
    <div class="drag" v-for="(drag, index) in ranking" :key="index">
      <div class="lunbo" :style="{background:`url(${drag.worback}) no-repeat top center`}">
        <div class="prottl">
          <img :src="drag.worthRotary.wortitle" alt class="title" />
          <span class="wortil">{{drag.worthRotary.worTil}}</span>
          <a href="javascript:;" class="iconfont">{{drag.worthRotary.worA}}&#xe68b;</a>
        </div>
        <div class="rotary">
          <ul ref="myul">
            <li v-for="(slides ,i) in drag.worthRotary.worSliides" :key="i">
              <img :src="slides.rotImg" alt />
              <span class="text">{{slides.rotTxt}}</span>
              <span class="price">{{slides.rotPrice}}</span>
              <span class="oldprice">{{slides.rotOldp}}</span>
              <span class="group">{{slides.rotState}}</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="listfour" v-for="(lists, indx) in drag.listfour" :key="indx">
        <p class="top">
          <span class="noun">{{lists.listNoun}}</span>
          <a href class="iconfont">{{lists.listA}}&#xe68b;</a>
        </p>
        <div class="main">
          <img :src="lists.listImg" alt class="mainimg" />
          <div class="content">
            <p class="listtxt">{{lists.listTxt}}</p>
            <span class="label">{{lists.listLabel}}</span>
            <p class="discount">{{lists.listDiscount}}</p>
            <p class="po">
              <span class="price">{{lists.listPrice}}</span>
              <span class="old">{{lists.listOldp}}</span>
              <span
                class="full"
                :style="{background:`url(${lists.fullback}) no-repeat center center`}"
              >{{lists.listFull}}</span>
            </p>
            <p class="biao">
              <span class="iconfont comment">&#xe61a;&nbsp;{{lists.listcomment}}</span>
              <span class="iconfont collectioin">&#xe63c;&nbsp;{{lists.listCollection}}</span>
              <span class="iconfont shop">&#xe614;</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: ['ranking'],
  methods: {
    toObp () {
      this.$router.push({ path: '/obp' })
    }
  },
  watch: {
    ranking (to, from) {
      this.$nextTick(() => {
        // console.log(this.$refs.myul)
        this.$refs.myul.forEach((item, index) => {
          item.style.width = to[index].worthRotary.worSliides.length * (85 + 10) + 60 + 'px'
        })
      })
    }
  }
}
</script>

<style lang="less" scoped>
.ranking {
  width: 100%;
  .drag {
    .lunbo {
      border-bottom: 7px solid #ebeef0;
      margin-bottom: 10px;
      background-size: 100% 70% !important;
      height: 200px;
      overflow-x: scroll;
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
        background: transparent;
      }
      .prottl {
        width: calc(100% - 22px);
        padding: 10px;
        position: relative;
        text-align: center;
        .title {
          width: 50%;
          display: block;
          margin: 0 auto;
        }
        .wortil {
          font-size: 16px;
          color: #fff;
        }
        a {
          position: absolute;
          top: 30%;
          right: 0;
          color: #fff;
          font-size: 14px;
        }
      }
      .rotary {
        width: 100%;
        overflow-x: scroll;
        ul {
          &::-webkit-scrollbar {
            width: 0;
            height: 0;
            background: transparent;
          }
          li {
            text-align: center;
            background: #fff;
            border-radius: 5px;
            border: 1px solid #ececee;
            width: 85px;
            display: inline-block;
            margin-left: 10px;
            img {
              width: 100%;
            }
            .text {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 1;
              overflow: hidden;
              text-overflow: ellipsis;
              line-height: 20px;
              font-size: 12px;
            }
            .price {
              color: #f3344a;
              line-height: 20px;
              display: block;
            }
            .oldprice {
              color: #bababa;
              text-decoration: line-through;
              font-size: 12px;
              display: block;
              line-height: 20px;
            }
            .group {
              line-height: 20px;
              color: #bababa;
              font-size: 12px;
              display: block;
            }
          }
        }
      }
    }
  }

  .listfour {
    border-bottom: 7px solid #ebeef0;
    width: 100%;
    padding-bottom: 10px;
    margin-bottom: 10px;
    .top {
      width: 100%;
      height: 20px;
      .noun {
        background-image: linear-gradient(133deg, #f296bd, #ee3b31);
        text-align: center;
        line-height: 20px;
        color: #fff;
        border-bottom-right-radius: 10px;
        width: 30%;
        height: 20px;
        float: left;
        display: block;
        font-size: 12px;
      }
      .iconfont {
        float: right;
        color: #a1a1a1;
        font-size: 12px;
        line-height: 20px;
        margin-right: 10px;
      }
    }
    .main {
      width: 100%;
      display: flex;
      .mainimg {
        width: 30%;
        height: 100%;
        margin: 10px;
      }
      .content {
        width: 70%;
        .listtxt {
          line-height: 20px;
          font-size: 14px;
          margin-top: 10px;
          width: 70%;
          text-align: left;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .label {
          background: #f2303c;
          color: #fff;
          padding: 2px 0;
          display: inline-block;
          margin: 5px 0;
          font-size: 14px;
          height: 16px;
        }
        .discount {
          color: #f23440;
          font-size: 12px;
          line-height: 20px;
        }
        .po {
          width: 100%;
          font-size: 12px;
          .price {
            color: #f23440;
            display: inline-block;
            margin-right: 10px;
          }
          .old {
            color: #777777;
            text-decoration: line-through;
            display: inline-block;
          }
          .full {
            background-size: 100% 100% !important;
            padding: 2px 5px;
            display: inline-block;
            color: #fff;
          }
        }
        .biao {
          line-height: 30px;
          width: 95%;
          text-align: right;
          margin-right: 5px;
          .iconfont {
            font-size: 12px;
            color: #98a6aa;
            margin-right: 3px;
            &.shop {
              line-height: 18px;
              font-size: 16px;
              padding: 2px;
              display: inline-block;
              color: #ff0213;
              border-radius: 5px;
              border: 1px solid #c6cacc;
            }
          }
        }
      }
    }
  }
}
</style>
