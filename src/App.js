import Header from "./Components/Header";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Login from "./Components/Auth/Login";
import Tables from "./Components/AllProducts/Tables";
import Couch from "./Components/AllProducts/Couch";
import WallUnit from "./Components/AllProducts/WallUnit";
import Beds from "./Components/AllProducts/Beds";
import Doors from "./Components/AllProducts/Doors";
import CheckOut from "./Components/CheckOut";
import Payment from "./Components/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useStateValue } from "./Utils/StateProvider";
import { useEffect } from "react";
import { auth } from "./Utils/firebase";
import Orders from "./Components/Orders";

const promise = loadStripe(
  "pk_test_51HeJNDK860DkztEzJf2UqGmoGNfg4sRh5fSP8OqrTU1hz9tPSsIHVjvDONFHfPrIxBHm1Pp0ANVqJrHnG1WxCu5k00Rh4sPENp"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="bg-green-100 h-fit">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/rooms" element={<Tables />} />
        <Route path="/fish" element={<Couch />} />
        <Route path="/softDrinks" element={<WallUnit />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/doors" element={<Doors />} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route
          path="/payment"
          element={
            <Elements stripe={promise}>
              {" "}
              <Payment />{" "}
            </Elements>
          }
        />
        <Route path="/orders" element={<Orders />} />
        <Route />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
