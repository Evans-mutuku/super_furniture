import React from "react";
import { useNavigate } from "react-router-dom";

const Tables = [
  {
    image: "https://m.media-amazon.com/images/I/810d-F8y3YS._AC_UL320_.jpg",
    description: "ODK Computer Writing Desk 39 inch",
    price: "150.00",
  },
  {
    image: "https://m.media-amazon.com/images/I/61FQEy2s19L._AC_UL320_.jpg",
    description: "Computer Desk, 43.3''",
    price: "170.00",
  },
  {
    image: "https://m.media-amazon.com/images/I/81Pb2inuMWL._AC_UL320_.jpg",
    description: "Winsome Wood Suzanne Kitchen",
    price: "170.50",
  },
];

const Couches = [
  {
    image: "https://m.media-amazon.com/images/I/71UjeO3bQxL._AC_UL320_.jpg",
    description: "JohFun Brand - Stone & Beam Westview Extra-Deep",
    price: "450",
  },
  {
    image: "https://m.media-amazon.com/images/I/71-iyDkmzIL._AC_UL320_.jpg",
    description: "JohFun Brand – Stone & Beam Genesse Sectional Sofa Couch",
    price: "440.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/71ywXWARrXL._AC_UL320_.jpg",
    description: "FURINNO Bastia Vintage Modern Chesterfield Button Tufted",
    price: "420",
  },
  {
    image: "https://m.media-amazon.com/images/I/61uCGJX37qL._AC_UL320_.jpg",
    description:
      "maxmill 4 Pieces Stretch Velvet Sofa Slipcovers with 3 Individual",
    price: "399.99",
  },
  {
    image: "https://m.media-amazon.com/images/I/5101CKixyrL._AC_UL320_.jpg",
    description: "Signature Design by Evans - Microfiber Loveseat,",
    price: "309.99",
  },
];

const WallUnits = [
  {
    image: "https://m.media-amazon.com/images/I/61DohUGovdL._AC_UL320_.jpg",
    description: "JohFun Large Storage Cabinet, Soft White Finish ",
    price: "290",
  },
  {
    image: "https://m.media-amazon.com/images/I/81o5Ax5BfAL._AC_UL320_.jpg",
    description: "JohFun Cannery Bridge Storage Wall, Sindoori Mango finish",
    price: "300",
  },
  {
    image: "https://m.media-amazon.com/images/I/810YkVISKUS._AC_UL320_.jpg",
    description: "Bamboo 3-Tier Shoe Shelf",
    price: "42",
  },
  {
    image: "https://m.media-amazon.com/images/I/71LhXxkz6+L._AC_UL320_.jpg",
    description:
      "ClosetMaid 8925 2-Door Stackable Laminate Organizer, Espresso",
    price: "120.99",
  },
  {
    image:
      "https://ke.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/31/119822/1.jpg?5215",
    description: "JohFun TV Wall Unit Home Tulum",
    price: "120.99",
  },
];

const Beds = [
  {
    image:
      "https://www.godrejinterio.com/imagestore/B2C/56101515SD00434/56101515SD00434_01_803x602.png",
    description: "JohFun super Bed",
    price: "200",
  },
  {
    image:
      "https://www.circlefurniture.com/userfiles/images/Products/copeland/Mansfield/Mansfield-Bed.jpg",
    description: "JohFun Furniture - Copeland Furniture Platform Bed Mansfield",
    price: "220",
  },
  {
    image: "https://www.shipshewanafurniture.com/images/brentwood-bed.jpg",
    description: "JohFun Bed",
    price: "180",
  },
  {
    image: "https://m.media-amazon.com/images/I/71GM4Dp8KJL._AC_UL320_.jpg",
    description: "JohFun Caribou Solid Hardwood Twin Bunk Bed",
    price: "120",
  },
];

const Doors = [
  {
    image:
      "https://media.istockphoto.com/photos/wooden-interior-door-with-handle-picture-id173201523?k=20&m=173201523&s=612x612&w=0&h=R8vyIdCIQ3Hz3M101HmafCfo4m69MdK4r665jeeP3_8=",
    description: "Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Mahogany",
    price: "180",
  },
  {
    image:
      "https://www.watchisthis.com/wp-content/uploads/2016/10/open-door.jpg",
    description: "Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - red",
    price: "100",
  },
  {
    image:
      "https://images.thdstatic.com/productImages/4c83e566-ba08-47bb-82c1-2b160437544f/svn/tangerine-mmi-door-steel-doors-without-glass-z024086r-64_600.jpg",
    description: "Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Orange",
    price: "89.99",
  },
  {
    image: "http://creckhardware.com/img/products/2big.jpg",
    description:
      "Wood Membrane Door, Size/dimension: 7l X 3.5b Feet - Mahogany",
    price: "150",
  },
  {
    image:
      " https://5.imimg.com/data5/XJ/JC/MY-47145159/laminate-flash-door-500x500.jpg",
    description: "Wood Membrane Door, Size/dimension: 7l X 3.5b Feet",
    price: "150",
  },
];

const SampleProducts = () => {
  const navigate = useNavigate()


  return (
    <main>
      <section className="bg-white p-3">
        <span className="font-bold text-xl text-gray-700 text-c">
          JohFun Tables Top Seller
        </span>
        <span
          onClick={() => navigate("/tables")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Tables.map((table, index) => (
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
              <p className="text-xl text-orange-500 font-bold ">
                $ {table.price}
              </p>
            </span>
          ))}
        </span>
        {/* <span className="mt-4 bg-orange-500 flex justify-center cursor-pointer w-24">
          Visit Page
        </span> */}
      </section>
      <section className="bg-white p-3 mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Get the Best Couch
        </span>
        <span
          onClick={() => navigate("/couches")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Couches.map((couch, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer w-52"
            >
              <img src={couch.image} alt={couch.description} />
              <p className="text-sm mt-3 text-gray-900 text-font leading-6">
                {couch.description}
              </p>
              <p className="text-xl text-orange-500 font-bold ">
                $ {couch.price}
              </p>
            </span>
          ))}
        </span>
      </section>
      <section className=" mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Make your Home Neat
        </span>
        <span
          onClick={() => navigate("/wallUnits")}
          className="flex items-center justify-between mt-5 flex-wrap m-2"
        >
          {WallUnits.map((wallUnit, index) => (
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
              <p className="text-xl text-orange-500 font-bold mt-2">
                $ {wallUnit.price}
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
              <p className="text-xl text-orange-500 font-bold mt-2">
                $ {bed.price}
              </p>
            </span>
          ))}
        </span>
      </section>
      <section className="bg-white p-3 mt-5">
        <span className="font-bold text-xl text-gray-700 text-c">
          Let JohFun Lock Your Home
        </span>
        <span
          onClick={() => navigate("/doors")}
          className="flex items-center justify-between flex-wrap m-2 mt-2"
        >
          {Doors.map((door, index) => (
            <span
              key={index}
              className="hover:scale-105 duration-300 cursor-pointer flex items-center justify-between flex-col w-60  p-4 "
            >
              <img
                src={door.image}
                alt={door.description}
                className="img-s h-40"
              />
              <p className="text-sm mt-3 text-gray-900 text-font leading-6">
                {door.description}
              </p>
              <p className="text-xl text-orange-500 font-bold mt-2">
                $ {door.price}
              </p>
            </span>
          ))}
        </span>
      </section>
    </main>
  );
};

export default SampleProducts;
