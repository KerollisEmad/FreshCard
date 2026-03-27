import { Link } from "react-router";
import useBrands from "../../../hooks/useBrands";

export default function BrandCard() {
  const { isLoading, brands, isError, error } = useBrands({ limit: "40" });

  return (
    <>
      {brands?.map((brand)=><Link key={brand._id}>
        <div className="bg-white rounded-lg shadow-md " >
          <div className=" p-10">
            <img
                src={brand.image}
              alt=""
              className=" h-[100px] m-auto border border-gray-300"
            />
          </div>
          <div className=" border-t border-gray-300 p-5 pt-2 flex flex-col space-y-2 ">
            <h3 className="text-lg font-bold">{brand.name}</h3>
            <span className="text-primary-600 font-medium text-end">View</span>
          </div>
        </div>
      </Link>)}
    </>
  );
}
