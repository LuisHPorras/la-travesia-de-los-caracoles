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
          <img style="width: 100%; height: 100%" src="../assets/caracol.png" alt="Caracol">
          <!-- <div class="drawing">
            <div class="floating">
              <img src="../assets/caracol.png" alt="CaracolEnPompa">
            </div>
          </div> -->
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup id="group2" depth="3">
        <ParallaxLayer position="base">
          <img style="width: 100%; height: 100%" src="../assets/1.png" alt="Pared1">
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup id="group3" depth="4">
        <ParallaxLayer position="base">
          <img style="width: 100%; height: 100%" src="../assets/2.png" alt="Pared2">
        </ParallaxLayer>
      </ParallaxGroup>
    
      <ParallaxGroup id="group4" depth="3">
        <ParallaxLayer position="base">
            <img style="width: 100%; height: 100%" src="../assets/3.png" alt="Pared3">
        </ParallaxLayer>
      </ParallaxGroup>

      <ParallaxGroup id="group5" depth="2">
        <ParallaxLayer position="base">
          <img style="width: 200%; height: 100%" src="../assets/4puertas.png" alt="Puertas">
        </ParallaxLayer>
        <ParallaxLayer position="back">
          <img style="padding: 0 25%; width: 100%; height: 100%" src="../assets/interior1.png" alt="Interior1">
        </ParallaxLayer>
        <ParallaxLayer position="deep">
          <img style="padding: 0 15%; width: 100%; height: 100%" src="../assets/interior2.png" alt="Interior2">
        </ParallaxLayer>
      </ParallaxGroup>  
      <ParallaxGroup></ParallaxGroup>  
      <ParallaxGroup id="group4" depth="3">
        <ParallaxLayer position="base">
            <img style="width: 100%; height: 100%" src="../assets/3.png" alt="Pared3">
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
  },
  mounted() {
    var img_path = '../assets/';
    var imgs = ['4puertas.png', '1.png', '2.png', '3.png', 'interior1.png', 'interior2.png'];
    for (let i = 0; i < imgs.length; i++) {
      const img_src = img_path + imgs[i];
      let new_img = new Image();
      new_img.src = img_src;
    }
  },
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
