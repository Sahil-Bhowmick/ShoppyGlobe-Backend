import Product from "../models/productModel.js";

export const getAllProducts = async (req, res, next) => {
  try {
    let products = await Product.find();

    if (products.length === 0) {
      // Dummy products array
      const dummyProducts = [
        {
          productId: 1,
          name: "Sample Product 1",
          price: 19.99,
          description: "This is a sample product",
          stock: 10,
        },
        {
          productId: 2,
          name: "Sample Product 2",
          price: 29.99,
          description: "Another sample product",
          stock: 5,
        },
      ];

      // Insert dummy products into DB
      await Product.insertMany(dummyProducts);
      products = await Product.find();
    }

    res.json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (error) {
    next(error);
  }
};
