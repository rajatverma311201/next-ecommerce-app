import { Billboard, Category, Color, Product, Size } from "types";
import Fetch from "@/lib/Fetch";
import qs from "query-string";

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

interface Query {
    categoryId?: string;
    colorId?: string;
    sizeId?: string;
    isFeatured?: boolean;
}

export const getProducts = async (query: Query): Promise<Product[]> => {
    const queryUrl = qs.stringifyUrl({
        url: "products",
        query: {
            colorId: query.colorId,
            sizeId: query.sizeId,
            categoryId: query.categoryId,
            isFeatured: query.isFeatured,
        },
    });
    console.log(queryUrl);
    return Fetch.GET(queryUrl);
};

export const getProduct = async (id: string): Promise<Product> => {
    return Fetch.GET(`products/${id}`);
};
