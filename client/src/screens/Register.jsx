import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../actions/userAction'
import Error from '../compnents/Error'
import Loader from '../compnents/Loader'
import Success from '../compnents/Success'


const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const registerState = useSelector(state => state.registerUserReducer)
  const { error, success, loading } = registerState

  const dispatch = useDispatch()

  const registerhandler = () => {
    if (password !== confirmPassword) {
      alert('password do not match')
    } else {
      const user = { name, email, password, confirmPassword }
      dispatch(registerUser(user))
    }
  };
  return (
    <>
      <Container>
      {loading && <Loader/>}
      {success && <Success success="User Register successfully"/>}
      {error && <Error error="Something went wrong"/>}
        <Form>
          <h1>Registration </h1>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={e => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={e => setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={e => setPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button
            variant="primary"
            onClick={registerhandler}>
            Register
          </Button>
        </Form>
      </Container>
    </>
  )
}

export default Register