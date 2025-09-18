import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../feature/TaskSlice";

const EditTask = ({ task }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [discription, setDiscription] = useState(task.discription);
  const [status, setStatus] = useState(task.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: task.id, title, discription, status }));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div className="card shadow-lg border-0 rounded-4 mb-3 overflow-hidden">
          <div className="card-header bg-gradient-info text-white py-3">
            <h5 className="mb-0 fw-bold">
              <i className="fas fa-edit me-2"></i>
              Edit Task
            </h5>
          </div>
          <div className="card-body p-4">
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark mb-2">
                <i className="fas fa-tag me-2 text-primary"></i>
                Task Title
              </label>
              <input
                type="text"
                className="form-control border-2 border-light rounded-3"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter task title"
                style={{ transition: 'all 0.3s ease' }}
              />
            </div>
            
            <div className="mb-3">
              <label className="form-label fw-semibold text-dark mb-2">
                <i className="fas fa-align-left me-2 text-primary"></i>
                Description
              </label>
              <textarea
                className="form-control border-2 border-light rounded-3"
                value={discription}
                onChange={(e) => setDiscription(e.target.value)}
                rows="3"
                placeholder="Enter task description"
                style={{ transition: 'all 0.3s ease' }}
              ></textarea>
            </div>
            
            <div className="mb-4">
              <label className="form-label fw-semibold text-dark mb-2">
                <i className="fas fa-flag me-2 text-primary"></i>
                Status
              </label>
              <select
                className="form-select border-2 border-light rounded-3"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                style={{ transition: 'all 0.3s ease' }}
              >
                <option value="Todo" className="text-warning">📋 Todo</option>
                <option value="In Progress" className="text-info">🔄 In Progress</option>
                <option value="Completed" className="text-success">✅ Completed</option>
              </select>
            </div>
            
            <div className="d-flex gap-2">
              <button 
                onClick={handleEdit} 
                className="btn btn-success btn-sm rounded-3 flex-fill fw-semibold"
                style={{
                  background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                  border: 'none',
                  transition: 'all 0.3s ease',
                  transform: 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-1px)';
                  e.target.style.boxShadow = '0 4px 15px rgba(40, 167, 69, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                <i className="fas fa-save me-1"></i>
                Save Changes
              </button>
              <button 
                onClick={() => setIsEdit(false)} 
                className="btn btn-outline-secondary btn-sm rounded-3 flex-fill fw-semibold"
                style={{ transition: 'all 0.3s ease' }}
              >
                <i className="fas fa-times me-1"></i>
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsEdit(true)} 
          className="btn btn-outline-primary btn-sm rounded-3 flex-fill fw-semibold"
          style={{
            transition: 'all 0.3s ease',
            transform: 'translateY(0)'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-1px)';
            e.target.style.boxShadow = '0 4px 15px rgba(13, 110, 253, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = 'none';
          }}
        >
          <i className="fas fa-edit me-1"></i>
          Edit
        </button>
      )}
    </div>
  );
};

export default EditTask;
