import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
