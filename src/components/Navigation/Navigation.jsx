import { IoIosArrowDown } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import {CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

const SearchBar = () => {
  return (
    <div className="pt-8">
      <div className="container">
        <div className="flex items-center justify-between bg-white">
          <div className="relative flex gap-10">
            <h1 className="text-xl font-bold">ECOMMERCE</h1>
            <div className="flex justify-between relative w-full">
              <input
                type="text"
                placeholder="Search here"
                className="flex w-full pl-8 py-1 px-20 border rounded-full focus:outline-none focus:ring focus:border-blue-300"
              />
              <IoSearchOutline className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>

            <div className="flex gap-6 items-center text-nowrap space-x-6">
              <div className="relative group">
                <button className="flex gap-2 items-center space-x-1">
                  <span>All Category</span>
                  <IoIosArrowDown />
                </button>
              </div>
              <a href="#" className="flex hover:text-blue-500">
                Gift Cards
              </a>
              <a href="#" className="flex hover:text-blue-500">
                Special Event
              </a>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-4">
            <CiHeart className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            <CiUser className="text-gray-600 hover:text-blue-500 cursor-pointer" />
            <CiShoppingCart className="text-gray-600 hover:text-blue-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
