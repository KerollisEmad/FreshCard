import { useQuery } from "@tanstack/react-query";
import { gatProductById } from "../services/product-service";

export default function useDetailsProduct(id) {
  const {
    data: productDetails,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["productDetails",id],
    queryFn: ()=>gatProductById(id),
    select: (data) => data.data.data,
  });

  return { isLoading, productDetails, isError, error };
}
