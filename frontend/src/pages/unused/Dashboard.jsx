import React from 'react';
// import ProductCard from '../components/unused/ProductCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import NavBar from '../components/NavBar';
import UserDashboard from '../../components/Dashboard/UserDashboard';

// import { Link } from 'react-router-dom';

function Dashboard() {
  const [listOfProducts, setListOfProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setListOfProducts(response.data);
    });
  }, [listOfProducts]);

  return (
    <div>
      {/* <NavBar /> */}

      <UserDashboard />

      {/* {listOfProducts.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })} */}
    </div>
  );
}

export default Dashboard;
