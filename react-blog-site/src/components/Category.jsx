import React, { useState } from "react";

function Category() {
  const [categoryValue, setCategoryValue] = useState("");

  function onCategorySubmit() {
    if (categoryValue == "") {
      setCategoryValue("");
    } else {
    }
  }
  return (
    <div className="flex justify-center items-center">
      <div className="p-10 m-4 ">
        <h3 className="text-2xl tracking-widest font-semibold text-slate-800">
          Create Category
        </h3>
        <p className=" text-base p-3 text-slate-500">
          Here in this part of the page, you are available to create categories
          for your blogs, based on what you want them to be.
        </p>
        <br />
        <div>
          <form onSubmit={onCategorySubmit}>
            <div>
              <div className="p-2 my-2">
                <label
                  htmlFor="category"
                  className="block text-slate-700 text-lg p-1 tracking-wide"
                >
                  Category Name
                </label>
              </div>
              <div className="p-2">
                <input
                  type="text"
                  id="category"
                  placeholder="Name..."
                  className="w-[620px] p-2 shadow-lg border-b-blue-600 border-[2px] rounded-sm focus:outline-none duration-300 hover:duration-300"
                />
              </div>
            </div>
            <br />
            <div>
              <button
                className="p-3 bg-blue-600 text-white rounded-sm
                hover:tracking-wide hover:scale-105 hover:duration-300 hover:translate-x-2 hover:text-lg
                duration-300 hover:rounded-lg w-40"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Category;
