import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function EditBook() {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const bookToEdit = books.find((b) => b.id === +id);
  const [book, setBook] = useState(bookToEdit);

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value});

  const handleSave = (e) => {
    e.preventDefault();
      const updated = books.map((b) => (b.id === +id ? book : b));
    localStorage.setItem('books', JSON.stringify(updated));
    navigate('/');
  };

  return (
    <form onSubmit={handleSave}>
      <input name="name" value={book.name} onChange={handleChange} />
      <input name="name price" value={book.price} onChange={handleChange} />
      <input name="name author" value={book.author} onChange={handleChange} />
      <input name="name image" value={book.image} onChange={handleChange} />
      <input name="name language" value={book.language} onChange={handleChange} />
    
      <button type="submit">Save Changes</button>
    </form>
  );
}


