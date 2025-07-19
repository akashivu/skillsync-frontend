

import { useState } from "react";
const AuthForm = ({ title, onSubmit }) => {
  const [form, setForm] = useState({ username: '', email: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <div className=" flex flex-col item-center bg-cyan-500">
      <h2>{title}</h2>
      <form onSubmit={handleSubmit}>
        {title === 'Register' && (
          <>
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          </>
        )}
        {title === 'Login' && (
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        )}
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">{title}</button>
      </form>
    </div>
  );
};

export default AuthForm;
