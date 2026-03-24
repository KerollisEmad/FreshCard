export default function RelatedProductSkeleton() {
  return (
    <section className="bg-white py-12 animate-pulse">
      <div className="container">
        <div className="flex items-center justify-between py-8">
          <div className="h-8 w-56 bg-gray-200 rounded" />
          <div className="flex gap-1.5">
            <div className="size-9 rounded-full bg-gray-200" />
            <div className="size-9 rounded-full bg-gray-200" />
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="card bg-white relative rounded-xl overflow-hidden shadow border border-gray-200/30 animate-pulse"
            >
              <div className="h-56 w-full bg-gray-200" />
              <div className="p-4 space-y-3">
                <div className="h-4 w-24 bg-gray-200 rounded" />
                <div className="h-6 w-40 bg-gray-200 rounded" />
                <div className="flex gap-2 items-center">
                  <div className="h-4 w-16 bg-gray-100 rounded" />
                  <div className="h-4 w-8 bg-gray-100 rounded" />
                  <div className="h-4 w-8 bg-gray-100 rounded" />
                </div>
                <footer className="flex justify-between items-center">
                  <div className="h-6 w-20 bg-gray-200 rounded" />
                  <div className="h-9 w-9 bg-gray-200 rounded-full" />
                </footer>
              </div>
              <div className="actions absolute top-4 right-4 flex flex-col gap-4">
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
                <div className="w-8 h-8 bg-gray-200 rounded-full" />
              </div>
              <div className="offer absolute top-4 left-4">
                <div className="py-1 px-6 bg-gray-200 rounded-lg h-6 w-16" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}