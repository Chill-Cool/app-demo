<template>
  <div>
	<el-table :data="items" id="item-list">
    <el-table-column v-for="(col, i) in columns" :key="i" v-bind="col">
    </el-table-column>
    <el-table-column fixed="right" label="Operations" width="150">
      <template v-slot:default="table">
        <router-link :to="{name: 'show', params: { id: table.row._id }}" tag="span">
          <el-button type="primary" icon="el-icon-more" circle>
          </el-button>
        </router-link>
        <router-link :to="{name: 'edit', params: { id: table.row._id }}" tag="span">
          <el-button type="success" icon="el-icon-edit" circle>
          </el-button>
        </router-link>
        <el-button type="danger" icon="el-icon-delete" circle @click.prevent="onDestroy(table.row._id)">
        </el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
</template>

<script>
import { api } from '../helpers/helpers';
export default {
  name: 'items',
  data() {
    return {
      items: [],
      columns: []
    };
  },
  methods: {
    async onDestroy(id) {
      const sure = window.confirm('Are you sure?');
      if (!sure) return;
      await api.deleteOne(id);
      this.flash('Item deleted sucessfully!', 'success');
      const newItems = this.items.filter(item => item._id !== id);
      this.items = newItems;
    }
  },
  async mounted() {
    this.items = await api.getAll();
    for (const property in this.items[0]) {
      property.slice(0,1) !=='_' ? this.columns.push({prop : property, label: property.toUpperCase()}) : true
    }
  }
};
</script>
<style scoped>
#item-list {
	position: absolute;
	top:15%;
	left: 16%;
	width: 80%;
	text-align: left;
	z-index: -1;
}
</style>