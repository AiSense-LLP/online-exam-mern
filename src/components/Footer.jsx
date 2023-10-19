import React from "react";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoInstagram } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { BiCopyright } from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-full bg-white py-32 ">
      <div className="flex gap-4 overflow-x-hidden md:flex-row flex-col">
        <div className="w-full flex gap-8 lg:gap-10 md:flex-row flex-col lg:px-10 md:text-xl text-4xl lg:ml-64 ml-12">
          <div>
            <h1 className="font-bold my-5">Mobile app</h1>
            <ul className="text-black/60 text-lg">
              <li>Features</li>
              <li>Live share</li>
              <li>Video record</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold my-5">Community</h1>
            <ul className="text-black/60 text-lg">
              <li>Featured artists</li>
              <li>The Portal</li>
              <li>Live events</li>
            </ul>
          </div>
          <div>
            <h1 className="font-bold my-5">Company</h1>
            <ul className="text-black/60 text-lg">
              <li>About us</li>
              <li>Contact us</li>
              <li>History</li>
            </ul>
          </div>
        </div>
        <div className="xl:w-full md:items-end flex flex-col sm:flex-row  md:flex-col justify-start gap-3 md:px-0 px-10">
          <div className="pr-10">
            <button className="w-32 h-12 rounded-md text-white bg-blue-600">
              Register
            </button>
          </div>
          <div className="pr-10">
            <button className="w-32 h-12 rounded-md text-blue-600  border-2 border-blue-600">
              Log in
            </button>
          </div>
          <div className="pr-10">
            <button className="w-32 h-12 rounded-md text-blue-600  border-2 border-blue-600">
              ADMIN
            </button>
          </div>
        </div>
      </div>

      <hr className="bg-blue-600 h-[3px] xl:ml-16 my-4" />

      <div className="flex justify-between items-center px-16 md:flex-row flex-col gap-7 md:gap-0">
        <div className="flex gap-2 justify-center items-center">
          <BiCopyright /> : We love our users
        </div>

        <div className="flex justify-center items-center gap-4">
          <h1>Follow us</h1>

          <div className="flex gap-2">
            <div className="w-12 p- h-12 bg-amber-700/50 rounded-full flex justify-center items-center  cursor-pointer  hover:bg-black hover:text-white">
              <BiLogoFacebook size={24} />
            </div>

            <div className="w-12 p- h-12 bg-amber-700/50 rounded-full flex justify-center items-center  cursor-pointer  hover:bg-black hover:text-white">
              <FaTwitter size={18} />
            </div>
            <div className="w-12 p- h-12 bg-amber-700/50 rounded-full flex justify-center items-center  cursor-pointer hover:bg-black hover:text-white">
              <BiLogoInstagram size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
