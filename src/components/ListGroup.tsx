import React from "react";
import { FaPenAlt, FaRegEdit, FaTrash } from "react-icons/fa";

const Content: React.FC = () => {
  return (
    <div className="flex-1">
      <div className="">
        <h1 className="text-2xl font-medium text-gray-700  mb-4">
          PLM Faculty Members
        </h1>
        <div className="flex items-center space-x-2 mb-4">
          <button className="bg-gray-200 px-2 py-1 rounded-lg">CISTM</button>
          <button className="bg-gray-200 px-2 py-1 rounded-lg">CE</button>
          <button className="bg-gray-200 px-2 py-1 rounded-lg">
            Professor 1
          </button>
          <button className="bg-gray-300 px-2 py-1 rounded-lg">
            + Add Filter
          </button>
          <button className="bg-gray-300 px-2 py-1 rounded-lg">
            Delete All
          </button>
        </div>
      </div>

      <p className="text-gray-600 mb-2">Total: 21 results</p>

      {/* Faculty List */}
      <div className="bg-white shadow-sm rounded-lg p-4 max-h-svh  overflow-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="text-left bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Employee ID</th>
              <th className="p-2">Position</th>
              <th className="p-2">Department</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Placeholder for Data */}
            {[...Array(40)].map((_, index) => (
              <tr key={index} className="border-b ">
                <td className="p-2 flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40"
                    alt="Profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <span>Faculty {index + 1}</span>
                </td>
                <td className="p-2">2020-12345</td>
                <td className="p-2">Professor 1</td>
                <td className="p-2">CISTM</td>
                <td className="p-2 space-x-3">
                  <button className="text-blue-500">
                    <FaRegEdit className="h-6 w-6" />
                  </button>
                  <button className="text-red-500">
                    <FaTrash className="h-6 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Content;
