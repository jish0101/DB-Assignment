const express = require("express");
const { connectToDatabase } = require("./config/dbConfig");
// const Product = require("./models/product");
// const ProductCategory = require("./models/productCategory");
// const Discount = require("./models/discount");
// const ProductInventory = require("./models/productInventory");
const app = express();

connectToDatabase().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
