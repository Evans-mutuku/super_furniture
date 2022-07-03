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

const TableHandler = ({ id, title, image, description, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        description: description,
        price: price,
        image: image,
        rating: rating,
      },
    });
  };

  return (
    <main className="">
      <section className="bg-white flex p-4 mb-4">
        <img className="w-2/5" src={image} alt="table" />
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
            Book Room
          </button>
        </div>
      </section>
    </main>
  );
};

const Tables = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Hey Buddy! Which room do you want to stay in?
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <TableHandler
            id="1234"
            title="Explore and discover comfortable living place"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={5070}
            image="https://a0.muscache.com/im/pictures/miso/Hosting-23738476/original/b0cd03e8-79f9-4acf-a73e-5b24fa779376.jpeg?im_w=960"
            rating={3}
          />
          <TableHandler
            id="1234"
            title="Explore and discover comfortable living place"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={3000}
            image="https://a0.muscache.com/im/pictures/35d03179-3b9b-4898-b161-eb466bf533c6.jpg?im_w=720"
            rating={4}
          />
          <TableHandler
            id="1234"
            title="Explore and discover comfortable living place"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={6000}
            image="https://a0.muscache.com/im/pictures/miso/Hosting-23738476/original/1a5c93a1-106f-4ee7-83ff-1bb37963cdc1.jpeg?im_w=720"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
};

export default Tables;
