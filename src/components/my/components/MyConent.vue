<template>
    <div class="myconent">
        <div class="conent" v-for="(t, i) in myuls.data" :key="i">
            <div class="one"><img :src="t.img" alt=""></div>
            <div class="two"><span>{{t.text}}</span></div>
            <div class="three"><i class="iconfont">&#xe604;</i></div>
        </div>
        <div class="conent" v-for="(t, index) in myuls.rob" :key="index+6">
            <div class="one"><img :src="t.rob" alt=""></div>
            <div class="two"><span>{{t.text}}</span></div>
            <div class="three"><i class="iconfont">&#xe604;</i></div>
        </div>
        <div class="conent" v-for="(t, index) in myuls.server" :key="index+9">
            <div class="one"><img :src="t.server" alt=""></div>
            <div class="two"><span>{{t.text}}</span></div>
            <div class="three"><i class="iconfont">&#xe604;</i></div>
        </div>
        <div class="like">
            <p><span class="iconfont">&#xe605;</span>根据您的偏好猜你可能喜欢</p>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyConent',
  props: ['myuls']
}
</script>

<style lang="less" scoped>
.myconent{
    .conent:nth-of-type(1){
        margin: 10px 0;
    }
    .conent:nth-of-type(7){
        margin-top: 10px;
    }
    .conent:nth-of-type(10){
        margin-top: 10px;
    }
    .conent{
        padding: 5px 0;
        background: #fff;
        display: flex;
        .one{
            text-align: right;
            width: 10%;
            img{
                width: 70%;
            }
        }
        .two{
            margin-left: 2%;
            line-height: 30px;
            width: 58%;
            font-size: 13px;
        }
        .three{
            text-align: right;
            line-height: 30px;
            width: 25%;
            margin-right: 5%;
            font-size: 13px;
            color: #666;
        }
    }
    .like{
        width: 100%;
        text-align: center;
        p{
            line-height: 50px;
            .iconfont{
                color: red;
            }
        }
    }
}
</style>
