<template>
  <div>
    <h1>New Product</h1>
    <form-new @createOrUpdate='createOrUpdate'></form-new>
  </div>
</template>

<script>
import formItem from '../components/formItem.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'new-item',
  components: {
    'form-new': formItem
  },
  methods: {
    createOrUpdate: async function(item) {
      const res = await api.createOne(item);
      this.flash('Product created', 'success');
      this.$router.push(`/pim/${res._id}`);
    }
  }
};
</script>
<style scoped>
div {
	position: absolute;
	top:15%;
	left: 16%;
	width: 80%;
	text-align: left;
	z-index: -1;
}
</style>