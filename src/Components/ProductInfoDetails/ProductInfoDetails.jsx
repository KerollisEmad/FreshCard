import { faHeart, faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faMinus,
  faPlus,
  faRotateLeft,
  faShare,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Rating from "../../Components/Rating/Rating";
import { calcDisconuntPrice } from "../../../utils/disconuntPrice";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../../context/Cart.context";

export default function ProductInfoDetails({ productDetails }) {
  const {
    id,
    title,
    description,
    images,
    imageCover,
    price,
    quantity,
    ratingsAverage,
    ratingsQuantity,
    reviews,
    priceAfterDiscount,
  } = productDetails;
  
  const {
    cartInfo,
    handleAddingProductToCart,
    handleRemoveCartItem,
    refreash,
  } = useContext(CartContext);

  const [productid, setProductid] = useState(false);

  useEffect(() => {
    const found = cartInfo?.data?.products?.some(
      (product) => product?.product?.id === id
    );
    setProductid(found);
  }, [cartInfo, id]);

  return (
    <>
      <section className="bg-primary-50/40 py-12">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="images  lg:w-1/3 bg-white">
              <ReactImageGallery
                showNav={false}
                showPlayButton={false}
                showFullscreenButton={false}
                thumbnailPosition="left"
                items={images.map((image, index) => {
                  return { original: image, thumbnail: image };
                })}
              />
            </div>

            <div className="details bg-white lg:w-2/3  py-6 px-8">
              <div className="flex items-center justify-between">
                <button
                  className={`btn px-2 py-1 text-[12px]${
                    quantity > 0
                      ? ` text-primary-500 bg-primary-100/30`
                      : ` text-red-500 bg-red-100/30`
                  }`}
                >
                  {quantity > 0 ? `in Stock` : `Out of Stock`}
                </button>
                <div className="icons text-sm flex gap-1 text-gray-500">
                  <FontAwesomeIcon icon={faHeart} />
                  <FontAwesomeIcon icon={faShare} />
                </div>
              </div>

              <div className="space-y-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
                <div className="flex items-center gap-2">
                  <Rating ratingsAverage={ratingsAverage} />
                  <div className="text-[12px]">
                    <span>{ratingsAverage}</span>
                    <span> ({ratingsQuantity}reviews)</span>
                  </div>
                </div>
                <div className="price flex gap-3 items-center">
                  <span className=" text-3xl font-bold">
                    {priceAfterDiscount ? priceAfterDiscount : price} EGP{" "}
                  </span>
                  <del className="text-sm text-gray-500">
                    {priceAfterDiscount ? price + " EGP" : priceAfterDiscount}{" "}
                  </del>
                  {priceAfterDiscount && (
                    <>
                      <span className="bg-red-100 text-red-500 rounded-sm p-1 text-sm">
                        Save{" "}
                        {Math.trunc(
                          calcDisconuntPrice(price, priceAfterDiscount)
                        )}
                        %
                      </span>
                    </>
                  )}
                </div>
              </div>

              <div className="footer space-y-8 py-6 border-b border-gray-200">
                <p className="text-lg text-gray-500">{description}</p>
                <div className="conter flex items-center gap-3 text-gray-500">
                  <span className="me-4">Quantity: </span>
                  <div className="border border-gray-200 text-sm  px-2 py-1 rounded-sm flex items-center gap-8">
                    <FontAwesomeIcon
                      icon={faMinus}
                      className="cursor-pointer"
                    />
                    <span>2</span>
                    <FontAwesomeIcon icon={faPlus} className="cursor-pointer" />
                  </div>
                  <span className="text-[13px] text-gray-400">
                    only {quantity} items left in a stock
                  </span>
                </div>
                <div className="buttons flex items-center gap-6">
                  <button
                    className={`btn py-2.5 grow ${
                      productid
                        ? `bg-red-600 hover:bg-red-700`
                        : `bg-primary-600 hover:bg-primary-700`
                    }  text-white transition-colors duration-200`}
                    onClick={async () => {
                      if (productid) {
                        await handleRemoveCartItem({ id });
                      } else {
                        await handleAddingProductToCart({ id });
                      }
                      await refreash();
                    }}
                  >
                    {productid ? "Remove Item is Cart" : "Add Cart"}
                  </button>

                  <button className="btn py-2.5 grow bg-white hover:bg-primary-50/30 text-gray-600 border-2 border-gray-200">
                    Buy Now
                  </button>
                </div>
              </div>

              <footer className="grid grid-cols-2 py-4 pt-6">
                <div className="flex items-center gap-4">
                  <div className="size-10 flex-center rounded-full bg-primary-300/70 text-primary-600">
                    <FontAwesomeIcon icon={faTruck} className="text-sm" />
                  </div>
                  <div>
                    <h3 className="">Free Delivery</h3>
                    <p className="text-gray-400 text-sm">Orders $50 or More</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 ">
                  <div className="size-10 flex-center rounded-full bg-primary-300/70 text-primary-600">
                    <FontAwesomeIcon icon={faRotateLeft} className="text-sm" />
                  </div>
                  <div>
                    <h3 className="">30 Days Return</h3>
                    <p className="text-gray-400 text-sm">
                      Satisfaction guaranteed
                    </p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
