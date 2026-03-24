import { createContext, useEffect, useState } from "react";
import {
  addProducttoCard,
  getCartProduct,
  removeSpecificCartItem,
  updateCartProductQuantity,
} from "../services/Cart-services";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const [cartInfo, setCartInfo] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  async function handleAddingProductToCart({ id }) {
    try {
      const respose = await addProducttoCard({ id });
      setIsLoading(true);
      if (respose.success) {
        setIsLoading(false);
        setCartInfo(respose.data);
        toast.success(respose.data.message);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }

  async function handleFetchProductCart() {
    try {
      const response = await getCartProduct();
      if (response.success) {
        setIsLoading(false);
        setCartInfo(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      setError(error);
    }
  }
  useEffect(() => {
    handleFetchProductCart();
  }, []);

  async function handleRemoveCartItem({ id }) {
    try {
      const sweetResult = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        iconColor: "#d33",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#111",
        confirmButtonText: "Yes, delete it!",
      });
      if (sweetResult.isConfirmed) {
        const response = await removeSpecificCartItem({ id });
        const toastLoading = toast.loading("We removing is Items");
        if (response.success) {
          setCartInfo({ ...response.data });
          toast.dismiss(toastLoading);
        }
      }
    } catch (error) {}
  }

  async function handleCartQuantity({ id, count }) {
    try {
      const toastId = toast.loading("We Updating Product Quantity");
      const response = await updateCartProductQuantity({ id, count });
      if (response.success) {
        setCartInfo({ ...response.data });
        toast.dismiss(toastId);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <CartContext.Provider
      value={{
        setCartInfo,
        cartInfo,
        isLoading,
        isError,
        error,
        handleAddingProductToCart,
        handleRemoveCartItem,
        handleCartQuantity,
        refreash:handleFetchProductCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
