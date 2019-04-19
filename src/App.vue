<template>
  <div id="app">
    <!-- <NavBar/> -->
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src
// import NavBar from '@/components/NavBar.vue'
// export default {
//   components: {
//     NavBar
//   }
// }
</script>

<style>

body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  overflow-y: hidden;
  scrollbar-width: none;
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
}
</style>
