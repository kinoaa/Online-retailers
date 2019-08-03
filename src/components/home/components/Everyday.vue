<template>
  <div>
    <img class="src" :src="everyday.title" alt />
    <div class="courtyard">
      <div>
        <ul>
          <li v-for="(t, i) in everyday.data" :key="i">
            <div class="divs">
              <p class="text">{{t.text1}}</p>
            </div>
            <p class="deta">{{t.text2}}</p>
            <a href="#">
              <img :src="t.img1" alt />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Everyday',
  props: ['everyday']
}
</script>

<style lang="less" scoped>
.src {
  width: 100%;
}
.courtyard {
  border-radius: 10px 10px 0 0;
  background: #fff;
  margin: 0 10px 0 10px;
  ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    li {
      width: calc(100% / 4);
      text-align: center;
      margin-top: 5px;
      .divs {
        text-align: center;
        font-weight: bolder;
        position: relative;
        .text {
          margin-top: 8px;
          color: #45caff;
          font-size: 18px;
          font-weight: bold;
          background-image: -webkit-linear-gradient(bottom, red, #f139d2);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .deta {
        font-size: 13px;
        margin-top: 5px;
      }
      img {
        width: 80%;
      }
      .img1 {
        margin-top: 41px;
      }
    }
  }
}
</style>
