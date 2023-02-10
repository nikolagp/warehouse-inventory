import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Product(props) {
  let { id } = useParams();
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/products/byId/${id}`).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div>
      <h3>{products.name}</h3>
      <p>{products.category}</p>
      <p>{products.price}</p>
      <p>{products.quantity}</p>
    </div>
  );
}

export default Product;
