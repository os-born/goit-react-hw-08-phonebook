import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/form';
import Button from 'react-bootstrap/button';
import * as authOperations from '../redux/auth/operations/authOperations';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onHandleChange = e => {
    switch (e.currentTarget.name) {
      case 'email':
        setEmail(e.currentTarget.value);
        break;
      case 'password':
        setPassword(e.currentTarget.value);
        break;

      default:
        return;
    }
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Fill all fields!');
      return;
    }
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={onHandleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={email}
          onChange={onHandleChange}
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          value={password}
          onChange={onHandleChange}
          placeholder="Password"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Log in
      </Button>
    </Form>
  );
};

export default LoginPage;
