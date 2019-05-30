<template>
  <div
    class="parallax__layer"
    :class="['parallax__layer--' + position]"
  >
    <!-- <transition-group name="fade"> -->
      <slot v-on:load="onLoaded" v-show="loaded"></slot>
    <!-- </transition-group> -->
  </div>
</template>

<script>
export default {
  name: 'ParallaxLayer',
  props: {
    position: {
      type: String,
      default: 'base'
    },
    loaded: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onLoaded () {
      this.loaded = true
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
    transform-style: preserve-3d;
  }

  .parallax__layer--fore {
    -webkit-transform: translateZ(90px) scale(.7);
    transform: translateZ(90px) scale(.7);
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    background: rgb(255, 255, 255, 0);
  }

  .parallax__layer--back {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
  }

/*  Fade in transition */
.fade-enter-active {
  transition: opacity 3s ease-in-out;
}

.fade-enter-to {
  opacity: 1;
}

.fade-enter {
  opacity: 0;
}
</style>
