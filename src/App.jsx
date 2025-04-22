import './assets/App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter } from 'react-router-dom';
import PostDetailesPage from './pages/PostDetailesPage';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomePage />
        <PostDetailesPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
