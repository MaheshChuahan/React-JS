import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOption, setSortOption] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(data);
  }, []);

  const handleDelete = id => {
    const filtered = users.filter(user => user.id !== id);
    localStorage.setItem('users', JSON.stringify(filtered));
    setUsers(filtered);
  };

  const handleSearch = e => setSearchTerm(e.target.value.toLowerCase());
  const handleStatusChange = e => setStatusFilter(e.target.value);
  const handleSortChange = e => setSortOption(e.target.value);

  const getFilteredAndSortedUsers = () => {
    let filtered = [...users];

    if (searchTerm) {
      filtered = filtered.filter(user =>
        user.name.toLowerCase().includes(searchTerm) ||
        user.email.toLowerCase().includes(searchTerm)
      );
    }

    if (statusFilter) {
      filtered = filtered.filter(user => user.status === statusFilter);
    }

    if (sortOption === 'name-asc') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      filtered.sort((a, b) => b.name.localeCompare(a.name));
    }

    return filtered;
  };

  const displayedUsers = getFilteredAndSortedUsers();

  return (
    <div className="container-fluid py-4" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-xl-11">
          <div className="card shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <div className="card-header bg-white border-0 py-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="row align-items-center">
                <div className="col-md-6">
                  <h3 className="text-white mb-0 fw-bold">
                    <i className="fas fa-users me-2"></i>
                    User Management Dashboard
                  </h3>
                  <p className="text-white-50 mb-0 mt-1">Manage and organize your user data efficiently</p>
                </div>
                <div className="col-md-6 text-md-end">
                  <button 
                    className="btn btn-light btn-lg px-4 py-2 fw-semibold"
                    onClick={() => navigate('/add')}
                    style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                  >
                    <i className="fas fa-plus me-2"></i>
                    Add New User
                  </button>
                </div>
              </div>
            </div>

            <div className="card-body p-4">
              {/* Filters Section */}
              <div className="row g-3 mb-4">
                <div className="col-md-3">
                  <div className="position-relative">
                    <i className="fas fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="form-control form-control-lg ps-5"
                      value={searchTerm}
                      onChange={handleSearch}
                      style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                    />
                  </div>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select form-select-lg"
                    value={statusFilter}
                    onChange={handleStatusChange}
                    style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                  >
                    <option value="">All Status</option>
                    <option value="active">Active</option>
                    <option value="unactive">Inactive</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <select
                    className="form-select form-select-lg"
                    value={sortOption}
                    onChange={handleSortChange}
                    style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                  >
                    <option value="">Sort by Name</option>
                    <option value="name-asc">A → Z</option>
                    <option value="name-desc">Z → A</option>
                  </select>
                </div>
                <div className="col-md-3">
                  <div className="d-flex align-items-center h-100">
                    <span className="badge bg-primary fs-6 px-3 py-2" style={{ borderRadius: '10px' }}>
                      <i className="fas fa-users me-1"></i>
                      {displayedUsers.length} Users
                    </span>
                  </div>
                </div>
              </div>

              {/* Table Section */}
              <div className="table-responsive">
                <table className="table table-hover mb-0" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                  <thead style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
                    <tr>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">#</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Name</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Email</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Gender</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Courses</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Date</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold">Status</th>
                      <th className="text-white border-0 py-3 px-4 fw-semibold text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {displayedUsers.length === 0 ? (
                      <tr>
                        <td colSpan="8" className="text-center py-5">
                          <div className="text-muted">
                            <i className="fas fa-inbox fa-3x mb-3"></i>
                            <h5>No users found</h5>
                            <p>Try adjusting your search or filters</p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      displayedUsers.map((u, i) => (
                        <tr key={u.id} style={{ borderBottom: '1px solid #f8f9fa' }}>
                          <td className="px-4 py-3 fw-bold text-primary">{i + 1}</td>
                          <td className="px-4 py-3">
                            <div className="d-flex align-items-center">
                              <div className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-3" 
                                   style={{ width: '40px', height: '40px' }}>
                                <span className="text-white fw-bold">{u.name.charAt(0).toUpperCase()}</span>
                              </div>
                              <span className="fw-semibold">{u.name}</span>
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-muted">{u.email}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`badge ${u.gender === 'male' ? 'bg-info' : 'bg-warning'} px-3 py-2`} 
                                  style={{ borderRadius: '8px' }}>
                              <i className={`fas fa-${u.gender === 'male' ? 'mars' : 'venus'} me-1`}></i>
                              {u.gender}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            <div className="d-flex flex-wrap gap-1">
                              {u.courses.slice(0, 2).map((course, idx) => (
                                <span key={idx} className="badge bg-light text-dark px-2 py-1" 
                                      style={{ borderRadius: '6px', fontSize: '0.75rem' }}>
                                  {course}
                                </span>
                              ))}
                              {u.courses.length > 2 && (
                                <span className="badge bg-secondary px-2 py-1" 
                                      style={{ borderRadius: '6px', fontSize: '0.75rem' }}>
                                  +{u.courses.length - 2}
                                </span>
                              )}
                            </div>
                          </td>
                          <td className="px-4 py-3">
                            <span className="text-muted">{u.date}</span>
                          </td>
                          <td className="px-4 py-3">
                            <span className={`badge ${u.status === 'active' ? 'bg-success' : 'bg-secondary'} px-3 py-2`} 
                                  style={{ borderRadius: '8px' }}>
                              <i className={`fas fa-${u.status === 'active' ? 'check-circle' : 'times-circle'} me-1`}></i>
                              {u.status}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <div className="d-flex justify-content-center gap-2">
                              <button 
                                className="btn btn-outline-primary btn-sm px-3 py-2"
                                onClick={() => navigate(`/edit/${u.id}`)}
                                style={{ borderRadius: '8px' }}
                              >
                                <i className="fas fa-edit me-1"></i>
                                Edit
                              </button>
                              <button 
                                className="btn btn-outline-danger btn-sm px-3 py-2"
                                onClick={() => handleDelete(u.id)}
                                style={{ borderRadius: '8px' }}
                              >
                                <i className="fas fa-trash me-1"></i>
                                Delete
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserList;