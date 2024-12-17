import React from "react";
import { useState } from "react";

function BlogForm({ blogs, setBlogs }) {
  const blogObject = {
    id: 0,
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

  return (
    <div className="p-5 my-4">
      <form action="">
        <div>
          <div className="p-5 m-4">
            <input type="text" placeholder="Title..." />
          </div>
          <div className="p-5 m-4">
            <input type="text" placeholder="quote" />
          </div>
          <div className="p-5 m-4">
            <textarea name="" id="" placeholder="Description..."></textarea>
          </div>
          <div>
            <input type="file" placeholder="Insert Image" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default BlogForm;
