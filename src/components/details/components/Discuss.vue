<template>
  <div class="discuss">
    <div class="top1">
      <div class="left">
        <p class="price">
          ￥
          <span class="big">{{discuss.detaPrice}}</span>.00
        </p>
        <p class="oldp">{{discuss.detaOldp}}</p>
      </div>
      <div class="right">
        <p>
          <span class="iconfont">&#xe635;</span>
          {{discuss.detaTxt2}}
        </p>
        <p>
          <span class="iconfont">&#xe65f;</span>
          {{discuss.detaTxt1}}
        </p>
      </div>
    </div>
    <div class="top2">
      <img src="../../../assets/img/京东超市.png" alt />
      <p class="market">{{discuss.data2Txt1}}</p>
    </div>
    <div class="top3">
      <p class="txt1">{{discuss.dataDescribe1}}</p>
      <p class="txt2">
        {{discuss.dataDescribe2}}
        <a href="#">查看</a>
      </p>
    </div>
    <div class="top4">
      <p>
        <span class="star">闪购预告</span>
        <span>{{discuss.dataBottomtxt1}}</span>
      </p>
      <p>
        <span>{{discuss.dataBottomtxt2}}</span>
        <span>{{discuss.dataBottomtxt3}}</span>
      </p>
    </div>
    <div class="top5">
      <img src="../../../assets/img/京东放心购.png" alt />
      <span>{{discuss.datSpan1}}</span>
      <span>{{discuss.datSpan2}}</span>
      <span>{{discuss.datSpan3}}</span>
    </div>
    <div class="top6">
      <div class="discountleft">
        <span class="you">优惠</span>
      </div>
      <div class="discountright">
        <span class="new">{{discuss.dataDiscount1}}</span>
        <span class="new">{{discuss.dataDiscount2}}</span>
        <span class="red">{{discuss.dataDiscount3}}</span>
        <br />
        <span class="new">{{discuss.dataDiscount4}}</span>
        <span>{{discuss.dataDiscount5}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Discuss',
  props: ['discuss']
}
</script>

<style lang="less" scoped>
.discuss {
  padding: 0 20/2px 30/2px 20/2px;
  .top1 {
    display: flex;
    .left {
      width: 50%;
      color: #e4393c;
      padding-top: 3%;
      p {
        font-size: 32/2px;
        float: left;
        margin-right: 20/2px;
        line-height: 40/2px;
        &.price {
          .big {
            font-size: 48/2px !important;
          }
        }
        &.oldp {
          color: #999999;
          text-decoration: line-through;
        }
      }
    }
    .right {
      padding-right: 5%;
      width: 50%;
      color: #999999;
      padding-top: 3%;
      p {
        float: right;
        width: 30%;
        text-align: center;
        font-size: 12px;
        span {
          display: block;
          &.iconfont {
            font-size: 32/2px;
          }
        }
      }
    }
  }
  .top2 {
    width: 100%;
    color: #999999;
    font-size: 24/2px;
    img {
      width: 110/2px;
      height: 30/2px;
    }
    .market {
      display: inline-block;
    }
  }
  .top3 {
    width: 100%;
    line-height: 32/2px;
    .txt1 {
      font-size: 32/2px;
      color: #333;
      padding: 10/2px 0;
      line-height: 50/2px;
    }
    .txt2 {
      font-size: 12/2px;
      color: #999999;
      padding: 5/2px 0;
      a {
        display: inline-block;
        text-decoration: underline;
        color: #e4393c;
      }
    }
  }
  .top4 {
    width: 100%;
    padding: 16/2px 10/2px 0/2px;
    span {
      color: #e4393c;
      line-height: 50/2px;
      &.star {
        background: #e4393c;
        color: #fff;
      }
    }
  }
  .top5 {
    padding: 0/2px 30/2px 0/2px 10/2px;
    background: #fbf0fd;
    color: #662d99;
    line-height: 70/2px;
    img {
      margin: 0 4/2px 8/2px 4/2px;
      width: 182/2px;
      height: 28/2px;
    }
    span {
      font-size: 28/2px;
    }
  }
  .top6 {
    width: 100%;
    display: flex;
    margin-top: 20/2px;
    .discountleft {
      width: 15%;
      text-align: center;
      .you {
        display: block;
      }
    }
    .discountright {
      span {
        display: inline-block;
        font-size: 24/2px;
        color: #333;
        line-height: 40/2px;
        padding: 2/2px 4/2px;
        margin-bottom: 20/2px;
        &.new {
          color: #e4393c;
          border: 1/2px solid #e4393c;
        }
        &.red {
          color: #fff;
          background: #e4393c;
        }
      }
    }
  }
}
</style>
