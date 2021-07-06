
import React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {useStyles} from '../UI/Theme';
import moduleClasses from './SearchForm.modules.scss'
import Button from '@material-ui/core/Button';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const SearchForm  = ()=>{
    const classes = useStyles();

   
    const [selectedFromDate, setSelectedFromDate] = React.useState(new Date('2021-06-28T21:11:54'));
    const [selectedToDate, setSelectedToDate] = React.useState(new Date('2021-06-28T21:11:54'));

  const handleFromDateChange = (date) => {
    setSelectedFromDate(date);
 
  };

  const searchHandler =()=>{

  }
  const handleToDateChange = (date) => {
    setSelectedToDate(date);
  };

    return (
     <div >
           
  <MuiPickersUtilsProvider utils={DateFnsUtils}>
  <Grid container spacing={4} >
  <Grid item xs={12} sm={6} lg={3} >
        <KeyboardDatePicker
         
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedFromDate}
          onChange={handleFromDateChange}
       
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} >
        <KeyboardDatePicker
         
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          label="Date picker inline"
          value={selectedToDate}
          onChange={handleToDateChange}
        
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
        <Button type="submit" className={classes.btnClass} variant="contained" color="primary" onClick={searchHandler}>
            Search
          </Button>
          </Grid>
        </Grid>
        </MuiPickersUtilsProvider>
        <Grid container spacing={4}>
            <table>
                </table>
            </Grid>
            <Grid container spacing={4}>
                
            </Grid>
        </div>
    )

}
export default SearchForm;