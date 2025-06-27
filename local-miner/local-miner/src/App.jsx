import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Plus, PencilSquare, Trash } from 'react-bootstrap-icons';

function App() {
  const [tasks, setTasks] = useState([
    {
      title: 'study',
      date: '2022-04-20',
      description: 'Learn JavaScript'
    },
    {
      title: 'workout',
      date: '2022-04-28',
      description: 'Go to gym'
    }
  ]);

  const [task, setTask] = useState({ title: '', date: '', description: '' });
  const [editIndex, setEditIndex] = useState(null);
  const [showForm, setShowForm] = useState(false); // 👈 toggle form visibility

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
    setShowForm(false); // 👈 hide form after adding
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
    setTask({ title: '', date: '', description: '' }); // Clear previous
    setEditIndex(null);
    setShowForm(true); // 👈 show input form
  };

  return (
    <div className='container'>
      <div className="d-flex justify-content-center align-items-center vh-100" style={{ backgroundColor: '#e6e6e6' }}>
      <div className="p-4 rounded" style={{ width: '350px', backgroundColor: '#ffffff', border: '3px solid #a5d6a7' }}>
        <h3 className="text-center mb-3">TODO App</h3>

        {/* Top Add Button */}
        <div className="d-flex align-items-center bg-success bg-opacity-25 p-2 rounded mb-3">
          <input
            type="text"
            className="form-control border-0 bg-transparent"
            placeholder="Add New Task"
            disabled
          />
          <button className="btn btn-success ms-2" onClick={handleNewTaskClick}>
            <Plus size={20} />
          </button>
        </div>

        {/* Conditional Form */}
        {showForm && (
          <div className="mb-3">
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
            <button className="btn btn-success w-100" onClick={handleAddTask}>
              {editIndex !== null ? 'Update Task' : 'Add Task'}
            </button>
          </div>
        )}

        <h5 className="text-center mb-3">Tasks</h5>

        {/* Task List */}
        {tasks.map((t, index) => (
          <div
            key={index}
            className="bg-success bg-opacity-25 p-3 rounded mb-3"
            style={{ border: '2px solid #a5d6a7' }}
          >
            <div className="fw-bold">{t.title}</div>
            <div className="text-muted mb-1" style={{ fontSize: '0.9rem' }}>{t.date}</div>
            <div>{t.description}</div>
            <div className="mt-2 d-flex justify-content-end gap-3">
              <PencilSquare role="button" onClick={() => handleEdit(index)} />
              <Trash role="button" onClick={() => handleDelete(index)} />
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default App;

