
import AuthForm from '../components/AuthForm';
import { login } from '../service/api';

const LoginPage = () => {
  const handleLogin = async (formData) => {
    try {
      const response = await login(formData);
      alert('Login successful! Token: ' + response.data.token);
    } catch (error) {
      alert('Error: ' + error.response?.data?.message || 'Invalid credentials');
    }
  };

  return <AuthForm title="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
