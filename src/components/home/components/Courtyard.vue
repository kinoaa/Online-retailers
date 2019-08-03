<template>
    <div>
        <img class="src" :src="courtyard.title" alt="">
        <div class="courtyard">
            <div>
                <ul class="ul1">
                    <li>
                        <div class="divs">
                            <p class="text">科技潮玩</p>
                        </div>
                        <p class="deta">畅游芯时代</p>
                        <a href="#"><img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/41035/22/9145/342667/5d2bf894Ed1b1abed/1e70c6fad52fe4bb.png!q70.jpg.dpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img class="img1" src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t25852/1/576947857/130654/1422d552/5b753a9bNdbb8a344.jpg!q70.jpg.dpg" alt=""></a>
                    </li>
                    <li>
                        <div class="divs">
                            <p class="text">二手寻宝</p>
                        </div>
                        <p class="deta">跳蚤市场逛</p>
                        <a href="#"><img src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/70072/33/5114/95720/5d33d4d9E56be3e3c/97ce254f6e73f43a.jpg!q70.jpg.dpg" alt=""></a>
                    </li>
                    <li>
                        <a href="#"><img class="img1" src="http://m.360buyimg.com/mobilecms/s150x150_jfs/t1/41035/22/9145/342667/5d2bf894Ed1b1abed/1e70c6fad52fe4bb.png!q70.jpg.dpg" alt=""></a>
                    </li>
                </ul>
                <ul class="ul2">
                    <li v-for="(t, i) in courtyard.data" :key="i">
                        <p class="text">{{t.text1}}</p>
                        <p class="deta">{{t.text2}}</p>
                        <a href="#"><img :src="t.img1" alt=""></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Courtyard',
  props: ['courtyard']
}
</script>

<style lang="less" scoped>
.src{
    width: 100%;
}
.courtyard{
    border-radius:10px 10px 0 0;
    background: #fff;
    margin: 0 10px 0 10px;
    ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    }
    .ul1{
        li{
        width: calc(100% / 4);
        text-align: center;
        .divs{
        text-align: left;
        font-weight:bolder;
        position: relative;
        .text{
            margin-top: 8px;
            color:  #45CAFF;
            font-size: 18px;
            font-weight: bold;
            background-image:-webkit-linear-gradient(bottom,#45CAFF,#1471FB);
            -webkit-background-clip:text;
            -webkit-text-fill-color:transparent;
        }
        }
        .deta{
            font-size: 13px;
            margin-top: 5px;
            text-align: left;
        }
        img{
            margin-top: 5px;
            width: 80%;
        }
        .img1{
            margin-top: 46px;
        }
    }
    }
    .ul2{
        margin-top: 10px;
    li{
        width: calc(100% / 4);
        text-align: center;
        .text{
            margin-top: 5px;
            color:  #333;
            font-size: 18px;
            font-weight: bold;
        }
        .deta{
            margin-top: 5px;
            font-size: 13px;
        }
        img{
            margin-top: 5px;
            width: 80%;
        }
    }
    }
}
</style>
