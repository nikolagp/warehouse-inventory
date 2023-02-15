import './App.css';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserDashboard from './components/Dashboard/UserDashboard';
import Sidebar from './components/Sidebar/Sidebar';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import { AuthContext } from './helpers/AuthContext';
import { SET_LOGIN } from './redux/features/auth/authSlice';

axios.defaults.withCredentials = true;

function App() {
  // const [authState, setAuthState] = useState({
  //   username: '',
  //   id: 0,
  //   status: null,
  // });

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth/jwt', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken);
      });
  }, []);

  // const logout = () => {
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('name');
  //   localStorage.removeItem('id');
  //   SET_LOGIN(false);
  //   // setAuthState({ ...authState, status: false });
  // };
  // if (authState.status === null) {
  //   return (
  //     <div>
  //       <h2>Loading...</h2>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      <BrowserRouter>
        {/* <ToastContainer /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
          <Route
            path="/product/:id"
            element={
              <Sidebar>
                <Product />
              </Sidebar>
            }
          />
          {/* <Route path="/*" element={<Home to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
