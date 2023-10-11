import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/MenuRounded';
import { Link } from "react-router-dom";


export default function MobileNav() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{ color: 'white' }} fontSize='large' />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}><Link className='hamburger-link' to={"/artist-profile"}>Exhibits</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='hamburger-link' to={"/about"}>About Us</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='hamburger-link' to={"/store"}>Store</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className='hamburger-link' to={"/cart"}>Cart</Link></MenuItem>

      </Menu>
    </div>
  );
}