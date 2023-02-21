import React, { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import axios from 'axios';
import Title from '../components/Dashboard/Title';
import { useNavigate } from 'react-router-dom';
import { addProductStart } from '../redux/features/auth/appState';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';

const Form = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

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

  const handleSubmit = (formData) => {
    dispatch(addProductStart(formData));
    navigate('/dashboard');
  };

  // const handleSubmit = async (formData) => {
  //   console.log(formData);
  //   try {
  //     const response = await axios.post(
  //       'http://localhost:3001/products',
  //       formData
  //     );
  //     navigate('/dashboard', { replace: true });
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box>
      <Box sx={{ margin: '2rem' }} align="center">
        <Title>Add Product</Title>
      </Box>

      <Box
        component="form"
        align="center"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(formData);
        }}
      >
        <Box align="center">
          <TextField
            sx={{ margin: '1rem' }}
            label="Product Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: '1rem' }}
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
          <TextField
            sx={{ margin: '1rem' }}
            label="Price"
            name="price"
            value={formData.price}
            onChange={handleChange}
            error={!!error.price}
            helperText={error.price}
          />
          <TextField
            sx={{ margin: '1rem' }}
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
      </Box>
    </Box>
  );
};

export default Form;
