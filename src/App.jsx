import './assets/App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PostDetailesPage from './pages/PostDetailesPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostDetailesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
