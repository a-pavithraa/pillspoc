import { createMuiTheme,lighten } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

import TextField from '@material-ui/core/TextField';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

import { shadows } from '@material-ui/system';

export const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background:{
        default:"#001026",
        paper:"#212529"
      }
    },
    colors:{
      default:"#001026",
        paper:"#212529"
    },
    status:{
      primary:"#868e96"
    },
    
    space: [0, 4, 8, 16, 16, 64],
    spacing:2
  }
   );

  export const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
      '& .MuiButton':{
        margin: theme.spacing(2),
        paddingBottom:theme.spacing(10)
      }
     
    },
    header:{
        fontWeight:"bolder",
width:'100%',
fontSize:'20px',
marginBottom:`20px`
    },
    main:{
      margin: "3rem auto",
      width: "90%"
    

    },
    btnClass:{
     
      border: 0,
      borderRadius: 3,
      
      color: 'white',
      height: 30,
      padding: '0 30px',
    }
   
  }));
  