import React from "react";
import Products from "./Products";
import BestSeller from "./BestSeller";
import ImageSlider from "./Slider/ImageSlider";
import { SlideData } from "./Slider/SlideData";

const LoginComponent = () => {
  return (
    <section className="w-60 md:none">
      <section className="bg-white p-3">
        <h3 className="text-xl font-semibold text-gray-700">
          {" "}
          Get to know when we have new deals
        </h3>
        <button className="text-white bg-orange-500 hover:bg-orange-600 p-1 font-semibold w-full mt-4">
          Sign In Now
        </button>
      </section>
      <section className="bg-white p-3 mt-4">
        <img
          src="https://marshallcf.com/wp-content/uploads/2018/10/Time-to-Sell.jpeg"
          alt="coming soon"
        />
        <button className="bg-orange-500 font-semibold hover:bg-orange-600 text-white w-full mt-3 rounded-sm p-1">
          Sell With Us
        </button>
      </section>
    </section>
  );
};

const Home = () => {
  return (
    <>
       <ImageSlider  slides={SlideData} />
      <div className="mx-wd mx-auto relative -mt-36 ">
        <section className="flex items-center flex-wrap justify-between mb-5">
          <Products
            id="1234"
            title="Office Table"
            price={` $ ${200}`}
            image="https://stylesatlife.com/wp-content/uploads/2017/07/Office-Computer-Table.jpg"
            rating={3}
          />
          <Products
            id="1234"
            title="Pacific Wall Unit"
            price={` $ ${450}`}
            image="https://5.imimg.com/data5/ED/IA/GLADMIN-9068540/pacific-wall-unit-500x500.png"
            rating={3}
          />
          <Products
            id="1234"
            title="Single End Couch"
            price={` $ ${215}`}
            image="https://spnsfurniture.com/wp-content/uploads/2019/12/Cindrella-Chaise-RHS-Beige-and-Magenta-Colour-spns-furniture-1-700x490.jpg"
            rating={3}
          />
          <Products
            id="1234"
            title="Grove King size bed"
            price={` $ ${170}`}
            image="https://www.godrejinterio.com/imagestore/B2C/56101515SD00434/56101515SD00434_01_803x602.png"
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
