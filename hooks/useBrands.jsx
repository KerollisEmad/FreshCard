import { useQuery } from "@tanstack/react-query";
import { getBrands } from "../services/brands-services";

export default function useBrands({ limit = "40" } = {}) {
  const {
    data: brands,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["brands", limit],
    queryFn: () => getBrands({ limit }),
    select: (data) => {
      return data.data.data;
    },
  });

  return { isLoading, brands, isError, error };
}
