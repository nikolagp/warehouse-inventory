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
<<<<<<< HEAD
import { useDispatch, useSelector } from 'react-redux';
import {
  getProductsFetch,
  deleteProduct,
} from '../../redux/features/auth/authSlice';
=======
>>>>>>> parent of 1606f48 (installed redux-saga and fetched products)

export default function Orders() {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setListOfProducts(response.data);
    });
  }, []);

<<<<<<< HEAD
  const handdleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
    console.log(id);
=======
  const deleteProduct = (id) => {
    axios.delete(`http://localhost:3001/products/${id}`).then((response) => {
      alert('Are you sure you want to delete');
      setListOfProducts(listOfProducts.filter((product) => product.id !== id));
    });
>>>>>>> parent of 1606f48 (installed redux-saga and fetched products)
  };

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
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
          {listOfProducts.map((product) => (
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
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
