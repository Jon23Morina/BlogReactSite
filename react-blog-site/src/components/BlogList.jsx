import React from "react";
import BlogItem from "./BlogItem";

function BlogList({ blogs }) {
  return (
    <div>
      {blogs.map((bl, index) => {
        return <BlogItem key={index} blog={bl}></BlogItem>;
      })}
    </div>
  );
}

export default BlogList;
