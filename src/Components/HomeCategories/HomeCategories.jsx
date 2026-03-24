import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import HomeCategoriesSkeleton from "../Skeleton/HomeCategoriesSkeleton";
import useCategories from "../../../hooks/useCategories";

export default function HomeCategories() {
  
  const{categories,isLoading, isError, error}=useCategories();

  if (isLoading || !categories) {
    return <div className=" bg-primary-50/40">
      <HomeCategoriesSkeleton />
    </div>;
  }

  return (
    <>
      <section className="bg-primary-50/40 py-12">
        <div className="container">
          <div className="flex items-center justify-between ">
            <h2 className="text-2xl font-bold">Shop by Categories</h2>
            <Link
              to={`/categories`}
              className="text-primary-600 flex items-center gap-2"
            >
              <span>View All Categories</span>
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
          <div className="grid cursor-pointer sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 pt-8">
            {categories.map((catigory) => (
              <div
                key={catigory._id}
                className="card p-4 bg-white shadow-md hover:shadow-xl rounded-xl flex-center flex-col space-y-3 transition-shadow duration-200"
              >
                <img
                  src={catigory.image}
                  alt=""
                  className="size-16 rounded-full"
                />
                <h3 className="text-gray-500">{catigory.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
