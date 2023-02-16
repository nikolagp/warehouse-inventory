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
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

export default function Orders() {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setListOfProducts(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Title>Recent Orders</Title>
      <Table size="small">
        <TableHead>
          <TableRow sx={{ fontWeight: 'medium' }}>
            <TableCell>Id</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Pricing</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell align="center">Preview</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
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
                  <RemoveRedEyeOutlinedIcon />
                </Link>
              </TableCell>
              <TableCell align="center">
                <BorderColorOutlinedIcon />
              </TableCell>
              <TableCell align="center">
                <DeleteForeverOutlinedIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
