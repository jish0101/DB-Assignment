# Answers.md

### Q1. Explain the relationship between the "Product" and "Product_Category" entities from the above diagram.

**Ans 1:** The relationship between Product and Product category is likely to be a one-to-many relationship, where:
- One category can belong to more than one product.
- One product cannot belong to many categories.
  
`category_id` is a foreign key in the product table referencing the primary key 'id' in the category table. This relationship allows for filtering products based on a specific category_id.

### Q2. How could you ensure that each product in the "Product" table has a valid category assigned to it?

**Ans 2:** 
- **In SQL**: We can put a constraint between the 'category_id' column in the product table and the primary key 'id' column in the product category table. This ensures that every value in the 'category_id' column of the product table must match a valid primary key value in the 'id' column of the product category table.

    ```sql
    ALTER TABLE product ADD CONSTRAINT fk_product_category FOREIGN KEY (category_id) REFERENCES product_category(id);
    ```

- **In MongoDB/Mongoose**: We can use a middleware and the 'pre' function to ensure we have a valid category_id before it gets saved.

    ```javascript
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
    ```

This setup ensures data integrity by validating that each product in the "Product" table has a valid category assigned to it before saving.
