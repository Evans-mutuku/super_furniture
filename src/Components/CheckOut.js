import React from "react";
import { useStateValue } from "../Utils/StateProvider";
import Subtotal from "./Subtotal";

const CheckOutProduct = ({
  id,
  image,
  title,
  description,
  price,
  rating,
  hideButton,
}) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <main className="bg-white flex justify-around p-5 mb-3 w-full">
      <img className="mt-5 w-80 " src={image} alt="" />

      <div className="ml-20">
        <p className="font-semibold mb-2 text-xl">{title}</p>
        <p className="">{description}</p>
        <p className="checkoutProject__price">
          <small>ksh </small>
          <strong>{price}</strong>
        </p>
        <div className="flex mt-2 mb-2">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
        {!hideButton && (
          <button
            className="bg-pink-500 mt-12 p-2 pl-2 text-white rounded-sm"
            onClick={removeFromBasket}
          >
            Remove Order
          </button>
        )}
      </div>
    </main>
  );
};

const CheckOut = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="pt-20 mx-wd mx-auto pb-16">
      <section className="flex justify-between w-full">
        <img
          className="mx-wd2 h-36 mr-5"
          src="https://venngage-wordpress.s3.amazonaws.com/uploads/2021/10/Email-Banner-Furniture-Sale.png"
          alt="superMrembo_logo"
        />

        <div className="w-1/5">
          <Subtotal />
        </div>
      </section>
      <section className="mt-5 flex justify-between w-full">
        <div className="w-4/5 mr-20">
          <h3 className="mb-3 flex">
            Hello,{" "}
            <p className="ml-2 text-pink-700 font-boldP">{user?.email}</p>
          </h3>
          <h2 className="text-xl mb-3">Your Alba-Hotel basket</h2>
          {basket.map((item) => (
            <CheckOutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CheckOut;
