<template>
  <div class="img">
    <div class="nav">
      <p class="active">商品介绍</p>
      <p>规格参数</p>
      <p>售后保障</p>
    </div>
    <img
      src="https://img14.360buyimg.com/imgzone/jfs/t1/65068/24/5211/58598/5d36ceb2Ed80c3559/6ea7546cb0198740.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img12.360buyimg.com/imgzone/jfs/t1/79058/36/5387/44460/5d36ce83Ed8bc6c0b/6e6ae4418d18ec97.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img13.360buyimg.com/imgzone/jfs/t1/79536/14/5258/48646/5d36ce97E8f9b53e7/42e7571f47f6b268.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img12.360buyimg.com/imgzone/jfs/t1/65255/38/5361/58759/5d36ce9cEa44ceb30/6f10998093fc7708.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t21541/292/2289793268/262951/58aad18e/5b50369eNf1146ef6.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t23818/301/1061498075/71085/d2586b3/5b503690N7bddb8ec.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img12.360buyimg.com/popWaterMark/jfs/t24499/155/1993289815/205593/927f3761/5b712722N418f50e7.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t21358/109/2320391328/210743/4d6db83e/5b50369dN0bc5db9d.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t23275/263/1127563319/193169/c97c6b27/5b50369eN452e1d8a.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t22855/236/1093113445/85541/abc36e01/5b503698N11f4ca9f.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t22780/260/1087940731/187878/f14c96a0/5b50369cN0a85e719.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t23539/249/1080999915/171225/aa45d21c/5b50369dNaef6047e.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img30.360buyimg.com/popWaterMark/jfs/t23866/317/1096592391/181577/86b8d374/5b50369dN397d1de2.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img14.360buyimg.com/imgzone/jfs/t1/65068/24/5211/58598/5d36ceb2Ed80c3559/6ea7546cb0198740.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img12.360buyimg.com/imgzone/jfs/t1/79058/36/5387/44460/5d36ce83Ed8bc6c0b/6e6ae4418d18ec97.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img13.360buyimg.com/imgzone/jfs/t1/79536/14/5258/48646/5d36ce97E8f9b53e7/42e7571f47f6b268.jpg!q70.dpg.webp"
      alt
    />
    <img
      src="https://img12.360buyimg.com/imgzone/jfs/t1/65255/38/5361/58759/5d36ce9cEa44ceb30/6f10998093fc7708.jpg!q70.dpg.webp"
      alt
    />
  </div>
</template>

<script>
export default {
  name: 'Pic',
  props: ['pic']
}
</script>

<style lang="less" scoped>
.img {
  width: 100%;
  height: 400/2px;
  .nav {
    width: 100%;
    p {
      box-sizing: border-box;
      width: calc(100% / 3);
      float: left;
      text-align: center;
      line-height: 80/2px;
      border-left: 1/2px solid #999;
      &.active {
        font-size: 28/2px;
        border: none;
        color: #d91100;
      }
    }
  }
  img {
    width: 100%;
  }
}
</style>
