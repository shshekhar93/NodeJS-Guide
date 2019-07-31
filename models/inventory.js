'use strict';
const mongoose = require('mongoose');

/**
 * Fields to store
 * - Name
 * - Description
 * - Category
 * - Sub category
 * - Price
 * - Seller
 * - Rating
 * - Image (base64 encoded)
 */
const InventorySchema = new mongoose.Schema({
  name: String,
  description: String,
  category: String,
  subCategory: String,
  price: Number
});

const InventoryModel = mongoose.model('inventory', InventorySchema);

module.exports = InventoryModel;
