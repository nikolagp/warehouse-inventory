import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import AddProduct from ./unused/Dashboardct';
import Product from '../Product';
// import LogInForm from '../components/unused/LogInForm';
import Register from '../components/Register';
import Homepage from './Homepage';
import AddProduct from '../AddProduct';
import UserDashboard from '../../components/Dashboard/UserDashboard';
import Login from '../Login';

function Pages() {
  return (
    <div className="pages">
      <Routes>
        {/* <Route path="/home" element={<Homepage />} /> */}
        <Route path="/" element={<Homepage />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/product/:id" element={<Product />} />
        {/* <Route path="/login" element={<LogInForm />} /> */}
        {/* <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} /> */}
      </Routes>
    </div>
  );
}

export default Pages;
