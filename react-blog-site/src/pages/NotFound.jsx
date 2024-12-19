import React from "react";

function NotFound() {
  return (
    <div className="p-56 m-20 flex justify-center items-center">
      <div>
        <h1 className="text-6xl text-slate-900 tracking-widest font-bold">
          Page Not Found
        </h1>
        <br />
        <p className="text-lg font-medium text-gray-400 tracking-wider">
          Errorr 404, The Page you looking for is not found.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
