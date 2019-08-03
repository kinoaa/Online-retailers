<template>
  <div class="signBom">
    <div class="bom">
      <h4 class="txt">其他登录方式</h4>
      <a href="#" class="a">
        <span class="iconfont">&#xe606;</span>
        <span class="qq">QQ</span>
      </a>
      <div class="bomm">
        <p>
          登录即代表您已同意
          <a href="http://in.m.jd.com/help/app/private_policy.html">京东隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signBom'
}
</script>

<style scoped>
.signBom {
  margin-top: 88px;
}
.bom {
  height: 80px;
  position: relative;
  padding: 24.5px 0 0;
  border-top: 1px solid #efefef;
  text-align: center;
}
.bom .txt {
  font-size: 12px;
  font-weight: 400;
  position: absolute;
  top: -12px;
  left: 50%;
  background-color: #fff;
  padding: 5px 15px;
  color: #ccc;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.bom .a {
  position: relative;
  width: 48px;
  height: 48px;
  color: #616161;
  margin: 0 15px;
  font-size: 14px;
  display: inline-block;
  font-size: 0.14rem;
  text-align: center;
}
.bom .a .iconfont {
  width: 48px;
  height: 48px;
  display: block;
  font-size: 30px;
  line-height: 48px;
  color: skyblue;
}
.bom .a .qq {
  position: absolute;
  bottom: -13px;
  left: 0;
  display: inline-block;
  width: 48px;
  text-align: center;
  color: #999;
  font-size: 12px;
}
.bom .bomm {
  margin-top: 25px;
  text-align: center;
  font-size: 13px;
  color: #bebebe;
}
.bom .bomm a {
  width: auto;
  margin: 0;
  color: #409eff;
}
</style>
