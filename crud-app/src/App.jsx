import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import EditBook from './pages/Editpage';

export default function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit/:id" element={<EditBook />} />
      </Routes>

      <nav>
        <Link to="/">Add Book</Link>
      </nav>


    </div>
  );
}

  

