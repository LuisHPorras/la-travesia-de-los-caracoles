<template>
  <div class="debug">
    <label><input type="checkbox" v-model="checked"> Debug</label>
  </div>
</template>

<script>
export default {
  name: 'Parallax'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .debug {
    position: fixed;
    top: 0;
    left: .5em;
    z-index: 999;
    background: rgba(0,0,0,.85);
    color: #fff;
    padding: .5em;
    border-radius: 0 0 5px 5px;
  }
  .debug-on .parallax__group {
    -webkit-transform: translate3d(0, 400px, -800px) rotateX(30deg);
    transform: translate3d(0, 700px, -800px) rotateX(-30deg);
  }
  .debug-on .parallax__layer {
    box-shadow: 0 0 0 2px #000;
    opacity: 0.9;
  }
  .parallax__group {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
</style>
