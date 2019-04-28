<template>
  <div>
    <!-- User Actions -->
    <Header></Header>

    <!-- First parallax scene -->
    <Parallax perspective="300" horizontal>
      <ParallaxGroup id="group1" depth="5">
        <ParallaxLayer position="base" >
          <div class="title">La travesía de los caracoles</div>
        </ParallaxLayer>
        <ParallaxLayer position="base" >
          <div class="drawing">
            <div class="floating">
              <img src="../assets/caracoles-pompas.png" alt="CaracolEnPompa">
            </div>
          </div>
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup id="group2" depth="3">
        <ParallaxLayer position="base">
          <img style="width: 100%; height: 100%" src="../assets/near-background.png" alt="Bosque">
        </ParallaxLayer>
        <ParallaxLayer position="deep">
          <img style="width: 100%; height: 100%" src="../assets/far-background.png" alt="BosqueProfundo">
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup id="group3" depth="4">
        <ParallaxLayer position="base">
          <img style="width: 100%; height: 100%" src="../assets/near-background.png" alt="Bosque">
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

export default {
  name: 'home',
  components: {
    Header,
    Parallax,
    ParallaxGroup,
    ParallaxLayer
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
    background-color: white;
  }

  .title {
    /* border: 2px solid blue; */
    text-align: center;
    position: absolute;
    left: 50%;
    top: 85%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .drawing {
    /* border: 2px solid blue; */
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
    animation-name: Floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @-moz-keyframes Floating{
    from {-moz-transform: translate(0, 0px); transform: translate(0, 0px);}
    65% {-moz-transform: translate(0, 15px); transform: translate(0, 15px);}
    to {-moz-transform: translate(0, -0px); transform: translate(0, -0px);}
  }

</style>
