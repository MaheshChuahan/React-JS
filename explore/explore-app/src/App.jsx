import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const data = [
  {
    grid: 1,
    name: "kishan",
    email: "kishan@gmail.com",
    password: "kishan@123",
    course: ["html", "css", "bootstrap", "js"],
    city: "surat",
  },
  {
    grid: 2,
    name: "jay",
    email: "jay@gmail.com",
    password: "kishan@123",
    course: ["photoshop", "figma", "illustrator", "adobe xd"],
    city: "rajkot",
  },
  {
    grid: 3,
    name: "ajay",
    email: "ajay@gmail.com",
    password: "ajay@123",
    course: ["html", "css", "bootstrap", "nodejs"],
    city: "amareli",
  },
  {
    grid: 4,
    name: "nisha",
    email: "nisha@gmail.com",
    password: "nisha@123",
    course: ["html", "css", "bootstrap", "python"],
    city: "vadodara",
  },
];

const UserTable = () => {
  return (
    <div className="container mt-5">
      <h2 className="mb-4">User Information</h2>
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Courses</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.grid}>
                <td>{user.grid}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                <td>{user.course.join(", ")}</td>
                <td>{user.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserTable;

      