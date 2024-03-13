import React, { useState } from "react";
import Chart from "./components/chart";

function App() {
  const items = [
    {
      icon: "/SVGs/ICON_officer.svg",
      title: "Офицер",
    },
    {
      icon: "/SVGs/ICON_ahlagch.svg",
      title: "Ахлагч",
    },
    {
      icon: "/SVGs/ICON_gereet.svg",
      title: "Гэрээт",
    },
    {
      icon: "/SVGs/ICON_hugatsaat.svg",
      title: "Хугацаат",
    },
    {
      icon: "/SVGs/ICON_engiin.svg",
      title: "Энгийн",
    },
    {
      icon: "/SVGs/ICON_engiin.svg",
      title: "ХХТХГ",
    },
  ];

  return (
    <div className="grid grid-cols-3 grid-rows-2 gap-4">
      {items.map((data, index) => (
        <div
          key={index}
          className="max-w-sm bg-white border border-gray-200 rounded-lg shadow max-h-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img className="p-16 rounded-t-lg" src={data.icon} alt="" />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>

            <button
              onClick={() => {
                Chart();
              }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Open Modal
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
