<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>Anime Recomendation</h1>
      </div>
      <div class="left">
        <ul>
          <a href="/anime">Anime</a>
        </ul>
      </div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">

      <router-view/>
    </div>
    </div>
  </div>
</template>

<script>
import './css/style.css'

export default {
  name: 'App'
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
