import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imageScreenLogin from "../../assets/login-img.png";
import * as yup from "yup";
import {
  faCircleQuestion,
  faClock,
  faLock,
  faStar,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Link, useLocation, useNavigate } from "react-router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { useFormik } from "formik";
import {
  faEnvelope,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { sendDataToLogin } from "../../../services/auth-service";
import { AuthContext } from "../../../context/Auth-context";
import PageMetadata from "../../Components/PageMetadata/PageMetadata";

export default function Login() {
  const { setToken } = useContext(AuthContext);

  const location = useLocation();
  const from = location?.state?.from || "/";

  const navigate = useNavigate();
  const [isError, setIsError] = useState(null);
  const [passwordVisable, setPasswordVisable] = useState(false);

  function toggleVisabilitePassword() {
    setPasswordVisable(!passwordVisable);
  }

  //#region
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .matches(emailRegex, "Please enter a valid email address"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character",
      ),
  });
  //#endregion

  async function handleSignup(values) {
    try {
      const response = await sendDataToLogin(values);

      if (response.success) {
        toast.success("Welcom Back.");
        setToken(response.data.token);

        if (formik.values.terms) {
          localStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.setItem("token", response.data.token);
        }
        setTimeout(() => {
          navigate(from);
        }, 500);
      }
    } catch (error) {
      console.log(error);

      setIsError(error.message);
      toast.error("*Incorrect email or password");
    }
  }
  function handleChange(e) {
    setIsError(null);
    formik.handleChange(e);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      terms: false,
    },
    validationSchema,
    onSubmit: handleSignup,
  });

  return (
    <>
      <PageMetadata
        title="FreshCard | Login"
        description="Sign in to your FreshCard account for easy online grocery shopping. Access your saved items, track orders, and enjoy exclusive deals."
        author="FreshCard Team"
        keywords="FreshCard, login, sign in, groceries, online shopping, account access, exclusive deals"
      />
      <main className="py-16 bg-primary-100/10">
        <div className="container  grid lg:grid-cols-2 lg:gap-20 gap-6">
          {/* //! left slider */}
          <div className="p-6 xl:p-16 space-y-8 text-center">
            <div className="image">
              <img
                src={imageScreenLogin}
                className="mx-auto shadow-2xl rounded-2xl sm:h-80 lg:h-90 w-10/12"
                alt="Image in Page Login"
              />
            </div>
            <div className="content space-y-4">
              <h2 className="text-3xl font-bold mb-2">
                Fresh Groceries Delivered
              </h2>
              <p className="text-gray-600 text-lg">
                Join thousands of happy customers who trust FreshCart for their
                daily grocery needs
              </p>
              <ul className="*:flex *:items-center text-[10px] sm:text-sm lg:text-lg *:gap-1.5 gap-2 sm:gap-6  flex-center">
                <li>
                  <FontAwesomeIcon
                    icon={faTruck}
                    className="text-primary-700"
                  />
                  <span className="text-gray-500">Free Delivery</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faCircleQuestion}
                    className="text-primary-700"
                  />
                  <span className="text-gray-500">Secure Payment</span>
                </li>
                <li>
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-primary-700"
                  />
                  <span className="text-gray-500">24/7 Support </span>
                </li>
              </ul>
            </div>
          </div>
          {/* //! form */}
          <div className="bg-white shadow-xl rounded-xl px-10 py-10 space-y-8">
            <div className="text-center pt-6">
              <h2 className="text-4xl font-black">
                <span className="text-primary-700">Fress</span>Card
              </h2>
              <h3 className="text-3xl mt-4">Welcome Back!</h3>
              <p className="text-gray-600 mt-1">
                Sign in to continue your fresh shopping experience
              </p>
            </div>

            <div className="flex flex-col *:w-full items-center gap-4 *:hover:bg-primary-100/15 *:hover:text-black">
              <button className="btn py-2.5 bg-transparent border border-gray-300/60 flex-center gap-4 ">
                <FontAwesomeIcon icon={faGoogle} className="text-red-700" />
                <span className="">Continue with Google</span>
              </button>
              <button className="btn py-2.5 bg-transparent border border-gray-300/60 flex-center gap-2">
                <FontAwesomeIcon icon={faFacebook} className="text-blue-700" />
                <span className="">Continue with Facebook</span>
              </button>
            </div>

            <div className="w-full h-[1px] bg-gray-300/60 relative">
              <span className="absolute text-gray-500 text-[10px] sm:text-sm bg-white px-2 md:px-5 left-1/2 top-0 -translate-1/2">
                OR CONTINUE WITH EMAIL
              </span>
            </div>

            <form className="space-y-6" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="ps-1 text-gray-950 font-medium text-lg"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    className={`ps-15 py-3 w-full from-control ${
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
                    placeholder="Enter Your Email"
                    value={formik.values.email}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute text-gray-500 text-lg top-1/2 left-5 -translate-y-1/2"
                  />
                </div>

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
                <div className="flex items-center justify-between">
                  <label htmlFor="password">Password </label>
                  <Link to={`/forgot-password`} className="text-primary-500">
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    className={`ps-15 py-3 w-full from-control ${
                      formik.touched.password && !formik.errors.password
                        ? "border-green-300"
                        : ""
                    }
                     ${
                       formik.touched.password && formik.errors.password
                         ? "border-red-300"
                         : ""
                     }`}
                    type={passwordVisable ? "text" : "password"}
                    id="password"
                    name="password"
                    placeholder="Create a Stronge Password"
                    value={formik.values.password}
                    onChange={handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <FontAwesomeIcon
                    icon={faLock}
                    className="absolute text-gray-400 text-lg top-1/2 left-5 -translate-y-1/2"
                  />
                  <FontAwesomeIcon
                    icon={passwordVisable ? faEyeSlash : faEye}
                    onClick={toggleVisabilitePassword}
                    className="absolute text-gray-500 text-lg top-1/2 right-4 -translate-y-1/2"
                  />
                </div>
                {formik.errors.password && formik.touched.password ? (
                  <>
                    <p className="text-red-500 text-sm p-1">
                      *{formik.errors.password}.
                    </p>
                  </>
                ) : (
                  ""
                )}
                {isError && <p className="text-red-500 text-sm">*{isError}.</p>}
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
                  <label htmlFor="terms"> Keep me Signed In</label>
                </div>
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 text-white py-3 w-full flex-center gap-4"
              >
                <span className="text-lg font-medium">Sign In</span>
              </button>
            </form>

            <div className="text-center border-t text-lg border-gray-400/20 pt-6">
              <p className="text-gray-700">
                New to FreshCard ?
                <Link to={`/signup`} className="text-primary-600 ms-2">
                  Create an account
                </Link>
              </p>
            </div>
            <ul className="*:flex *:items-center *:gap-2 flex-center gap-6 **:text-gray-600">
              <li>
                <FontAwesomeIcon icon={faLock} />
                <span>SSL Secured</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faUsers} />
                <span>50K+ Users</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faStar} />
                <span>4.9 Rating</span>
              </li>
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
