// import { apiClient } from "./api-client";

// export async function addWishlist({ id }) {
//   try {
//     const options = {
//       url: `/wishlist`,
//       method: "POST",
//       data: {
//         productId: id,
//       },
//     };
//     const response = await apiClient.request(options);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }

// export async function getWishlistProduct() {
//   try {
//     const options = {
//       url: `/wishlist`,
//       method: "GET",
//     };
//     const response = await apiClient.request(options);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }
// export async function removeWishlistCartItem({ id }) {
//   try {
//     const options = {
//       url: `/wishlist/${id}`,
//       method: "DELETE",
//     };
//     const response = await apiClient.request(options);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }
// export async function updateWishlistProductQuantity({ id, count }) {
//   try {
//     const options = {
//       url: `/wishlist/${id}`,
//       method: "PUT",
//       data: {
//         count: count,
//       },
//     };
//     const response = await apiClient.request(options);
//     return response;
//   } catch (error) {
//     throw error;
//   }
// }
