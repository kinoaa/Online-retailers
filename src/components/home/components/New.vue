<template>
    <div class="new">
        <ul>
            <li>
                <a href="//h5.m.jd.com/babelDiy/Zeus/3TF5zx1uKaXie125DCh3jU4sYWUy/index.html#/"><img class="img1" :src="news[0]" alt=""></a>
            </li>
            <li>
                <a href="//h5.m.jd.com/babelDiy/Zeus/3TF5zx1uKaXie125DCh3jU4sYWUy/index.html#/"><img class="img2" :src="news[1]" alt=""></a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'New',
  props: ['news']
}
</script>

<style lang="less" scoped>
.new{
    margin: 10px 10px 0 10px;
    ul{
    display: flex;
    li{
    width: calc(100% / 2);
    img{
        width: 100%;
    }
    .img1{
        border-radius: 10px 0 0 10px;
    }
    .img2{
        border-radius:0 10px 10px 0;
    }
    }
}
}

</style>
