<template>
<el-collapse accordion>
  <el-collapse-item name="1">
    <template slot="title">
      <h2>Add Details...</h2>
    </template>
    <template>
      <el-form label-position="left" label-width="90px" action="#" @submit.prevent="onSubmit">
        <el-alert v-if="errorsPresent" title="Please fill out all fields!" type="error" :closable="false" show-icon></el-alert>
        <el-form-item label="SKU" prop="">
          <el-input type="text" v-model="item.sku" autocomplete="off" maxlength="10" show-word-limit clearable></el-input>
        </el-form-item>
        <el-form-item label="Name" prop="">
          <el-input type="text" v-model="item.name" autocomplete="off" clearable></el-input>
        </el-form-item>
        <el-form-item label="Temperature" prop="">
          <el-select v-model="temp" placeholder="Select" class="short">
            <el-option v-for="item in temps" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Size" prop="">
          <el-select v-model="size" placeholder="Select" class="short">
            <el-option v-for="item in sizes" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Price" prop="">
          <masked-input
            type="text"
            class="form-control"
            v-model="price"
            :mask="numberMask"
            :guide="false"
            :showMask="true"
            :placeholder="currencyPlaceholder">
          </masked-input>
          <el-button plain class="customized" v-html="currency"></el-button>
        </el-form-item>
        <el-form-item label="Add-On" prop="">
          <el-select v-model="addon" placeholder="Select" multiple class="long">
          <el-option-group
            v-for="group in addons"
            :key="group.label"
            :label="group.label">
            <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="Sweetness" prop="">
          <el-select v-model="sweetnessLevel" placeholder="Select" multiple class="long">
            <el-option-group
              v-for="group in sweetness"
              :key="group.label"
              :label="group.label">
              <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-option-group>
          </el-select>
        </el-form-item>
        <el-form-item label="Purchased" prop="">
          <el-button type="info" plain v-html="purchased"></el-button>
        </el-form-item>
        <el-form-item label="Rating" prop="">
          <el-rate
            v-model="rating"
            disabled
            show-score
            text-color="#ff9900">
          </el-rate>
        </el-form-item>
      </el-form>
    </template>
  </el-collapse-item>
</el-collapse>
 
</template>

<script>
import createNumberMask from 'text-mask-addons/dist/createNumberMask';

export default {
  name: 'form-item-details',
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
      temps: [{
        value: 'Cold',
        label: 'Cold'
      }, {
        value: 'Hot',
        label: 'Hot'
      }],
      sizes: [{
        value: '16oz',
        label: '16oz'
      }, {
        value: '22oz',
        label: '22oz'
      }],
      addons: [{
        options: [{
          value: 'Bobba',
          label: 'Bobba'
        }, {
          value: 'Crystal Bobba',
          label: 'Crystal Bobba'
        }, {
          value: 'Brown Sugar Bobba',
          label: 'Brown Sugar Bobba'
        }, {
          value: 'White Mustachs',
          label: 'White Mustachs'
        }, {
          value: 'Shot',
          label: 'Shot'
        }]
      }, {
        options:[{
          value: 'Add',
          label: 'Add...'
        }]
      }],
      sweetness: [{
        options: [{
          value: 'Zero-Sugar',
          label: 'Zero Sugar'
        }, {
          value: '30%',
          label: '30%'
        }, {
          value: '50%',
          label: '50%'
        }, {
          value: '70%',
          label: '70%'
        }, {
          value: '100%',
          label: '100%'
        }]
      }, {
        options:[{
          value: 'Add',
          label: 'Add...'
        }]
      }],
      temp: [],
      size: [],
      addon: [],
      sweetnessLevel: [],
      errorsPresent: false,
      numberMask: createNumberMask({
					prefix: '$' + ' ',
					allowDecimal: true,
					decimalLimit: 2, 
					integerLimit: 4
				}),
        price: '',
        currency: 'USD',
        currencyPlaceholder: '$' + ' 0.00',
        purchased: 19998,
        rating: 4.9
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
.form-control {
  -webkit-appearance: none;
  background-color: #FFF;
  background-image: none;
  border-radius: 4px 0px 0px 4px;
  border-top: 1px solid #DCDFE6;
  border-right: 1px solid #DCDFE6;
  border-bottom: 1px solid #DCDFE6;
  border-left: 1px solid #DCDFE6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: 0;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 120px;
}
::placeholder{
  color: #DCDFE6;
}
.form-control:focus {
  border-right: 1px solid #409EFF;
  border-color: #409EFF;
  color: #606266;
}
.el-button.customized, .el-button.customized:hover, .el-button.customized:focus {
  border-left: 0!important;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  color: #909399;
  border: 1px solid #DCDFE6;
  cursor: default;
}
>>> .el-select__tags-text {
  max-width: 120px!important;
  overflow: hidden!important;
  text-overflow: ellipsis!important;
  white-space: nowrap!important;
  display: inline-block!important;
  vertical-align: middle!important;
}
.el-select.long {
  width: 450px;
}
.el-select.short {
  width: 90px;
}
.el-rate {
  line-height: 2.5
}
</style>