import React from "react";
import { useState } from "react";

function BlogForm({ blogs, setBlogs }) {
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
    }
  }

  return (
    <div className="p-5 my-4">
      <form onSubmit={handleSubmitEvent}>
        <div>
          <div className="p-5 m-4">
            <input
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
