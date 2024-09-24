import React from "react";
import {
  FaHome,
  FaBars,
  FaBell,
  FaRegListAlt,
  FaFileAlt,
} from "react-icons/fa";

function Sidebar() {
  return (
    <aside className="w-64 h-full  lg:mt-8">
      <ul className="space-y-4  w-full pl-0">
        <li className="hover:bg-slate-200 py-3 hover:shadow-lg hover:rounded-md text-xl font-bold">
          <a
            href="#"
            className="ml-10 flex items-center space-x-2 text-gray-700 no-underline "
          >
            <span>
              <FaHome className=" me-2 cursor-pointer" />
            </span>
            <span>Home</span>
          </a>
        </li>
        <li className="hover:bg-slate-200 py-3 hover:shadow-lg hover:rounded-md text-xl font-bold">
          <a
            href="#"
            className="ml-10 flex items-center space-x-2 text-gray-700 no-underline"
          >
            <span>
              <FaFileAlt className=" me-2 cursor-pointer" />
            </span>
            <span>List of Faculty</span>
          </a>
        </li>
        <li className="hover:bg-slate-200 py-3 hover:shadow-lg hover:rounded-md text-xl font-bold">
          <a
            href="#"
            className="ml-10 flex items-center space-x-2 text-gray-700 no-underline"
          >
            <span>
              <FaRegListAlt className=" me-2 cursor-pointer" />
            </span>
            <span>Archive</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
