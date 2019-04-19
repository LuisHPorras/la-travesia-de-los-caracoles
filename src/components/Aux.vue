<template>
  <div>
    <!-- Debug Mode -->
    <div class="debug">
      <label><input type="checkbox" v-model="checked"> Debug</label>
    </div>

    <div class="parallax" v-bind:class="{'debug-on': checked}">
      <div id="group1" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
          <div class="title">La travesía de los caracoles</div>
        </div>
      </div>
      <div id="group2" class="parallax__group">
        <div class="parallax__layer parallax__layer--base glass">
        <!-- <img style="width: 100%; height: 100%" src="../assets/near-background.png" alt="Forest1"> -->
        <div class="title">A veces necesitamos una pausa</div>
        </div>
        <div class="parallax__layer parallax__layer--back">
          <img style="width: 100%; height: 100%" src="../assets/far-background.png" alt="Forest">
          <!-- <div class="title">Background Layer</div> -->
        </div>
      </div>
      <div id="group3" class="parallax__group">
        <!-- <img style="width: 100%; height: 100%" src="../assets/near-background.png" alt="Forest1"> -->
        <div class="title">Tomar perspectiva para ver el bosque en lugar del árbol</div>
      </div>
      <div id="group4" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
        <div class="title">Nuestra sociedad ha perdido esta habilidad</div>
        </div>
        <div class="parallax__layer parallax__layer--back">
        <!-- <div class="title">Background Layer</div> -->
        </div>
        <div class="parallax__layer parallax__layer--deep">
        <!-- <div class="title">Deep Background Layer</div> -->
        </div>
      </div>
      <div id="group5" class="parallax__group">
        <div class="parallax__layer parallax__layer--fore">
        <el-button class="button-anome" type="success" @click="openLink('http://www.mariano-bueno.com/')" round>Mariano Bueno</el-button>
        <el-button class="edit-button-anome" type="success" icon="el-icon-edit" circle></el-button>
        <div class="presentation">
          <h1>Anome</h1>
          <p>En anome nos estamos organizando para crear una realidad diferente. Cada acción deja rastro como un asteroide, cuando lo miren nuestros sucesores desde el futuro esperamos que nos recuerden con amor.</p>
        </div>
        </div>
        <div class="parallax__layer parallax__layer--base">
        <div class="logo">
          <img style="width: 100%; height: 100%" src="../assets/anome.jpeg" alt="anome">
        </div>
        </div>
      </div>
      <div id="group6" class="parallax__group">
        <div class="parallax__layer parallax__layer--back">
        <div class="title">Background Layer</div>
        </div>
        <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
        </div>
      </div>
      <div id="group7" class="parallax__group">
        <div class="parallax__layer parallax__layer--base">
        <div class="title">Base Layer</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Parallax',
  data () {
    return {
      checked: false
    }
  },
  methods: {
    openLink: function (href) {
      let routeData = this.$router.resolve({ name: href })
      window.open(routeData.href, '_blank')
    }
  }
}
</script>

<style>
  .parallax {
    /* height: 500px; fallback for older browsers */
    position: absolute;
    height: 100%;
    width: 100%;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap;
    -webkit-perspective: 300px;
    perspective: 300px;
    scroll-behavior: smooth;
  }

  .parallax__group {
    position: relative;
    width: 100%;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    white-space: normal;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
  }

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
    z-index: 1;
  }

  .parallax__layer--base {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 4;
  }

  .parallax__layer--back {
    -webkit-transform: translateZ(-300px) scale(2);
    transform: translateZ(-300px) scale(2);
    z-index: 3;
  }

  .parallax__layer--deep {
    -webkit-transform: translateZ(-600px) scale(3);
    transform: translateZ(-600px) scale(3);
    z-index: 2;
  }

  /* Debugger styles - used to show the effect
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
  .debug-on .parallax__group {
    -webkit-transform: translate3d(0, 400px, -800px) rotateX(30deg);
    transform: translate3d(0, 700px, -800px) rotateX(-30deg);
  }
  .debug-on .parallax__layer {
    box-shadow: 0 0 0 2px #000;
    opacity: 0.9;
  }
  .parallax__group {
    -webkit-transition: -webkit-transform 0.5s;
    transition: transform 0.5s;
  }

  .parallax {
    font-size: 200%;
  }

  /* centre the content in the parallax layers */
  .title {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  .glass {
    -webkit-filter: blur(2px);
    filter: blur(2px);
    background-image: linear-gradient(to bottom right, rgb(196, 194, 194, 0.8), rgb(255, 255, 255, 0.8));
  }

  .logo {
    position: absolute;
    top: 25%;
    left: 0;
    width: 60%;
    height: 60%;
  }

  .presentation {
    text-align: center;
    font-size: 18px;
    padding: 15px 40px;
    width: 50%;
    position: absolute;
    left: 65%;
    top: 60%;
    background:rgba(206, 238, 198, 0.836);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    border: 1px solid rgba(224, 224, 224, 0.753);
    border-radius: 25px;
  }

  .button-anome {
    position: absolute;
    bottom: 12%;
    left: 60%;
  }

  .edit-button-anome {
    position: absolute;
    bottom: 12%;
    left: 72%;
  }

  /* style the groups
  --------------------------------------------- */

  #group1 {
    z-index: 5; /* slide over group 2 */
  }
  #group1 .parallax__layer--base {
    background: rgb(255, 255, 255);
  }

  #group2 {
    z-index: 3; /* slide under groups 1 and 3 */
  }
  #group2 .parallax__layer--back {
    background: rgb(123,210,102);
  }

  #group3 {
    z-index: 4; /* slide over group 2 and 4 */
  }
  #group3 .parallax__layer--base {
    background: rgb(255, 255, 255);
  }

  #group4 {
    z-index: 2; /* slide under group 3 and 5 */
  }
  #group4 .parallax__layer--deep {
    background: rgb(255, 255, 255);
  }

  #group5 {
    z-index: 3; /* slide over group 4 and 6 */
  }
  #group5 .parallax__layer--base {
    background: rgb(255, 255, 255);
  }

  #group6 {
    z-index: 2; /* slide under group 5 and 7 */
  }
  #group6 .parallax__layer--back {
    background: rgb(245,235,100);
  }

  #group7 {
    z-index: 3; /* slide over group 7 */
  }
  #group7 .parallax__layer--base {
    background: rgb(255,241,100);
  }
</style>
