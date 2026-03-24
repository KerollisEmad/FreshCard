import { useQuery } from "@tanstack/react-query";
import { getAllProduct } from "../services/product-service";

export default function useProducts() {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProduct,
    select: (data) => data.data.data,
  });

  return { isLoading, products, isError, error };
}
