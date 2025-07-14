import PriceDog from "./../assets/img/cute-dog-mid.png";
import PricePet from "./../assets/img/cute-pet-mid.png";
const Price = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5">
      <h2 className="md:text-3xl text-2xl font-semibold">Everyday low Price</h2>
      <div className="w-full grid md:grid-cols-5 grid-cols-1 gap-5">
        <div className="flex items-center sm:flex-nowrap flex-wrap gap-1 md:col-span-3 col-span-1 shadow-lg bg-gradient-to-r from-purple-300 via-sky-300 to-sky-400 p-5 rounded-lg">
          <div className="flex flex-col items-start gap-1 text-nowrap">
            <p className="text-sm sm:block hidden">Under Price</p>
            <h4 className="text-xl font-bold">Pet Grooming Mitt</h4>
            <p className="text-base text-white font-medium sm:block hidden">
              (Easy Hair Removal)
            </p>
            <p className="text-3xl font-bold">$7.99</p>
          </div>
          <img
            className="h-auto lg:w-80 md:w-56 sm:w-52 w-40 mx-auto"
            src={PriceDog}
            alt="PriceDog"
          />
        </div>
        <div className="md:col-span-2 col-span-1 p-10 rounded-lg shadow-lg bg-gradient-to-br from-white via-yellow-200 to-yellow-300 relative md:h-full sm:h-72 h-60">
          <h4 className="text-xl font-bold">Grooming Boy</h4>
          <p className="text-4xl font-bold text-yellow-500">$7.99</p>
          <img
            className="absolute right-5 top-20 lg:h-80 md:h-48 h-40"
            src={PricePet}
            alt="PricePet"
          />
        </div>
      </div>
    </div>
  );
};

export default Price;
