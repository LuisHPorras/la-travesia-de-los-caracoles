<template>
  <div
    class="parallax__layer"
    :class="[
    'parallax__layer--' + position
    ]"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ParallaxLayer',
  props: {
    position: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style>
  .parallax__layer {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  .parallax__layer--fore {
    -webkit-transform: translateZ(90px) scale(.7);
    transform: translateZ(90px) scale(.7);
    /* z-index: 5; */
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    /* z-index: 4; */
    background: rgb(255, 255, 255, 0);
  }

  .parallax__layer--back {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
    /* z-index: 3; */
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
    /* z-index: 2; */
  }
</style>
