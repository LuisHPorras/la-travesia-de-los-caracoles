<template>
  <!-- <div> -->
    <!-- Debug Mode -->
    <!-- <div class="debug">
      <label><input type="checkbox" v-model="checked"> Debug</label>
    </div> -->

  <div
    class="parallax"
    @scroll="handleScroll($event)"
    @wheel="verticalToHorizontal($event)"
    :class="{
      'debug-on': checked,
      'is-horizontal': horizontal
    }"
    :style="{perspective: perspective + 'px', '-webkit-perspective': perspective + 'px'}"
  >
    <slot></slot>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: 'Parallax',
  props: {
    perspective: {
      type: Number,
      default: 300
    },
    horizontal: Boolean
  },
  data () {
    return {
      checked: false,
      wheelHandled: false
    }
  },
  methods: {
    verticalToHorizontal (event) {
    	if (event.deltaY != 0) {
        // Prevent scroll from bugging the wheel movement
        this.wheelHandled = true
        // Manually scroll horizonally instead
        this.$el.scroll(this.$el.scrollLeft + event.deltaY * 5, this.$el.scrollTop)
        // Prevent vertical scroll
        event.preventDefault()
        // console.log('Deltas: (' + event.deltaX + ', ' + event.deltaY + ')')
        // console.log('Scroll: (' + this.$el.scrollLeft + ', ' + this.$el.scrollTop + ')')
      }
    },
    handleScroll (event) {
    	if (this.wheelHandled) {
        setTimeout(function(){ this.wheelHandled = false }, 500);
        event.preventDefault()
      }
    }
  }
}
</script>

<style>
  .parallax {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    white-space: nowrap;
    scroll-behavior: smooth;
    font-size: 200%;
  }

  .is-horizontal {
    overflow-x: auto;
    overflow-y: hidden;
  }

  /* --------------------------------------------- 
      Debugger styles - used to show the effect
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
  .debug-on .parallax__layer {
    -webkit-transform: translate3d(0, 400px, -800px) rotateX(30deg);
    transform: translate3d(0, 700px, -800px) rotateX(-30deg);
  }
  .debug-on .parallax__layer {
    box-shadow: 0 0 0 2px #000;
    opacity: 0.9;
  }
  .parallax__layer {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }
</style>
