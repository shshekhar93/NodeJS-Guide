const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  orderDate: Date,
  buyerEmail: String,
  shippingAddress: {
    addressLine: String,
    city: String,
    state: String,
    zip: Number
  },
  items: [{
    name: String,
    quantity: Number,
    price: Number,
    currencyCode: String
  }]
});

const OrdersModel = mongoose.model('order', OrdersSchema);
