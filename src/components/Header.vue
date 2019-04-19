<template>
  <div class="actions">
      <div class="action">
        <el-popover
          placement="bottom"
          trigger="click"
          width="500"
          v-model="visible">
          <div class="map">
            <el-row>
              <el-col :span="4">
                <el-button icon="el-icon-location" @click="visible = false" circle></el-button>
              </el-col>
              <el-col :span="4">
                <el-button icon="el-icon-location" @click="visible = false" circle></el-button>
              </el-col>
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
              <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
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

  .map {
    background-image: url("../assets/anome.jpeg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 500px;
  }
</style>
