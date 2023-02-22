import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import UserDashboard from './components/Dashboard/UserDashboard';
import Sidebar from './components/Sidebar/Sidebar';
import AddProduct from './pages/AddProduct';
import Product from './pages/Product';
import axios from 'axios';
import Login from './pages/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginStatusStart } from './redux/features/auth/appState';

axios.defaults.withCredentials = true;

function App() {
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loginStatusStart());
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {!isLoggedIn && (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </>
          )}
          {isLoggedIn && (
            <>
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
            </>
          )}
          <Route path="/*" element={<Home to="/" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
