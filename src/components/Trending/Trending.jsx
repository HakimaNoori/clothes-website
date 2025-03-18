import Image1 from "../../assets/image-9.png";
import Image2 from "../../assets/image-11.png";
import Image3 from "../../assets/image-14.png";
import Image4 from "../../assets/image-15.png";
import Image5 from "../../assets/image-12.png";
// import Image6 from "../../assets/image-13.png";
import { CiHeart } from "react-icons/ci";

const Trending = () => {
  return (
    <div className="pt-8 pb-10">
      <div className="container ">
        <div className="flex items-center justify-between">
          <div className="relative flex">
            <h1 className="text-xl font-bold sm:visible">ECOMMERCE</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-2 px-4">
              shorts
            </button>
            <button className="uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-2 px-4">
              hat
            </button>
            <button className="uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-2 px-4">
              jackets
            </button>
            <button className="uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-2 px-4">
              shoes
            </button>
            <button className="uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-2 px-4">
              t-shirt
            </button>
          </div>
        </div>
        {/* cords-1 */}
        <div className="flex grid-cols-1 gap-4 mt-10 ">
          <div className="flex">
            <div className="">
              <img
                src={Image1}
                alt=""
                className="rounded-3xl w-full object-cover "
              />
              <CiHeart />
              <p>Casual Shoe</p>
              <p>$225</p>
            </div>
            <div className="">
              <img
                src={Image2}
                alt=""
                className="rounded-3xl w-full object-cover"
              />
              <CiHeart />
              <p>SKateboard Shoe</p>
              <p>$125</p>
            </div>
            <div>
              <div className="grid gap-4">
                <img
                  src={Image3}
                  alt=""
                  className="rounded-3xl w-full object-cover"
                />
                <CiHeart />
              </div>
              <p>SKateboard Shoe</p>
              <p>$125</p>
            </div>
            {/* cords */}

            {/* <div>
            <div>
              <div className="">
                <img
                  src={Image4}
                  alt=""
                  className="rounded-3xl w-full object-cover"
                />
                <CiHeart />
              </div>
              <p>SKateboard Shoe</p>
              <p>$125</p>
            </div>
            <div>
              <div className="">
                <img
                  src={Image5}
                  alt=""
                  className="rounded-3xl w-full object-cover"
                />
                <CiHeart />
              </div>
              <p>Basket Shoe</p>
              <p>$125</p>
              <div className="">
                <img
                  src={Image6}
                  alt=""
                  className="rounded-3xl w-full object-cover"
                />
                <CiHeart />
              </div>
              <p>Sportwear Shoe</p>
              <p>$159</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
