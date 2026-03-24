import { useQuery } from "@tanstack/react-query";
import { getSubcategories } from "../services/subcategories-service";

export default function useSubcategories({ limit }) {
  const {
    data: subcategories,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["subcategories",limit],
    queryFn: () => getSubcategories({ limit }),
    select: (data) => data.data.data,
  });

  return { isLoading, subcategories, isError, error };
}
