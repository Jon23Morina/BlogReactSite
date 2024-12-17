import React from "react";
import BlogList from "../components/BlogList";

function HomePage({ blogs }) {
  return (
    <div>
      <BlogList blogs={blogs} />
    </div>
  );
}

export default HomePage;
