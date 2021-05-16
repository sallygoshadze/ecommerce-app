import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  creator: String,
  title: String,
  price: Number,
  description: String,
  category: String,
  selectedFile: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
