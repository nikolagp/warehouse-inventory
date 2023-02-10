import React, { useState } from 'react';
import { Button, TextField, Paper, Box } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  const handleSubmit = async (formData) => {
    console.log(formData);
    try {
      const response = await axios.post(
        'http://localhost:3001/products',
        formData
      );
      navigate('/dashboard', { replace: true });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <h2>Add Product</h2>

      <form
        align="center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <div align="center">
          <TextField
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>
        <Button className="submit-button" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
