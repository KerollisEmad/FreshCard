export default function ProductInfoDetailsSkeleton() {
  return (
    <section className="bg-primary-50/40 py-12 animate-pulse">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Images Skeleton */}
          <div className="images lg:w-1/3 bg-white flex items-center justify-center">
            <div className="w-full h-96 bg-gray-200 rounded-xl" />
          </div>
          {/* Details Skeleton */}
          <div className="details bg-white lg:w-2/3 py-6 px-8">
            <div className="flex items-center justify-between mb-4">
              <div className="h-7 w-24 bg-gray-200 rounded" />
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
              </div>
            </div>
            <div className="space-y-6 py-4 border-b border-gray-200">
              <div className="h-6 w-40 bg-gray-200 rounded" />
              <div className="flex items-center gap-2">
                <div className="h-5 w-24 bg-gray-100 rounded" />
                <div className="h-4 w-16 bg-gray-100 rounded" />
              </div>
              <div className="flex gap-3 items-center">
                <div className="h-8 w-28 bg-gray-200 rounded" />
                <div className="h-5 w-16 bg-gray-100 rounded" />
                <div className="h-6 w-20 bg-red-100 rounded" />
              </div>
            </div>
            <div className="footer space-y-8 py-6 border-b border-gray-200">
              <div className="h-5 w-3/4 bg-gray-100 rounded" />
              <div className="flex items-center gap-3">
                <span className="me-4 h-4 w-20 bg-gray-100 rounded" />
                <div className="border border-gray-200 text-sm px-2 py-1 rounded-sm flex items-center gap-8">
                  <div className="w-6 h-6 bg-gray-200 rounded" />
                  <div className="w-6 h-6 bg-gray-200 rounded" />
                  <div className="w-6 h-6 bg-gray-200 rounded" />
                </div>
                <span className="h-4 w-32 bg-gray-100 rounded" />
              </div>
              <div className="flex items-center gap-6">
                <div className="h-12 w-40 bg-gray-200 rounded" />
                <div className="h-12 w-40 bg-gray-100 rounded" />
              </div>
            </div>
            <footer className="grid grid-cols-2 py-4 pt-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="size-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="size-10 bg-gray-200 rounded-full" />
                <div>
                  <div className="h-4 w-24 bg-gray-200 rounded mb-1" />
                  <div className="h-3 w-20 bg-gray-100 rounded" />
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </section>
  );
}