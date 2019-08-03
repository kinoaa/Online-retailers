<template>
    <div class="category-top">
        <div class="logo">
            <a href="javascript:history.go(-1);" class="iconfont">&#xe603;</a>
        </div>
        <div class="inp">
            <i class="iconfont">&#xe660;</i>
            <input type="text" placeholder="搜索商品/店铺/种类">
        </div>
        <div class="muen">
            <span class="sp">搜索</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SearchTop'
}
</script>

<style lang="less" scoped>
.category-top {
    border-bottom: #eee solid 1px;
    width: 100%;
    height: 60px;
    display: flex;
    background: #fff;
    .logo{
        width: 10%;
        text-align: center;
        .iconfont {
            font-size: 30px;
            line-height: 60px;
            color: #666;
        }
    }
    .inp {
    width: 75%;
    height: 60%;
    background: #e8ecf0;
    border-radius: 50px;
    margin-top: 10px;
    position: relative;
        .iconfont{
            width: 8%;
            color: #b5bec5;
            font-size: 25px;
            padding-left: 3%;
            position: absolute;
            top: 7px;
        }
        input{
        width: 85%;
        height: 100%;
        border-radius: 50px;
        border: none;
        background: #e8ecf0;
        font-size: 20px;
        position: absolute;
        right: 0;
        padding-left: 3px;
        }
    }
    .muen{
        width: 15%;
        text-align: center;
        .sp{
            padding: 7px;
            color: #fff;
            line-height: 60px;
            background: #e93b3d;
            border-radius: 4px;
        }
    }
}
input::-webkit-input-placeholder{
    color: #c4bfbf;
    font-size: 18px;
}
input:-moz-placeholder{
    color: #c4bfbf;
}
input::-moz-placeholder{
    color: #c4bfbf;
}
input:-ms-input-placeholder{
    color: #c4bfbf;
}
</style>
