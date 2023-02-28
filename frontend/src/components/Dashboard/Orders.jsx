import * as React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import { Link } from 'react-router-dom';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/actions/index';
// import {
//   getProductsFetch,
//   deleteProductStart,
// } from '../../redux/features/auth/appState';

export default function Orders() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  const handdleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      // dispatch(deleteProductStart(id));
    }
    console.log(id);
  };

  return (
    <React.Fragment>
      {!isLoading && <Title>Recent Orders</Title>}
      {isLoading && <Title>Loading...</Title>}
      {!isLoading && error ? <Title>Error: {error}</Title> : null}
      <Table size="small">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f0f0f0', fontWeight: 'bold' }}>
            <TableCell sx={{ fontWeight: 'bold' }}>Id</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Name</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Category</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Pricing</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Quantity</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">
              Preview
            </TableCell>
            <TableCell sx={{ fontWeight: 'bold' }} align="center">
              Delete
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading && products.length
            ? products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.name}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell align="center">
                    <Link to={`/product/${product.id}`}>
                      <Tooltip title="Preview product">
                        <RemoveRedEyeOutlinedIcon cursor="pointer" />
                      </Tooltip>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Delete product">
                      <DeleteForeverOutlinedIcon
                        cursor="pointer"
                        onClick={() => {
                          handdleDeleteProduct(product.id);
                        }}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
