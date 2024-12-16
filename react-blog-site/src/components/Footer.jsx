import React from "react";

function Footer() {
  return (
    <div>
      <div className="flex justify-between bg-slate-900 p-10 relative bottom-0 w-full max-w-full">
        <div className="">
          <div className="text-white p-3 px-8 font-medium text-center tracking-widest text-2xl">
            <h4>
              <span>Blog</span>
              <span className="text-teal-500">Joy</span>
            </h4>
          </div>
        </div>
        <div className="text-white">
          <h4 className="text-white p-3 px-8 font-medium text-center tracking-widest text-xl">
            Links
          </h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
        <div className="text-white">
          <h4 className="text-white p-3 px-8 font-medium text-center tracking-widest text-xl">
            Links
          </h4>
          <ul>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
            <li>Link 4</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
