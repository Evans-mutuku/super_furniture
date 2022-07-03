import { useNavigate } from "react-router-dom";
import {
  SearchIcon,
  ShoppingCartIcon,
  UserIcon,
} from "@heroicons/react/outline";
import { auth } from "../Utils/firebase";
import { useStateValue } from "../Utils/StateProvider";

const Header = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className=" shadow-md bg-white pt-3 pb-3 z-auto nav">
      <main className=" mx-wd flex items-center justify-between mx-auto ">
        <section>
          <h1
            onClick={() => navigate("/")}
            className="text-pink-500 font-bold text-3xl cursor-pointer"
          >
            AlbaHotel
          </h1>
        </section>

        <section className="flex justify-between rounded-full p-1 w-4/5 ml-16 pl-4 pr-3 items-center border-2 border-pink-500">
          <input
            className="pl-2 focus:outline-none w-full pr-2 text-sm"
            type="search"
            placeholder="What are you looking for..."
          />
          <SearchIcon className="h-7 cursor-pointer text-pink-500 font-bold" />
        </section>
        <p className="ml-20 cursor-pointer" onClick={() => navigate("/")}>
          Meals
        </p>

        <section className="flex justify-between w-2/5 ml-32 items-center">
          <div>
            <div
              onClick={() => navigate(!user && "/login")}
              className="text-sm flex cursor-pointer"
            >
              <UserIcon className="h-8" />
              <div
                onClick={handleAuthentication}
                className="flex cursor-pointer text-gray-500 flex-col"
              >
                <span className="text-sm">
                  {!user ? (
                    "Hello Guest"
                  ) : (
                    <p className="text-pink-500 textSm"> {user?.email} </p>
                  )}
                </span>
                <span className="text-sm">
                  {user ? "Sign Out" : "Sign In"}{" "}
                </span>{" "}
              </div>
            </div>
          </div>

          <div onClick={() => navigate("/orders")}>
            <div className="text-sm flex flex-col cursor-pointer">
              <span className="font-s text-gray-600">Returns</span>
              <span className="font-light">& Orders</span>
            </div>
          </div>

          <div onClick={() => navigate("/checkout")}>
            <span className="cursor-pointer">
              <span className="text-sm text-pink-600 ml-3 mb-12 font-bold animate-pulse">
                {basket?.length}
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
