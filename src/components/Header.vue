<template>
  <div class="actions">
      <div class="action">
        <!-- <img class="buble" src="../assets/pompa_acciones.png" alt="PompaAcciones" />
        <img class="buble2" src="../assets/pompa_acciones.png" alt="PompaAcciones" /> -->
        <el-popover
          placement="bottom"
          trigger="click"
          v-model="visible">
          <div class="map">
            <el-row>
              <el-col :span="8">
                <a class="plain-link" href="#group1">La Haya</a>
              </el-col>
              <el-col :span="8">
                <a class="plain-link" href="#group2">Rotterdam</a>
              </el-col>
              <el-col :span="8">
                <a class="plain-link" href="#group3">Amberess</a>
              </el-col>
            </el-row>
          </div>
          <el-button class="el-button" icon="el-icon-menu" slot="reference"></el-button>
        </el-popover>
      </div>
      <div class="action">
        <el-popover
          placement="bottom"
          trigger="click"
          width="300"
          v-model="visible2">
          <p style="margin: 10px">Comparte este proyecto con los tuyos:</p>
          <div style="text-align: center; margin: 10px 0">
            <facebook-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" />
            <twitter-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" title="Documental: La travesía de los caracoles" />
            <whatsapp-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" title="Documental: La travesía de los caracoles" />
            <telegram-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" title="Documental: La travesía de los caracoles" />
            <pinterest-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" />
            <email-share-button class="share-button" scale="2" url="https://latravesiadeloscaracoles.netlify.com/#/" subject="Documental: La travesía de los caracoles" />
          </div>
          <el-button icon="el-icon-share" slot="reference"></el-button>
        </el-popover>
      </div>
    </div>
</template>

<script>
import { Facebook, Twitter, WhatsApp, Telegram, Pinterest, Email } from 'vue-socialmedia-share'

export default {
  components: {
    'facebook-share-button': Facebook,
    'twitter-share-button': Twitter,
    'whatsapp-share-button': WhatsApp,
    'telegram-share-button': Telegram,
    'pinterest-share-button': Pinterest,
    'email-share-button': Email
  },
  data () {
    return {
      visible: false,
      visible2: false
    }
  }
}
</script>

<style>
/* User actions
  --------------------------------------------- */
  .actions {
    position: fixed;
    margin: auto;
    width:100%;
    z-index: 998;
    color:rgb(36, 34, 32);
    border-radius: 5px 5px 5px 5px;
  }

  .action {
    padding: 15px 0;
    display: inline-block;
  }

  .action i {
    font-size: 30px;
  }

  .plain-link:link, .plain-link:visited {
    text-decoration: none;
    color: black;
    display: inline-block;
    text-align: center;
    margin: 5px;
  }

  .buble {
    position: absolute;
    height: 60px;
    z-index: -1;
    left: calc(50vw - 75px);
    top: 10px;
  }

  .buble2 {
    position: absolute;
    height: 60px;
    z-index: -1;
    left: calc(50vw);
    top: 10px;
  }

  .map {
    /* background-image: url("../assets/anome.jpeg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px; */
  }

  .share-button {
    padding-right: 10px;
  }

</style>
