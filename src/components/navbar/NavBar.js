import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, Typography, Button, InputBase, Box, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
// import { Icon } from 'react-icons-kit'
// import {bookmark} from 'react-icons-kit/fa/bookmark'
import {  NavLink, useNavigate } from 'react-router-dom';
import '../../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { auth } from '../firebase/config';
import { signOut } from 'firebase/auth';
import { toast, ToastContainer } from 'react-toastify';
import { isLoggedIn } from '../redux/slices/LoginSlice';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const NavBar = () => {

  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch()
   const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const authenticated = useSelector((state)=> state.authentication.user)
  // console.log("authenticated", authenticated);

  const logoutUser = () => {
    console.log('logged out');
    signOut(auth).then(() => {
      // Sign-out successful.
      dispatch(isLoggedIn(false))
      toast.success("LoggedOut Successfully")
     
    }).catch((error) => {
      // An error happened.
      toast.error(error.message)
    });
  }

  const HandleLoginBtn = () => {
    // dispatch(isLoggedIn(true))
   navigate('/signin')

  }
  

  const select = useSelector((state) => state.watchList.watchListMovies)

  return (
    <>
    <ToastContainer position="top-center"/>
    <AppBar sx={{backgroundColor:'#1D1D1D',}} position="fixed" className='appBar'>
      <Toolbar>
      <NavLink to='/'>
        <img src="https://m.media-amazon.com/images/G/01/IMDb/BG_rectangle._CB1509060989_SY230_SX307_AL_.png" alt="IMDb" height='50px' style={{paddingRight:'10px'}} className="logo" />
        </NavLink>

        <IconButton
          edge="start"
          className='menuButton'
          color="inherit"
          aria-label="menu"
          onClick={handleClick}
        >
          <MenuIcon />
          <div className='menutext'>Menu</div>
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          
        >

          <NavLink to='/watchlist' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Watchlist
          <FavoriteBorderOutlinedIcon sx={{marginLeft:'10px'}} className='whishicon' />
          </MenuItem>
          </NavLink>

          <NavLink to='/popularmovies' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Popular Movies</MenuItem>
          </NavLink>

          <NavLink to='/populartvshows' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Popular Tv Shows</MenuItem>
          </NavLink>

          <NavLink to='/trending' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Trending</MenuItem>
          </NavLink>

          <MenuItem onClick={handleClose}  className='menuItem'>Coming Soon</MenuItem>
          {/* <MenuItem onClick={handleClose}  className='menuItem'>Movie News</MenuItem> */}

          <NavLink to='/register' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Register</MenuItem>
          </NavLink>

          <NavLink to='/signin' activeClassName="active" className="nav-link">
          <MenuItem onClick={handleClose}  className='menuItem'>Sign In</MenuItem>
          </NavLink>

          {/* <MenuItem onClick={handleClose}  className='menuItem'>Logout</MenuItem> */}

        </Menu>

        <Typography sx={{ display: { xs: 'none', sm: 'block' }, }} variant="h6" noWrap className="grow">
         <b style={{fontFamily:'sans-serif',marginLeft:"10px"}}> IMDb<span style={{color:'#448EE4'}}>PRO</span></b>
        </Typography>

        <div  className='search' sx={{paddingRight:'10px'}}>  
          <div className='searchIcon'>
            <SearchIcon  sx={{ display: { xs: 'none', sm: 'block' },color:'black' }} />
          </div>
          <InputBase
            placeholder="Search…"
            // inputProps={{ 'aria-label': 'search' }}
          />
        </div>

        
       <Box sx={{display: { xs: 'none', sm: 'block' },}}>
       <NavLink to='/watchlist' activeClassName="active" className="icon-link">
        <Box sx={{marginRight:'8px', display:'flex',flexDirection:'column',alignItems:'center',padding:'10px'}}>
          {/* <div>
          
          <sup>{select.length}</sup>
          </div> */}
           <Badge badgeContent={select.length} sx={{color:'yellow'}}>
           <FavoriteBorderOutlinedIcon sx={{ display: { xs: 'none', sm: 'block' },}} className='whishicon' />
    </Badge>
          watchList
          </Box> 
          </NavLink>
          </Box>
       
        {authenticated  ?  (<Button variant="outlined" color="inherit" className='button' onClick={logoutUser}>Logout</Button>)
         :
        (<Button variant="outlined" color="inherit" onClick={HandleLoginBtn} className='button'>LogIn</Button>  )      
         }
        

      </Toolbar>
    </AppBar>
    </>
  );
};

export default NavBar;

