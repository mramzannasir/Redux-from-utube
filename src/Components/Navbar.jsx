import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto md:mx-0 flex flex-wrap md:px-8 pt-5 flex-col md:flex-row items-center justify-between">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            Logo
          </div>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            
            <div className="mr-5 hover:text-gray-900 ">
              <Link to={"/"}>Product</Link>
            </div>
            <div className="mr-5 hover:text-gray-900 ">
              {" "}
              <Link to={"/Cart"}>Cart</Link>
            </div>
          </nav>
          <div className="inline-flex items-center rounded text-base mt-4 md:mt-0">
            <p className="text-sm font-semibold cursor-pointediv">
              <Link to={"/Cart"}>
                <li class="font-sans block mt-4 lg:inline-block lg:mt-0 lg:ml-6 align-middle text-black ">
                  <a href="#" role="button" class="relative flex">
                    <svg
                      class="flex-1 w-8 h-8 fill-current"
                      viewbox="0 0 24 24"
                    >
                      <path d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z" />
                    </svg>
                    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                    {items.length}
                    </span>
                  </a>
                </li>{" "}
              </Link>
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
