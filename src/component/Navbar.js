import React ,{useState} from 'react'
import Logo from '../assets/el.png';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import {Menu, MenuItem } from '@mui/material';
//import Tooltip from '@mui/material/Tooltip';
import ko from '../assets/ko.png.png';
function Navbar() {
  const [openLinks,setOpenLinks] =useState(false);
  // const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  const [anchorEl, setAnchorEl] = useState(null);

  const handleAvatarClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };
  return (
    <div className='navbar'>
      <div className='leftSide' id={openLinks ? "open" : "close"}>
          <img src={Logo} />
          <div className='hiddenLinks'>
             <Link to="/">Home</Link>
             <Link to="/menu">Menu</Link>
             <Link to="/about">About</Link>
             <Link to="/contact">Contact</Link>
          </div>
          
      </div>
      <div className='rightSide'>
        <Link to="/">Home</Link>
        <Link to="/menu">Menu</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
        
      </div>
      <IconButton  sx={{ p: 0 ,marginRight: '100px'}} onClick={handleAvatarClick} >
                <Avatar alt="Remy Sharp" src={ko} sx={{ width: 50, height: 50 }}/>
      </IconButton>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Dashboard</MenuItem>
        <MenuItem onClick={handleClose}>Bounties in Progress</MenuItem>
        <MenuItem onClick={handleClose}>Created by me </MenuItem>
        
      </Menu>
    </div>
  )
}

export default Navbar
