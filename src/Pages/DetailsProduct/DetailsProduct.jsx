import ProductInfoDetails from "../../Components/ProductInfoDetails/ProductInfoDetails";
import { useParams } from "react-router";
import RelatedProduct from "../../Components/RelatedProduct/RelatedProduct";
import RelatedProductSkeleton from "../../Components/Skeleton/RelatedProductSkeleton";
import ProductInfoDetailsSkeleton from "../../Components/Skeleton/ProductInfoDetailsSkeleton";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";
import useDetailsProduct from "../../../hooks/useDetailsProduct";

export default function DetailsProduct() {



  const { id } = useParams();

 const{ isLoading, productDetails, isError, error }=useDetailsProduct(id)











  if (isLoading) {
    return (
      <>
        <ProductInfoDetailsSkeleton />
        <RelatedProductSkeleton />
      </>
    );
  }

  return (
    <>
    <PageMetadata
        title={`FreshCard | ${productDetails?.title || "Product Details"}`}
        description={`View details, features, and reviews for ${productDetails?.title || "this product"} at FreshCard. Shop now for quality groceries and fast delivery.`}
        author="FreshCard Team"
        keywords={`FreshCard, product details, ${productDetails?.title || "product"}, groceries, online shopping, reviews`}
      />
      <ProductInfoDetails productDetails={productDetails} />
      <RelatedProduct productDetails={productDetails} />
    </>
  );
}
