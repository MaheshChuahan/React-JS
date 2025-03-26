import React, { useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DynamicTable() {
  const [rows, setRows] = useState([
    { id: 1, name: "Mahesh", email: "mahesh@gmail.com", salary: "10,000" },
    { id: 2, name: "Dabhi jenil", email: "jenil@gmail.com", salary: "23,000" },
    { id: 3, name: "Dabhi karan", email: "karan@gmail.com", salary: "11,000" },
  ]);

  const handleChange = (id, field, value) => {
    setRows(
      rows.map((row) => (row.id === id ? { ...row, [field]: value } : row))
    );
  };

  const addRow = () => {
    setRows([...rows, { id: Date.now(), name: "", email: "", salary: "" }]);
  };

  const deleteRow = (id) => {
    if (rows.length > 2) {
      setRows(rows.filter((row) => row.id !== id));
    } else {
      alert("At least two rows should be present.");
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 text-primary">React - Add & Remove Rows</h2>
      <table className="table table-bordered text-center table-hover">
        <thead className="bg-primary text-white">
          <tr>
            <th>Full Name</th>
            <th>Email Address</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? "table-info" : "table-success"}>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.name}
                  onChange={(e) => handleChange(row.id, "name", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  value={row.email}
                  onChange={(e) => handleChange(row.id, "email", e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control"
                  value={row.salary}
                  onChange={(e) => handleChange(row.id, "salary", e.target.value)}
                />
              </td>
              <td>
                <button className="btn btn-danger" onClick={() => deleteRow(row.id)}>
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center">
        <button className="btn btn-success" onClick={addRow}>Add Row</button>
      </div>
    </div>
  );
}
