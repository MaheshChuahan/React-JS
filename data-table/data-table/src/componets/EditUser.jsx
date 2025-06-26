import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem('users')) || [];
    const existing = all.find(u => u.id === parseInt(id));
    if (existing) setUser(existing);
  }, [id]);

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setUser(prev => ({
        ...prev,
        courses: checked
          ? [...prev.courses, value]
          : prev.courses.filter(c => c !== value)
      }));
    } else {
      setUser(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const all = JSON.parse(localStorage.getItem('users')) || [];
    const updated = all.map(u => (u.id === parseInt(id) ? user : u));
    localStorage.setItem('users', JSON.stringify(updated));
    navigate('/');
  };

  if (!user) return (
    <div className="container-fluid py-4" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <div className="spinner-border text-primary" role="status" style={{ width: '3rem', height: '3rem' }}>
            <span className="visually-hidden">Loading...</span>
          </div>
          <h4 className="mt-3 text-muted">Loading user data...</h4>
        </div>
      </div>
    </div>
  );

  const courseOptions = [
    'html', 'css', 'bootstrap', 'js', 'react js',
    'node js', 'php', 'angular', 'python', 'laravel'
  ];

  return (
    <div className="container-fluid py-4" style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh' }}>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-8 col-xl-6">
          <div className="card shadow-lg border-0" style={{ borderRadius: '20px', overflow: 'hidden' }}>
            <div className="card-header bg-white border-0 py-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h3 className="text-white mb-0 fw-bold">
                    <i className="fas fa-user-edit me-2"></i>
                    Edit User Profile
                  </h3>
                  <p className="text-white-50 mb-0 mt-1">Update user information and preferences</p>
                </div>
                <button 
                  className="btn btn-light btn-lg px-4 py-2 fw-semibold"
                  onClick={() => navigate('/')}
                  style={{ borderRadius: '12px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}
                >
                  <i className="fas fa-arrow-left me-2"></i>
                  Back to Dashboard
                </button>
              </div>
            </div>

            <div className="card-body p-4">
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="fas fa-user me-2 text-primary"></i>
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        name="name" 
                        value={user.name} 
                        className="form-control form-control-lg" 
                        onChange={handleChange} 
                        required 
                        style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="fas fa-envelope me-2 text-primary"></i>
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        name="email" 
                        value={user.email} 
                        className="form-control form-control-lg" 
                        onChange={handleChange} 
                        required 
                        style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                  </div>

                  {/* Gender Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="fas fa-venus-mars me-2 text-primary"></i>
                        Gender
                      </label>
                      <div className="d-flex gap-3 mt-2">
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            value="male" 
                            checked={user.gender === 'male'} 
                            onChange={handleChange} 
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <label className="form-check-label fw-semibold">
                            <i className="fas fa-mars me-1 text-info"></i>
                            Male
                          </label>
                        </div>
                        <div className="form-check">
                          <input 
                            className="form-check-input" 
                            type="radio" 
                            name="gender" 
                            value="female" 
                            checked={user.gender === 'female'} 
                            onChange={handleChange} 
                            style={{ transform: 'scale(1.2)' }}
                          />
                          <label className="form-check-label fw-semibold">
                            <i className="fas fa-venus me-1 text-warning"></i>
                            Female
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Date Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="fas fa-calendar me-2 text-primary"></i>
                        Date of Birth
                      </label>
                      <input 
                        type="date" 
                        name="date" 
                        value={user.date} 
                        className="form-control form-control-lg" 
                        onChange={handleChange} 
                        required 
                        style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                      />
                    </div>
                  </div>

                  {/* Status Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-2">
                        <i className="fas fa-toggle-on me-2 text-primary"></i>
                        Status
                      </label>
                      <select 
                        name="status" 
                        value={user.status} 
                        className="form-select form-select-lg" 
                        onChange={handleChange} 
                        required
                        style={{ borderRadius: '12px', border: '2px solid #e9ecef' }}
                      >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="unactive">Inactive</option>
                      </select>
                    </div>
                  </div>

                  {/* Courses Field */}
                  <div className="col-12">
                    <div className="form-group">
                      <label className="form-label fw-semibold text-dark mb-3">
                        <i className="fas fa-graduation-cap me-2 text-primary"></i>
                        Select Courses
                      </label>
                      <div className="row g-3">
                        {courseOptions.map(c => (
                          <div className="col-md-4 col-lg-3" key={c}>
                            <div className="form-check p-3 border rounded-3" style={{ 
                              borderRadius: '12px', 
                              border: '2px solid #e9ecef',
                              transition: 'all 0.3s ease',
                              backgroundColor: user.courses.includes(c) ? '#f8f9ff' : 'transparent',
                              borderColor: user.courses.includes(c) ? '#667eea' : '#e9ecef'
                            }}
                            onMouseOver={(e) => {
                              if (!user.courses.includes(c)) {
                                e.currentTarget.style.borderColor = '#667eea';
                                e.currentTarget.style.backgroundColor = '#f8f9ff';
                              }
                            }}
                            onMouseOut={(e) => {
                              if (!user.courses.includes(c)) {
                                e.currentTarget.style.borderColor = '#e9ecef';
                                e.currentTarget.style.backgroundColor = 'transparent';
                              }
                            }}>
                              <input
                                type="checkbox"
                                className="form-check-input me-3"
                                value={c}
                                checked={user.courses.includes(c)}
                                onChange={handleChange}
                                style={{ transform: 'scale(1.2)' }}
                              />
                              <label className="form-check-label fw-semibold text-capitalize">
                                {c}
                              </label>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="col-12">
                    <div className="d-flex justify-content-center mt-4">
                      <button 
                        type="submit" 
                        className="btn btn-success btn-lg px-5 py-3 fw-bold"
                        style={{ 
                          borderRadius: '15px', 
                          background: 'linear-gradient(135deg, #28a745 0%, #20c997 100%)',
                          border: 'none',
                          boxShadow: '0 8px 25px rgba(40, 167, 69, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 12px 35px rgba(40, 167, 69, 0.4)';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 8px 25px rgba(40, 167, 69, 0.3)';
                        }}
                      >
                        <i className="fas fa-save me-2"></i>
                        Update User Profile
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;