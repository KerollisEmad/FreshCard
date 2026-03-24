// import ProductCard from "../ProductCard/ProductCard";

import { useEffect, useState } from "react";
import { getAllProduct } from "../../../services/product-service";
import Loading from "../Loading/Loading";
import ProductCard from "../ProductCard/ProductCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import RelatedProductSkeleton from "../Skeleton/RelatedProductSkeleton";

export default function RelatedProduct({ productDetails }) {
  const [relatedProduct, setRelatedProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const { category } = productDetails;

  async function getRelatedProduct() {
    try {
      const response = await getAllProduct({ category: category._id });
      if (response.success) {
        setRelatedProduct(response.data.data);
        setIsLoading(false);
      }
    } catch (error) {
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getRelatedProduct();
  }, []);

  if (isLoading) {
    return <RelatedProductSkeleton />;
  }

  return (
    <>
      <section className="bg-white py-12">
        <div className="container">
          <div className="flex items-center justify-between py-8">
            <h2 className="text-2xl font-bold">Shop by Categories</h2>
            <div className="flex gap-1.5">
              <button className="prev-btn btn flex-center size-9 p-0 rounded-full text-gray-500 bg-gray-300 hover:bg-primary-200 hover:text-primary-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button className="next-btn btn flex-center size-9 p-0 rounded-full text-gray-500 bg-gray-300 hover:bg-primary-200 hover:text-primary-700 transition-colors duration-200">
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>
          </div>
          <Swiper
            modules={[Navigation]}
            slidesPerView={5}
            loop={true}
            spaceBetween={10}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
          >
            {relatedProduct.map((product) => (
              <SwiperSlide>
                <ProductCard productInfo={product} key={product.id} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
