import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';

export default function Bookmanagment() {
  const [book, setBook] = useState({ Name: '', price: '', author: '', image: '', language: '' });
  const [books, setBooks] = useState(() => JSON.parse(localStorage.getItem('books')) || []);

  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books));
  }, [books]);

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setBooks([...books, { ...book, id: Date.now() }]);
    setBook({ name: '',price: '',author: '',image: '',language: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Book Name" value={book.name} onChange={handleChange} />
    <input name="price"  placeholder="book price" value={book.price} onChange={handleChange}/>
    <input name="author"  placeholder="book author" value={book.author} onChange={handleChange}/>
    <input name="image"  placeholder="book image" value={book.image} onChange={handleChange}/>
    <input name="language"  placeholder="book language" value={book.language} onChange={handleChange}/>
      <button type="submit">Add Book</button>
    </form>
  );
}


