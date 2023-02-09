import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Home from './Home';
import AddProduct from './AddProduct';

function Pages() {
  return (
    <div className="pages">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/addproduct" element={<AddProduct />} />
      </Routes>
    </div>
  );
}

export default Pages;
