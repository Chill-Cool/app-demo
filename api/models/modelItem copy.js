const mongoose = require('mongoose');

const { Schema } = mongoose;

const schemaItem = new Schema(
  {
    name: {
      type: String,
      required: [true, 'This field cannot be blank']
    },
    sku: {
      type: String, unique: true,
      required: [true, 'This field cannot be blank'],
      validate: {
        validator: function (v) {
          var re = /^\d{10}$/; //Must be exactly 10 digits number string
          return (v == null || v.trim().length < 1) || re.test(v)
        },
        message: 'Must be exactly 10 digits number string.'
      }
    },
    description: {
      type: String,
      required: [true, 'This field cannot be blank']
    },
    category: {
      type: String,
      required: [true, 'This field cannot be blank']
    },
    location: {
      type: String,
      required: [true, 'This field cannot be blank']
    }
  },
  { collection: 'products' }
);

module.exports = mongoose.model('products', schemaItem);