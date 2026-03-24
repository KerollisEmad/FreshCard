export default function CartSkeleton() {
  return (
    <div className="bg-mainColor py-15 animate-pulse">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 mb-2 gap-x-15">
          {/* Cart Items Skeleton */}
          <div className="lg:col-span-8 bg-white py-5 rounded-md border border-gray-300/50 h-fit shadow-md">
            <div className="border-b border-gray-300 pb-4 px-10">
              <div className="h-7 w-40 bg-gray-200 rounded mb-2" />
              <div className="h-5 w-32 bg-gray-100 rounded" />
            </div>
            {/* Repeat skeleton items */}
            {[1, 2, 3].map((i) => (
              <div key={i} className="grid grid-cols-1 md:grid-cols-12 py-5 gap-3 mb-5 border-b border-gray-300 pb-5 last:border-b-transparent last:pb-0">
                <div className="md:col-span-7 px-2 xl:px-10 items-center">
                  <div className="flex gap-x-5 items-center">
                    <div>
                      <div className="size-20 rounded-lg border border-gray-200 bg-gray-200" />
                    </div>
                    <div className="flex flex-col space-y-2 mb-3 lg:mb-0 w-40">
                      <div className="h-5 bg-gray-200 rounded w-32" />
                      <div className="h-4 bg-gray-200 rounded w-20" />
                      <div className="flex gap-x-2 items-center">
                        <div className="h-4 w-16 bg-gray-200 rounded" />
                        <div className="h-4 w-16 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:col-span-5 md:px-10 flex items-center justify-end pe-3">
                  <div className="flex gap-x-3 justify-end items-center">
                    <div className="flex items-center border border-gray-200 rounded-lg">
                      <div className="py-1 border-r border-gray-200 px-2 w-8 h-8 bg-gray-200 rounded" />
                      <div className="py-1 px-4 w-8 h-8 bg-gray-200 rounded" />
                      <div className="py-1 px-2 border-l border-gray-200 w-8 h-8 bg-gray-200 rounded" />
                    </div>
                    <div className="xl:text-lg font-semibold text-center w-16 h-6 bg-gray-200 rounded" />
                    <div className="w-8 h-8 bg-gray-200 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Order Summary Skeleton */}
          <div className="lg:col-span-4">
            <div className="bg-white p-5 w-full rounded-md border border-gray-300/50">
              <div className="h-7 w-40 bg-gray-200 rounded mb-5" />
              <div className="flex justify-between items-center mb-3">
                <div className="h-5 w-32 bg-gray-100 rounded" />
                <div className="h-5 w-16 bg-gray-100 rounded" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="h-5 w-24 bg-gray-100 rounded" />
                <div className="h-5 w-12 bg-gray-100 rounded" />
              </div>
              <div className="flex justify-between items-center mb-3">
                <div className="h-5 w-16 bg-gray-100 rounded" />
                <div className="h-5 w-10 bg-gray-100 rounded" />
              </div>
              <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                <div className="h-6 w-20 bg-gray-200 rounded" />
                <div className="h-6 w-16 bg-gray-200 rounded" />
              </div>
              <div className="flex flex-col space-y-3 mt-5">
                <div className="h-12 bg-gray-200 rounded-md" />
                <div className="h-12 bg-gray-100 rounded-md" />
              </div>
              <div className="bg-mainColor p-3 mb-3 rounded-md border border-gray-300 mt-5">
                <div className="flex space-x-3 items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <div className="h-5 w-32 bg-gray-100 rounded" />
                </div>
                <div className="h-4 w-48 bg-gray-100 rounded mt-2" />
              </div>
              <div className="bg-primary-100/50 p-3 mb-3 rounded-md border border-gray-300">
                <div className="flex space-x-3 items-center">
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                  <div className="h-5 w-32 bg-gray-100 rounded" />
                </div>
                <div className="h-4 w-48 bg-gray-100 rounded mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}