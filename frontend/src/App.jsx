import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import Register from './components/Register';
import UserDashboard from './components/Dashboard/UserDashboard';
import Sidebar from './components/Sidebar/Sidebar';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/product/:id"
            element={
              <Sidebar>
                <Product />
              </Sidebar>
            }
          />

          <Route
            path="/dashboard"
            element={
              <Sidebar>
                <UserDashboard />
              </Sidebar>
            }
          />
          <Route
            path="/addproduct"
            element={
              <Sidebar>
                <AddProduct />
              </Sidebar>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
