<template>
  <div class="actions">
      <div class="action">
        <el-popover
          placement="bottom"
          trigger="click"
          v-model="visible">
          <!-- <a class="plain-link" href="#group1">La Haya</a>
          <a class="plain-link" href="#group1">La Haya</a>
          <a class="plain-link" href="#group1">La Haya</a> -->
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
          <el-button icon="el-icon-menu" slot="reference"></el-button>
        </el-popover>
      </div>
      <div class="action">
        <el-popover
          placement="bottom"
          trigger="click"
          width="300"
          v-model="visible2">
          <p>Are you sure to delete this?</p>
          <div style="text-align: right; margin: 0">
            <el-button size="mini" type="text" @click="visible2 = false">cancel</el-button>
            <el-button type="primary" size="mini" @click="visible2 = false">confirm</el-button>
          </div>
          <el-button icon="el-icon-share" slot="reference"></el-button>
        </el-popover>
      </div>
    </div>
</template>

<script>
export default {
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
    padding: 15px 20px;
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

  .map {
    /* background-image: url("../assets/anome.jpeg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px; */
  }
</style>
