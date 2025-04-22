import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PostDetailesPage from "../pages/PostDetailesPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/post/:id" element={<PostDetailesPage />} />
    </Routes>
  );
};

export default App;
