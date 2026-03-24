import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRight,
  faCodeCompare,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDisconuntPrice } from "../../../utils/disconuntPrice";
import Rating from "../Rating/Rating";
import { Link } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../../context/Cart.context";

export default function ProductCard({ productInfo }) {
  const {
    id,
    title,
    category,
    price,
    priceAfterDiscount,
    ratingsAverage,
    ratingsQuantity,
    imageCover,
  } = productInfo;
const{handleAddingProductToCart}=useContext(CartContext)
  return (
    <>
      <div className="card bg-white relative rounded-xl overflow-hidden shadow border border-gray-200/30">
        <div className="image">
          <Link to={`/product/${id}`}>
          <img
            src={imageCover}
            alt=""
            className=" h-56 mx-auto object-cover object-center "
          /></Link>
        </div>

        <div className="content p-4 space-y-3">
          <p className="text-gray-500 text-sm">{category.name}</p>
          <h2 className="text-lg -mt-2 line-clamp-2 h-14">
            <Link to={`/product/${id}`}>
            {title}
            </Link>
            </h2>

          <div className="rating flex gap-2 items-center">
            <Rating ratingsAverage={ratingsAverage} />
            <span className="text-sm text-gray-500">{ratingsAverage}</span>
            <span className="text-sm text-gray-500">({ratingsQuantity})</span>
          </div>

          <footer className="flex justify-between items-center">
            <div className="price">
              <span className="text-primary-600 text-lg ">
                {priceAfterDiscount ?priceAfterDiscount:price} EGP{" "}
              </span>
              <del className="text-sm text-gray-500"> {priceAfterDiscount ?price+" EGP":priceAfterDiscount} </del>
            </div>
            <button className="btn bg-primary-600 hover:bg-primary-700 text-white size-9 flex-center rounded-full p-0"
            onClick={()=>{
              handleAddingProductToCart({id})
            }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </footer>
        </div>

        <div className="actions absolute top-4 right-4 flex flex-col gap-4 *:text-gray-500 *:hover:text-primary-600 *:transition-colors *:duration-200">
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button>
            <FontAwesomeIcon icon={faCodeCompare} />
          </button>
          <button>
            <Link to={`/product/${id}`}>
            <FontAwesomeIcon icon={faEye} />
            </Link>
          </button>
        </div>

        {priceAfterDiscount && (
          <>
            <div className="offer absolute top-4 left-4">
              <span className="py-1 px-2 bg-red-500 rounded-lg text-sm text-white">
                -{Math.trunc(calcDisconuntPrice(price, priceAfterDiscount))}%
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
}
