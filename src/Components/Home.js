import React from "react";
import Products from "./Products";
import BestSeller from "./BestSeller";
import ImageSlider from "./Slider/ImageSlider";
import { SlideData } from "./Slider/SlideData";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="w-60 md:none">
      <section className="bg-white p-3">
        <h3 className="text-xl font-semibold text-gray-700">
          {" "}
          Get to know when we have new deals
        </h3>
        <button
          onClick={() => navigate("/login")}
          className="text-white bg-pink-500 hover:bg-pink-600 p-1 font-semibold w-full mt-4"
        >
          Sign In Now
        </button>
      </section>
      <section className="bg-white p-3 mt-4">
        <img
          src="https://marshallcf.com/wp-content/uploads/2018/10/Time-to-Sell.jpeg"
          alt="coming soon"
        />
        <button className="bg-pink-500 font-semibold hover:bg-pink-600 text-white w-full mt-3 rounded-sm p-1">
          Sell With Us
        </button>
      </section>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <ImageSlider slides={SlideData} />
      <div className="mx-wd mx-auto relative -mt-36 ">
        <section className="flex items-center flex-wrap justify-between mb-5">
          <Products
            id="1234"
            title="Lorem Ipsum Text"
            price={20000}
            image="https://www.eatthis.com/wp-content/uploads/sites/4/2019/06/deep-dish-pizza-chicago.jpg"
            rating={3}
          />
          <Products
            id="1234"
            title="Lorem Ipsum Text"
            price={45000}
            image="https://foodtank.com/wp-content/uploads/2022/02/Food-Tank-Food-and-Food-System-Documentaries-1.jpg"
            rating={3}
          />
          <Products
            id="1234"
            title="Lorem Ipsum Text"
            price={21500}
            image="https://media.npr.org/assets/img/2022/06/06/gettyimages-1199291938-40_custom-7191b02345de50bf85961f6342c202dd9d6d20a0.jpg"
            rating={3}
          />
          <Products
            id="1234"
            title="Lorem Ipsum Text"
            price={17500}
            image="https://img-global.cpcdn.com/recipes/e16e61be3886271d/1200x630cq70/photo.jpg"
            rating={3}
          />

          <LoginComponent />
        </section>

        <section className="mt-8 ">
          <BestSeller />
        </section>

        <section></section>
      </div>
    </>
  );
};

export default Home;
