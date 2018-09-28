<template>
<div>
    <img :src="image" alt="">
    <li>{{name}}</li>
</div>
</template>

<script>
export default {
    props:{
        name:String
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
    img{
        width:200px;
        /* height: 100px; */
    }
</style>

