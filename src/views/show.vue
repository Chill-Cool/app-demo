<template>
  <div>
    <h1>Show Product</h1>

   
    <div class="ui labeled input fluid">
      <div class="ui label">
      SKU
      </div>
      <input type="text" readonly  :value="item.sku"/>
    </div>

     <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i>Name
      </div>
      <input type="text" readonly  :value="item.name"/>
    </div>
    <div class="ui labeled input fluid">
      <div class="ui label">
        <i class="info circle icon"></i>Description
      </div>
      <input type="text" readonly  :value="item.description"/>
    </div>
    <div class="actions">
      <router-link :to="{ name: 'edit', params: { id: this.$route.params.id }}">
        Edit Product
      </router-link>
    </div>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'show',
  data() {
    return {
      item: ''
    };
  },
  async mounted() {
    this.item = await api.getOne(this.$route.params.id);
  }
};
</script>

<style scoped>
.actions a {
  display: block;
  text-decoration: underline;
  margin: 20px 10px;
}
</style>