import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import img from "./logo.png";

const customColor = "#4A3AFF"

function Navbar() {
  // State for mobile menu
  const [anchorEl, setAnchorEl] = React.useState(null);
 
  
  const customButtonStyle = {
    backgroundColor: customColor,
    color: "white", // Text color
  };
  
  const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: 'white', color: 'blue'}}>
      <Toolbar>
        {isMobile ? (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>
        ) : null}
        <Typography variant="h6" style={{ flexGrow: 1, fontSize: '26px',  display: 'flex', marginLeft: '50px' }}>
        <img src={img} alt="" style={{ marginRight: '10px'}}/>
          logo
        </Typography>
        {isMobile ? null : (
          <>
            <Button  edge="start" color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">Contact</Button>
            <Button variant="outlined" color="inherit">Login</Button>
            <Button variant="contained"  style={{ customButtonStyle, color: 'white', marginLeft: '10px' }}>Get started</Button>
          </>
        )}
      </Toolbar>
      {isMobile && (
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          style={{color: 'black'}}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Resources</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
          <MenuItem variant="outlined" onClick={handleClose}>Login</MenuItem>
          <MenuItem variant="contained" onClick={handleClose}>Get started</MenuItem>
        </Menu>
      )}
    </AppBar>
  );
}

export default Navbar;