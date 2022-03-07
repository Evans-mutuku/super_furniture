import React from "react";
import {useStateValue} from '../Utils/StateProvider'

const Products = ({ id, price, title, description, image, rating }) => {

  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title:title,
        description: description,
        price: price,
        image:image,
        rating: rating
      }
    })
  }

  return (
    <main>
      <section className="flex flex-col bg-white items-center font-serif p-4 z-100 w-60 hover:scale-105 duration-300 shadow-lg">
        <p className="text-lg leading-5 text-gray-700 font-semibold">{title}</p>
        <img className="h-40 w-full" src={image} alt="" srcset="" />
        <p className="font-bold">ksh {price}</p>
        <span className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </span>
        <button onClick={addToBasket} className="bg-orange-500 p-2 w-32 rounded-sm hover:bg-orange-600 text-white uppercase text-sm mt-6">
          Add To Cart
        </button>
      </section>
    </main>
  );
};

export default Products;
