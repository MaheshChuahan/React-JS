import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus, PencilSquare, Trash, Book } from 'react-bootstrap-icons';

function App() {
  const [tasks, setTasks] = useState([
    { title: 'Office Work', date: '2022-04-20', description: 'Ambrodary Design' },
    { title: 'Business', date: '2005-08-03', description: 'Import Export' }
  ]);

  const [task, setTask] = useState({ title: '', date: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const handleAddTask = () => {
    if (!task.title || !task.date || !task.description) return;

    const updatedTasks = [...tasks];
    if (editIndex !== null) {
      updatedTasks[editIndex] = task;
      setEditIndex(null);
    } else {
      updatedTasks.push(task);
    }

    setTasks(updatedTasks);
    setTask({ title: '', date: '', description: '' });
    setShowForm(false);
  };

  const handleEdit = (index) => {
    setTask(tasks[index]);
    setEditIndex(index);
    setShowForm(true);
  };

  const handleDelete = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
    setEditIndex(null);
  };

  const handleNewTaskClick = () => {
    setTask({ title: '', date: '', description: '' });
    setEditIndex(null);
    setShowForm(true);
  };

  return (
    <div className="vh-100 d-flex flex-column" style={{ backgroundColor: '#f9f9f9' }}>
      <div className="p-4">
        <h3 className="text-center text-dark fw-bold">
          <Book className="me-2" /> TODO APP
        </h3>

        <div className="d-flex align-items-center bg-light border border-success border-opacity-50 p-2 rounded-3 mb-4">
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Add New Task"
            disabled
          />
          <button className="btn btn-success ms-2 shadow-sm" onClick={handleNewTaskClick}>
            <Plus size={20} />
          </button>
        </div>

        {showForm && (
          <div className="mb-4 bg-light p-3 rounded-3 border border-success border-opacity-25">
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Task Title"
              value={task.title}
              onChange={(e) => setTask({ ...task, title: e.target.value })}
            />
            <input
              type="date"
              className="form-control mb-2"
              value={task.date}
              onChange={(e) => setTask({ ...task, date: e.target.value })}
            />
            <input
              type="text"
              className="form-control mb-2"
              placeholder="Task Description"
              value={task.description}
              onChange={(e) => setTask({ ...task, description: e.target.value })}
            />
            <button className="btn btn-success w-100 shadow-sm" onClick={handleAddTask}>
              {editIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        )}  

<h5 className="text-center text-secondary mb-3">📋 Your Tasks</h5>

<div className="row g-3">
  {tasks.map((t, index) => (
    <div className="col-md-6" key={index}>
      <div className="card border-success shadow-sm h-100">
        <div className="card-body">
          <h5 className="card-title text-success fw-semibold">{t.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted" style={{ fontSize: '0.85rem' }}>{t.date}</h6>
          <p className="card-text">{t.description}</p>
          <div className="d-flex justify-content-end gap-3">
            <PencilSquare
              role="button"
              className="text-primary"
              onClick={() => handleEdit(index)}
            />
            <Trash
              role="button"
              className="text-danger"
              onClick={() => handleDelete(index)} 
            />
          </div>
        </div>
      </div>
    </div>
  ))}
</div>
</div>
</div>
  );
}

export default App;
