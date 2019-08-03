<template>
  <div class="arrival">
    <div class="top1">
      <div class="discountleft">
        <span class="you">{{arrival.dateSpan1}}</span>
      </div>
      <div class="discountright">
        <span class="num">{{arrival.dateNum1}}</span>
        <br />
        <span class="txt">{{arrival.dateTxt1}}</span>
      </div>
    </div>
    <div class="top2">
      <div class="discountleft">
        <span class="you">{{arrival.dateSpan2}}</span>
      </div>
      <div class="discountright">
        <span class="num">{{arrival.dateNum2}}</span>
        <br />
        <img src="../../../assets/img/京东物流.png" alt />
        <span class="txt">{{arrival.dateTxt2}}</span>
        <br />
      </div>
    </div>
    <div class="top3">
      <div class="discountleft">
        <span class="you">{{arrival.dateSpan3}}</span>
      </div>
      <div class="discountright">
        <span class="new">{{arrival.dateNum3}}</span>
        <br />
        <span class="new">{{arrival.dateTxt3}}</span>
        <br />
      </div>
    </div>
    <div class="top4">
      <p class="y">
        <span class="iconfont">&#xe6aa;</span>
        {{arrival.datesi1}}
      </p>
      <p class="e">
        <span class="iconfont">&#xe6aa;</span>
        {{arrival.datesi2}}
      </p>
      <p class="s">
        <span class="iconfont">&#xe6aa;</span>
        {{arrival.datesi3}}
      </p>
      <p>
        <span class="iconfont">&#xe6aa;</span>
        {{arrival.datesi4}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Arrival',
  props: ['arrival']
}
</script>

<style lang="less" scoped>
.arrival {
  padding: 0 20/2px 30/2px 20/2px;
  .top1,
  .top3 {
    border-bottom: 1/2px solid #999999;
  }
  .top2 {
    img {
      width: 150/2px;
      height: 30/2px;
    }
  }
  .top1,
  .top2,
  .top3 {
    padding: 10/2px;
    width: 100%;
    display: flex;
    margin-top: 20/2px;
    line-height: 36/2px;
    .discountleft {
      width: 15%;
      text-align: center;
      .you {
        display: block;
      }
    }
    .discountright {
      font-size: 28/2px;
      color: #333333;
      span {
        line-height: 36/2px;
        &.txt {
          font-size: 24/2px;
          color: #999999;
        }
      }
    }
  }
  .top4 {
    display: flex;
    flex-wrap: wrap;
    line-height: 50/2px;
    padding: 20/2px 0;
    p {
      width: calc(100% / 3);
      line-height: 50/2px;
      &.y {
        width: 40%;
      }
      &.e {
        width: 30%;
      }
      &.s {
        width: 30%;
      }
      span {
        color: #e4393c;
        font-size: 24/2px;
      }
    }
  }
}
</style>
