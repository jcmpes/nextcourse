import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../src/store/actions/login';
import LoginForm from '../src/components/auth/LoginPage/LoginForm';
import Layout from '../src/components/layout/Layout';
import { useRouter } from 'next/router';

function LoginPage() {
  const history = useRouter();
  const location = useRouter();
  const dispatch = useDispatch();

  const handleSubmit = (credentials) => {
    dispatch(loginAction(credentials, history, location));
  };

  return (
    <>
      <h1>Login</h1>
      <LoginForm onSubmit={handleSubmit} />
    </>      
 );
}

export default LoginPage;
