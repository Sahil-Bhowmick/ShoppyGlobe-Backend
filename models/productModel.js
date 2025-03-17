import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productId: { type: Number, unique: true, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    stock: { type: Number, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);
