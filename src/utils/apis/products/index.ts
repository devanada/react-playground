import {
  getProducts,
  getDetailProduct,
  createProducts,
  deleteProduct,
  updateProduct,
} from "./api";
import { productsSampleData } from "./sampleData";
import { productSchema, ProductType } from "./types";

export {
  getProducts,
  getDetailProduct,
  createProducts,
  deleteProduct,
  updateProduct,
  productsSampleData,
  productSchema,
};

export type { ProductType };
