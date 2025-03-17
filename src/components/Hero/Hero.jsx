import Image1 from "../../assets/image-2.png";
import Image2 from "../../assets/image-4.png";
import Image3 from "../../assets/image-5.png";
import Image4 from "../../assets/image-7.png";
import Image5 from "../../assets/image-8.png";

const Hero = () => {
  return (
    <div className="pt-8">
      <div className="container">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
          {/* Left Side - Main Image */}
          <div className="relative md:col-span-7">
            <img
              src={Image1}
              alt="Main Outfit"
              className="rounded-3xl w-full h-full object-cover"
            />
            <div className="absolute top-14 left-14 text-white">
              <h1 className="text-6xl">
                Color of <br /> Summer <br /> Outfit
              </h1>
              <p className="mt-4">
                100+ Collections for your outfit <br /> inspirations in this
                summer
              </p>
              <button className="mt-4 bg-black text-white py-3 px-14 rounded-full">
                View Collections
              </button>
            </div>
          </div>

          {/* Right Side - Small Images */}
          <div className="relative flex flex-col md:col-span-3 gap-3">
            <img
              src={Image2}
              alt="Outdoor Active"
              className="rounded-3xl w-full object-cover"
            />
            <h1 className="absolute left-10 top-8 text-black text-4xl">
              Outdoor <br /> Active
            </h1>
            <img
              src={Image3}
              alt="Casual Comfort"
              className="rounded-3xl w-full object-cover"
            />
            <h1 className="absolute left-10 bottom-80 text-black text-4xl">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-3 md:grid-cols-8 w-full">
          {/* Left Side - Text Section */}
          <div className="md:col-span-2">
            <h2 className="text-6xl mt-4">
              Casual <br /> Inspirations
            </h2>
            <p className="text-xl text-gray-600 mt-10">
              Our favorite combinations for casual outfit that can inspire you
              to apply on your daily activity.
            </p>
            <button className="mt-14 uppercase border border-gray-900 text-gray-700 hover:bg-gray-800 hover:text-white transition-all rounded-full py-4 px-16">
              Browse Inspirations
            </button>
          </div>

          {/* Right Side - Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:col-span-6">
            <div className="relative">
              <img
                src={Image4}
                alt="Say it with Shirt"
                className="rounded-3xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-2 sm:left-3 text-white text-4xl">
                Say it <br /> with Shirt
              </div>
            </div>
            <div className="relative">
              <img
                src={Image5}
                alt="Funky never gets old"
                className="rounded-3xl w-full object-cover"
              />
              <div className="absolute bottom-4 left-2 sm:left-3 text-white text-4xl">
                Funky never <br /> get old
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
