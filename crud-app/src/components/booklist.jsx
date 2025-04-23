import { useNavigate } from 'react-router-dom';

export default function Booklist() {
  const books = JSON.parse(localStorage.getItem('books')) || [];
  const navigate = useNavigate();

  const deleteBook = (id) => {
    const filterd= books.filter((book) => book.id !== id);
    localStorage.setItem('books', JSON.stringify(filterd));
    window.location.reload();
  };

  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <img src={book.image} alt={book.name} width={100} />
          <h3>{book.name}</h3>
          <p>Price: ${book.price}</p>
          <p>Author: {book.author}</p>
          <p>language: {book.language}</p>
      
          <button onClick={() => navigate(`/edit/${book.id}`)}>Edit</button>
          <button onClick={() => deleteBook(book.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
