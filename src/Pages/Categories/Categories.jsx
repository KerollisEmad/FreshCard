import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subcategories from "../../Components/Subcategories/Subcategories";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";
import CategoryCard from "../../Components/CategoryCard/CategoryCard";
import useCategories from "../../../hooks/useCategories";
import { useState } from "react";
import NewsLetter from "../../Components/NewsLetter/NewsLetter";
import CategoriesSkeleton from "../../Components/Skeleton/CategoriesSkeleton";

export default function Categories() {
  const { categories, isError, error, isLoading } = useCategories();
  

  const [isActive, setIsActive] = useState("Grip");

  function toggleIsActive(toggle) {
    return setIsActive(toggle);
  }if (isLoading || !categories) {
    return <CategoriesSkeleton/>
  }

  return (
    <>
      <PageMetadata
        title="FreshCard | Categories"
        description="Securely complete your FreshCard order. Enter your shipping address, select a payment method, and review your order summary before placing your grocery order."
        author="FreshCard Team"
        keywords="FreshCard, checkout, payment, shipping, order summary, groceries, online shopping"
      />
      <div className="py-16">
        <div className="container">
          <div className="flex flex-col space-y-4 lg:flex-row justify-between items-center">
            <div className="flex flex-col space-y-3">
              <h3 className="text-3xl font-bold">Shop by category</h3>
              <p className="text-gray-500">
                Browse our wide selection of fresh products by category
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4 justify-between items-center">
              <div className="flex gap-x-5">
                <h3 className="text-lg font-medium">Sorted by:</h3>
                <select className="form-control min-w-40 border border-gray-200 p-1 rounded-lg">
                  <option>Featured</option>
                </select>
              </div>

              <div className="flex gap-x-3">
                <button
                  className={`
                w-[35px] h-[40px] cursor-pointer ${
                  isActive === "Grip" ? "bg-primary-300" : "bg-gray-300 "
                } rounded-md`}
                  onClick={() => toggleIsActive("Grip")}
                >
                  <FontAwesomeIcon icon={faGrip} />
                </button>
                <button
                  className={`
                w-[35px] h-[40px] cursor-pointer ${
                  isActive === "List" ? "bg-primary-300" : "bg-gray-300 "
                } rounded-md`}
                  onClick={() => toggleIsActive("List")}
                >
                  <FontAwesomeIcon icon={faList} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-10  bg-primary-50/40 ">
        <div className="container">
          <div
            className={
              isActive === "Grip"
                ? "grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
                : "grid grid-cols-1 gap-5"
            }
          >
            {categories?.map((item) => (
              <CategoryCard
                categories={item}
                key={item._id}
                toggle={isActive}
              />
            ))}
          </div>
        </div>
      </div>
      <Subcategories />
      <div className="bg-primary-50/40 w-full py-6">
        <div className="container bg-primary-50 rounded-xl overflow-hidden my-10 p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Side - Text Content */}
            <div className="p-10 flex flex-col justify-center">
              <h4 className="text-sm text-green-600 font-semibold mb-2">
                Featured Categories
              </h4>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Trendy Fashion & Timeless Styles

              </h2>
              <p className="text-gray-600 mb-6">
                 Discover our latest clothing collections – from casual everyday wear to elegant outfits. Quality fabrics, modern cuts, and styles for every season.

              </p>

              <ul className="space-y-2 mb-6">
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 font-bold text-lg">✓</span>{" "}
                  100% certified organic
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 font-bold text-lg">✓</span>{" "}
                  Locally sourced when available
                </li>
                <li className="flex items-start gap-2 text-gray-700 text-sm">
                  <span className="text-green-600 font-bold text-lg">✓</span> No
                  pesticides or harmful chemicals
                </li>
              </ul>

              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md text-sm font-semibold transition duration-300">
                Explore category
              </button>
            </div>

            {/* Right Side - Image */}
            <div className="hidden lg:block">
              <img
                src={categories?.[2]?.image} 
                alt="organic category"
                className=" h-96 ms-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Seasonal categories */}
      <div className="container py-12">
        <h3 className="text-3xl mb-6 font-bold">Seasonal categories</h3>

        <div
          className={
            isActive === "Grip"
              ? "grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-5"
              : "grid grid-cols-1 gap-5"
          }
        >
          {categories?.slice(0, 3).map((item) => (
            <CategoryCard categories={item} key={item._id} toggle={isActive} />
          ))}
        </div>
      </div>

      <NewsLetter /> 
    </>
  );
}
