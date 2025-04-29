import './assets/App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetailsPage from './pages/PostDetailsPage';
import AddPostPage from './pages/AddPostPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailsPage />} />
        <Route path="/post/add-post" element={<AddPostPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
