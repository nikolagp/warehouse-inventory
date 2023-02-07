import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

function App() {
  const [listOfProducts, setListOfProducts] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3001/products').then((response) => {
      setListOfProducts(response.data);
    });
  }, [listOfProducts]);

  return (
    <div className="App">
      {listOfProducts.map((product, key) => {
        return <ProductCard key={key} product={product} />;
      })}
    </div>
  );
}

export default App;
