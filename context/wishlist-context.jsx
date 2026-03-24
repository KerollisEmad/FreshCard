// import { createContext, useEffect, useState } from "react";

// import { toast } from "react-toastify";
// import {
//   addWishlist,
//   getWishlistProduct,
//   removeWishlistCartItem,
// } from "../services/wishlist-service";


// export const WishlistContext = createContext(null);

// export default function WishlistProvider({ children }) {
//   const [wishlistInfo, setwishlistInfo] = useState({});
//   const [isLoading, setIsLoading] = useState(true);
//   const [isError, setIsError] = useState(false);
//   const [error, setError] = useState(null);

//   async function handleAddingProductTowishlist({ id }) {
//     try {
//       const respose = await addWishlist({ id });
//       setIsLoading(true);
//       if (respose.success) {
//         setIsLoading(false);
//         setwishlistInfo(respose.data);
//         toast.success(respose.data.message);
//       }
//       console.log(respose);
      
//     } catch (error) {
//       setIsLoading(false);
//       setIsError(true);
//       setError(error);
//     }
//   }

//   async function handleFetchProductWishlist() {
//     try {
//       const response = await getWishlistProduct();
//       if (response.success) {
//         setIsLoading(false);
//         setwishlistInfo(response.data);
//       }
//     } catch (error) {
//       setIsLoading(false);
//       setIsError(true);
//       setError(error);
//     }
//   }
//   useEffect(() => {
//     handleFetchProductWishlist();
//   }, []);

//   async function handleRemoveWishlistItem({ id }) {
//     try {
//       const response = await removeWishlistCartItem({ id });
//       const toastLoading = toast.loading("We removing is Items");
//       if (response.success) {
//         setwishlistInfo({ ...response.data });
//         toast.dismiss(toastLoading);
//       }
//     } catch (error) {}
//   }

//   //   async function handlewishlistQuantity({ id, count }) {
//   //     try {
//   //       const toastId = toast.loading("We Updating Product Quantity");
//   //       const response = await updatewishlistProductQuantity({ id, count });
//   //       if (response.success) {
//   //         setwishlistInfo({ ...response.data });
//   //         toast.dismiss(toastId);
//   //       }
//   //     } catch (error) {
//   //       console.log(error);
//   //     }
//   //   }

//   return (
//     <WishlistContext.Provider
//       value={{
//         setwishlistInfo,
//         wishlistInfo,
//         isLoading,
//         isError,
//         error,
//         handleAddingProductTowishlist,
//         handleRemoveWishlistItem,
//         // handlewishlistQuantity,
//         // refreash: handleFetchProductwishlist,
//       }}
//     >
//       {children}
//     </WishlistContext.Provider>
//   );
// }
