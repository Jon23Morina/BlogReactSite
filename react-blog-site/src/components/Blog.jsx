import React, { useState } from "react";
import { useParams } from "react-router-dom";

function Blog({ blog }) {
  const { title } = useParams();

  const [showBlog, setShowBlog] = useState(
    blog.find((bl) => bl.title == title)
  );
  return (
    <div className="p-12 text-slate-800">
      <div>
        <img className="block mb-6" src={showBlog.file} alt="" />
      </div>
      <div>
        <h2 className="text-3xl uppercase tracking-widest font-semibold mb-5">
          {showBlog.title}
        </h2>
      </div>
      <div className="text-base font-normal tracking-wide">
        <span className="mr-2">Short Description: </span> {showBlog.description}
      </div>
      <div className="text-lg tracking-wider font-normal py-2 mb-4">
        {showBlog.paragraph}
      </div>
      <div className="text-base font-light tracking-wide italic">
        {showBlog.quote}
      </div>
    </div>
  );
}

export default Blog;
