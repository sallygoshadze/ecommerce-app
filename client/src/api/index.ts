import axios from "axios";

const url = "http://localhost:5000/products";

export const fetchProducts = () => axios.get(url);
export const createProduct = (newProduct: any) => axios.post(url, newProduct);
