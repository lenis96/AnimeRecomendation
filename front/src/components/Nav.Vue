<template>
  <div>
    <ul>
      <router-link tag="li" to="/anime">
        <a>Anime</a>
      </router-link>
      <router-link tag="li" to="/animeForm">
        <a>New Anime</a>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav'
}
</script>

<style>

</style>
