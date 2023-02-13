import React, { useState } from 'react';
import {
  Button,
  TextField,
  Paper,
  Box,
  Container,
  Typography,
} from '@mui/material';
import axios from 'axios';
import Title from '../components/Dashboard/Title';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });
  const [error, setError] = useState({
    price: '',
    quantity: '',
  });

  const handleSubmit = async (formData) => {
    // if (!Number(formData.price) || !Number(formData.quantity)) {
    //   setError({
    //     price: !Number(formData.price) ? 'Price should be a number' : '',
    //     quantity: !Number(formData.quantity)
    //       ? 'Quantity should be a number'
    //       : '',
    //   });
    // }
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
      <Title>Add Product</Title>

      <form
        align="center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <Box align="center">
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
            error={!!error.price}
            helperText={error.price}
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            error={!!error.quantity}
            helperText={error.quantity}
          />
        </Box>
        <Button
          sx={{ marginTop: '1rem' }}
          variant="contained"
          type="submit"
          disabled={
            !formData.name ||
            !formData.category ||
            !formData.price ||
            !formData.quantity
          }
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Form;
