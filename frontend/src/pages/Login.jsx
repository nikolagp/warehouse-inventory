import * as React from 'react';
import { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { SET_LOGIN, SET_NAME } from '../redux/features/auth/authSlice';
import {
  setLogin,
  setName,
  registerUsers,
  loginUserStart,
} from '../redux/features/auth/appState';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const theme = createTheme();

export default function Login() {
  const initialValues = {
    username: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialValues);
  const { username, password } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [name, setName] = useState('');

  const login = (e) => {
    e.preventDefault();
    const formData = { username: username, password: password };
    dispatch(loginUserStart(formData));
    navigate('/dashboard');
    dispatch(setName(username));
    console.log(formData.username);
  };

  // const login = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = { username: username, password: password };
  //     axios.post('http://localhost:3001/auth/login', data).then((response) => {
  //       if (response.data.error) {
  //         alert(response.data.error);
  //       } else {
  //         localStorage.setItem('accessToken', response.data.accessToken);
  //         localStorage.setItem('name', response.data.name);
  //         // setName(response.data.name);
  //       }
  //     });
  //     // await dispatch(SET_LOGIN(true));
  //     // await dispatch(SET_NAME(username));
  //     navigate('/dashboard');
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const login = (e) => {
  //   e.preventDefault();
  //   try {
  //     const data = { username: username, password: password };
  //     axios.post('http://localhost:3001/auth/login', data).then((response) => {
  //       if (response.data.error) {
  //         alert(response.data.error);
  //       } else {
  //         localStorage.setItem('accessToken', response.data.token);
  //         dispatch(setLogin(true));
  //         navigate('/dashboard');
  //       }
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  //   // return;
  // };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/images/login-img.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light'
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }} onSubmit={login}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Username"
                name="username"
                autoComplete="name"
                autoFocus
                value={formData.username}
                onChange={handleChange}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={formData.password}
                onChange={handleChange}
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
