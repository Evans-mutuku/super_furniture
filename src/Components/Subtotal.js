import React from "react";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";
import { getBasketTotal } from "../Utils/reducer";
import { useStateValue } from "../Utils/StateProvider";

const Subtotal = () => {
  const navigate = useNavigate();
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="bg-yellow-300 p-2 flex items-center w-60 flex-col">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="text-pink-600">
              Subtotal ({basket.length}) items : <strong>{value}</strong>
            </p>
            <small className="mt-3 mb-3">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={4}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"ksh "}
      />
      <button
        className="mt-8 bg-pink-500 p-1 pl-3 pr-3 text-white items-center rounded-sm hover:bg-pink-600"
        onClick={(e) => navigate("/payment")}
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Subtotal;
