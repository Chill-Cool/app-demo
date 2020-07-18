<template>
  <div>
    <h1>Edit Product</h1>
    <form-item @createOrUpdate='createOrUpdate' :item=this.item></form-item>
  </div>
</template>

<script>
import formItem from '../components/formItem.vue';
import { api } from '../helpers/helpers';

export default {
  name: 'edit',
  components: {
    'form-item': formItem
  },
  data: function() {
    return {
      item: {}
    };
  },
  methods: {
    createOrUpdate: async function(item) {
      await api.updateOne(item);
      this.flash('Item updated sucessfully!', 'success');
      this.$router.push(`/pim/${item._id}`);
    }
  },
  async mounted() {
    this.item = await api.getOne(this.$route.params.id);
  }
};
</script>