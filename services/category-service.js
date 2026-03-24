import { apiClient } from "./api-client";

export async function getAllCategories() {
  try {
    const options = {
      method: "GET",
      url: `/categories`,
    };
    const respose = await apiClient.request(options);
    return respose;
  } catch (error) {
    throw error;
  }
}
