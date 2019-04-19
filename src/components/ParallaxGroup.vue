<template>
  <div id="group" class="parallax__group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ParallaxGroup'
}
</script>

<style>
  .parallax__group {
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
</style>
