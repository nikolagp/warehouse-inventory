import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LogInForm() {
  // let navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const handleSubmit = async (formData) => {
    console.log(formData);
    // try {
    //   const response = await axios.post(
    //     'http://localhost:3001/products',
    //     formData
    //   );
    //   navigate('/dashboard', { replace: true });
    //   console.log(response);
    // } catch (error) {
    //   console.error(error);
    // }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <h1>Login</h1>
      <Paper>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(formData);
          }}
        >
          <div>
            <TextField
              label="Username"
              name="username"
              value={formData.name}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <Button className="submit-button" type="submit">
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
}

export default LogInForm;
