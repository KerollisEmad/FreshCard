export default function ChekoutSkeleton() {
  return (
    <section className="py-16 bg-primary-50/50 animate-pulse">
      <div className="container mx-auto max-w-5xl">
        <form>
          <div className="h-10 w-48 bg-gray-200 rounded mb-6" />
          <div className="grid lg:grid-cols-12 gap-8">
            {/* Payment Method Skeleton */}
            <div className="lg:col-span-8">
              <div className="bg-white shadow-md rounded-xl p-6 mb-8">
                <div className="h-7 w-40 bg-gray-200 rounded mb-6" />
                <div className="space-y-4">
                  <div className="h-16 bg-gray-100 rounded-xl" />
                  <div className="h-16 bg-gray-100 rounded-xl" />
                </div>
              </div>
              {/* Shipping Address Skeleton */}
              <div className="bg-white shadow-md rounded-xl p-6">
                <div className="h-7 w-40 bg-gray-200 rounded mb-6" />
                <div className="flex flex-col gap-4">
                  <div className="h-20 bg-gray-100 rounded" />
                  <div className="flex gap-4">
                    <div className="h-10 w-40 bg-gray-100 rounded" />
                    <div className="h-10 w-40 bg-gray-100 rounded" />
                  </div>
                </div>
              </div>
            </div>
            {/* Order Summary Skeleton */}
            <div className="lg:col-span-4 bg-white shadow-md rounded-xl p-6 h-fit">
              <div className="h-7 w-40 bg-gray-200 rounded mb-6" />
              <div className="space-y-3 pb-4 border-b-2 border-gray-600/30">
                <div className="flex items-center gap-2">
                  <div className="size-12 bg-gray-200 rounded-lg" />
                  <div>
                    <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                    <div className="h-3 w-12 bg-gray-100 rounded" />
                  </div>
                  <div className="ms-auto h-4 w-16 bg-gray-200 rounded" />
                </div>
              </div>
              <ul className="mt-3 space-y-2">
                <li className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                  <div className="h-4 w-16 bg-gray-100 rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                  <div className="h-4 w-16 bg-gray-100 rounded" />
                </li>
                <li className="flex justify-between items-center">
                  <div className="h-4 w-20 bg-gray-100 rounded" />
                  <div className="h-4 w-16 bg-gray-100 rounded" />
                </li>
                <li className="flex justify-between items-center border-t-2 border-gray-600/30 py-4 mt-3 font-semibold">
                  <div className="h-5 w-20 bg-gray-200 rounded" />
                  <div className="h-5 w-16 bg-gray-200 rounded" />
                </li>
              </ul>
              <div className="flex flex-col space-y-3 mt-2">
                <div className="h-12 bg-gray-200 rounded-md" />
                <div className="h-12 bg-gray-100 rounded-md" />
              </div>
              <div className="mt-6 space-y-2">
                <div className="h-4 w-32 bg-gray-200 rounded" />
                <div className="h-3 w-40 bg-gray-100 rounded" />
                <div className="flex items-center space-x-2 mt-4">
                  <div className="w-10 h-8 bg-gray-200 rounded" />
                  <div className="w-10 h-8 bg-gray-200 rounded" />
                  <div className="w-10 h-8 bg-gray-200 rounded" />
                  <div className="w-10 h-8 bg-gray-200 rounded" />
                  <div className="w-10 h-8 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}