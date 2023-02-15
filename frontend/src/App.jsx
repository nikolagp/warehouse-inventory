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

// axios.defaults.withCredentials = true;

function App() {
  const [authState, setAuthState] = useState({
    username: '',
    id: 0,
    status: null,
  });

  useEffect(() => {
    axios
      .get('http://localhost:3001/auth/jwt', {
        headers: {
          accessToken: localStorage.getItem('accessToken'),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            username: response.data.username,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, []);

  const logout = () => {
    localStorage.removeItem('accessToken');
    setAuthState({ ...authState, status: false });
  };
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
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/dashboard"
              element={
                <Sidebar username={authState.username} logout={logout}>
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
        </AuthContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
