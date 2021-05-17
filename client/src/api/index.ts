import axios from "axios";

const url = "http://localhost:5000/products";

export const fetchProducts = async (category?: string) => {
  let getUrl = url;

  if (category) getUrl = `${getUrl}?category=${category}`;

  return await axios.get(getUrl);
};
export const createProduct = async (newProduct: any) =>
  await axios.post(url, newProduct);
export const updateProduct = async (id: any, updatedProduct: any) =>
  await axios.patch(`${url}/${id}`, updatedProduct);
export const deleteProduct = async (id: any) =>
  await axios.delete(`${url}/${id}`);
