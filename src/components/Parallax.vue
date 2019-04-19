<template>
  <div>
    <!-- Debug Mode -->
    <div class="debug">
      <label><input type="checkbox" v-model="checked"> Debug</label>
    </div>

    <div class="parallax" v-bind:class="{'debug-on': checked}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  data () {
    return {
      checked: false
    }
  }
}
</script>

<style>
  .parallax {
    /* height: 500px; fallback for older browsers */
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-perspective: 300px;
    perspective: 300px;
    scroll-behavior: smooth;
    font-size: 200%;
  }

  /* Debugger styles - used to show the effect
  --------------------------------------------- */
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
