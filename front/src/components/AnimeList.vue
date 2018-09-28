<template>
<div>

    <ul>
        <!-- <li v-for="anime in animes" :key="anime.name">{{anime.name}}</li> -->
        <AnimeItem :name="anime.name" v-for="anime in animes" :key="anime.name"/>
    </ul>
</div>
</template>

<script>
import AnimeItem from './AnimeItem'
export default {
    name:'AnimeList',
    components:{AnimeItem},
    data(){
        return {
            animes:[
                {
                    name:'Elfen Lied'
                },
                {
                    name:'Fullmetal Alchemist'
                },
                {
                    name:'Clannad'
                }
            ]
        }
    }
}
</script>

<style>

</style>

