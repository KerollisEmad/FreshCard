import { apiClient } from "./api-client";

export async function addProducttoCard({ id }) {
  try {
    const options = {
      url: `/cart`,
      method: "POST",
      data: {
        productId: id,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCartProduct() {
  try {
    const options = {
      url: `/cart`,
      method: "GET",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function removeSpecificCartItem({ id }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "DELETE",
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
export async function updateCartProductQuantity({ id, count }) {
  try {
    const options = {
      url: `/cart/${id}`,
      method: "PUT",
      data: {
        count: count,
      },
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
