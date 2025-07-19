
import React from 'react';
import AuthForm from '../components/AuthForm';
import { register } from '../service/api';

const RegisterPage = () => {
  const handleRegister = async (formData) => {
    try {
      const response = await register(formData);
      alert('Registration successful! Token: ' + response.data.token);
    } catch (error) {
      alert('Error: ' + error.response?.data?.message || 'Something went wrong');
    }
  };

  return <AuthForm title="Register" onSubmit={handleRegister} />;
};

export default RegisterPage;
