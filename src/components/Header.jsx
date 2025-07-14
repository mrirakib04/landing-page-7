import logo from "./../assets/img/logo-header.png";
import { GoBell } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { PiListBold } from "react-icons/pi";
import bg from "./../assets/img/cat-big.png";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className="w-full flex flex-col items-center h-[480px] sm:h-[570px] md:h-[650px] lg:h-[750px]">
      <nav className="w-full bg-[#FFF9F4] flex items-center justify-between md:px-10 px-5 py-5">
        <a className="flex items-center gap-1" href="./../../index.html">
          <img className="w-8" src={logo} alt="logo" />
          <h1 className="text-2xl font-medium sm:flex items-center hidden">
            Browse <p className="text-yellow-500">4</p>Pets
          </h1>
        </a>
        <ul className="text-base font-medium text-black lg:flex hidden items-center gap-5">
          <li>
            <a className="hover:text-yellow-600 duration-300" href="#FindPet">
              Find a Pet
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-600 duration-300" href="#Breeds">
              Breeds
            </a>
          </li>
          <li>
            <a className="hover:text-yellow-600 duration-300" href="#Contact">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="lg:flex hidden items-center gap-5">
          <button className="text-2xl">
            <GoBell></GoBell>
          </button>
          <button className="text-2xl">
            <FaSearch></FaSearch>
          </button>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-yellow-300 hover:bg-black hover:text-white duration-300">
            Login
          </button>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-yellow-300 bg-yellow-300 hover:bg-black hover:text-white duration-300">
            Sign Up
          </button>
        </div>
        <button
          onClick={toggleNav}
          className="relative lg:hidden block text-3xl "
        >
          <PiListBold></PiListBold>
        </button>
        {showNav && (
          <ul className="text-base bg-gray-100 rounded-md font-medium text-black lg:hidden flex flex-col items-start gap-3 absolute top-16 right-3 p-5 border-2">
            <div className="flex items-center gap-5">
              <button className="text-2xl">
                <GoBell></GoBell>
              </button>
              <button className="text-2xl">
                <FaSearch></FaSearch>
              </button>
            </div>
            <button className="px-6 py-1 rounded-lg text-lg font-medium border border-yellow-300 bg-yellow-300 hover:bg-black hover:text-white duration-300">
              Login
            </button>
            <li>
              <a href="#FindPet">Find a Pet</a>
            </li>
            <li>
              <a href="#Breeds">Breeds</a>
            </li>
            <li>
              <a href="#Contact">Contact Us</a>
            </li>
          </ul>
        )}
      </nav>
      <div className="w-full md:py-20 py-10 md:px-10 px-5 relative">
        <div className="lg:w-5/12 md:w-9/12 sm:w-9/12 flex flex-col gap-5 items-start">
          <h2 className="lg:text-5xl md:text-4xl text-3xl">
            Pamper Your Pet, <br /> Because They Deserve the Bes
          </h2>
          <p className="text-gray-700">
            Discover a world of treats, toys, and essentials handpicked for your
            furry friends. Shop now and make tails wag with joy!
          </p>
          <button className="px-6 py-1 rounded-lg text-lg font-medium border border-yellow-300 bg-yellow-300 hover:bg-black hover:text-white duration-300">
            Find a Pet
          </button>
        </div>
        <img
          className="-z-10 px-3 w-11/12 absolute md:-bottom-50 sm:-bottom-32 -bottom-10"
          src={bg}
          alt="bg"
        />
      </div>
    </div>
  );
};

export default Header;
