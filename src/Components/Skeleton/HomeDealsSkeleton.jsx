import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function HomeDealsSkeleton() {
  return (
    <section>
      <div className="container py-12 animate-pulse">
        <div className="flex justify-between space-y-8">
          <div className="space-y-3">
            <div className="h-8 w-48 bg-gray-200 rounded" />
            <div className="flex items-center gap-3">
              <div className="h-5 w-32 bg-gray-100 rounded" />
              <div className="flex items-center gap-2">
                <span className="size-7 bg-gray-200 flex-center rounded-md" />
                <span>:</span>
                <span className="size-7 bg-gray-200 flex-center rounded-md" />
                <span>:</span>
                <span className="size-7 bg-gray-200 flex-center rounded-md" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-6 w-32 bg-gray-100 rounded" />
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-300" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-8">
          {[...Array(5)].map((_, idx) => (
            <div
              key={idx}
              className="bg-white p-4 rounded-xl shadow flex flex-col items-center space-y-3"
            >
              <div className="size-32 bg-gray-200 rounded-lg mb-2" />
              <div className="h-4 w-24 bg-gray-200 rounded" />
              <div className="h-4 w-16 bg-gray-100 rounded" />
              <div className="h-5 w-20 bg-gray-200 rounded" />
              <div className="h-8 w-24 bg-gray-100 rounded mt-2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}