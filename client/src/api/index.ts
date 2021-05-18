import axios from "axios";
import { ProductForm } from "../components/ProductForm";

const url = "http://localhost:5000/products";

export const fetchProducts = async (category?: string) => {
  let getUrl = url;

  if (category) getUrl = `${getUrl}?category=${category}`;

  return await axios.get(getUrl);
};
export const createProduct = async (newProduct: ProductForm) =>
  await axios.post(url, newProduct);
export const updateProduct = async (id: string, updatedProduct: ProductForm) =>
  await axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = async (id: string) =>
  await axios.delete(`${url}/${id}`);
