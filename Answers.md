# Answers:

Q1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

Ans 1:
The relationship between Product and Product category is likely to be a one to many relationship, where one category can belong to more than one product but one product cannot belong to many catogories.
category_id is a foreign key in product table referencing primary key 'id' in category table. and it can be used to filter out products based on a specific category_id.

Q2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

Ans 2:
In SQL, We can put a constraint between 'category_id' column in the product table and the primary key 'id' column in product category table, it ensures that every value in the 'category_id' column of the product table must match a valid primary key value in the 'id' column of the product category table.

example: 
ALTER TABLE product
ADD CONSTRAINT fk_product_category
FOREIGN KEY (category_id)
REFERENCES product_category(id);

In Mongodb/mongoose, We can use a middleware and 'pre' function to make sure we have a valid category_id before it gets saved.

example:
productSchema.pre('save', async function(next) {
  try {
    const category = await mongoose.model('ProductCategory').findById(this.category);
    if (!category) {
      throw new Error('Invalid category');
    }
    next();
  } catch (error) {
    next(error);
  }
});
