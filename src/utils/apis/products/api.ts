import axiosWithConfig from "../axiosWithConfig";
import { ProductType } from "./types";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");

    return response.data as ProductType[];
  } catch (error: any) {
    throw Error("Failed to get products");
  }
};

export const createProducts = async (data: ProductType) => {
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.post("/products", newData);

    return response.data;
  } catch (error: any) {
    throw Error("Failed to create a new product");
  }
};

export const getDetailProduct = async (productId: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${productId}`);

    return response.data;
  } catch (error: any) {
    throw Error("Failed to get a product");
  }
};

export const updateProduct = async (data: ProductType) => {
  const { id } = data;
  try {
    const newData = {
      ...data,
      image:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.put(`/products/${id}`, newData);

    return response.data;
  } catch (error: any) {
    throw Error("Failed to update a product");
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const response = await axiosWithConfig.delete(`/products/${productId}`);

    return response.data;
  } catch (error: any) {
    throw Error("Failed to delete a product");
  }
};
