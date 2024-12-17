import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Discover from "./pages/Discover";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import BlogForm from "./components/BlogForm";

function App() {
  const [blogs, setBlogs] = useState([]);
  return (
    <>
      <BrowserRouter>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<HomePage></HomePage>} />
          <Route path="/about" element={<AboutUs></AboutUs>} />
          <Route
            path="/blog-create"
            element={<BlogForm blogs={blogs} setBlogs={setBlogs}></BlogForm>}
          />
          <Route path="/discover" element={<Discover></Discover>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
