<template>
  <div>
    <AnimeItem
      :name="anime.name"
      :imageSrc="anime.imageSrc"
      v-for="anime in animes"
      :key="anime.name"
    />
  </div>
</template>

<script>
import AnimeItem from './AnimeItem'
export default {
  name: 'AnimeList',
  components: { AnimeItem },
  data () {
    return {
      animes: [
        {
          name: 'Elfen Lied',
          imageSrc:
            'https://i.pximg.net/img-original/img/2017/04/20/17/44/49/62492065_p0.png'
        },
        {
          name: 'Fullmetal Alchemist',
          imageSrc:
            'https://i.pximg.net/img-original/img/2017/04/20/17/44/49/62492065_p0.png'
        },
        {
          name: 'Clannad',
          imageSrc:
            'https://i.pximg.net/img-original/img/2017/04/20/17/44/49/62492065_p0.png'
        }
      ]
    }
  }
}
</script>

<style>
</style>
