<template>
    <ul>
        <li v-for="anime in animes" :key="anime.name">{{anime.name}}</li>
    </ul>
</template>

<script>
export default {
    name:'AnimeList',
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

