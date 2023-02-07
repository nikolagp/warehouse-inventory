import React, { useState } from 'react';
import { Button, TextField, Paper } from '@mui/material';
import axios from 'axios';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
  });

  const handleSubmit = (formData) => {
    axios
      .post('http://localhost:3001/products', formData)
      .then((response) => {});
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Paper>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
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
    </Paper>
  );
};

export default Form;
