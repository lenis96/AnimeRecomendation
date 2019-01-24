<template>
  <div class="item">
    <div class="intern">
      <img :src="img_src" alt>
    </div>
    <div class="intern">
      <label for>
        <a href>{{name}}</a>
      </label>
    </div>
    <a href="#">Edit</a>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    img_src: String
  },
  methods: {
    handler: () => {
      console.log('dsmi')
    }
  },
  name: 'animeItem',
  data () {
    return {
      image:
        'https://i.pximg.net/img-original/img/2017/04/20/17/44/49/62492065_p0.png'
      // image: 'https://i.pximg.net/img-master/img/2016/07/24/21/18/06/58069314_p0_master1200.jpg'

      // image:'https://i.pximg.net/img-original/img/2018/09/25/10/58/11/70864741_p0.jpg'
    }
  }
}
</script>

<style>
.item {
  background-color: #ddd;
  width: 300px;
  margin: 10px;
  display: inline-block;
}
.intern {
  display: inline;
}
img {
  width: 200px;
  /* height: 100px; */
}
</style>
