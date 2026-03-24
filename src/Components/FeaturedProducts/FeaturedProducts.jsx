import useProducts from "../../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import FeaturedProductsSketeton from "../Skeleton/FeaturedProductsSketeton";

export default function FeaturedProducts() {
  const { products, isLoading, isError, error } = useProducts()

  if (isLoading) {
    return (
      <div className=" bg-primary-50/40">
        <FeaturedProductsSketeton />
      </div>
    );
  }

  return (
    <>
      <section className="bg-primary-50/40 py-12">
        <div className="container">
          <h2 className="text-2xl font-bold">Featured Products</h2>
          <div className="grid cursor-pointer sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-8">
            {products.map((product) => (
              <ProductCard productInfo={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
