import dog from "./../assets/img/dog-cartoon.png";
import fish from "./../assets/img/fish-cartoon.png";
import cat from "./../assets/img/cat-cartoon.png";
import bird from "./../assets/img/bird-cartoon.png";
import rabbit from "./../assets/img/rabbit-cartoon.png";
import other from "./../assets/img/mouse-cartoon.png";

const Categories = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex flex-col gap-5">
      <h2 className="md:text-3xl text-2xl font-semibold">
        Browse by Categories
      </h2>
      <div className="w-full grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-3">
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={dog}
            alt="dog"
          />
          <h3 className="text-xl font-medium">Dog</h3>
          <p className="text-lg font-medium text-gray-700">5 items</p>
        </div>
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={fish}
            alt="fish"
          />
          <h3 className="text-xl font-medium">Fish</h3>
          <p className="text-lg font-medium text-gray-700">9 items</p>
        </div>
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={cat}
            alt="cat"
          />
          <h3 className="text-xl font-medium">Cat</h3>
          <p className="text-lg font-medium text-gray-700">3 items</p>
        </div>
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={bird}
            alt="bird"
          />
          <h3 className="text-xl font-medium">Bird</h3>
          <p className="text-lg font-medium text-gray-700">6 items</p>
        </div>
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={rabbit}
            alt="rabbit"
          />
          <h3 className="text-xl font-medium">Rabbit</h3>
          <p className="text-lg font-medium text-gray-700">2 items</p>
        </div>
        <div className="w-full py-10 px-5 flex flex-col gap-1 items-center bg-[#F9DF8A] rounded-lg">
          <img
            className="p-3 rounded-full content-center bg-white h-16 w-16"
            src={other}
            alt="other"
          />
          <h3 className="text-xl font-medium">Other</h3>
          <p className="text-lg font-medium text-gray-700">1 items</p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
