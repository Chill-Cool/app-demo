<template>
 <el-form label-position="left" label-width="90px" action="#" @submit.prevent="onSubmit">
    <el-alert v-if="errorsPresent" title="Please fill out all fields!" type="error" :closable="false" show-icon></el-alert>
    <el-form-item label="SKU" prop="">
      <el-input type="text" v-model="item.sku" autocomplete="off" maxlength="10" show-word-limit clearable></el-input>
    </el-form-item>
    <el-form-item label="Name" prop="">
      <el-input type="text" v-model="item.name" autocomplete="off" clearable></el-input>
    </el-form-item>
    <el-form-item label="Category" prop="">
      <el-select v-model="item.category" placeholder="Select">
        <el-option-group
          v-for="group in categories"
          :key="group.label"
          :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item label="Location" prop="">
      <el-select v-model="item.location" placeholder="Select" class="long">
        <el-option-group
          v-for="group in locations"
          :key="group.label"
          :label="group.label">
          <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-option-group>
      </el-select>
    </el-form-item>
    <el-form-item label="Description" prop="">
      <el-input type="textarea" :rows="2" v-model="item.description" autocomplete="off" autosize></el-input>
    </el-form-item>
    <item-details></item-details>
    <el-button-group>
      <el-button type="success" @click="onSubmit">Save</el-button>
      <el-button type="danger" disabled>Publish</el-button>
      <!-- Need to offer options of where to be published and option of unpublishing-->
    </el-button-group>
  </el-form>
</template>

<script>
import itemDetails from '../components/itemDetails.vue';
export default {
  name: 'form-item',
  components: {
    'item-details': itemDetails
  },
  props: {
    item: {
      type: Object,
      required: false,
      default: () => {
        return {
          sku: ''
        };
      }
    }
  },
  data() {
    return {
      categories: [{
        options: [{
          value: 'Coffee',
          label: 'Coffee'
        }, {
          value: 'Tea',
          label: 'Tea'
        }, {
          value: 'Pastry',
          label: 'Pastry'
        }, {
          value: 'Desserts',
          label: 'Desserts'
        }, {
          value: 'Souvenir',
          label: 'Souvenir'
        }]
      }, {
        options:[{
          value: 'Add',
          label: 'Add...'
        }]
      }],
      locations: [{
        options: [{
          value: '1424 W. Taylor St. Chicago, IL 60607',
          label: '1424 W. Taylor St. Chicago, IL 60607'
        }, {
          value: '1215 20th St, Denver, CO 80202',
          label: '1215 20th St, Denver, CO 80202'
        }]
      }, {
        options:[{
          value: 'Add',
          label: 'Add...'
        }]
      }],
      category: [],
      location: [],
      errorsPresent: false
    };
  },
  methods: {
    onSubmit: function() {

      //To be refined
      if (this.item.sku === '' || this.item.name === '') {
        this.errorsPresent = true;
      } else {
        this.$emit('createOrUpdate', this.item);
      }
    }
  }
};
</script>

<style scoped>
.el-alert--error {
  margin: 15px;
}
button{
  margin-top: 30px;
}
.el-select.long {
  width: 450px;
}
</style>