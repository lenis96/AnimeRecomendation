<template>
  <div>
    <AnimeItem
      :name="anime.name"
      :img_src="anime.img_src"
      v-for="anime in animes"
      :key="anime.name"
    />
  </div>
</template>

<script>
import AnimeItem from './AnimeItem'
import { getAnimes } from './../utils/api'
export default {
  name: 'AnimeList',
  components: { AnimeItem },
  data () {
    return {
      animes: []
    }
  },
  mounted () {
    getAnimes()
      .then(res => {
        this.animes = res.data.animes
      })
      .catch(() => {})
  }
}
</script>

<style>
</style>
