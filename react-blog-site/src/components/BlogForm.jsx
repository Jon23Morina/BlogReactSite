import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Category from "./Category";

function BlogForm({ blogs, setBlogs, categories }) {
  const navigate = useNavigate();

  const blogObject = {
    title: "",
    description: "",
    paragraph: "",
    quote: "",
    file: null,
    userId: null,
    user: null,
    category: categories,
  };
  //file: URL.createObjectURL(e.target.files[0])
  const [blogValue, setBlogValue] = useState(blogObject);

  function handleSubmitEvent(e) {
    e.preventDefault();
    if (
      blogValue.title == "" ||
      blogValue.description == "" ||
      blogValue.quote == "" ||
      blogValue.paragraph == "" ||
      blogValue.file == null
    ) {
      return setBlogValue(blogObject);
    } else {
      blogValue.user = "";
      blogValue.userId = "";
      var newBlogArray = [...blogs, blogValue];
      setBlogs(newBlogArray);
      setBlogValue(blogObject);
      navigate("/");
    }
  }

  return (
    <div className="p-5">
      <div className="z-20">
        <h2 className="text-2xl tracking-widest font-semibold text-slate-800">
          Create Blog
        </h2>
        <p className=" text-base p-3 text-slate-500">
          This part of the section is where you create Blogs. Add your wildest
          and inspiring adventures, Show the world interesting facts about life!
        </p>
        <form onSubmit={handleSubmitEvent} className="w-[80%] m-auto bg">
          <div>
            <div className="flex items-center justify-between">
              <div className="p-5 m-4">
                <label
                  htmlFor="title"
                  className="block text-slate-700 text-lg p-1 tracking-wide"
                >
                  Title
                </label>
                <input
                  className="w-[480px] p-2 shadow-lg border-b-blue-600 border-[2px] rounded-sm focus:outline-none duration-300 hover:duration-300 focus:border-[3px]"
                  type="text"
                  id="title"
                  placeholder="Title..."
                  onChange={(e) => {
                    setBlogValue({ ...blogValue, title: e.target.value });
                  }}
                />
              </div>
              <div className="p-5 m-4">
                <label
                  htmlFor="quote"
                  className="block text-lg p-1 tracking-wide text-slate-700"
                >
                  Quote
                </label>
                <input
                  className="w-[480px] p-2 shadow-lg rounded-sm border-b-blue-600 border-[2px] focus:outline-none duration-300 hover:duration-300 focus:border-[3px]"
                  type="text"
                  id="quote"
                  placeholder="Quote..."
                  onChange={(e) => {
                    setBlogValue({ ...blogValue, quote: e.target.value });
                  }}
                />
              </div>
            </div>
            <div className="p-5 m-4">
              <label
                htmlFor="category"
                className="blocktext-lg p-1 tracking-wide text-slate-700"
              >
                category
              </label>
              <input type="radio" />
            </div>
            <div className="p-5 m-4">
              <label
                htmlFor="image"
                className="blocktext-lg p-1 tracking-wide text-slate-700"
              >
                Upload Image
              </label>
              <input
                className="bg-white w-full cursor-pointer shadow-lg p-2 rounded-sm border-b-blue-600 border-[2px] focus:outline-none duration-300 hover:duration-300 focus:border-[3px]"
                type="file"
                id="image"
                placeholder="Insert Image"
                onChange={(e) => {
                  setBlogValue({
                    ...blogValue,
                    file: URL.createObjectURL(e.target.files[0]),
                  });
                }}
              />
            </div>
            <div className="p-5 m-4">
              <label
                htmlFor="description"
                className="block text-lg p-1 tracking-wide text-slate-700"
              >
                Description
              </label>
              <textarea
                className="w-full h-[220px] p-2 shadow-lg rounded-md border-b-blue-600 border-[2px] focus:outline-none duration-300 hover:duration-300 focus:border-[3px]"
                name=""
                id="description"
                placeholder="Description..."
                onChange={(e) => {
                  setBlogValue({ ...blogValue, description: e.target.value });
                }}
              ></textarea>
            </div>
            <div className="p-5 m-4">
              <label
                htmlFor="paragraph"
                className="block text-lg p-1 tracking-wide text-slate-700"
              >
                Paragraph
              </label>
              <textarea
                className="w-full h-[680px] p-2 shadow-lg rounded-sm focus:outline-none focus:rounded-md duration-300 hover:duration-300 border-b-blue-600 border-[2px] focus:border-[3px]"
                name=""
                id="paragraph"
                placeholder="Paragraph..."
                onChange={(e) => {
                  setBlogValue({ ...blogValue, paragraph: e.target.value });
                }}
              ></textarea>
            </div>
          </div>
          <div className="m-4 p-5">
            <button
              type="submit"
              className="p-4 bg-blue-600 text-white rounded-sm
            hover:tracking-wide hover:scale-105 hover:duration-300 hover:translate-x-2 hover:text-lg
            duration-300 hover:rounded-lg w-56"
            >
              Submit Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogForm;
