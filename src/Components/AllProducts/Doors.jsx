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

const DoorsHandler = ({ id, title, image, description, price, rating }) => {
  const [ {}, dispatch] = useStateValue()

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
        <img className="w-60" src={image} alt="table" />
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
const Doors = () => {
  return (
    <div className="pt-24 mx-wd mx-auto">
      <h2 className="text-2xl prose flex items-center">
        Super Mrembo Furniture Palace (<h2>Doors</h2>){" "}
      </h2>
      <main className="flex justify-between flex-wrap">
        <section className="mx-wd3">
          <DoorsHandler
            id="1234"
            title="Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Mahogany"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${18000}`}
            image="https://media.istockphoto.com/photos/wooden-interior-door-with-handle-picture-id173201523?k=20&m=173201523&s=612x612&w=0&h=R8vyIdCIQ3Hz3M101HmafCfo4m69MdK4r665jeeP3_8="
            rating={5}
          />
          <DoorsHandler
            id="1234"
            title="Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - red"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${10000}`}
            image="https://www.watchisthis.com/wp-content/uploads/2016/10/open-door.jpg"
            rating={4}
          />
          <DoorsHandler
            id="1234"
            title="Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Orange"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${10000}`}
            image="https://images.thdstatic.com/productImages/4c83e566-ba08-47bb-82c1-2b160437544f/svn/tangerine-mmi-door-steel-doors-without-glass-z024086r-64_600.jpg"
            rating={4}
          />
          <DoorsHandler
            id="1234"
            title="Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Mahogany"
            description={
              " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorumducimus, quis quidem nulla facere unde molestiae. Possimus magnam eos assumenda reprehenderit nesciunt soluta repellat quo dolorumenim aut. Officiis, quas!"
            }
            price={` ${15000}`}
            image="http://creckhardware.com/img/products/2big.jpg"
            rating={3}
          />
        </section>

        <LoginComponent />
      </main>
    </div>
  );
}

export default Doors