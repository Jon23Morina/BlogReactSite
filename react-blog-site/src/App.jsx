import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Discover from "./pages/Discover";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import Control from "./pages/Control";
import NotFound from "./pages/NotFound";

function App() {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="*" element={<NotFound></NotFound>} />
          <Route path="/" element={<HomePage blogs={blogs}></HomePage>} />
          <Route path="/about" element={<AboutUs></AboutUs>} />
          <Route
            path="/blog-create"
            element={
              <Control
                blogs={blogs}
                setBlogs={setBlogs}
                setCategories={setCategories}
                categories={categories}
              ></Control>
            }
          />
          <Route path="/discover" element={<Discover></Discover>} />
          <Route path="/blog/:title" element={<Blog blog={blogs}></Blog>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
