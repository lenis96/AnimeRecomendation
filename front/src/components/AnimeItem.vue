<template>
    <div class="item">
        <div class="intern">
            <img :src="image" alt="">
        </div>
        <div class="intern">
            <label for=""><a href="">{{name}}</a></label>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        name:String,
        imageSrc:String
    },
    name:'animeItem',
    data(){
        return {

            image:"https://i.pximg.net/img-original/img/2018/09/25/10/58/11/70864741_p0.jpg"
        }
    }
}
</script>

<style>
    .item{
        background-color: #ddd; 
        width: 300px;
        margin: 10px;
        display: inline-block;
    }
    .intern{
        display: inline;
    }
    img{
        width:200px;
        /* height: 100px; */
    }
</style>

