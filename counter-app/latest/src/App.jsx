import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow-lg text-center" style={{ width: '300px', borderRadius: '15px' }}>
        <h1 className="display-1 text-primary" style={{fontSize: '70px'}}>{count}</h1>
        <div className="d-flex justify-content-center mt-3">
          <button onClick={handleIncrement} className="btn btn-danger btn-lg me-3 px-4">+</button>
          <button onClick={handleDecrement} className="btn btn-success btn-lg ms-3 px-4">-</button>
        </div>
      </div>
    </div>
  );
}
