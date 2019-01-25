<template>
  <div id="app">
    <div class="container">
      <div class="header">
        <h1>Anime Recomendation</h1>
      </div>
      <div class="left">
        <Nav/>
      </div>
    <!-- <img src="./assets/logo.png"> -->
    <div class="content">

      <router-view :key="$route.fullPath"/>
    </div>
    </div>
  </div>
</template>

<script>
import './css/style.css'
import Nav from './components/Nav'
export default {
  name: 'App',
  components: {Nav}
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
