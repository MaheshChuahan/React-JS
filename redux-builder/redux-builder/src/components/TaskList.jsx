import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, fetchTodo } from "../feature/TaskSlice";
import EditTask from "./EditTask";

const Tasklist = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      'Todo': { class: 'bg-warning text-dark', icon: '📋' },
      'In Progress': { class: 'bg-info text-white', icon: '🔄' },
      'Completed': { class: 'bg-success text-white', icon: '✅' },
      'to-do': { class: 'bg-warning text-dark', icon: '📋' },
      'Commpleted': { class: 'bg-success text-white', icon: '✅' }
    };
    
    const config = statusConfig[status] || { class: 'bg-secondary text-white', icon: '📝' };
    
    return (
      <span className={`badge ${config.class} rounded-pill px-3 py-2 fw-semibold`}>
        {config.icon} {status}
      </span>
    );
  };

  if (loading) return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <div className="card shadow-lg border-0 rounded-4 p-5">
            <div className="spinner-border text-primary mb-3" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className="text-muted">Loading your tasks...</h4>
            <p className="text-muted">Please wait while we fetch your data</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (error) return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-4 border-danger">
            <div className="card-body text-center p-5">
              <i className="fas fa-exclamation-triangle text-danger mb-3" style={{ fontSize: '3rem' }}></i>
              <h4 className="text-danger mb-3">Oops! Something went wrong</h4>
              <p className="text-muted mb-0">Error: {error}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark mb-2">
              <i className="fas fa-tasks me-3 text-primary"></i>
              Task Management Dashboard
            </h2>
            <p className="text-muted fs-5">Manage and track your tasks efficiently</p>
            <div className="d-flex justify-content-center gap-3 mt-3">
              <span className="badge bg-warning text-dark px-3 py-2">
                📋 Todo: {tasks.filter(task => task.status === 'Todo' || task.status === 'to-do').length}
              </span>
              <span className="badge bg-info text-white px-3 py-2">
                🔄 In Progress: {tasks.filter(task => task.status === 'In Progress').length}
              </span>
              <span className="badge bg-success text-white px-3 py-2">
                ✅ Completed: {tasks.filter(task => task.status === 'Completed' || task.status === 'Commpleted').length}
              </span>
            </div>
          </div>

          {tasks.length === 0 ? (
            <div className="text-center">
              <div className="card shadow-lg border-0 rounded-4 p-5">
                <i className="fas fa-clipboard-list text-muted mb-3" style={{ fontSize: '4rem' }}></i>
                <h4 className="text-muted mb-2">No tasks found</h4>
                <p className="text-muted">Start by adding your first task above!</p>
              </div>
            </div>
          ) : (
            <div className="row g-4">
              {tasks.map((task) => (
                <div className="col-lg-6 col-xl-4" key={task.id}>
                  <div 
                    className="card shadow-lg border-0 rounded-4 h-100 overflow-hidden"
                    style={{
                      transition: 'all 0.3s ease',
                      transform: 'translateY(0)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-5px)';
                      e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
                    }}
                  >
                    <div className="card-header bg-gradient-light border-0 py-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title mb-0 fw-bold text-dark">
                          {task.title.length > 30 ? `${task.title.substring(0, 30)}...` : task.title}
                        </h5>
                        <div className="dropdown">
                          <button className="btn btn-link text-muted p-0" type="button" data-bs-toggle="dropdown">
                            <i className="fas fa-ellipsis-v"></i>
                          </button>
                          <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#"><i className="fas fa-edit me-2"></i>Edit</a></li>
                            <li><a className="dropdown-item text-danger" href="#"><i className="fas fa-trash me-2"></i>Delete</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body p-4">
                      {task.discription && (
                        <p className="card-text text-muted mb-3">
                          {task.discription.length > 100 ? `${task.discription.substring(0, 100)}...` : task.discription}
                        </p>
                      )}
                      
                      <div className="mb-3">
                        {getStatusBadge(task.status)}
                      </div>
                      
                      <div className="d-flex gap-2">
                        <EditTask task={task} />
                        <button
                          onClick={() => handleDelete(task.id)}
                          className="btn btn-outline-danger btn-sm rounded-3 flex-fill"
                          style={{ transition: 'all 0.3s ease' }}
                        >
                          <i className="fas fa-trash me-1"></i>
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
