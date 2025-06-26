import React from 'react'
 import React, { useEffect, useState } from 'react'
 import { Form, Button } from 'react-bootstrap';
 import { useLocation, useNavigate } from 'react-router-dom';
 
 export default function EditUser() {
     const location = useLocation();
     const user = location.state;
     const navigate = useNavigate();
     const [edit, setEdit] = useState({ username: "", email: "", password: "" });
 
     useEffect(() => {
         if (user == null) {
             navigate('/');
         } else {
             setEdit({
                 username: user.username,
                 email: user.email,
                 password: user.password,
             })
         }
     }, [])
 
     const handleUpdate = (e) => {
         e.preventDefault();
 
         console.log("Update is called.....");
 
         let usersData = JSON.parse(localStorage.getItem('users')) ?? [];
 
         console.log(usersData);
 
         // usersData[user.index] = edit;
 
         // console.log(usersData);
 
         console.log(edit);
 
         const editData = usersData.map((data, index) =>
             (index == user.index) ? edit : data
         )
 
         console.log("Edit ", editData);
 
 
         localStorage.setItem('users', JSON.stringify(editData));
 
         navigate('/');
 
     }
     return (
         <div>
             <h1 align='center'>Edit User Page</h1>
             <h1 align='center' className='mt-5'>Edit User Page </h1>
 
             <div className='d-flex justify-content-center mt-5'>
                 <div className='col-4'>
                     <Form onSubmit={handleUpdate}>
                         <Form.Group className="mb-3" controlId="formBasicUsername">
                             <Form.Label>User Name</Form.Label>
                             <Form.Control type="text" value={edit.username} onChange={(event) => setEdit({ ...edit, username: event.target.value })
                             } placeholder="Enter your username" />
                         </Form.Group>
 
                         <Form.Group className="mb-3" controlId="formBasicEmail">
                             <Form.Label>Email address</Form.Label>
                             <Form.Control type="email" value={edit.email} onChange={(event) => setEdit({ ...edit, email: event.target.value })} placeholder="Enter your email" />
                         </Form.Group>
 
                         <Form.Group className="mb-3" controlId="formBasicPassword">
                             <Form.Label>Password</Form.Label>
                             <Form.Control type="password" value={edit.password} onChange={(event) => setEdit({ ...edit, password: event.target.value })} placeholder="Enter your password" />
                         </Form.Group>
 
                         <Button variant="warning" type="submit">
                             Edit
                         </Button>
                     </Form>
 
 
                     {/* <h1>UserName : {form.username}</h1> */}
                 </div>
             </div>
         </div>
     )
 }
