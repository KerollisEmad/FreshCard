import React from "react";
import useBrands from "../../../hooks/useBrands";
import Loading from "../Loading/Loading";

export default function FeaturedBrands() {
  const { isLoading, brands, isError, error } = useBrands({ limit: "40" });

  if (isLoading || !brands) {
    <Loading/>
  }
  

  return (
    <>
      <div className="grid grid-cols-1  xlgrid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5">
        {brands?.slice(0,3).map((brand)=><div key={brand._id} className="relative shadow-md rounded-lg overflow-hidden">
          <img src={brand.image} alt="" className="h-48 w-full object-cover" />
          <h3 className="absolute z-40 bottom-4 left-6 text-white text-xl font-semibold">
            {brand.name}
          </h3>
          <div className="absolute z-30 top-0 left-0 right-0 bottom-0  bg-gradient-to-t from-black/70 to-black/10 "></div>
        </div>)}
      </div>
    </>
  );
}
