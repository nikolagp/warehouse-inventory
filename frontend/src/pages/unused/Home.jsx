import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="homePage">
      <ul>
        <Button>
          <li>
            <Link to="/register"> Register</Link>
          </li>
        </Button>
        <li>
          <Button>
            <Link to="/login">Login</Link>
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
