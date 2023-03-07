import { Backdrop, Button,CircularProgress,FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';
import '../../App.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../firebase/config';
import {  GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { isLoggedIn } from '../redux/slices/LoginSlice';


const styles = {
  paper: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    // backgroundColor:'black',
  },
  textField: {
     marginBottom: '10px',
  },
  button: {
    marginTop: '20px',
  },
};

function SignIn() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch()

const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const submitHandler = (e) => {
    e.preventDefault()
    
    setLoading(true);

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
   
    const user = userCredential.user;
    toast.success("Login Successfull...")
    navigate('/')
   setLoading(false);
  dispatch(isLoggedIn(true))
  })
  .catch((error) => {
    setLoading(true);
    toast.error(error.message)
    setLoading(false);
  });

}

//login with google

const provider = new GoogleAuthProvider();

const signInWithGoogle = () => {
  
  signInWithPopup(auth, provider)
  .then((result) => {   
    const user = result.user;
    toast.success("Login Successfull...")
    navigate('/')
    dispatch(isLoggedIn(true))
    
  }).catch((error) => {
    toast.error(error.message)
  });
}

  return (
    <div  className='mt'>
       <ToastContainer position="top-center"/>
    <Paper style={styles.paper}>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <h1>Login</h1>
      </Box>
      <form onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              type='email'
              required
              value={email}
              onChange={(e)=> {setEmail(e.target.value)}}
              variant="outlined"
              fullWidth
              style={styles.textField}
            />
          </Grid>
          <Grid item xs={12}>
            {/* <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              style={styles.textField}
            /> */}

<FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            required
            value={password}
            onChange={(e)=> {setPassword(e.target.value)}}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              style={styles.button}
              type='submit'
            >
              Sign In
            </Button>
           <Box sx={{mt:'20px',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
           <Button sx={{backgroundColor:"red", color:"white"}} onClick={signInWithGoogle}><GoogleIcon/>Loign with Google</Button>
           <Box>
            <NavLink to='/register' className='textdecoration'>
            <small style={{color:'blue', cursor:'pointer'}}>New User? <b>Register</b> Now!</small>
            </NavLink>
           </Box>
           </Box>
          
          </Grid>
        </Grid>
      </form>
    </Paper>
    {loading && (
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </div>
  )
}

export default SignIn