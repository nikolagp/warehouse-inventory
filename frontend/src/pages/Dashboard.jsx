import React from 'react';
import ProductCard from '../components/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';

function Dashboard() {
  const [listOfProducts, setListOfProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setListOfProducts(response.data);
    });
  }, [listOfProducts]);

  return (
    <div>
      <h1>Inventory</h1>
      {listOfProducts.map((product, key) => {
        return <ProductCard key={key} product={product} />;
      })}
    </div>
  );
}

export default Dashboard;
