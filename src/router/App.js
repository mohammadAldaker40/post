import React from "react";
import { Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />

    </Routes>
  );
};

export default App;
