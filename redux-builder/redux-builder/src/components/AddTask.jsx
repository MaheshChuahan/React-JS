import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from 'uuid';
import { addTask } from '../feature/TaskSlice';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [discription, setDiscription] = useState('');
  const [status, setStatus] = useState('Todo');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      discription,
      status
    };
    dispatch(addTask(newTask));
    setTitle('');
    setDiscription('');
    setStatus('Todo');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-4 overflow-hidden">
            <div className="card-header bg-gradient-primary text-white text-center py-4">
              <h2 className="mb-0 fw-bold">
                <i className="fas fa-plus-circle me-2"></i>
                Add New Task
              </h2>
              <p className="mb-0 opacity-75">Create and organize your tasks efficiently</p>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-tag me-2 text-primary"></i>
                    Task Title
                  </label>
                  <input
                    type="text"
                    className="form-control form-control-lg border-2 border-light rounded-3"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a descriptive task title..."
                    required
                    style={{ transition: 'all 0.3s ease' }}
                  />
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-align-left me-2 text-primary"></i>
                    Description
                  </label>
                  <textarea
                    className="form-control border-2 border-light rounded-3"
                    rows="4"
                    value={discription}
                    onChange={(e) => setDiscription(e.target.value)}
                    placeholder="Provide detailed description of your task..."
                    required
                    style={{ transition: 'all 0.3s ease' }}
                  ></textarea>
                </div>

                <div className="mb-4">
                  <label className="form-label fw-semibold text-dark mb-2">
                    <i className="fas fa-flag me-2 text-primary"></i>
                    Status
                  </label>
                  <select
                    className="form-select form-select-lg border-2 border-light rounded-3"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    style={{ transition: 'all 0.3s ease' }}
                  >
                    <option value="Todo" className="text-warning">📋 Todo</option>
                    <option value="In Progress" className="text-info">🔄 In Progress</option>
                    <option value="Completed" className="text-success">✅ Completed</option>
                  </select>
                </div>

                <button 
                  type="submit" 
                  className="btn btn-primary btn-lg w-100 rounded-3 fw-bold shadow-sm"
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    border: 'none',
                    transition: 'all 0.3s ease',
                    transform: 'translateY(0)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'translateY(-2px)';
                    e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.2)';
                  }}
                >
                  <i className="fas fa-plus me-2"></i>
                  Create Task
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
