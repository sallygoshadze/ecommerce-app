import mongoose, { FilterQuery } from "mongoose";
import Product, { IProduct } from "../models/product";
import { Request, Response } from 'express';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const filter: FilterQuery<IProduct> = {};

    if (req.query.category) {
      filter.category = req.query.category as string;
    }

    const products = await Product.find(filter);
    res.status(200).json(products);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createProduct = async (req: Request, res: Response) => {
  const product = req.body;
  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const product = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No product with that id: ${id}`);
  }

  const updatedProduct = await Product.findByIdAndUpdate(
    id,
    { ...product },
    {
      new: true,
    }
  );

  res.json(updatedProduct);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No product with that id: ${id}`);
  }

  await Product.findByIdAndRemove(id);

  res.json({ message: "Product deleted successfully" });
};
