import React, { useReducer } from "react";

function ControlSide({ dispatch, setCheck }) {
  return (
    <div className="relative">
      <div className="p-2 mb-2">
        <h4 className="text-2xl">Control Panel</h4>
        <hr />
      </div>
      <br />
      <ul className="p-2 text-lg">
        <li className="mb-2">
          {" "}
          <button
            onClick={() => {
              dispatch({ type: "Blog", payload: "blog" });
            }}
          >
            Blogs{" "}
          </button>
        </li>
        <li className="mb-2">
          <button
            onClick={() => {
              dispatch({ type: "Category", payload: "category" });
            }}
          >
            Category
          </button>{" "}
        </li>
        <li className="mb-2">Gallery</li>
      </ul>
      <button
        className="bg-pink-800 text-white tracking-wider p-2 rounded-sm text-lg m-2 absolute bottom-0"
        onClick={() => {
          setCheck(false);
        }}
      >
        <p> Close </p>
      </button>
    </div>
  );
}

export default ControlSide;
