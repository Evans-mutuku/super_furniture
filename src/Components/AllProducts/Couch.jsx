import React from "react";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "../../Utils/StateProvider";

const LoginComponent = () => {
  const navigate = useNavigate();

  return (
    <section className="w-72 md:none">
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

const CouchHandler = ({ id, title, image, description, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        description: description,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <main className="">
      <section className="bg-white flex p-4 mb-4">
        <img className="w-2/6" src={image} alt="table" />
        <div className="ml-12">
          <h3 className="mb-5 text-2xl font-bold">{title}</h3>
          <p className="mb-5 text-gray-600">{description}</p>
          <p className="text-xl text-bold text-pink-500 mb-5">Ksh {price}</p>
          <span className="flex mb-5">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </span>
          <button
            onClick={addToBasket}
            className="bg-pink-500 hover:bg-pink-600 text-white p-2 uppercase px-5"
          >
            Order Meal
          </button>
        </div>
      </section>
    </main>
  );
};

const Couch = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">Enjoy The Best Fish</h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <CouchHandler
            id="1234"
            title="ohFun Brand - Stone & Beam Westview Extra-Deep"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={45000}
            image="https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/06/grilled_sardines_healthy_high_fat_food_732x549_thumb-732x549.jpg"
            rating={4}
          />
          <CouchHandler
            id="1234"
            title="JohFun Brand – Stone & Beam Genesse Sectional Sofa Couch"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={40500}
            image="https://media.fooducate.com/comments/images/55D8576E-7893-A4D7-4E3E-BA750DEEF350.jpeg"
            rating={4}
          />
          <CouchHandler
            id="1234"
            title="maxmill 4 Pieces Stretch Velvet Sofa Slipcovers with 3 Individual"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={42500}
            image="https://media.fooducate.com/comments/images/5F6EE783-DC86-502D-4563-B279DEBEF77D-78706-sardines.jpeg"
            rating={4}
          />
          <CouchHandler
            id="1234"
            title="maxmill 4 Pieces Stretch Velvet Sofa Slipcovers with 3 Individual"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={39000}
            image="https://irenamacri.com/wp-content/uploads/2020/04/smoked-sardines-sprats.jpg"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
};

export default Couch;
