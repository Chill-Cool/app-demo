<template>
  <div id="app">
    <div class="ui inverted segment navbar">
      <div class="ui center aligned container">
        <div class="ui large secondary inverted pointing menu compact">
          <router-link to="/" exact class="item">
           <el-button type="text" icon="el-icon-s-goods">Store</el-button>
          </router-link>
          <router-link to="/pim" exact class="item">
           <el-button type="text" icon="el-icon-menu">Show All</el-button>
          </router-link>
          <router-link to="/pim/new" class="item">
            <el-button type="text" icon="el-icon-circle-plus-outline">New</el-button>
          </router-link>
        </div>
      </div>
    </div>
    <banner-main />
    <!--<side-bar />
    -->
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
// import sideBar from './components/sideBar.vue';
import bannerMain from './components/bannerMain.vue';

export default {
  name: 'app',
  components: {
    // 'side-bar': sideBar,
    'banner-main': bannerMain
  },
  methods: {

    }
};
</script>
<style scoped>
.navbar {
  height: 50px;
}
</style>
