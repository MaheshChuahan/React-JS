import React, { useState } from 'react';
import { FaBook, FaEdit, FaTrash, FaPlus, FaSearch } from 'react-icons/fa';
import { Button, Table, Modal, Form } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  const [items, setItems] = useState([
    { id: 1, title: "JavaScript", description: "JavaScript is among the most powerful and flexible programming languages of the web." },
    { id: 2, title: "Sass", description: "Learn from the most comprehensive Sass documentation and tutorials." },
    { id: 3, title: "React", description: "Learn from react.js official documentation and community resources." },
    { id: 4, title: "Node.js", description: "Node.js documentation and API reference for server-side development." },
    { id: 5, title: "EcmaScript", description: "Learn from es6.org - the most comprehensive ES6+ resource." },
    { id: 6, title: "Angular", description: "One framework for mobile and desktop web applications." },
  ]);

  const [show, setShow] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState({ title: '', description: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const handleShow = () => setShow(true);
  const handleClose = () => {
    setForm({ title: '', description: '' });
    setEditIndex(null);
    setShow(false);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editIndex !== null) {
      const updated = items.map((item, idx) =>
        idx === editIndex ? { ...item, ...form } : item
      );
      setItems(updated);
    } else {
      setItems([...items, { id: items.length + 1, ...form }]);
    }
    handleClose();
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setForm(items[index]);
    handleShow();
  };

  const handleDelete = (index) => {
    const filtered = items.filter((_, idx) => idx !== index);
    setItems(filtered);
  };

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-vh-100" style={{ 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
    }}>
      <div className="container-fluid p-4">
        {/* Header */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center">
                <div className="bg-white rounded-circle p-3 me-3 shadow-lg">
                  <img 
                    src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
                    alt="React" 
                    width="40" 
                    height="40" 
                  />
                </div>
                <div>
                  <h2 className="text-white mb-0 fw-bold">React CRUD</h2>
                  <p className="text-white-50 mb-0">Modern Data Management</p>
                </div>
              </div>
              <Button 
                variant="light" 
                size="lg" 
                onClick={handleShow}
                className="d-flex align-items-center gap-2 shadow-lg border-0"
                style={{ borderRadius: '12px' }}
              >
                <FaPlus size={16} />
                Add New Item
              </Button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="row mb-4">
          <div className="col-12">
            <div className="position-relative">
              <FaSearch className="position-absolute top-50 start-0 translate-middle-y ms-3 text-muted" />
              <input
                type="text"
                className="form-control form-control-lg ps-5"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ 
                  borderRadius: '12px',
                  border: 'none',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
              />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          <div className="col-12">
            <div className="bg-white rounded-4 shadow-lg p-4" style={{ borderRadius: '20px' }}>
              <div className="d-flex justify-content-between align-items-center mb-4">
                <h4 className="mb-0 fw-bold text-dark">Items List</h4>
                <span className="badge bg-primary fs-6 px-3 py-2">
                  {filteredItems.length} items
                </span>
              </div>
              
              {filteredItems.length === 0 ? (
                <div className="text-center py-5">
                  <FaBook size={48} className="text-muted mb-3" />
                  <h5 className="text-muted">No items found</h5>
                  <p className="text-muted">Try adjusting your search terms</p>
                </div>
              ) : (
                <div className="table-responsive">
                  <Table className="table-hover mb-0">
                    <thead>
                      <tr className="border-0">
                        <th className="border-0 bg-light rounded-start" style={{ width: '60px' }}>
                          <FaBook className="text-primary" />
                        </th>
                        <th className="border-0 bg-light fw-semibold">Title</th>
                        <th className="border-0 bg-light fw-semibold">Description</th>
                        <th className="border-0 bg-light rounded-end text-center" style={{ width: '120px' }}>
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredItems.map((item, index) => (
                        <tr key={item.id} className="border-bottom">
                          <td className="align-middle">
                            <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center" 
                                 style={{ width: '40px', height: '40px' }}>
                              <FaBook className="text-primary" size={16} />
                            </div>
                          </td>
                          <td className="align-middle">
                            <div>
                              <h6 className="mb-0 fw-semibold">{item.title}</h6>
                              <small className="text-muted">ID: {item.id}</small>
                            </div>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0 text-muted" style={{ maxWidth: '300px' }}>
                              {item.description}
                            </p>
                          </td>
                          <td className="align-middle text-center">
                            <div className="d-flex gap-2 justify-content-center">
                              <Button 
                                variant="outline-primary" 
                                size="sm" 
                                onClick={() => handleEdit(index)}
                                className="border-0 bg-primary bg-opacity-10 text-primary"
                                style={{ borderRadius: '8px' }}
                              >
                                <FaEdit size={14} />
                              </Button>
                              <Button 
                                variant="outline-danger" 
                                size="sm" 
                                onClick={() => handleDelete(index)}
                                className="border-0 bg-danger bg-opacity-10 text-danger"
                                style={{ borderRadius: '8px' }}
                              >
                                <FaTrash size={14} />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header 
          closeButton 
          className="border-0 pb-0"
          style={{ borderRadius: '20px 20px 0 0' }}
        >
          <Modal.Title className="fw-bold">
            {editIndex !== null ? "Edit Item" : "Add New Item"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="pt-0">
          <Form>
            <Form.Group className="mb-4">
              <Form.Label className="fw-semibold mb-2">Title</Form.Label>
              <Form.Control 
                type="text" 
                name="title" 
                value={form.title} 
                onChange={handleChange}
                placeholder="Enter item title..."
                className="border-0 bg-light"
                style={{ borderRadius: '12px', padding: '12px 16px' }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="fw-semibold mb-2">Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3}
                name="description" 
                value={form.description} 
                onChange={handleChange}
                placeholder="Enter item description..."
                className="border-0 bg-light"
                style={{ borderRadius: '12px', padding: '12px 16px' }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 pt-0">
          <Button 
            variant="light" 
            onClick={handleClose}
            className="border-0"
            style={{ borderRadius: '12px' }}
          >
            Cancel
          </Button>
          <Button 
            variant="primary" 
            onClick={handleSave}
            className="border-0 px-4"
            style={{ borderRadius: '12px' }}
          >
            {editIndex !== null ? "Update" : "Create"}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;