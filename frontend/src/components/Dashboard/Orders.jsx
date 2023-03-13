import * as React from 'react';
import { useEffect } from 'react';
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
import { connect } from 'react-redux';
import { getProducts, deleteProducts } from '../../redux/actions/index';

function Orders(props) {
  const { products, isLoading, error, getProducts, deleteProducts } = props;

  useEffect(() => {
    getProducts();
  }, []);

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete')) {
      deleteProducts(id);
    }
  };

  return (
    <>
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
          {!isLoading && products && products.length
            ? products.map((product, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
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
                          handleDeleteProduct(product.id);
                        }}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </>
  );
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  isLoading: state.products.loading,
  error: state.products.error,
});

const mapDispatchToProps = (dispatch) => ({
  getProducts: () => dispatch(getProducts()),
  deleteProducts: (id) => dispatch(deleteProducts(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
