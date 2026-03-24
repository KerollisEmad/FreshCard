import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HomeCategoriesSkeleton() {
  return (
    <section className="bg-primary-50/40 py-12 animate-pulse">
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="h-8 w-48 bg-gray-200 rounded" />
          <div className="flex items-center gap-2">
            <div className="h-6 w-32 bg-gray-100 rounded" />
            <FontAwesomeIcon icon={faArrowRight} className="text-gray-300" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-8">
          {[...Array(6)].map((_, idx) => (
            <div
              key={idx}
              className="card p-4 bg-white shadow-md rounded-xl flex flex-col items-center space-y-3"
            >
              <div className="size-16 rounded-full bg-gray-200" />
              <div className="h-4 w-20 bg-gray-200 rounded" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}