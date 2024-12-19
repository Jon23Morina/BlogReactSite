import React from "react";
import BlogForm from "../components/BlogForm";
import ControlSide from "../components/ControlSide";

function Control({ blogs, setBlogs }) {
  return (
    <div className="flex justify-between">
      <div className="w-[12%] bg-slate-800 text-white">
        <ControlSide></ControlSide>
      </div>

      <div className="w-full p-14">
        <BlogForm blogs={blogs} setBlogs={setBlogs}></BlogForm>
      </div>
    </div>
  );
}

export default Control;
