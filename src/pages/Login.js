import React,{useContext,useState,useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import moduleClasses from './Login.module.scss';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import AuthContext from '../store/auth-context';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(2),
      width: '25ch'
      
    },
    '& .MuiInput-input':{
        paddingLeft: theme.spacing(4)
    }
  },
}));

const Login = ()=>{
    const classes = useStyles();
    const history = useHistory();
    const context = useContext(AuthContext);
    //const {isLoggedIn,isInvalidCredential}=context;
    const [userName,setUserName] =useState();
    const[password,setPassword]=useState();
    const setUserNameChange =(event)=>{
    
      setUserName(event.target.value);

    }
    const setPasswordChange =(event)=>{
      setPassword(event.target.value);

    }
    useEffect(() => {
      console.log('use effect called');
      if(context.isLoggedIn)
      history.push("/search");
    else if(context.isInvalidCredential){
      alert('Invalid credentials');
    }
     
    }, [context.isLoggedIn,context.isInvalidCredential])

    const loginHandler = (event)=>{
        event.preventDefault();
        console.log(userName+","+password);
        context.onLogin(userName,password);
     
      
    }
    return(<Box className = {moduleClasses.login}>
        <form className={classes.root} noValidate autoComplete="off">
        <Grid
  container
  direction="column"
  justify="center"
  alignItems="center"
  
>
  
<Grid item xs={12}>
<TextField required id="standard-required" label="User Name"   onChange={setUserNameChange}/>
    </Grid>
    <Grid item xs={12}>
    <TextField
          id="standard-password-input"
          label="Password"
          type="password"
        
          autoComplete="current-password"
          onChange={setPasswordChange}
        />
    </Grid>
    </Grid>
       
    <div className={moduleClasses.actions}>
          <Button type="submit"  variant="contained" color="primary" onClick={loginHandler}>
            Login
          </Button>
        </div>
      
        </form>
    </Box>);
    
  
}
export default Login;