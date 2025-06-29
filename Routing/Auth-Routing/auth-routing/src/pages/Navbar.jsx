import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

function Navbar() {
  const router =
    BrowserRouter[
      {
        path: "/dashboard",
        element: <Dashboard />,
      }
    ];
  return (
    <>
      <nav className="w-full h-auto p-4 flex items-center justify-between bg-gray-500">
        <div>
          <h1 className="text-3xl ml-48">Sumit Jha</h1>
        </div>

        <div>
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => {
                  `text-xl ${isActive ? "text-green-500" : "text-white"}`;
                }}
              >
                Home
              </NavLink>
            </li>
          </ul>
          <button className="bg-purple-500 border-0 rounded-2xl p-2 text-white">
            Log in
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
