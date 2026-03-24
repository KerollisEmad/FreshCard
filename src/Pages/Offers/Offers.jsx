import { useEffect, useState } from "react";
import useProducts from "../../../hooks/useProducts";
import ProductCard from "../../Components/ProductCard/ProductCard";
import HomeDealsSkeleton from "../../Components/Skeleton/HomeDealsSkeleton";

export default function Offers() {
  const { products, isLoading } = useProducts();
  const [timeLeft, setTimeLeft] = useState(0);

  // نهاية اليوم
  const getEndOfDay = () => {
    const now = new Date();
    const end = new Date();
    end.setHours(23, 59, 59, 999);
    return Math.floor((end - now) / 1000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = getEndOfDay();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <HomeDealsSkeleton />;
  }

  // 👈 خليها تعرض بس المنتجات اللي عليها خصم
  const productDeals = products.filter((product) => product.priceAfterDiscount);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <section>
      <div className="container py-14">
        <div className="flex justify-between space-y-8">
          <div className="space-y-3 pb-8">
            <h2 className="text-2xl font-bold">Deals of the Day</h2>

            <div className="flex items-center gap-3">
              <p className="text-gray-500">Offers end in: </p>

              <div className="flex items-center gap-2">
                <span className="size-7 bg-gray-900 text-white flex-center rounded-md text-sm">
                  {hours}
                </span>
                <span>:</span>
                <span className="size-7 bg-gray-900 text-white flex-center rounded-md text-sm">
                  {minutes}
                </span>
                <span>:</span>
                <span className="size-7 bg-gray-900 text-white flex-center rounded-md text-sm">
                  {seconds}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {productDeals.map((product) => (
            <ProductCard key={product._id} productInfo={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
