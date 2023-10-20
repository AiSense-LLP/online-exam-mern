import React from 'react'
import './login.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';

import { FcGoogle } from "react-icons/fc";
import { CgFacebook } from "react-icons/cg";
import { AiFillApple } from "react-icons/ai";
export const Login = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className='loginpage'>
        <div className='Box'>
          <div className='loginHeader'>
            lets Sign you In
          </div>
          <div className='loginsubHeader'>
            Welcome Back , <br />
            You have been missed
          </div>
          <div className='loginUser'>
          <TextField id="outlined-basic" label="Name ,Phone No. & username" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
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
          <span className='forget'>forget Password ?</span>
          <btn className='signinbtn'>Sign in</btn>
          <div className='or'>
            <div className='line'></div>
            <div className='ortext'>or</div>
            <div className='line'></div>
          </div>
          <div className='icons'>
            <a href='#' target='_blank'> <FcGoogle className='icon'/></a>
            <a href='#' target='_blank'>  <CgFacebook className='icon2'/></a>
            <a href='#' target='_blank'>   <AiFillApple className='icon'/></a>
          </div>
          <span className='confirmation'>Don’t have an account ? <span className='regis'>Register Now</span>  </span>
        </div>
       
        </div>
      </div>
    </>
  )
}


