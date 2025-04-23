import BookList from '../components/booklist';
import BookForm from '../components/bookform';

export default function Home() {
  return (
    <>
      <h1>Book Management System</h1>
      <BookForm />
      <BookList />
    </>
  );
}
