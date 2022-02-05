import React from "react";

const Products = ({ id, price, title, image, rating }) => {
  return (
    <main>
      <section className="flex flex-col bg-white items-center font-serif p-4 z-100 w-60 hover:scale-105 duration-300 shadow-lg">
        <p className="text-lg leading-5 text-gray-700 font-semibold">{title}</p>
        <img className="h-40 w-full" src={image} alt="" srcset="" />
        <p className="font-bold">{price}</p>
        <span className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </span>
        <button className="bg-orange-500 p-2 w-32 rounded-sm hover:bg-orange-600 text-white uppercase text-sm mt-6">
          Add To Cart
        </button>
      </section>
    </main>
  );
};

export default Products;
