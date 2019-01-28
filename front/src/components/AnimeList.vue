<template>
  <div>
    <div v-if="!loading">
      <AnimeItem :name="anime.name" :id="anime.id" :img_src="anime.img_src" v-for="anime in animes" :key="anime.id"/>
    </div>
    <div v-else>
      <h2>Loading...</h2>
    </div>
  </div>
</template>

<script>
import AnimeItem from './AnimeItem'
import {getAnimes} from './../utils/api'
export default {
  name: 'AnimeList',
  components: {AnimeItem},
  data () {
    return {
      animes: [],
      loading: false
    }
  },
  mounted () {
    this.loading = true
    getAnimes()
      .then(res => {
        this.animes = res.data.animes
        this.loading = false
      })
      .catch(() => {})
  }
}
</script>

<style>
</style>
