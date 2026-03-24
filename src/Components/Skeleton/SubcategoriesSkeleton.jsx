
import useSubcategories from "../../../hooks/useSubcategories";

export default function SubcategoriesSkeleton() {
  const { subcategories, isError, error, isLoading } = useSubcategories({
    limit: "40",
  });
 
return (
    <>
        <div className="py-10">
            <div className="container">
                <h3 className="text-3xl font-bold mb-5">Popular subcategories</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 ">
                    {[...Array(12)].map((_, idx) => (
                        <div
                            key={idx}
                            className="bg-primary-100/50 p-5 rounded-md flex flex-col justify-center items-center space-y-4 h-40 w-full text-center animate-pulse"
                        >
                            <div className="rounded_icon size-12 bg-primary-200 flex-center rounded-full">
                                <div className="w-6 h-6 bg-primary-300 rounded-full" />
                            </div>
                            <div className="h-5 w-24 bg-primary-300 rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
);
}
