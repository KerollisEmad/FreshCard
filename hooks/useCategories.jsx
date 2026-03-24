import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../services/category-service";

export default function useCategories() {
  const {
    data: categories ,
    isError,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["categories "],
    queryFn: getAllCategories,
    select: (data) => data.data.data,
  });
  

   return { isLoading, categories , isError, error };

}
