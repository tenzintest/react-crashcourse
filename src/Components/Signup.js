import React, {useRef} from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

const Signup = () => {

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();


  return (
    <Container
        className='d-flex align-items-center
        justify-content-center'
        style={{ minHeight: "100vh" }}>
        <div className='w-100' style={{ maxWidth: "400px"}}>
            <Card>
                <Card.Body>
                    <h2 className='text-center mb-3'>Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef} required />
                        </Form.Group>
                        <Button type="submit" 
                            className='w-100'
                            >
                                Sign Up
                            </Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already have an account ? Log In
            </div>
        </div>
    </Container>
  )
}

export default Signup