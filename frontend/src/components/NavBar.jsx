import React from 'react';
import { AppBar, Toolbar, Stack, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <AppBar>
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <NavLink to="/">
            <Button color="inherit">Home</Button>
          </NavLink>
          <NavLink to="/dashboard">
            <Button color="inherit">Dashboard</Button>
          </NavLink>
          <NavLink to="/addproduct">
            <Button color="inherit">Add Product</Button>
          </NavLink>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
