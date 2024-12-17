import React from "react";
import { Link } from "react-router-dom";

function BlogItem({ blog }) {
  return (
    <div className="p-12 text-slate-800">
      <h2>Blog Item</h2>
      <div>
        <img
          className="block mb-6"
          src={blog.file}
          loading="lazyloading"
          alt={blog.file}
        />
      </div>
      <div>
        <h2 className="text-3xl uppercase tracking-widest font-semibold mb-5">
          {blog.title}
        </h2>
      </div>
      <div className="text-base font-normal tracking-wide">
        <span className="mr-2">Short Description: </span> {blog.description}
      </div>
      <div className="text-base font-light tracking-wide italic">
        <span className="mr-2">Qoute:</span> {blog.quote}
      </div>
      <div className="mt-5">
        <Link to={`/blog/${blog.title}`}>Read More!</Link>
      </div>
    </div>
  );
}

export default BlogItem;
