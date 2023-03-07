import { Backdrop, Button, CircularProgress, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { Box } from '@mui/system';
import '../../App.css'
import { NavLink, useNavigate } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import { auth } from '../firebase/config';


const styles = {
  paper: {
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
  },
  textField: {
     marginBottom: '10px',
  },
  button: {
    marginTop: '20px',
  },
};

function Register() {

  const [showPassword, setShowPassword] = useState(false);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };


const submitHandler = async(e) => {
    e.preventDefault()
  //loading true
  setLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
  
    const user = userCredential.user;
    console.log(user);
    // false
    setLoading(false);
    
    toast.success('Registration Successful');
    console.log('Toast success message displayed');
    navigate('/signin')

  })
  .catch((error) => {
    setLoading(true);
    toast.error( error.message)
    setLoading(false);
  });

}

  return (
    <>
    <div  className='mt'>
    <ToastContainer position="top-center"/>
    <Paper style={styles.paper}>
      <Box sx={{display:'flex',justifyContent:'center'}}>
        <h2 style={{color:'green'}}>New User? Register Here</h2>
      </Box>
      <form onSubmit={submitHandler}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Email Address"
              variant="outlined"
              type='email'
              required
              fullWidth
              style={styles.textField}
              value={email}
              onChange={(e)=> {setEmail(e.target.value)}}
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
              Register
            </Button>
           <Box sx={{mt:'20px',display:'flex', justifyContent:'space-between',alignItems:'center'}}>
           <Button sx={{backgroundColor:"red", color:"white",marginRight:'15px'}}><GoogleIcon/>SignUp with Google</Button>
           <Box>
            <NavLink to='/signin' className='textdecoration'>
            <small style={{color:'blue', cursor:'pointer'}}>Already Registered? <b>Login!</b></small>
            </NavLink>
           </Box>
           </Box>
          
          </Grid>
        </Grid>
      </form>
    </Paper>
    </div>
    {loading && (
        <Backdrop open={loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      )}
    </>
  )
}

export default Register