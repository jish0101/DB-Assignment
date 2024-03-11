const Product = require('./product');
const ProductCategory = require('./productCategory');

ProductCategory.hasMany(Product);
Product.belongsTo(ProductCategory, { foreignKey: 'category_id' });
