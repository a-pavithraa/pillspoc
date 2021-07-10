import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import { useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {loginActions} from '../../store/login-slice';

const useStyles = makeStyles((theme) => ({
  root: {
   
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign:"left",
    marginLeft:theme.spacing(3)
  },
}));

const NavBar= ()=> {
  const classes = useStyles();
  const loggedIn = useSelector((state) => state.login.isLoggedIn);
  const history =useHistory();
  const dispatch = useDispatch();
  const logoutHandler =()=>{
    console.log("button click");
    dispatch(loginActions.logout());
    history.push("/login");  
 
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Stock Details
          </Typography>
          {loggedIn && <Button color="inherit" onClick={logoutHandler}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;