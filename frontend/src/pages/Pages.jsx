import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import AddProduct from './AddProduct';
import Product from './Product';
import LogInForm from '../components/LogInForm';
import Register from '../components/Register';
import Homepage from './Homepage';

function Pages() {
  return (
    <div className="pages">
      <Routes>
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/login" element={<LogInForm />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default Pages;
