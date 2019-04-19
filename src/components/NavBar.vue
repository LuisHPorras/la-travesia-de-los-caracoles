<template>
  <div id="nav">
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
      <el-menu-item index="1">
        <router-link to="/">
          <img src="../assets/logo.png" alt="Anome" height=100%>
        </router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/about">Proyecto</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/workshops">Actividades</router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #nav a {
    font-weight: bold;
    color: #a2af8a;
  }

  #nav a.router-link-exact-active {
    color: #e9ad5e;
  }
  #nav .el-menu.el-menu--horizontal {
    border-bottom: 0;
  }
</style>
