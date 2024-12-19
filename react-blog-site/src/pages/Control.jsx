import React, { useState } from "react";
import BlogForm from "../components/BlogForm";
import ControlSide from "../components/ControlSide";
import Category from "../components/Category";
import { useReducer } from "react";

function Control({ blogs, setBlogs, categories, setCategories }) {
  const [check, setCheck] = useState(true);
  const [sideState, dispatch] = useReducer(handleControll, "blog");
  function handleControll(sideState, action) {
    switch (action.type) {
      case "Blog":
        return (sideState = action.payload);
      case "Category":
        return (sideState = action.payload);
      default:
        return (sideState = "blog");
    }
  }
  return (
    <div className="flex justify-between">
      {check == true ? (
        <div className="w-[12%] bg-slate-800 text-white ">
          <ControlSide
            sideState={sideState}
            dispatch={dispatch}
            setCheck={setCheck}
          ></ControlSide>
        </div>
      ) : (
        <div></div>
      )}

      <div className="w-full p-14">
        {check == false ? (
          <button
            className="bg-slate-800 text-white tracking-wider p-2 rounded-sm text-lg"
            onClick={() => {
              setCheck(true);
            }}
          >
            <p> Open </p>
          </button>
        ) : (
          ""
        )}
        {sideState == "blog" ? (
          <BlogForm
            blogs={blogs}
            setBlogs={setBlogs}
            categories={categories}
          ></BlogForm>
        ) : (
          <Category></Category>
        )}
      </div>
    </div>
  );
}

export default Control;
