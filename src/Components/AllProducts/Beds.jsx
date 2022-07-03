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

const BedsHandler = ({ id, title, image, description, price, rating }) => {
  const [{}, dispatch] = useStateValue();

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
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
};

const Beds = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Tired of Busy Day? Take a good sleep
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <BedsHandler
            id="1234"
            title="Tired of Busy Day? Take a good sleep"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={4000}
            image="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-decorating-ideas-1647541732.jpg?crop=1.00xw:0.645xh;0,0.214xh&resize=1200:*"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="Tired of Busy Day? Take a good sleep"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={5500}
            image="https://assets.architecturaldigest.in/photos/628323aa62a924b1922b7bce/4:3/w_1600%2Cc_limit/Bedroom%2520blueprint.jpg"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="Tired of Busy Day? Take a good sleep"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={1500}
            image="https://www.familyhandyman.com/wp-content/uploads/2020/12/accent-wall-127445325_3804584359581176_1849671581697220606_n.jpg?fit=696,696"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="Tired of Busy Day? Take a good sleep"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={3500}
            image="https://cdn.mos.cms.futurecdn.net/WxdcEfmQgGHk5dm9beCKv9.jpg"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
};

export default Beds;
