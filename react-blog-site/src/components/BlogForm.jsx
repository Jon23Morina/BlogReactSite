import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function BlogForm({ blogs, setBlogs }) {
  const navigate = useNavigate();

  const blogObject = {
    title: "",
    description: "",
    paragraph: "",
    quote: "",
    file: null,
    userId: null,
    user: null,
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
    <div className="p-5 my-4 w-full bg-teal-500">
      <form onSubmit={handleSubmitEvent}>
        <div>
          <div className="p-5 m-4">
            <input
              className="w-40"
              type="text"
              placeholder="Title..."
              onChange={(e) => {
                setBlogValue({ ...blogValue, title: e.target.value });
              }}
            />
          </div>
          <div className="p-5 m-4">
            <input
              type="text"
              placeholder="quote"
              onChange={(e) => {
                setBlogValue({ ...blogValue, quote: e.target.value });
              }}
            />
          </div>
          <div className="p-5 m-4">
            <textarea
              className="w-72 h-72"
              name=""
              id=""
              placeholder="Description..."
              onChange={(e) => {
                setBlogValue({ ...blogValue, description: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="p-5 m-4">
            <textarea
              className="w-96 h-96"
              name=""
              id=""
              placeholder="Paragraph..."
              onChange={(e) => {
                setBlogValue({ ...blogValue, paragraph: e.target.value });
              }}
            ></textarea>
          </div>
          <div className="p-5 m-4">
            <input
              type="file"
              placeholder="Insert Image"
              onChange={(e) => {
                setBlogValue({
                  ...blogValue,
                  file: URL.createObjectURL(e.target.files[0]),
                });
              }}
            />
          </div>
        </div>
        <div>
          <button type="submit" className="p-2 bg-slate-800 text-white">
            Submit Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
