export default function CartItemSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 py-5 gap-3 mb-5 border-b border-gray-300 pb-5 last:border-b-transparent last:pb-0 animate-pulse">
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
  );
}