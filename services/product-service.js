import { apiClient } from "./api-client";

export async function getAllProduct({
  page,
  keyword,
  brand,
  priceGreaterThan,
  priceLessThan,
  category,
  sorted, 
} = {}) {
  try {
    const options = {
      url: `/products?${page ? `page=${page}` : ""}${
        keyword ? `&keyword=${keyword}` : ""
      }${brand ? `&brand=${brand}` : ""}${
        priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""
      }${priceLessThan ? `&price[lte]=${priceLessThan}` : ""}${
        sorted ? `&sort=${sorted}` : ""
      }${category ? `&category[in]=${category}` : ""}`,
      method: "GET",
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function gatProductById( id ) { 
  try {
    const options = {
      url: `/products/${id}`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
