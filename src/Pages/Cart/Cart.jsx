import { Link } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShield,
  faShieldHalved,
  faShoppingCart,
  faTruck,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import CartItem from "../../Components/CartITem/CartITem";
import { useContext } from "react";
import { CartContext } from "../../../context/Cart.context";
import CartSkeleton from "../../Components/Skeleton/CartSkeleton";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";
import imageEmpty from "../../assets/empty.svg";


export default function Cart() {
  const { cartInfo, isLoading } = useContext(CartContext);
  if (isLoading) {
    return <CartSkeleton />;
  }
  const { numOfCartItems, data } = cartInfo;
  const { products, totalCartPrice } = data;

  return (
    <>
      <PageMetadata
        title="FreshCard | Cart"
        description="View and manage the items in your FreshCard shopping cart. Review your selected groceries, check totals, and proceed to checkout for fast delivery."
        author="FreshCard Team"
        keywords="FreshCard, cart, shopping cart, groceries, checkout, online shopping"
      />{" "}
      <div className="bg-mainColor py-15">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 mb-2 gap-x-15">
            <div className="lg:col-span-8 bg-white py-5 rounded-md border border-gray-300/50 h-fit shadow-md">
              <div className="border-b border-gray-300 pb-4 px-10">
                <h3 className="text-xl font-bold">Shopping cart </h3>
                {products.length > 0 && (
                  <p className="text-gray-500 mt-1">
                    {" "}
                    {numOfCartItems} items in your cart.
                  </p>
                )}
              </div>

              {products.length > 0 ? (
                products.map((product) => (
                  <CartItem productInfo={product} key={product._id} />
                ))
              ) : (
                <>
                  <div className="py-10 text-center space-y-4 text-xl">
                    <img src={imageEmpty} alt="" className="w-full size-50 mb-10" />
                    <p>
                      Your Cart is empty{" "}
                      <FontAwesomeIcon icon={faShoppingCart} className="ms-2" />
                    </p>
                    <p>
                      You can Continue shopping{" "}
                      <Link to={`/`} className="text-primary-600">
                        Here
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white p-5 w-full rounded-md border border-gray-300/50">
                <>
                  <h3 className="text-xl font-bold mb-5">Order summary </h3>

                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">
                      Subtotal ({numOfCartItems} items)
                    </h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {totalCartPrice} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">Shipping</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {products.length > 0 ? 70 : 0} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg text-gray-600">Tax</h4>
                    <span className="text-sm text-[16px] font-semibold">
                      {Math.trunc(totalCartPrice * 0.14)} EGP
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-3 border-t py-3 border-gray-300">
                    <h4 className="text-lg font-bold">Total</h4>
                    <span className=" text-[16px] font-bold">
                      {Math.trunc(
                        totalCartPrice +
                          (products.length > 0 ? 70 : 0) +
                          totalCartPrice * 0.14
                      )}{" "}
                      EGP
                    </span>
                  </div>
                </>

                <div className="flex flex-col space-y-3">
                  <Link
                    to="/checkout"
                    className="py-3 bg-primary-600 border-transparent  text-lg font-semibold text-white text-center rounded-md"
                  >
                    Proceed to checkout
                  </Link>
                  <Link
                    to="/"
                    className="py-3 border mb-5 border-primary-600  text-lg text-primary-600 font-semibold text-center rounded-md"
                  >
                    Continue shopping
                  </Link>
                </div>
                <div className=" bg-mainColor p-3 mb-3 rounded-md border border-gray-300">
                  <div className="flex space-x-3 items-center">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-sm text-primary-600"
                    />
                    <span className="text-lg font-semibold">Free delivery</span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Your order qualifies for free delivery. estimated delivery
                    2-3 business day
                  </p>
                </div>
                <div className="bg-primary-100/50 p-3 mb-3 rounded-md border border-gray-300">
                  <div className="flex space-x-3 items-center">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-sm text-primary-600"
                    />
                    <span className="text-lg font-semibold">
                      Secure checkout
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mt-1">
                    Your payment information is protected with 256-bit SSL
                    encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
