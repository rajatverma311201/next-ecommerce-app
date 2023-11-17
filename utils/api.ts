import { Billboard, Category, Color, Product, Size } from "types";
import Fetch from "@/utils/Fetch";

export const getCategories = async (): Promise<Category[]> => {
    return Fetch.GET("categories");
};

export const getCategory = async (id: string): Promise<Category> => {
    return Fetch.GET(`categories/${id}`);
};

export const getColors = async (): Promise<Color[]> => {
    return Fetch.GET("colors");
};

export const getColor = async (id: string): Promise<Color> => {
    return Fetch.GET(`colors/${id}`);
};

export const getSizes = async (): Promise<Size[]> => {
    return Fetch.GET("sizes");
};

export const getSize = async (id: string): Promise<Size> => {
    return Fetch.GET(`sizes/${id}`);
};

export const getBillboards = async (): Promise<Billboard[]> => {
    return Fetch.GET("billboards");
};

export const getBillboard = async (id: string): Promise<Billboard> => {
    return Fetch.GET(`billboards/${id}`);
};

export const getProducts = async (): Promise<Product[]> => {
    return Fetch.GET("products");
};

export const getProduct = async (id: string): Promise<Product> => {
    return Fetch.GET(`products/${id}`);
};
