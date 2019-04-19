<template>
  <div class="flat__layer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'FlatLayer',
  props: {
    depth: {
      type: String,
      default: 'base'
    }
  }
}
</script>

<style>
  .flat-layer{
    background-color: white;
    position: relative;
    height: 100%; 
    width: 100%
  }
</style>
