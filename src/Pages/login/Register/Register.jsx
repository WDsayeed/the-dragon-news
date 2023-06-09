import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';

const Register = () => {
  const {createUser} =  useContext(AuthContext)
  const [accept, setAccept] = useState(false)

  const handleRegister = event=>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value 
    const photo = form.photo.value
    const password = form.password.value 
    console.log(name, email, photo, password)
    createUser(email, password)
    .then(result=>{
      const createdUser = result.user 
      console.log(createdUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }

  const handleTerms = event =>{
    setAccept(event.target.checked)
  }
        return (
                <Container>
                <Form className="w-25 mx-auto" onSubmit={handleRegister}>
                <h2>Please Register</h2>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Your name" required/>
                  </Form.Group>
          
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name="photo" placeholder="photo url" required/>
                  </Form.Group>
          
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" required/>
                  </Form.Group>
          
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required/>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                    onClick={handleTerms}
                    type="checkbox" 
                    name="accept" 
                    label= {<>Accept <Link to="/terms">Terms and Conditions</Link></>}/>
                  </Form.Group>
                  <Button variant="primary" disabled={!accept} type="submit">
                    Register
                  </Button>
                  <br />
                  <Form.Text className="text-gray">
                     Already have an Account? <Link to="/login">Login</Link>
                    </Form.Text>
                  <Form.Text className="text-success">
                     
                    </Form.Text>
                  <Form.Text className="text-danger">
                     
                    </Form.Text>
                </Form>
              </Container>
        );
};

export default Register;