import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BrandCard from "../../Components/BrandCard/BrandCard";
import FeaturedBrands from "../../Components/FeaturedBrands/FeaturedBrands";
import imagebrands from "../../assets/brands_page-DDV0rMzx.svg";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";

export default function Brands() {
  return (
    <>
      <PageMetadata
        title="FreshCard | Brands"
        description="Explore our diverse range of partner brands offering quality products and exclusive deals."
        author="FreshCard Team"
        keywords="FreshCard, brands, partner brands, quality products, exclusive deals"
      />
      <div className="py-16 bg-primary-50/50">
        <div className="container">
          <div className="text-center flex flex-col space-y-3">
            <h3 className="text-3xl font-bold">Our partner brands</h3>
            <p className="w-[100%] lg:w-[50%] m-auto text-gray-500">
              Discover quality products from our trusted brand partners, we've
              partnered with leading brands to bring you the best selection of
              fresh and organic products
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="container">
          <FeaturedBrands />
        </div>
      </div>

      <div className="py-10 bg-primary-50/50">
        <div className="container">
          <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 justify-between items-center mb-10">
            <div className="flex">
              <input
                type="text"
                placeholder="Search brands ..."
                className="form-control min-w-70 bg-white border border-gray-300 p-2 rounded-lg"
              />
            </div>
            <div className="flex items-center gap-x-4">
              <h4>Sorted by:</h4>
              <select className="form-control min-w-50 bg-white border border-gray-300 p-1 rounded-lg">
                <option>Aphabitical: A-z</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-5 gap-5 md:gap-10">
            <BrandCard />
          </div>
          <div className="flex justify-center items-center mt-10">
            <ul className="flex gap-x-3">
              <li className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                <FontAwesomeIcon icon={faChevronLeft} />
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 bg-primary-600 flex justify-center items-center text-white rounded-md">
                1
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7  border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                2
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7  border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                3
              </li>
              <li className="cursor-pointer font-semibold text-sm size-7 border border-gray-300 flex justify-center items-center text-gray-600 rounded-md">
                <FontAwesomeIcon icon={faChevronRight} />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-10 bg-primary-50/30">
        <div className="container">
          <section className="bg-white shadow-xl p-6 md:p-10 rounded-lg flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="lg:w-1/2 space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Want to become a brand partner?
              </h2>
              <p className="text-gray-500">
                Join our growing family of quality brands. Showcase your
                products to our engaged customer base and grow your business
                with FreshCart.
              </p>

              <ul className="space-y-2 text-gray-700 text-sm">
                <li className="flex items-center">
                  <span className="text-primary-600 me-2">✔</span> Access to
                  over 1 million active customers
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 me-2">✔</span> Dedicated
                  account manager of your brand
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 me-2">✔</span> Marketing and
                  promotional opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-primary-600 me-2">✔</span> Streamlined
                  logistics and fulfillment
                </li>
              </ul>

              <button className="mt-4 bg-primary-600 hover:bg-primary-700 transition text-white font-semibold py-2 px-6 rounded">
                Apply to become a partner
              </button>
            </div>

            <div className="lg:w-1/2 rounded overflow-hidden">
              <img
                src={imagebrands}
                alt="Brand Partnership"
                className="w-full max-h-[480px] object-contain rounded-md"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
