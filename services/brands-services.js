  import { apiClient } from "./api-client";

export async function getBrands({ limit = "40" } = {}) {
  try {
    const options = {
      method: "GET",
      url: `/brands?limit=${limit}`,
    };
    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    throw error;
  }
}
