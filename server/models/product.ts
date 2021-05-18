import { Document, Model, Schema, model } from "mongoose";

export interface IProduct extends Document {
  creator: string,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
}

const productSchema: Schema = new Schema({
  creator: String,
  title: String,
  price: Number,
  description: String,
  category: String,
  selectedFile: String,
}, { timestamps: true });

const Product: Model<IProduct> = model("Product", productSchema);

export default Product;
