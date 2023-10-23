import React from 'react'
import './Signup.css'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { InputLabel } from '@mui/material';
import FormControl from '@mui/material/FormControl';


export const SignUp = () => {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className='signuppage'>
        <div className='Box'>
          <div className='signupHeader'>
          Lets Register <br/> Account
          </div>
          <div className='signupsubHeader'>
          Hello user , you have<br/>
          a greatful journey
          </div>
          <div className='signupUser'>
          <TextField type='name' name='name' id="outlined-basic" label="Name" variant="outlined" />
          <TextField type='name' name='lastname' id="outlined-basic" label="Last Name" variant="outlined" />
          <TextField type='tel' name='tel' id="outlined-basic" label="Phone" variant="outlined" />
          <TextField type='email' name='email' id="outlined-basic" label="Email" variant="outlined" />
          <FormControl variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              name='password'
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
          
          <btn className='signupbtn'>Sign in</btn>
          
         
          <span className='confirmation'>Already  have an account ?    <span className='login'>Login</span>  </span>
        </div>
       
        </div>
      </div>
    </>
  )
}


