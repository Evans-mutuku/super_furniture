import { useNavigate } from "react-router-dom";
import {
  GiftIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Logo from "../Images/JohFun.jpg";
// import { useState } from "react";
// import { useStateValue } from "../Utils/StateProvider";

const Header = () => {
  // const [{basket, user}, dispatch] = useStateValue()
  const navigate = useNavigate();

  // const handleAuthentication = () => {
  //   if(user){
  //     auth.signOut()
  //   }
  // }

  return (
    <div className=" shadow-md bg-white pt-3 pb-3 z-100 ">
      <main className=" mx-wd flex items-center justify-between mx-auto ">
        <section>
          <h2
            className="text-2xl cursor-pointer text-orange-500 font-bold"
            onClick={() => navigate("/")}
          >
            <img className="h-10 cursor-pointer" src={Logo} alt="johfun logo" />
          </h2>
        </section>

        <section className="flex justify-between rounded-full p-1 w-3/5 pl-4 pr-3 items-center border-2 border-orange-500">
          <input
            className="pl-2 focus:outline-none w-full pr-2 text-sm"
            type="search"
            placeholder="What are you looking for..."
          />
          <SearchIcon className="h-7 cursor-pointer text-orange-500 font-bold" />
        </section>

        <section className="flex justify-between w-1/5 items-center">
          <div onClick={() => navigate("/login")}>
            <div className="text-sm flex cursor-pointer">
              <UserIcon className="h-8" />
              <span className="flex cursor-pointer text-gray-500 flex-col">
                <span className="font-s -mb-1">Hello</span>
                <span>SignIn, User </span>
              </span>
            </div>
          </div>

          <div onClick={() => navigate("/orders")}>
            <div className="text-sm flex flex-col cursor-pointer">
              <span className="font-s text-gray-600">Returns</span>
              {/* <GiftIcon className="h-5" /> */}
              <span className="font-light">& Orders</span>
            </div>
          </div>

          <div onClick={() => navigate("/checkout")}>
            <span className="cursor-pointer">
              <span className="text-sm text-orange-600 ml-3 mb-12 font-bold animate-pulse">
                3
              </span>
              <ShoppingCartIcon className="h-8 -mt-2" />
            </span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Header;
