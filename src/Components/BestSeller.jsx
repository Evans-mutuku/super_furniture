import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../Utils/firebase";

const Rooms = [
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-23738476/original/1a5c93a1-106f-4ee7-83ff-1bb37963cdc1.jpeg?im_w=720",
    description: "  Dolorumducimus, quis quidem nulla",
    price: "6,000",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/miso/Hosting-23738476/original/b0cd03e8-79f9-4acf-a73e-5b24fa779376.jpeg?im_w=960",
    description: "Lorem ipsum dolort.",
    price: "3,000",
  },
  {
    image:
      "https://a0.muscache.com/im/pictures/35d03179-3b9b-4898-b161-eb466bf533c6.jpg?im_w=720",
    description: "Lorem ipsum elit.",
    price: "5,070",
  },
];

const Meals = [
  {
    image:
      "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2022/06/grilled_sardines_healthy_high_fat_food_732x549_thumb-732x549.jpg",
    description: "lorem ipsum dolar sitta",
    price: "1,200",
  },
  {
    image:
      "https://media.fooducate.com/comments/images/55D8576E-7893-A4D7-4E3E-BA750DEEF350.jpeg",
    description: "lorem ipsum dolar sitta",
    price: "740",
  },
  {
    image:
      "https://www.hepper.com/wp-content/uploads/2021/12/plated-fresh-sardines.jpeg",
    description: "lorem ipsum dolar sitta",
    price: "420",
  },
  {
    image:
      "https://media.fooducate.com/comments/images/5F6EE783-DC86-502D-4563-B279DEBEF77D-78706-sardines.jpeg",
    description: "lorem ipsum dolar sitta",
    price: "390",
  },
  {
    image:
      "https://irenamacri.com/wp-content/uploads/2020/04/smoked-sardines-sprats.jpg",
    description: "lorem ipsum dolar sitta,",
    price: "300",
  },
];

const Drinks = [
  {
    image:
      "https://images.immediate.co.uk/production/volatile/sites/30/2021/11/diabolo-mockail-440-x400-c795884.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "500",
  },
  {
    image:
      "https://static.onecms.io/wp-content/uploads/sites/44/2021/06/09/recipe-red-drink.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "1000",
  },
  {
    image:
      "https://img.etimg.com/thumb/msid-60172374,width-640,resizemode-4,imgsize-102340/vermouth.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "4,200",
  },
  {
    image:
      "https://cf.ltkcdn.net/cocktails/images/orig/200804-2121x1414-cocktails.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "500",
  },
  {
    image:
      "https://i.pinimg.com/736x/bd/23/65/bd23656506f9d456132eda516ad5029d.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "1050",
  },
];

const Beds = [
  {
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-decorating-ideas-1647541732.jpg?crop=1.00xw:0.645xh;0,0.214xh&resize=1200:*",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "4,000",
  },
  {
    image:
      "https://assets.architecturaldigest.in/photos/628323aa62a924b1922b7bce/4:3/w_1600%2Cc_limit/Bedroom%2520blueprint.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "5,500",
  },
  {
    image:
      "https://www.familyhandyman.com/wp-content/uploads/2020/12/accent-wall-127445325_3804584359581176_1849671581697220606_n.jpg?fit=696,696",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "1,500",
  },
  {
    image: "https://cdn.mos.cms.futurecdn.net/WxdcEfmQgGHk5dm9beCKv9.jpg",
    description: "Lorem ipsum dolar sitter lorem 239 set",
    price: "3500",
  },
];

const SampleProducts = () => {
  const navigate = useNavigate();
  const [subscriberEmail, setSubscriberEmail] = useState("");

  const subscribe = (e) => {
    e.preventDefault();

    db.collection("subscriptions").add({
      subscriberEmail: subscriberEmail,
    });
    setSubscriberEmail("");
  };

  return (
    <main>
      <section className="bg-white p-3">
        <span className="font-bold text-xl text-gray-700 text-c">
          Hey Buddy! Which room do you want to stay in?
        </span>
        <span
          onClick={() => navigate("/rooms")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Rooms.map((table, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer"
            >
              <img
                className="img-s"
                src={table.image}
                alt={table.description}
              />
              <p className="text-md mt-3 text-gray-900 text-font">
                {table.description}
              </p>
              <p className="text-lg text-pink-500 font-bold ">
                ksh {table.price}
              </p>
            </span>
          ))}
        </span>
      </section>
      <section className="mt-5 bg-white p-3">
        <p className="text-sm text-c pb-3">
          Trade Alert - Delivering the latest rooms trends and industry news
          straight to your inbox.
        </p>
        <span className="">
          <input
            onChange={(e) => setSubscriberEmail(e.target.value)}
            className="p-2 focus:outline-none border-2 border-pink-400 w-80"
            type="email"
            placeholder="Your Email"
          />
          <button
            onClick={subscribe}
            className="ml-2 bg-pink-500 p-2 hover:bg-pink-600 text-white"
          >
            Subscribe
          </button>
        </span>
        <p className="text-sm text-gray-500">
          We’ll never share your email address with a third-party.{" "}
        </p>
      </section>
      <section className="bg-white p-3 mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Enjoy The Best Fish
        </span>
        <span
          onClick={() => navigate("/fish")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Meals.map((couch, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer w-52"
            >
              <img src={couch.image} alt={couch.description} />
              <p className="text-sm mt-3 text-gray-900 text-font leading-6">
                {couch.description}
              </p>
              <p className="text-xl text-pink-500 font-bold ">
                ksh {couch.price}
              </p>
            </span>
          ))}
        </span>
      </section>
      <section className=" mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Take a soft Drink
        </span>
        <span
          onClick={() => navigate("/softDrinks")}
          className="flex items-center justify-between mt-5 flex-wrap m-2"
        >
          {Drinks.map((wallUnit, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer bg-white flex items-center justify-between flex-col p-4 w-60 h-80 shadow-md"
            >
              <img
                className="h-40"
                src={wallUnit.image}
                alt={wallUnit.description}
              />
              <p className="text-sm mt-3 text-gray-900 text-font leading-6">
                {wallUnit.description}
              </p>
              <p className="text-xl text-pink-500 font-bold mt-2">
                ksh {wallUnit.price}
              </p>
            </span>
          ))}
        </span>
      </section>
      <section className="bg-white p-3 mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Tired of Busy Day? Take a good sleep
        </span>
        <span
          onClick={() => navigate("/beds")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Beds.map((bed, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer flex items-center justify-between flex-col w-60 p-4 "
            >
              <img
                src={bed.image}
                alt={bed.description}
                className="img-s h-40"
              />
              <p className="text-sm mt-3 text-gray-900 text-font leading-6">
                {bed.description}
              </p>
              <p className="text-xl text-pink-500 font-bold mt-2">
                ksh {bed.price}
              </p>
            </span>
          ))}
        </span>
      </section>
    </main>
  );
};

export default SampleProducts;
