import React from "react";
import { FaBell, FaUserCheck } from "react-icons/fa";
const TopNavbar: React.FC = () => {
  return (
    <nav className="bg-white lg:p-2 flex flex-col lg:flex-row justify-between items-center border-1 border-slate-300">
      {/* Left Section: Logo */}
      <div className="flex items-center space-x-7 w-2/3 lg:flex-row flex-col">
        <img
          src="./src/assets/images/plmlogo-header.png"
          alt="PLM Logo"
          className="max-w-sm  "
        />
        <div className="w-full">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-500 w-full hidden md:block"
          />
        </div>
      </div>

      {/* Right Section: Notification and User */}
      <div className="flex items-center space-x-4 p-4">
        <button className="md:hidden">
          <img
            src="./src/assets/images/search-icon.jpg"
            alt=""
            className="max-w-8"
          />
        </button>

        <button className="relative text-gray-500">
          <img
            src="./src/assets/images/notification-icon.jpg"
            alt=""
            className="max-w-10 "
          />
          {/* AHAHHAHAHAHAHAH */}
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs rounded-full px-1">
            6
          </span>
        </button>
        <div className="realtive">
          <button className=" group">
            <FaUserCheck className="w-10 h-7 mt-1 " />
            <div className="bg-gray-200 hidden z-10 absolute rounded-lg shadow w-32 group-focus:block right-5">
              <ul className="py-2 text-sm text-gray-500 font-medium">
                <li className="">
                  <a href="">Profile</a>
                </li>
                <li>
                  <a href="">Settings</a>
                </li>
                <li>
                  <a href="">Log out</a>
                </li>
              </ul>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
