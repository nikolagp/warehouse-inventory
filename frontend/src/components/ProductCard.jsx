import React from 'react';
import { TableRow, TableCell, Button, Table } from '@mui/material';

const ProductCard = (props) => {
  const product = props.product;
  return (
    <Table>
      <tbody>
        <TableRow className="table-row">
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.category}</TableCell>
          <TableCell>${product.price}</TableCell>
          <TableCell>{product.quantity}</TableCell>
          <TableCell>
            <Button>Edit</Button>
          </TableCell>
          <TableCell>
            <Button>Delete</Button>
          </TableCell>
        </TableRow>
      </tbody>
    </Table>
  );
};

export default ProductCard;
