<template>
  <form v-on:submit.prevent>
    <h3>{{id}}</h3>
    <label for='name'>Name:</label>
    <input v-model='name' name='name' type='text'>
    <br>
    <label for='img_src'>Image Source:</label>
    <input v-model='img_src' name='img_src' type='text'>
    <br>
    <div class='intern'>
      <img :src='img_src' alt>
    </div>
    <br>
    <md-button class="md-raised md-primary" v-if='id==null' v-on:click='handleSubmmit'>Add Anime</md-button>
    <md-button class="md-raised md-primary" v-else v-on:click='handleSubmmit'>Update Anime</md-button>

    <md-button class="md-raised md-primary" v-if='id!=null' v-on:click='deleteAnime'>Delete Anime</md-button>
    <md-button class="md-raised md-primary" v-if='showConfirmation' v-on:click='confirmDelete'>Confirmation Deltete</md-button>
  </form>
</template>
<script>
import { createAnime, getAnimeById, updateAnimeById, deleteAnimeById } from './../utils/api'
export default {
  name: 'AnimeForm',
  data: () => {
    return {
      name: '',
      img_src: '',
      showConfirmation: false
    }
  },
  props: ['id'],
  mounted () {
    if (this.id != null) {
      getAnimeById(this.id).then(res => {
        this.name = res.data.name
        this.img_src = res.data.img_src
      })
    } else {
      this.name = ''
      this.img_src = ''
    }
  },
  methods: {
    handleSubmmit: function (event) {
      let anime = { name: this.name, img_src: this.img_src }
      if (this.id == null) {
        createAnime(anime).then(res => {
          this.name = ''
          this.img_src = ''
          this.$router.push('/anime')
        })
      } else {
        updateAnimeById(this.id, anime).then(res => {
          this.$router.push('/anime')
        })
      }
    },
    deleteAnime: function (event) {
      this.showConfirmation = true
    },
    confirmDelete: function (event) {
      deleteAnimeById(this.id).then(res => {
        this.$router.push('/anime')
      })
    }
  }
}
</script>
<style>
.intern {
  display: inline
}
img {
  width: 200px
  /* height: 100px */
}
</style>
