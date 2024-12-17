import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="sticky flex justify-between items-center shadow-lg bg-transparent">
      <div className="flex justify-center items-center">
        <div className=" bg-slate-800 text-white p-3 px-8 font-medium text-center tracking-wider text-lg">
          <h4>
            <span>Blog</span>
            <span className="text-teal-500">Joy</span>
          </h4>
        </div>

        <div className="">
          <ul className="flex justify-center items-center font-medium text-base tracking-wide text-slate-800">
            <li className="px-2">
              <Link to="/">Home</Link>
            </li>
            <li className="px-2">
              <Link to="/about">About</Link>
            </li>
            <li className="px-2">
              <Link to="/discover">Discover</Link>
            </li>
            <li className="px-2">
              <Link to="/blog-create">Create Blog</Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <form action="">
          <input type="text" placeholder="Search..." />
        </form>
      </div>
      <div className="flex justify-center items-center px-8 tracking-wide">
        <div className="mx-2">
          <span>logo</span>
          <span>ENG</span>
        </div>
        <button className="mx-2 px-2 py-1 rounded-md hover:border-slate-900 hover:border-1 hover:bg-slate-900 text-slate-800 hover:text-white duration-100 cursor-pointer">
          Log In
        </button>
        <button
          className="mx-2 px-2 py-1 rounded-md hover:-translate-x-4 hover:rounded-lg hover:bg-teal-600
         ring-teal-600  ring-2 hover:text-white
         hover:font-medium hover:tracking-wider duration-700 hover:duration-400 cursor-pointer"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Nav;
