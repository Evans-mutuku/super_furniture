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
          className="text-white bg-orange-500 hover:bg-orange-600 p-1 font-semibold w-full mt-4"
        >
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

const TableHandler = ({id, title, image, description, price, rating}) => {
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
        <img src={image} alt="table" />
        <div className="ml-12">
          <h3 className="mb-5 text-2xl font-bold">{title}</h3>
          <p className="mb-5 text-gray-600">{description}</p>
          <p className="text-xl text-bold text-orange-500 mb-5">Ksh {price}</p>
          <span className="flex mb-5">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>🌟</p>
              ))}
          </span>
          <button onClick={addToBasket} className="bg-orange-500 hover:bg-orange-600 text-white p-2 uppercase px-5">
            Add to cart
          </button>
        </div>
      </section>
    </main>
  );
}

const Tables = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Super Mrembo Furniture Palace (<h2>Tables</h2>){" "}
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <TableHandler
            id="1234"
            title="ODK Computer Writing Desk 39 inch"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={15000}
            image="https://m.media-amazon.com/images/I/810d-F8y3YS._AC_UL320_.jpg"
            rating={3}
          />
          <TableHandler
            id="1234"
            title="Computer Desk, 43.3''"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={12000}
            image="https://m.media-amazon.com/images/I/61FQEy2s19L._AC_UL320_.jpg"
            rating={4}
          />
          <TableHandler
            id="1234"
            title="Winsome Wood Suzanne Kitchen"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={10500}
            image="https://m.media-amazon.com/images/I/81Pb2inuMWL._AC_UL320_.jpg"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
};

export default Tables;
