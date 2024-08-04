import React from "react";
import Img1 from "../assets/shirt.png";
import Img2 from "../assets/shirt2.png";
import Img3 from "../assets/shirt3.png";
import { FaStar } from "react-icons/fa";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Casual Wear",
    description:
      "Embrace effortless style with our Casual Wear Collection, where comfort meets contemporary fashion. Perfect for everyday wear, our collection features a range of versatile pieces designed to keep you looking relaxed yet stylish.",
  },
  {
    id: 2,
    img: Img2,
    title: "Printed shirt",
    description:
      "designed to bring personality and flair to your everyday wardrobe. This eye-catching shirt features bold prints and unique designs that capture your individuality and add a touch of fun to any outfit.",
  },
  {
    id: 3,
    img: Img3,
    title: "Women shirt",
    description:
      "Perfect for any occasion, this versatile shirt combines timeless style with modern elegance. Crafted from premium, breathable fabric, it offers a flattering fit and exceptional comfort, making it a staple piece in any wardrobe.",
  },
];
const TopProducts = ({ handleOrderPopup }) => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-purple-700">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
          
          Explore the possibilities and see how it can transform your wardrobe with fashion.
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-purple-500 hover:text-white relative shadow-xl duration-300 group max-w-[300px]"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.img}
                  alt=""
                  className="max-w-[140px] block mx-auto transform 
                  -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.description}
                </p>
                <button
                  className="bg-gradient-to-r from-purple-800 to-pink-600
                   hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4
                    group-hover:bg-white group-hover:text-white"
                  onClick={handleOrderPopup}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
