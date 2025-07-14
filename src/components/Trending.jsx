import { FaStar } from "react-icons/fa";
import cardDog from "./../assets/img/cute-pet-small.png";
import bed from "./../assets/img/pet-couch.png";
import BlackShoe from "./../assets/img/logo-header.png";
import WhiteShoe from "./../assets/img/logo-footer.png";

const Trending = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5 bg-[#FFF9F4]">
      <h2 className="md:text-3xl text-2xl font-semibold">
        Tranding Pet Products
      </h2>
      <div className="w-full grid lg:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
        <div className="col-span-2 lg:row-span-3 sm:row-span-3 p-5 bg-[#F9DF8A] rounded-xl shadow-lg lg:h-80 md:h-[360px] h-[340px]">
          <h4 className="md:text-2xl text-xl font-medium">T-Shirt for Dogs</h4>
          <p className="text-gray-500 md:w-2/3 w-5/6 mt-5 font-medium">
            Discover a world of treats, toys, and essentials handpicks for
          </p>
          <div className="w-full flex items-start justify-between gap-2 relative">
            <button className=" mt-10 py-1 px-4 bg-white text-black hover:bg-black hover:text-white duration-300 rounded-md text-lg font-medium">
              Shop Now
            </button>
            <img
              className="h-60 absolute lg:left-50 md:left-40 sm:left-35 left-25 -top-10"
              src={cardDog}
              alt="cardDog"
            />
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={bed}
            alt="bed"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">Bed</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={BlackShoe}
            alt="BlackShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">WhiteShoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={WhiteShoe}
            alt="WhiteShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">BlackShoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={WhiteShoe}
            alt="WhiteShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">BlackShoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={BlackShoe}
            alt="BlackShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">WhiteShoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={bed}
            alt="bed"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">Bed</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 lg:col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={BlackShoe}
            alt="BlackShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">Shoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="p-3 lg:col-span-1 bg-white rounded-xl shadow-lg flex items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={bed}
            alt="bed"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">Pet bed</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
        <div className="lg:flex hidden p-3 lg:col-span-1 bg-white rounded-xl shadow-lg items-center gap-1">
          <img
            className="md:max-h-16 max-h-12 h-full md:max-w-16 max-w-12 w-full object-cover sm:p-3 p-2 rounded-lg bg-[#FFF9F4]"
            src={WhiteShoe}
            alt="WhiteShoe"
          />
          <div className="flex flex-col items-start justify-between">
            <p className="flex items-center gap-1">
              <FaStar className="text-lg text-yellow-500"></FaStar>
              4.5
            </p>
            <h4 className="md:text-lg text-base font-medium">Pet Shoe</h4>
            <p className="font-medium text-gray-700">$20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
