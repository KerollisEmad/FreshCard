import {
  faCcAmex,
  faCcApplePay,
  faCcMastercard,
  faCcPaypal,
  faCcVisa,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowRightLong,
  faChevronLeft,
  faCircleInfo,
  faCreditCard,
  faLock,
  faMoneyBill1Wave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import ChekoutSkeleton from "../../Components/Skeleton/ChekoutSkeleton";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";
import { createOrder } from "../../../services/payment-services";
import { useContext } from "react";
import { CartContext } from "../../../context/Cart.context";
import { toast } from "react-toastify";
export default function Checkout() {
  const { cartInfo, isLoading, refreash } = useContext(CartContext);
  const validationSchema = yup.object({
    paymentMethod: yup.string().required(),
    shippingAddress: yup.object({
      details: yup.string().required("Address is required."),
      phone: yup
        .string()
        .required("Phone is required.")
        .matches(/^(\+2)?01[0125][0-9]{8}$/, "Phone Number is invalid"),
      city: yup.string().required("City is required"),
    }),
  });
  const navigate = useNavigate();
  const { cartId, data, numOfCartItems } = cartInfo;

  async function handleCreatingOrder(values) {
    try {
      const response = await createOrder({
        cartId: cartId,
        shippingAddress: values.shippingAddress,
        paymentMethod: values.paymentMethod,
      });

      if (response.success) {
        if (response.data.session) {
          toast.loading("Redirecting to payment gateway...");
          setTimeout(() => {
            location.href = response.data.session.url;
          }, 2000);
        }

        toast.success("Order created successfully");
        setTimeout(() => {
          navigate("/orders");
        }, 2000);

        refreash();
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to create order. Please try again.");
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });
  if (isLoading || !cartInfo || !data) {
    return <ChekoutSkeleton />;
  }

  const { products, totalCartPrice } = data;

  return (
    <>
      <PageMetadata
        title="FreshCard | Checkout"
        description="Securely complete your FreshCard order. Enter your shipping address, select a payment method, and review your order summary before placing your grocery order."
        author="FreshCard Team"
        keywords="FreshCard, checkout, payment, shipping, order summary, groceries, online shopping"
      />
      <section className="py-16 bg-primary-50/50 ">
        <div className="container mx-auto max-w-6xl">
          <form onSubmit={formik.handleSubmit}>
            <h1 className="text-3xl font-black mb-6">Checkout</h1>
            <div className="grid grid-cols-1  lg:grid-cols-12  gap-8">
              <div className="payment-method  lg:col-span-8">
                <div className="payment-options bg-white shadow-md rounded-xl p-6 mb-8">
                  <h2 className="text-xl font-semibold mb-6">Payment Method</h2>
                  <div>
                    <label
                      htmlFor="cod"
                      className={`${
                        formik.values.paymentMethod === "cod" &&
                        "bg-primary-100"
                      } mt-4 flex border border-gray-300 hover:border-primary-300 transition-colors duration-200 rounded-xl p-4`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        id="cod"
                        value={`cod`}
                        className="size-5"
                        onChange={() =>
                          formik.setFieldValue("paymentMethod", "cod")
                        }
                        checked={formik.values.paymentMethod === "cod"}
                      />

                      <div className="w-full">
                        <div className="flex flex-wrap items-center justify-between p-2 md:p-4">
                          <div className="flex items-center gap-4 px-2">
                            <FontAwesomeIcon
                              icon={faMoneyBill1Wave}
                              className="text-primary-600 text-2xl"
                            />
                            <div>
                              <h3 className="font-semibold md:text-[16px]">
                                Cash on Delivery
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Pay when your order arrives
                              </p>
                            </div>
                          </div>

                          <span className="text-primary-600 font-semibold text-sm ms-auto mt-3 sm:mt-0">
                            No extra charges
                          </span>
                        </div>

                        <div className="flex md:ms-6 py-2">
                          {formik.values.paymentMethod === "cod" && (
                            <p className="flex items-center text-primary-700 bg-primary-50 px-3 md:px-5 py-1.5 md:py-3 border border-primary-300 rounded-xl">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="me-2"
                              />
                              <span className="text-sm break-words">
                                Please keep exact change ready for hassle-free
                                delivery.
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </label>

                    <label
                      htmlFor="online"
                      className={`${
                        formik.values.paymentMethod === "online" &&
                        "bg-primary-100"
                      } mt-4 flex border border-gray-300 hover:border-primary-300 transition-colors duration-200 rounded-xl p-4`}
                    >
                      <input
                        type="radio"
                        name="payment"
                        id="online"
                        value={`online`}
                        className="size-5"
                        onChange={() =>
                          formik.setFieldValue("paymentMethod", "online")
                        }
                        checked={formik.values.paymentMethod === "online"}
                      />

                      <div className="w-full">
                        <div className="flex flex-wrap items-center justify-between p-2 md:p-4">
                          <div className="flex items-center gap-3 px-2">
                            <FontAwesomeIcon
                              icon={faCreditCard}
                              className="text-primary-600 text-2xl"
                            />
                            <div>
                              <h3 className="font-semibold md:text-[16px]">
                                Online Payment
                              </h3>
                              <p className="text-gray-500 text-sm">
                                Pay Securely with card or digital wallet
                              </p>
                            </div>
                          </div>

                          <span className="text-primary-600 font-semibold text-sm ms-auto mt-3 sm:mt-0">
                            Recommended
                          </span>
                        </div>

                        <div className="flex md:ms-6 py-2">
                          {formik.values.paymentMethod === "online" && (
                            <p className="flex items-start text-blue-600 bg-primary-50 px-3 md:px-5 py-1.5 md:py-3 border border-blue-300 rounded-xl">
                              <FontAwesomeIcon
                                icon={faCircleInfo}
                                className="me-2 mt-1"
                              />
                              <span className="text-sm break-words">
                                You will be redirected to the payment gateway
                                for secure checkout.
                              </span>
                            </p>
                          )}
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="shipping-address bg-white shadow-md rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-6">
                    Shipping Address{" "}
                  </h2>
                  <div className="">
                    <div className="address flex flex-col gap-1 text-sm">
                      <label htmlFor="address-details">Address Details *</label>
                      <textarea
                        id="address-details"
                        placeholder="Enter Your full address details"
                        className="from-control min-h-24 max-h-40"
                        onChange={formik.handleChange}
                        value={formik.values.shippingAddress.details}
                        name="shippingAddress.details"
                      ></textarea>
                      {formik.touched.shippingAddress?.details &&
                        formik.errors.shippingAddress?.details && (
                          <p className="text-red-500 text-xs">
                            {formik.errors.shippingAddress.details}
                          </p>
                        )}
                    </div>
                    <div className="flex flex-wrap gap-4 mt-4">
                      <div className="phone flex flex-col gap-1 grow-1 text-sm">
                        <label htmlFor="phone">Phone Numder *</label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="01206390546"
                          className="from-control"
                          onChange={formik.handleChange}
                          value={formik.values.shippingAddress.phone}
                          name="shippingAddress.phone"
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.shippingAddress?.phone &&
                          formik.errors.shippingAddress?.phone && (
                            <p className="text-red-500 text-xs">
                              {formik.errors.shippingAddress.phone}
                            </p>
                          )}
                      </div>
                      <div className="city flex flex-col gap-1 grow-1 text-sm">
                        <label htmlFor="city">City *</label>
                        <input
                          type="text"
                          id="city"
                          placeholder="Alexandria"
                          className="from-control"
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.shippingAddress.city}
                          name="shippingAddress.city"
                        />
                        {formik.touched.shippingAddress?.city &&
                          formik.errors.shippingAddress?.city && (
                            <p className="text-red-500 text-xs">
                              {formik.errors.shippingAddress.city}
                            </p>
                          )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-summary  lg:col-span-4 bg-white shadow-md rounded-xl p-6 h-fit">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                <div className="cart-items space-y-3 pb-4  max-h-40 overflow-y-auto p-2 pe-4 bg-primary-50/20 ">
                  {products.map((product) => (
                    <Link
                      to={`/product/${product.product._id}`}
                      className="item flex items-center gap-2"
                      key={product._id}
                    >
                      <img
                        src={product.product.imageCover}
                        alt=""
                        className="size-12 object-cover rounded-lg"
                      />
                      <div>
                        <h3 className="text-xs line-clamp-1 text-gray-600">
                          {product.product.title}
                        </h3>
                        <span className="text-xs text-gray-500">
                          Qty: {product.count}
                        </span>
                      </div>

                      <span className="ms-auto text-xs">
                        {product.price} <br /> EGP
                      </span>
                    </Link>
                  ))}
                </div>

                <ul className="mt-4 pt-4 border-t-2 border-gray-600/30 *:flex *:justify-between *:items-center space-y-2 text-gray-600">
                  <li>
                    <span>Subtotal</span>
                    <span>{totalCartPrice} EGP</span>
                  </li>
                  <li>
                    <span>Delivery</span>
                    <span>{products.length > 0 ? "70" : "0"} EGP</span>
                  </li>
                  <li>
                    <span>Tax</span>
                    <span>{Math.trunc(totalCartPrice * 0.14)} EGP</span>
                  </li>
                  <li className="border-t-2 border-gray-600/30 py-4 mt-3 font-semibold">
                    <span>Total</span>
                    <span>
                      {Math.trunc(
                        totalCartPrice * 0.14 +
                          totalCartPrice +
                          (products.length > 0 ? "70" : "0")
                      )}{" "}
                      EGP
                    </span>
                  </li>
                </ul>

                <div className="flex flex-col space-y-3 mt-2">
                  <button
                    type="submit"
                    className="btn btn-pro py-3 cursor-pointer bg-primary-600 border-transparent  text-sm font-semibold text-white text-center rounded-md"
                  >
                    <span>Proceed to Payment</span>
                    <FontAwesomeIcon icon={faArrowRightLong} />
                  </button>
                  <Link
                    to="/cart"
                    className="py-3 border mb-5 border-primary-600  text-sm text-primary-600 font-semibold text-center rounded-md"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} /> Previous Step
                  </Link>
                </div>

                <div className="secure text-sm text-gray-700 space-y-2">
                  <h3>Secure Chekout</h3>
                  <p className="text-xs">
                    <FontAwesomeIcon
                      icon={faLock}
                      className="me-2 text-primary-700"
                    />
                    Your Payment information is secure
                  </p>
                  <div className="flex items-center space-x-2 mt-4">
                    <FontAwesomeIcon
                      icon={faCcVisa}
                      className="text-2xl  text-blue-700"
                    />
                    <FontAwesomeIcon
                      icon={faCcMastercard}
                      className="text-2xl  text-red-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcAmex}
                      className="text-2xl  text-blue-500"
                    />
                    <FontAwesomeIcon
                      icon={faCcPaypal}
                      className="text-2xl  text-blue-800"
                    />
                    <FontAwesomeIcon
                      icon={faCcApplePay}
                      className="text-2xl  text-gray-7800"
                    />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
