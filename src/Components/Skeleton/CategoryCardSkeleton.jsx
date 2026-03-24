export default function CategoryCardSkeleton({ toggle = "Grip" }) {
  return (
    <section>
      {toggle === "Grip" ? (
        <div className="relative shadow-md rounded-lg overflow-hidden animate-pulse bg-gray-100">
          <div className="h-48 w-full bg-gray-200" />
          <div className="absolute z-40 bottom-4 left-6 h-6 w-32 bg-gray-300 rounded" />
          <div className="absolute z-30 top-0 left-0 right-0 bottom-0 bg-gradient-to-t from-black/30 to-black/5" />
        </div>
      ) : (
        <div className="shadow-md rounded-lg overflow-hidden animate-pulse bg-gray-100">
          <div className="bg-white flex gap-8 shadow-md rounded-lg overflow-hidden">
            <div className="w-50">
              <div className="h-56 w-40 bg-gray-200 p-6 rounded" />
            </div>
            <div className="flex flex-col justify-center">
              <div className="h-6 w-32 bg-gray-300 rounded mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}