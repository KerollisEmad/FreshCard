import {
  faAddressCard,
  faEnvelope,
  faHeart,
  faCreditCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBabyCarriage,
  faBars,
  faBarsStaggered,
  faBolt,
  faCartShopping,
  faChevronDown,
  faEllipsis,
  faMagnifyingGlass,
  faPerson,
  faPersonDress,
  faPhone,
  faRightFromBracket,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router";
import LogoFreshCard from "../../assets/freshcart-logo.svg";
import { AuthContext } from "../../../context/Auth-context";
import { CartContext } from "../../../context/Cart.context";

export default function Navbar() {
  const { cartInfo, isLoading } = useContext(CartContext);
  const { numOfCartItems } = cartInfo;

  const { token, logOut } = useContext(AuthContext);
  const [openmenu, setOpenmenu] = useState(false);
  function toggeleMenu() {
    setOpenmenu(!openmenu);
  }
  return (
    <>
      <header>
        <div className="container">
          {/* top nav */}
          <div className="hidden text-sm  md:flex justify-between items-center py-2 border-b border-gray-400/20">
            <ul className="flex gap-4 items-center *:flex *:items-center *:gap-1 lg:*:gap-2.5  ">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:01206390546">01206390546</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcard.com">support@freshcard.com</a>
              </li>
            </ul>
            <ul className="flex gap-2 lg:gap-4 items-center">
              <li>
                <Link to={`track-order`}>Track Order</Link>
              </li>
              <li>
                <Link to={`about`}>About</Link>
              </li>
              <li>
                <Link to={`contact`}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>SAR</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option value="ar">العربيه</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
          {/* main nav */}
          <nav className="flex items-center justify-between gap-3 py-6">
            <h1>
              <Link to={"/"}>
                <img src={LogoFreshCard} alt="Freshcard logo " />
              </Link>
            </h1>
            <search className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search for Products..."
                className="from-control md:min-w-56 lg:min-w-72 xl:min-w-96"
              />
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className="absolute top-1/2 -translate-y-1/2 right-4 text-black/50"
              />
            </search>
            <ul className="hidden md:flex items-center gap-3 xl:gap-8 lg:gap-6  ">
              <li>
                <NavLink
                  to={`wishlist`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      className="lg:text-xl text-cm"
                      icon={faHeart}
                    />
                  </div>
                  <span className="text-[12px] lg:text-sm">Wishlist</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`cart`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      className="lg:text-xl text-cm"
                      icon={faCartShopping}
                    />
                    <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-sm bg-primary-600 text-white size-5 flex-center rounded-full">
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : (
                        numOfCartItems
                      )}
                    </span>
                  </div>
                  <span className="text-[12px] lg:text-sm">Cart</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`account`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      className="lg:text-xl text-cm"
                      icon={faUser}
                    />
                  </div>
                  <span className="text-[12px] lg:text-sm">Account</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`checkout`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                  }}
                >
                  <div>
                    <FontAwesomeIcon
                      className="lg:text-xl text-cm"
                      icon={faCreditCard}
                    />
                  </div>
                  <span className="text-[12px] lg:text-sm">checkout</span>
                </NavLink>
              </li>

              {!token && (
                <>
                  <li>
                    <NavLink
                      to={`signup`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <div>
                        <FontAwesomeIcon
                          className="lg:text-xl text-cm"
                          icon={faUserPlus}
                        />
                      </div>
                      <span className="text-[12px] lg:text-sm">Sign up</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`login`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        }  flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <div>
                        <FontAwesomeIcon
                          className="lg:text-xl text-cm"
                          icon={faAddressCard}
                        />
                      </div>
                      <span className="text-[12px] lg:text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              )}

              {token && (
                <li
                  className="cursor-pointer flex flex-col gap-1 xl:gap-2 items-center hover:text-primary-500 transition-colors duration-200 "
                  onClick={logOut}
                >
                  <div>
                    <FontAwesomeIcon
                      className="lg:text-xl text-cm"
                      icon={faRightFromBracket}
                    />
                  </div>
                  <span className="text-[12px] lg:text-sm">Logout</span>
                </li>
              )}
            </ul>
            <button
              className="btn bg-primary-600 text-white md:hidden"
              onClick={toggeleMenu}
            >
              {!openmenu ? (
                <FontAwesomeIcon icon={faBarsStaggered} className="pt-1" />
              ) : (
                <FontAwesomeIcon icon={faXmark} className="pt-1" />
              )}
            </button>
          </nav>
        </div>
        {/* category nav */}
        <nav className="bg-gray-100/90 hidden md:block">
          <div className="container flex gap-8 items-center py-3.5">
            <div className="relative group z-10">
              <button className="btn flex items-center gap-3 text-sm lg:text-[16px] text-white bg-primary-600 hover:bg-primary-600/95 font-medium">
                <FontAwesomeIcon icon={faBars} />
                All Categories
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <menu className="absolute group-hover:block  hidden top-10 min-w-56 *:py-2 *:px-3 rounded-lg bg-white shadow *:hover:bg-gray-100 divide-y-2 divide-gray-200/40">
                <li>
                  <Link className="flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faPersonDress}
                    />
                    <span>Women's Fashion</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faSuitcaseMedical}
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faPerson}
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3">
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faBolt}
                    />
                    <span>Electronics</span>
                  </Link>
                </li>
                <li>
                  <Link className="flex items-center gap-3" to={"/categories"}>
                    <FontAwesomeIcon
                      className="text-primary-500"
                      fixedWidth
                      icon={faEllipsis}
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </menu>
            </div>

            <ul className="flex gap-3 lg:gap-5 items-center *:text-sm lg:*:text-[16px]">
              <li>
                <NavLink
                  to={`/`}
                  className={({ isActive }) => {
                    return isActive ? `text-primary-500` : "";
                  }}
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/recently-added`}
                  className={({ isActive }) => {
                    return isActive ? `text-primary-500` : "";
                  }}
                >
                  Recently Added
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/categories`}
                  className={({ isActive }) => {
                    return isActive ? `text-primary-500` : "";
                  }}
                >
                  Categories
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/offers`}
                  className={({ isActive }) => {
                    return isActive ? `text-primary-500` : "";
                  }}
                >
                  Offers
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/brands`}
                  className={({ isActive }) => {
                    return isActive ? `text-primary-500` : "";
                  }}
                >
                  Brands
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>

        {/* offcanvas */}

        {openmenu && (
          <>
            <div
              className="background cursor-pointer fixed z-20 inset-0 bg-black/50"
              onClick={toggeleMenu}
            ></div>
            <div className="offcanvas space-y-5 bg-white fixed top-0 bottom-0 p-6 z-40 animate-slide-in">
              <div className="flex items-center justify-between pb-4 border-b border-gray-400/20">
                <img src={LogoFreshCard} alt="Freshcard logo" />
                <button
                  className="btn size-9 rounded-2xl flex justify-center items-center hover:text-primary-700"
                  onClick={toggeleMenu}
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              <search className="relative ">
                <input
                  type="text"
                  placeholder="Search for Products..."
                  className="from-control min-w-72"
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute top-1/2 -translate-y-1/2 right-4 text-black/50"
                />
              </search>
              <div>
                <h2 className="text-xl font-bold">Main Menu</h2>
                <ul className="space-y-3 mt-3 *:rounded-xl *:hover:bg-gray-200/30 *:transition-colors *:duration-300 pb-5 border-b border-gray-400/20">
                  <li>
                    <NavLink
                      to={`wishlist`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-200/30" : ""
                        }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faHeart} />
                      <span className="text-sm">Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`cart`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-200/30" : ""
                        }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <div className="relative">
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={faCartShopping}
                        />
                        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-sm bg-primary-600 text-white size-5 flex-center rounded-full">
                          3
                        </span>
                      </div>
                      <span className="text-sm">Cart</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`acount`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-200/30" : ""
                        }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faUser} />
                      <span className="text-sm">Acount</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`checkout`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600 bg-primary-200/30" : ""
                        }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                      }}
                    >
                      <FontAwesomeIcon className="text-xl" icon={faUser} />
                      <span className="text-sm">Chekout</span>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-bold">Account</h2>
                <ul className="space-y-3 mt-3 *:rounded-xl *:hover:bg-gray-200/30 *:transition-colors *:duration-300">
                  {!token ? (
                    <>
                      <li>
                        <NavLink
                          to={`signup`}
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? "text-primary-600 bg-primary-200/30"
                                : ""
                            }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faUserPlus}
                          />
                          <span className="text-sm">Sign up</span>
                        </NavLink>
                      </li>

                      <li>
                        <NavLink
                          to={`login`}
                          className={({ isActive }) => {
                            return `${
                              isActive
                                ? "text-primary-600 bg-primary-200/30"
                                : ""
                            }  flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200`;
                          }}
                        >
                          <FontAwesomeIcon
                            className="text-xl"
                            icon={faAddressCard}
                          />
                          <span className="text-sm">Login</span>
                        </NavLink>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="cursor-pointer flex gap-3 py-3 rounded-xl px-2 items-center hover:text-primary-500 transition-colors duration-200"
                        onClick={logOut}
                      >
                        <FontAwesomeIcon
                          className="text-xl"
                          icon={faRightFromBracket}
                        />
                        <span className="text-sm">Logout</span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </>
        )}
      </header>
    </>
  );
}
