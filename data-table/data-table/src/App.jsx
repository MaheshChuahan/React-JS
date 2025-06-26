import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './componets/Navbar';
import UserForm from './componets/UserForm';
import UserList from './componets/UserList';
import EditUser from './componets/EditUser'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/add" element={<UserForm />} />
      <Route path="/edit/:id" element={<EditUser />} />
    </Routes>
  </Router>
);

export default App;