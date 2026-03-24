import ProductCard from "../ProductCard/ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import useProducts from "../../../hooks/useProducts";

export default function FeaturedProductsSketeton() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return (
      <section className="bg-primary-50/40 py-12 animate-pulse">
        <div className="container">
          <h2 className="text-2xl font-bold mb-4 bg-gray-200 rounded w-56 h-8" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 pt-8">
            {[...Array(5)].map((_, idx) => (
              <ProductCardSkeleton key={idx} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
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
  );
}