import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
          <AppBar color='inherit'>
              <Toolbar>
                  <Typography variant="h6">Home</Typography>&nbsp;&nbsp;&nbsp;&nbsp;
                  <Link to='/login'>
                      <Button variant="contained" color='success'>Login</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/signup'>
                      <Button variant="contained" color='success'>SignUp</Button>
                  </Link>&nbsp;&nbsp;&nbsp;
                  <Link to='/librarytable'>
                      <Button variant="contained" color='success'>book Details</Button>
                  </Link>
              </Toolbar>
          </AppBar>
    </div>
  )
}

export default Navbar
