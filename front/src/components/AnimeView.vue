<template>
  <div>
    <h1>Anime View</h1>
    <router-link to="/animeForm">
      <md-button class="md-raised md-primary">New Anime</md-button>
    </router-link>
    <AnimeList/>
  </div>
</template>

<script>
import AnimeList from './AnimeList'

export default {
  name: 'AnimeView',
  components: { AnimeList }
}
</script>

<style>
</style>
