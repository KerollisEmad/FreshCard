import reviewPersonImage from "../../assets/review-author.png";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import {
  faLeaf,
  faShieldHalved,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import * as yup from "yup";
import { API_CONFIG } from "../../../confic/confic";
import { sendDataToSignup } from "../../../services/auth-service";
import { checkStrenghPassword } from "../../../utils/password-strength";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";

export default function Signup() {
  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);

  //#region
  const phoneRegex = /^[\]?[20]?01[0125]\d{8}$/;
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters long")
      .max(50, "Name must be at most 50 characters long"),
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Please enter a valid email address"),
    phone: yup
      .string()
      .required("Phone number is required")
      .matches(phoneRegex, "Please enter a valid Egyptian phone number"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character",
      ),
    rePassword: yup
      .string()
      .required("Please confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  //#endregion

  async function handleSignup(values) {
    try {
      const response = await sendDataToSignup(values);

      if (response.success) {
        toast.success("in success account");

        navigate(`/`);
      }
    } catch (error) {
      setIsError(error.message);
      toast.error("*Account Already Exists...");
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  const feedbackPassword = checkStrenghPassword(formik.values.password);

  return (
    <>
      <PageMetadata
        title="FreshCard | Signup"
        description="Create your FreshCard account to enjoy fresh groceries delivered to your door. Sign up for exclusive deals, fast delivery, and a seamless shopping experience."
        author="FreshCard Team"
        keywords="FreshCard, signup, create account, groceries, online shopping, fresh food, delivery"
      />
      <main className="py-10 bg-primary-100/10">
        <div className="container grid lg:grid-cols-2 lg:gap-12">
          {/* //! left slide */}
          <div className="p-6 xl:p-16 space-y-8 ">
            <div className="title">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-bold mb-2">
                Welcome to <span className="text-primary-600">FreshCard</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Join thousands of happy customers who enjoy fresh groceries
                delivered right to their doorstep.
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-6 space-y-4">
              <li>
                <span className="size-12 bg-primary-300/60 text-primary-700 flex-center text-xl rounded-full">
                  <FontAwesomeIcon icon={faLeaf} />
                </span>
                <span>
                  <h3 className="font-bold">Fresh & Organic</h3>
                  <p className="text-sm text-gray-600">
                    Premium quality products sourced directly from farms
                  </p>
                </span>
              </li>
              <li>
                <span className="size-12 bg-primary-300/60 text-primary-700 flex-center text-xl rounded-full">
                  <FontAwesomeIcon icon={faTruckFast} />
                </span>
                <span>
                  <h3 className="font-bold">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </span>
              </li>
              <li>
                <span className="size-12 bg-primary-300/60 text-primary-700 flex-center text-xl rounded-full">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </span>
                <span>
                  <h3 className="font-bold">Secure Shopping</h3>
                  <p className="text-sm text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </span>
              </li>
            </ul>
            <div className="review bg-primary-300 space-y-4 shadow-xl p-6 pe-10 rounded-lg">
              <div className="flex items-center gap-4">
                <img
                  src={reviewPersonImage}
                  className="size-12"
                  alt="image is person reviwer"
                />
                <span>
                  <h4>Sarah Johnson</h4>
                  <span className="*:text-yellow-400">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                </span>
              </div>
              <blockquote>
                <p className="italic">
                  "FreshCart has completely changed how I shop for groceries.
                  The quality is amazing and delivery is always on time!"
                </p>
              </blockquote>
            </div>
          </div>
          {/* //! Right   slide  */}
          <div className="bg-white shadow-xl rounded-xl px-10 py-10 space-y-8">
            <div className="text-center pt-6">
              <h2 className="text-2xl md:text-3xl xl:text-4xl font-semibold">
                Create Your Account
              </h2>
              <p className="text-gray-600 mt-1">
                Start your fresh journey with us today
              </p>
            </div>

            <div className="flex items-center *:grow gap-4 *:hover:bg-primary-100/15 *:hover:text-black">
              <button className="btn bg-transparent border border-gray-300/60 flex-center gap-2 ">
                <FontAwesomeIcon icon={faGoogle} className="text-red-700" />
                <span className="">Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-300/60 flex-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
                <span className="">Facebook</span>
              </button>
            </div>

            <div className="w-full h-[1px] bg-gray-300/60 relative">
              <span className="absolute text-gray-500 bg-white px-5 left-1/2 top-0 -translate-1/2">
                OR
              </span>
            </div>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-1">
                <label htmlFor="name">Name *</label>
                <input
                  className={`from-control ${
                    formik.touched.name && !formik.errors.name
                      ? "border-green-300"
                      : ""
                  }
                        ${
                          formik.touched.name && formik.errors.name
                            ? "border-red-300"
                            : ""
                        }`}
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Kero Emad"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.name && formik.touched.name ? (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.name}.
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="email">Email *</label>
                <input
                  className={`from-control ${
                    formik.touched.email && !formik.errors.email
                      ? "border-green-300"
                      : ""
                  }
                        ${
                          formik.touched.email && formik.errors.email
                            ? "border-red-300"
                            : ""
                        }`}
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ex: kero@gmail.com"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.email && formik.touched.email ? (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.email}.
                    </p>
                  </>
                ) : (
                  ""
                )}
                {isError && (
                  <p className="text-red-500 text-sm p-1">*{isError}...</p>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  className={`from-control ${
                    formik.touched.phone && !formik.errors.phone
                      ? "border-green-300"
                      : ""
                  }
                        ${
                          formik.touched.phone && formik.errors.phone
                            ? "border-red-300"
                            : ""
                        }`}
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="ex: +20 120 6390 546"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.phone}.
                    </p>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="password">Password *</label>
                <input
                  className={`from-control ${
                    formik.touched.password && !formik.errors.password
                      ? "border-green-300"
                      : ""
                  }
                        ${
                          formik.touched.password && formik.errors.password
                            ? "border-red-300"
                            : ""
                        }`}
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Create a Stronge Password "
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.password && formik.touched.password ? (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.password}.
                    </p>
                  </>
                ) : (
                  <p className="text-gray-500 text-sm ">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                )}

                {formik.values.password && (
                  <>
                    <div className="password-strengh -mt-1 flex-center gap-4 ">
                      <div className="bar w-full h-1 bg-gray-200 rounded-xl overflow-hidden">
                        <div
                          className={`progress h-1 ${feedbackPassword.background} ${feedbackPassword.width}`}
                        ></div>
                      </div>
                      <span className="text-gray-500 text-sm text-center text-nowrap w-28">
                        {feedbackPassword.text}
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="repassword">Confirm Password *</label>
                <input
                  className={`from-control ${
                    formik.touched.rePassword && !formik.errors.rePassword
                      ? "border-green-300"
                      : ""
                  }
                        ${
                          formik.touched.rePassword && formik.errors.rePassword
                            ? "border-red-300"
                            : ""
                        }`}
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  placeholder="Cofirm Your Password"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.rePassword && formik.touched.rePassword ? (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.rePassword}.
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <input
                    className="from-control accent-primary-600 size-3.5"
                    type="checkbox"
                    id="terms"
                    name="terms"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms" className="">
                    I agree to the{" "}
                    <Link to={`/terms`} className="text-primary-600 underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      to={`/privacy-policy`}
                      className="text-primary-600 underline"
                    >
                      Privacy Policy
                    </Link>
                    *
                  </label>
                </div>
                {formik.errors.terms && formik.touched.terms ? (
                  <>
                    <p className="text-red-500 text-sm p-1 mt-1">
                      *{formik.errors.terms}.
                    </p>
                  </>
                ) : (
                  ""
                )}
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 text-white py-4 w-full flex-center gap-4"
              >
                <FontAwesomeIcon icon={faUserPlus} />
                <span className="font-medium">Create My Account</span>
              </button>
            </form>

            <div className="text-center border-t border-gray-400/20 pt-6">
              <p>
                Already have an account?{" "}
                <Link to={`/login`} className="text-primary-600 underline">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
