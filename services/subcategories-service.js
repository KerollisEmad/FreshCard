import { apiClient } from "./api-client";

export async function getSubcategories({ limit } = { limit: "40" }) {
  try {
    const options = {
      method: "GET",
      url: `/subcategories?limit=${limit}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
