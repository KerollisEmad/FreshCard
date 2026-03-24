export default function ProductCardSkeleton() {
  return (
    <div className="card bg-white relative rounded-xl overflow-hidden shadow border border-gray-200/30 animate-pulse">
      <div className="image">
        <div className="h-56 w-full bg-gray-200" />
      </div>

      <div className="content p-4 space-y-3">
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
  );
}