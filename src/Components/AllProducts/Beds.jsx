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

const BedsHandler = ({id, title, image, description, price, rating }) => {
  const [{}, dispatch] = useStateValue()

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
        <img className='w-60' src={image} alt="table" />
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

const Beds = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Super Mrembo Furniture Palace (<h2>Beds</h2>){" "}
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <BedsHandler
            id="1234"
            title="JohFun super Bed"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${20500}`}
            image="https://www.godrejinterio.com/imagestore/B2C/56101515SD00434/56101515SD00434_01_803x602.png"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="JohFun Furniture - Copeland Furniture Platform Bed Mansfield"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${22000}`}
            image="https://www.circlefurniture.com/userfiles/images/Products/copeland/Mansfield/Mansfield-Bed.jpg"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="Bamboo Bed"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${18500}`}
            image="https://www.shipshewanafurniture.com/images/brentwood-bed.jpg"
            rating={4}
          />
          <BedsHandler
            id="1234"
            title="JohFun Caribou Solid Hardwood Twin Bunk Bed"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${13000}`}
            image="https://m.media-amazon.com/images/I/71GM4Dp8KJL._AC_UL320_.jpg"
            rating={4}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
}

export default Beds