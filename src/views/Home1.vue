<template>
  <div class="storyboard">
    <div class="gurdo">
      <!-- <h1 class="title">Home</h1> -->
      <!-- <div class="bg-img-bx">
        <img class="bg-img" src="../assets/far-background.png" alt="Forest1">
        <img class="bg-img" src="../assets/near-background.png" alt="Forest2">
      </div> -->
      <!-- <div class="bg-img-bx">
        <HParallaxContainer class="p-container">
          <HParallaxImage :width="1200" :height="900" :factor="0.25">
            <img src="../assets/far-background.png" alt="Forest1">
         </HParallaxImage>
        </HParallaxContainer>
        <HParallaxContainer class="p-container">
          <HParallaxImage :width="1200" :height="900" :factor="0.5">
            <img src="../assets/near-background.png" alt="Forest2">
         </HParallaxImage>
        </HParallaxContainer>
      </div> -->
      <div class="bg-img-bx">
        <!-- <ParallaxContainer>
          <ParallaxImage :width="1200" :height="900" :factor="0.1">
            <img class="bg-img" src="../assets/far-background.png" alt="Forest1">
         </ParallaxImage>
        </ParallaxContainer> -->
        <ParallaxContainer>
          <ParallaxImage :width="1200" :height="900" :factor="0.75">
            <img class="bg-img" src="../assets/near-background.png" alt="Forest2">
         </ParallaxImage>
        </ParallaxContainer>
      </div>
    </div>
    <div>
      <h1>Hola</h1>
    </div>
  </div>
</template>

<script>
import ParallaxContainer from '../components/ParallaxContainer.vue'
import ParallaxImage from '../components/ParallaxImage.vue'
// import HParallaxContainer from '../components/HParallaxContainer.vue'
// import HParallaxImage from '../components/HParallaxImage.vue'

export default {
  name: 'home',
  components: {
    ParallaxContainer,
    ParallaxImage
  }
}
</script>

<style>
.storyboard {
  border: 2px solid orange;
  height: 700px;
  width: 100%;
  overflow: auto;
  scrollbar-width: none;
  position: absolute;
  bottom: 0px;
}

.gurdo {
  padding: 100px;
  /* border: 1px solid red; */
  /* background-image: linear-gradient(rgb(84, 92, 100), white); */
  background-color: orange;
  width: 10000px;
  height: 100%;
}

.bg-img-bx {
  border: 1px solid blue;
  text-align: left;
  height: 50%;
  width: 700px;
}

.bg-img {
  max-height: 100% !important;
  max-width: 100% !important;
  position: absolute;
}

.p-container {
  height: inherit;
  width: inherit;
  position: absolute;
}

.title {
  margin-top: 0;
  border-top: 0;
  padding-top: 100px;
  color: white;
  font-family: 'Courier New', Courier, monospace;
}
</style>
