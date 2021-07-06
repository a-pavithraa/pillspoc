import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from "@material-ui/core/styles";
import {useContext} from 'react';
import AuthContext from '../../store/auth-context';
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
  const context = useContext(AuthContext);

  const buttonClickHandler =()=>{
    console.log("button click");
      
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
        
          <Typography variant="h6" className={classes.title}>
            Stock Details
          </Typography>
          {context.isLoggedIn && <Button color="inherit" onClick={context.onLogout}>Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;