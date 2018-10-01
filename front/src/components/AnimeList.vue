<template>
    <div>
        <AnimeItem :name="anime.name" v-for="anime in animes" :key="anime.name"/>
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

