import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Rating from "../Rating/Rating";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/Cart.context";

export default function CartItem({ productInfo }) {
  const { price, count, product } = productInfo;
  const { id, category, title, ratingsAverage, imageCover } = product;
  const [isUpdate, setIsUpdate] = useState(false);
  const { handleRemoveCartItem, handleCartQuantity } = useContext(CartContext);

  async  function handleUpdate({ id, count }) {
    setIsUpdate(true);
    await handleCartQuantity({ id, count });
    setIsUpdate(false);
  }

  return (
    <>
      <div
        className={`${
          isUpdate ? "opacity-50 ":""
        }grid grid-cols-1 md:grid-cols-12 py-5 gap-3 mb-5 border-b border-gray-300 pb-5 last:border-b-transparent last:pb-0`}
      >
        <div className="md:col-span-7 px-2 xl:px-10 items-center">
          <div className="flex gap-x-5 items-center ">
            <div className="">
              <Link
              to={`/product/${id}`}>
                <img
                  src={imageCover}
                  className="size-20 rounded-lg border border-gray-200"
                />
              </Link>
            </div>
            <div className="flex flex-col space-y-2 mb-3 lg:mb-0">
              <Link
              to={`/product/${id}`}>
                <h3 className="text-[18px] font-medium hover:text-primary-600 transition-colors duration-500">
                  {title}
                </h3>
              </Link>
              <h4 className="text-gray-500 text-sm">{product.name}</h4>
              <div className="flex gap-x-2 items-center">
                <Rating ratingsAverage={ratingsAverage} />
                <span className="text-gray-500 text-sm ">rating average </span>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-5 md:px-10 flex items-center justify-end pe-3">
          <div className="flex gap-x-3 justify-end items-center">
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                className="py-1 border-r border-gray-200 px-2 cursor-pointer text-2xl font-semibold"
                onClick={() => handleUpdate({ id, count: count - 1 })}
              >
                -
              </button>
              <span className="py-1 px-4 text-xl">{count}</span>
              <button
                className="py-1 px-2 border-l border-gray-200 cursor-pointer text-2xl font-semibold"
                onClick={() => handleUpdate({ id, count: count + 1 })}
              >
                +
              </button>
            </div>
            <h4 className="xl:text-lg font-semibold text-center">
              {price * count} EGP
            </h4>
            <button
              className="text-red-600 cursor-pointer"
              onClick={() => handleRemoveCartItem({ id })}
            >
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
