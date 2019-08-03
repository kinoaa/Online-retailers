<template>
    <div class="mywait">
        <div class="top">
            <ul>
                <li v-for="(t, i) in logoin.top" :key="i">
                    <p>{{t.num}}</p>
                    <p>{{t.name}}</p>
                </li>
            </ul>
        </div>
        <div class="conent">
            <div class="one"><img :src="logoin.mymeun" alt=""></div>
            <div class="two"><span>我的订单</span></div>
            <div class="three"><span>查看全部购买商品</span> <i class="iconfont">&#xe604;</i></div>
        </div>
        <div class="foot">
            <ul>
                <li v-for="(t, i) in logoin.bot" :key="i">
                    <img :src="t.img" alt="">
                    <p>{{t.name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'MyWait',
  props: ['logoin']
}
</script>

<style lang="less" scoped>
.mywait{
    background: #fff;
    .top{
        ul{
            display: flex;
            li{
                width: calc(100% / 3);
                text-align: center;
                border-right: solid #eee 1px;
            li:nth-of-type(3){
                border-right: none;
            }
                p{
                    margin-top: 10px;
                    font-size: 13px;
                    color: #000000;
                }
            }
        }
    }
    .conent{
        padding-top:5px;
        display: flex;
        margin-top: 10px;
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
            width: 28%;
        }
        .three{
            text-align: right;
            line-height: 30px;
            width: 55%;
            margin-right: 5%;
            font-size: 13px;
            color: #666;
        }
    }
    .foot{
        margin-top: 10px;
        border-top: solid #eee 1px;
        ul{
            display: flex;
            li{
                width: calc(100% / 3);
                text-align: center;
                li:nth-of-type(3){
                    border-right: none;
                }
                img{
                    margin-top: 10px;
                    width: 20%;
                }
                p{
                    padding-bottom: 8px;
                    margin-top: 5px;
                    font-size: 13px;
                    color: #4d525d;
                }
            }
        }
    }
}
</style>
