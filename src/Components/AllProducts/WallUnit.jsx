import React from 'react'
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../../Utils/StateProvider';

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

const WallHandler = ({id, title, image, description, price, rating }) => {
  const [{basket}, dispatch] = useStateValue()

  const addToBasket = () => {
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        description: description,
        price: price,
        rating: rating
      }
    })
  }
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
};


const WallUnit = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Super Mrembo Furniture Palace (<h2>Wall Units</h2>){" "}
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <WallHandler
            id="1234"
            title="JohFun Large Storage Cabinet, Soft White Finish"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${29500}`}
            image="https://m.media-amazon.com/images/I/61DohUGovdL._AC_UL320_.jpg"
            rating={4}
          />
          <WallHandler
            id="1234"
            title="JohFun Cannery Bridge Storage Wall, Sindoori Mango finish"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${30500}`}
            image="https://m.media-amazon.com/images/I/81o5Ax5BfAL._AC_UL320_.jpg"
            rating={4}
          />
          <WallHandler
            id="1234"
            title="Bamboo 3-Tier Shoe Shelf"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${42500}`}
            image="https://m.media-amazon.com/images/I/810YkVISKUS._AC_UL320_.jpg"
            rating={4}
          />
          <WallHandler
            id="1234"
            title="ClosetMaid 8925 2-Door Stackable Laminate Organizer, Espresso"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${13000}`}
            image="https://m.media-amazon.com/images/I/71LhXxkz6+L._AC_UL320_.jpg"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
}

export default WallUnit