import React from "react";
import LogoFreshCard from "../../assets/freshcart-logo.svg";
import LogoFreshCardmini from "../../assets/mini-logo.png";
import { Link } from "react-router";
import {
  faFacebookF,
  faInstagram,
  faPinterest,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <footer className="py-5 bg-white border-t border-gray-400/20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 border-b border-gray-400/40 py-6">
            <div className="md:col-span-1 lg:col-span-2 space-y-6 ">
              <Link to={`/`}>
                <img src={LogoFreshCard} alt="Fresh Card Logo" />
              </Link>
              <p className="text-gray-600 mt-6">
                FreshCart is your one-stop destination and household essentials for fresh groceries,
                organic produce, and household essentials delivered right to
                your doorstep.
              </p>
              <ul className="flex items-center gap-4 *:text-lg *:text-gray-600 *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faPinterestP} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-xl font-semibold ">Categories</h2>
              <ul className="space-y-4 mt-6 *:text-gray-600  *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={`/`}>Fruits & Vegetables</Link>
                </li>
                <li>
                  <Link to={`/`}>Dairy & Eggs</Link>
                </li>
                <li>
                  <Link to={`/`}>Bakery & Snacks</Link>
                </li>
                <li>
                  <Link to={`/`}>Meat & Seafood</Link>
                </li>
                <li>
                  <Link to={`/`}>Beverages</Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold ">Quick Links</h2>
              <ul className="space-y-4 mt-6 *:text-gray-600  *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={`/about`}>About US</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact US</Link>
                </li>
                <li>
                  <Link to={`/privacy-policy`}>Privacy Policy</Link>
                </li>
                <li>
                  <Link to={`/terms`}>Terms of Services</Link>
                </li>
                <li>
                  <Link to={`/shipping-policy`}>Shipping Policy</Link>
                </li>
              </ul>
            </div>

            <div className="">
              <h2 className="text-xl font-semibold ">Customer Service</h2>
              <ul className="space-y-4 mt-6 *:text-gray-600  *:hover:text-primary-600 *:transition-colors *:duration-200">
                <li>
                  <Link to={`/my-account`}>My Account</Link>
                </li>
                <li>
                  <Link to={`/order-history`}>Order History</Link>
                </li>
                <li>
                  <Link to={`/Wishlist`}>Wishlist</Link>
                </li>
                <li>
                  <Link to={`/returns-and-refunds`}>Returns & Refunds</Link>
                </li>
                <li>
                  <Link to={`/help-center`}>Help Center</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-6 flex justify-between">
            <p className="text-gray-600">
              &copy; {new Date().getFullYear()} FreshCard. All rights reseved.
            </p>
            <img
              src={LogoFreshCardmini}
              alt="Fresh Card Logo Mini"
              className="w-8"
            />
          </div>
        </div>
      </footer>
    </>
  );
}
