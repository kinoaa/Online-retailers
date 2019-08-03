<template>
    <div class="searchbot">
        <div class="title">
            <p>热门搜索</p>
        </div>
        <div class="text">
            <ul>
                <li v-for="(t, i) in searchs.data" :key="i">
                    <span class="span">{{t.text}}</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SeachBot',
  props: ['searchs']
}
</script>

<style lang="less" scoped>
.searchbot{
    margin-left: 10px;
    .title{
        line-height: 60px;
        p{
            font-size: 18px;
            line-height: 60px;
        }
    }
    .text{
        ul{
            display: flex;
            flex-flow: wrap;
            li{
                width: calc( 100% / 3);
                span{
                    display: inline-block;
                    padding:8px 10px;
                    margin-top: 5px;
                    background: #eee;
                }
            }
            li:nth-of-type(1){
                color: red;
            }
            li:nth-of-type(2){
                color: red;
            }
            li:nth-of-type(3){
                color: red;
            }
        }
    }
}
</style>
