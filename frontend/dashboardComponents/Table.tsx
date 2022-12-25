import React, { useState } from "react";
import EditModal from "./EditModal";

const Table = () => {
  const [showEditModal, setShowEditModal] = useState(false);

  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
        Summarized Transcripts
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          Browse a list of Flowbite products designed to help you work and play,
          stay organized, get answers, keep in touch, grow your business, and
          more.
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="py-3 px-6">
            Transcript Name
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Size
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Type
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" className="py-3 px-6">
            <div className="flex items-center">
              Accuracy
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 w-3 h-3"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 320 512"
                >
                  <path d="M27.66 224h264.7c24.6 0 36.89-29.78 19.54-47.12l-132.3-136.8c-5.406-5.406-12.47-8.107-19.53-8.107c-7.055 0-14.09 2.701-19.45 8.107L8.119 176.9C-9.229 194.2 3.055 224 27.66 224zM292.3 288H27.66c-24.6 0-36.89 29.77-19.54 47.12l132.5 136.8C145.9 477.3 152.1 480 160 480c7.053 0 14.12-2.703 19.53-8.109l132.3-136.8C329.2 317.8 316.9 288 292.3 288z" />
                </svg>
              </a>
            </div>
          </th>
          <th scope="col" className="py-3 px-6"></th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple MacBook Pro 17"
          </th>
          <td className="py-4 px-6">Sliver</td>
          <td className="py-4 px-6">Laptop</td>
          <td className="py-4 px-6">$2999</td>
          <td className="py-4 px-6">
            <button
              type="button"
              onClick={() => setShowEditModal(true)}
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </button>
            {showEditModal && <EditModal setOpenEditModal={setShowEditModal} />}
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Microsoft Surface Pro
          </th>
          <td className="py-4 px-6">White</td>
          <td className="py-4 px-6">Laptop PC</td>
          <td className="py-4 px-6">$1999</td>
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Magic Mouse 2
          </th>
          <td className="py-4 px-6">Black</td>
          <td className="py-4 px-6">Accessories</td>
          <td className="py-4 px-6">$99</td>
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple Watch
          </th>
          <td className="py-4 px-6">Silver</td>
          <td className="py-4 px-6">Accessories</td>
          <td className="py-4 px-6">$179</td>
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            iPad
          </th>
          <td className="py-4 px-6">Gold</td>
          <td className="py-4 px-6">Tablet</td>
          <td className="py-4 px-6">$699</td>
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
        <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
          <th
            scope="row"
            className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            Apple iMac 27"
          </th>
          <td className="py-4 px-6">Silver</td>
          <td className="py-4 px-6">PC Desktop</td>
          <td className="py-4 px-6">$3999</td>
          <td className="py-4 px-6">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
