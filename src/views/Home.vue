<template>
  <div>
    <!-- User Actions -->
    <Header></Header>

    <!-- First parallax scene -->
    <Parallax>
      <ParallaxGroup id="group3">
        <div class="flat-layer">
          <h1>Sin fondo</h1>
        </div>
      </ParallaxGroup>
      <ParallaxGroup id="group1">
        <ParallaxLayer position="fore">
          <div class="title">La travesía de los caracoles</div>
        </ParallaxLayer>
        <ParallaxLayer position="back">
          <div class="drawing">
            <div class="floating">
              <img src="../assets/caracoles-pompas.png" alt="CaracolEnPompa" class="floating">
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer position="deep" style="background-color: blue">
          <div class="title">Sin fondamen</div>
        </ParallaxLayer>
      </ParallaxGroup>
      <ParallaxGroup id="group2">
        <ParallaxLayer position="base">
          <img style="width: 100%; height: 100%" src="../assets/near-background.png" alt="Bosque">
        </ParallaxLayer>
        <ParallaxLayer position="deep">
          <img style="width: 100%; height: 100%" src="../assets/far-background.png" alt="BosqueProfundo">
        </ParallaxLayer>
      </ParallaxGroup>
    </Parallax>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Parallax from '../components/Parallax.vue'
import ParallaxGroup from '../components/ParallaxGroup.vue'
import ParallaxLayer from '../components/ParallaxLayer.vue'
import FlatLayer from '../components/FlatLayer.vue'


export default {
  name: 'home',
  components: {
    Header,
    Parallax,
    ParallaxGroup,
    ParallaxLayer,
    FlatLayer
  }
}
</script>

<style>

  body, html {
    overflow: hidden;
  }

  body {
    font: 100% / 1.5 Arial;
  }

  * {
    margin:0;
    padding:0;
  }

  #group1 {
    z-index: 5;
  }

  #group2 {
    z-index: 4;
  }
  #group3 {
    z-index: 6;
  }

  .title {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 85%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .drawing {
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .floating{
    -moz-animation-name: Floating;
    -moz-animation-duration: 3s;
    -moz-animation-iteration-count: infinite;
    -moz-animation-timing-function: ease-in-out;
  }

  @-moz-keyframes Floating{
    from {-moz-transform: translate(0, 0px);}
    65% {-moz-transform: translate(0, 15px);}
    to {-moz-transform: translate(0, -0px);}
  }

</style>
