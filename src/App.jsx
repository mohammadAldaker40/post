import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import PostDetailsPage from './pages/PostDetailsPage';
import AddPostPage from './pages/AddPostPage';
import MobileNav from './components/MobileNav';
import './index.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/post/:id" element={<PostDetailsPage />} />
          <Route path="/add-post" element={<AddPostPage />} />
        </Routes>
        <MobileNav />
      </div>
    </Router>
  );
}

export default App;
