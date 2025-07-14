import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import footerLogo from "./../assets/img/logo-footer.png";

const Footer = () => {
  return (
    <div className="w-full md:px-10 px-5 md:py-20 py-10 flex items-end gap-5 justify-around flex-wrap">
      <div className="flex flex-col items-start gap-2">
        <div className="flex items-center gap-1">
          <img src={footerLogo} alt="footerLogo" />
          <h2 className="flex items-center text-3xl font-semibold">
            Browse<p className="text-yellow-600">4</p>Pets
          </h2>
        </div>
        <p className="text-base max-w-80 text-gray-700">
          Discover a world of treats, toys, and essentials handpicked for your
          furry friends
        </p>
      </div>
      <ul className="flex flex-col items-start gap-3 font-medium">
        <li>
          <a className="hover:text-yellow-700 duration-300" href="#FindPet">
            Find a Pet
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-700 duration-300" href="#Breeds">
            Breeds
          </a>
        </li>
        <li>
          <a className="hover:text-yellow-700 duration-300" href="#Contact">
            Contact Us
          </a>
        </li>
      </ul>
      <div className="flex flex-col items-start gap-2">
        <h3 className="text-xl font-semibold">Follow Us</h3>
        <div className="flex items-center gap-5 text-2xl text-black">
          <a
            href=""
            className="hover:text-blue-700 duration-300"
            target="_blank"
          >
            <FaFacebook></FaFacebook>
          </a>
          <a
            href=""
            className="hover:text-pink-700 duration-300"
            target="_blank"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href=""
            className="hover:text-sky-700 duration-300"
            target="_blank"
          >
            <FaLinkedin></FaLinkedin>
          </a>
          <a
            href=""
            className="hover:text-red-700 duration-300"
            target="_blank"
          >
            <FaYoutube></FaYoutube>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
