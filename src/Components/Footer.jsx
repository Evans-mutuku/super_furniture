import React from "react";
// import logo from "../Images/JohFun1.jpg";

const Footer = () => {
  return (
    <div className="w-full mt-10 bg-gray-900  pb-10">
      <section className="pt-6 pb-3 mx-wd2 mx-auto border-b border-gray-700 flex justify-center flex-col items-center">
        {/* <img className="w-44 mb-6  items-center" src={logo} alt="" /> */}
        <span className="flex justify-between w-full flex-wrap mb-3">
          <span>
            <h3 className="pb-2 text-white font-semibold  text-lg">
              Get to Know Us
            </h3>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2 ">
              About JohFun
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Contact Us
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Services
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Investor relations
            </p>
          </span>
          <span>
            <h3 className="pb-2 text-white font-semibold  text-lg">
              Make Money with Us
            </h3>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2 ">
              Sell products on JohFun
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Advertise your products
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Become an Affiliate
            </p>
          </span>
          <span>
            <h3 className="pb-2 text-white font-semibold  text-lg">
              Let Us Help You
            </h3>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Your Account
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Your Orders
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Your Basket
            </p>
            <p className="text-sm text-gray-300 hover:text-orange-500 cursor-pointer mb-2">
              Shipping Rates & Policies
            </p>
          </span>
        </span>
      </section>
      <section className="text-gray-400 mt-4 text-sm flex items-center justify-between flex-wrap w-3/6 mx-auto">
        <p className="hover:text-orange-500 cursor-pointer">Privacy Policy</p>
        <p className="hover:text-orange-500 cursor-pointer">
          All rights reserved
        </p>
        <p className="hover:text-orange-500 cursor-pointer">Ads Policy</p>
        <span className="flex items-center">
          <p className="mt-1 text-xl pr-1">©</p>
          SuperMrembo 2022
        </span>
      </section>
    </div>
  );
};

export default Footer;
