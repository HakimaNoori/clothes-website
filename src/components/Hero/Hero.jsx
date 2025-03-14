import Image1 from "../../assets/image-2.png";
import Image2 from "../../assets/image-4.png";
import Image3 from "../../assets/image-5.png";
import Image4 from "../../assets/image-7.png";
import Image5 from "../../assets/image-8.png";

const Hero = () => {
  return (
    <div className="pt-8 bg-white">
      <div className="container">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-3">
          {/* Left Side - Main Image */}
          <div className="relative md:col-span-7">
            <img
              src={Image1}
              alt="Main Outfit"
              className="rounded-3xl w-full max-h-[84%] object-cover"
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
          <div className="relative flex flex-col  md:col-span-3 gap-3">
            <img
              src={Image2}
              alt="Outdoor Active"
              className="rounded-3xl w-full max-h-[41%] object-cover"
            />
            <h1 className="absolute left-10 top-8 text-black text-4xl">
              Outdoor <br /> Active
            </h1>
            <img
              src={Image3}
              alt="Casual Comfort"
              className="rounded-3xl w-full max-h-[41%] object-cover"
            />
            <h1 className="absolute left-10 bottom-96 text-black text-4xl">
              Casual <br /> Comfort
            </h1>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold">Casual Inspirations</h2>
          <p className="text-gray-600 mt-2 max-w-lg mx-auto">
            Our favorite combinations for casual outfits that can inspire your
            daily activity.
          </p>
          <button className="mt-4 border border-red-500 text-red-500 rounded-full py-2 px-4">
            Browse Inspirations
          </button>

          {/* Bottom Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <img
              src={Image4}
              alt="Say it with Shirt"
              className="rounded-3xl w-full h-[280px] object-cover"
            />
            <img
              src={Image5}
              alt="Funky never gets old"
              className="rounded-3xl w-full h-[280px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
