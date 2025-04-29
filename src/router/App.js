import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetailsPage from "../pages/PostDetailsPage";
import AddPostPage from "../pages/AddPostPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostDetailsPage />} />
      <Route path="/post/add-post" element={<AddPostPage />} />
    </Routes>
  );
};

export default App;
