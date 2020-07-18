<template>
  <div>
    <!--<div class="page-component__scroll el-scrollbar__wrap">
    </div>-->
    <side-bar />
    <list-item></list-item>
    <backtop />
  </div>
</template>

<script>
import listItem from '../components/listItem.vue';
import backtop from '../components/backtop.vue';
import sideBar from '../components/sideBar.vue';

export default {
  name: 'item',
  components: {
    'list-item': listItem,
    'backtop': backtop,
    'side-bar': sideBar
  }
};
</script>
<style scoped>

</style>