<template>
  <form v-on:submit.prevent>
    <h3>{{id}}</h3>
    <label for='name'>Name:</label>
    <input v-model='name' name='name' type='text'>
    <br>
    <label for='img_src'>Image Source:</label>
    <input v-model='img_src' name='img_src' type='text'>
    <br>
    <button v-on:click='handleSubmmit'>Add Anime</button>
  </form>
</template>
<script>
import { createAnime, getAnimeById, updateAnimeById } from './../utils/api'
export default {
  name: 'AnimeForm',
  data: () => {
    return {
      name: '',
      img_src: ''
    }
  },
  props: ['id'],
  mounted () {
    if (this.id != null) {
      getAnimeById(this.id).then(res => {
        this.name = res.data.name
        this.img_src = res.data.img_src
      })
    }
  },
  methods: {
    handleSubmmit: function (event) {
      let anime = { name: this.name, img_src: this.img_src }
      if (this.id == null) {
        createAnime(anime).then(res => {
          this.name = ''
          this.img_src = ''
        })
      } else {
        updateAnimeById(this.id, anime).then(res => {})
      }
    }
  }
}
</script>
