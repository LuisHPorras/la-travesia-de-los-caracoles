<template>
  <div class="background">
    <!-- User Actions -->
    <transition name="slide-fade-actions">
      <Header v-on:load="onLoaded" v-show="loaded" />
    </transition>

    <!-- First parallax scene -->
    <div class="container1">
      <Parallax :perspective="300" horizontal>
        <ParallaxGroup id="g1" :depth="5">
          <ParallaxLayer position="base" >
            <transition name="fade" >
              <img class="float" v-on:load="onLoaded" v-show="loaded" style="height: 100%" src="../assets/images/caracol.png" alt="Caracol">
            </transition>
          </ParallaxLayer>
          <ParallaxLayer position="base" >
            <div>
              <transition name="slide-fade-title">
                <div v-on:load="onLoaded" v-show="loaded" class="title">La travesía de los caracoles</div>
              </transition>
              <transition name="fade">
                <div v-on:load="onLoaded" v-show="loaded" class="advise1">Desliza horizontalmente</div>
              </transition>
            </div>
          </ParallaxLayer>
        </ParallaxGroup>

        <ParallaxGroup id="g2" :depth="3">
          <ParallaxLayer position="base">
            <!-- <div class="video">
              <promo-v class="video-player-box" ref="videoPlayer" :options="playerOptions" />
            </div> -->
            <div style="height: 100%; width: 100%; background-color: white" />
          </ParallaxLayer>
        </ParallaxGroup>

        <ParallaxGroup id="g3" :depth="3">
          <ParallaxLayer position="base">
            <img style="height: 100%" src="../assets/images/1.png" alt="Pared1">
          </ParallaxLayer>
        </ParallaxGroup>

        <ParallaxGroup id="g4" :depth="4">
          <ParallaxLayer position="base">
            <img style="height: 100%" src="../assets/images/2.png" alt="Pared2">
          </ParallaxLayer>
        </ParallaxGroup>

        <ParallaxGroup id="g5" :depth="3">
          <ParallaxLayer position="base">
              <img style="height: 100%" src="../assets/images/3.png" alt="Pared3">
          </ParallaxLayer>
        </ParallaxGroup>

        <ParallaxGroup id="g6" :depth="2">
          <ParallaxLayer position="base">
            <img style="height: 100%" src="../assets/images/4puertas.png" alt="Puertas">
          </ParallaxLayer>
          <ParallaxLayer position="back">
            <img style="padding: 0 25%; height: 100%" src="../assets/images/interior1.png" alt="Interior1">
          </ParallaxLayer>
          <ParallaxLayer position="deep">
            <img style="padding: 0 15%; height: 100%" src="../assets/images/interior2.png" alt="Interior2">
          </ParallaxLayer>
        </ParallaxGroup>
        <ParallaxGroup></ParallaxGroup>

        <ParallaxGroup id="g7" :depth="3">
          <ParallaxLayer position="base">
              <img style="height: 100%" src="../assets/images/3.png" alt="Pared3">
          </ParallaxLayer>
        </ParallaxGroup>
      </Parallax>
    </div>
    <Footer />
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Parallax from '../components/Parallax.vue'
import ParallaxGroup from '../components/ParallaxGroup.vue'
import ParallaxLayer from '../components/ParallaxLayer.vue'

export default {
  name: 'home',
  data: function () {
    return {
      loaded: false,
      playerOptions: {
        // videojs options
        muted: false,
        language: 'es',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        sources: [{
          type: 'video/mp4',
          src: '../assets/videos/promo.mp4'
        }],
        poster: '../assets/images/poster-promo.png'
      }
    }
  },
  components: {
    Header,
    Footer,
    Parallax,
    ParallaxGroup,
    ParallaxLayer,
    'promo-v': videoPlayer
  },
  // mounted () {
  //   // // Load images
  //   // var imgPath = '../assets/'
  //   // var imgs = ['4puertas.png', '1.png', '2.png', '3.png', 'interior1.png', 'interior2.png']
  //   // for (let i = 0; i < imgs.length; i++) {
  //   //   const imgSrc = imgPath + imgs[i]
  //   //   let newImg = new Image()
  //   //   newImg.src = imgSrc
  //   // }
  // },
  methods: {
    onLoaded () {
      this.loaded = true
    }
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

  .background {
    background-color: white;
    align-content: center;
  }

  .container1 {
    position: relative;
    width: 131vh;
    height: 100vh;
    margin: 0 calc((100vw - 133.33333333vh)/2);
  }

  .video {
    position: absolute;
    left: 0;
    top: 20vh;
    height: 100%;
    width: 100%;
  }

  .title {
    font-size: medium;
    font-style: italic;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 70%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .advise1 {
    color: rgba(0,0,0,0.2);
    font-size: 2.5vh;
    text-align: center;
    position: absolute;
    left: 50%;
    top: 90%;
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

  .float {
    -moz-animation: floating 3s ease-in-out infinite;
    animation: floating 3s ease-in-out infinite;
  }

  @keyframes floating{
    0% {
      -moz-transform: translate(0, 0px);
      transform: translate(0, 0px);
    }
    65% {
      -moz-transform: translate(0, 15px);
      transform: translate(0, 15px);
    }
    100% {
      -moz-transform: translate(0, -0px);
      transform: translate(0, -0px);
    }
  }

  .fade-enter-active {
    animation: delay-fade 4s ease-in-out;
  }

  @keyframes delay-fade{
    0% {
      opacity: 0;
    }
    48% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .slide-fade-title-enter-active {
    animation: delay-slide-fade 2s ease;
  }

  @keyframes delay-slide-fade{
    0% {
      -moz-transform: translate(-201px, 30px);
      transform: translate(-201px, 30px);
      opacity: 0;
    }
    50% {
      -moz-transform: translate(-201px, 30px);
      transform: translate(-201px, 30px);
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .slide-fade-actions-enter-active {
    transition: all 0.8s ease;
  }

  .slide-fade-actions-enter {
    transform: translateY(-30px);
    opacity: 0;
  }

</style>
