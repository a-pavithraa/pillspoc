
import React,{useEffect} from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {useStyles} from '../components/UI/Theme';
import moduleClasses from './SearchForm.modules.scss'
import Button from '@material-ui/core/Button';
import { useSelector, useDispatch } from 'react-redux';
import {fetchTicks} from '../store/stockservice-actions';
import StockTable from '../components/StockTable/StockTable';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';



const SearchForm  = ()=>{
    const classes = useStyles();

   
    const [selectedFromDate, setSelectedFromDate] = React.useState(new Date('2021-06-28T21:11:54'));
    const [selectedToDate, setSelectedToDate] = React.useState(new Date('2021-06-28T21:11:54'));
    const ticks =  useSelector((state) => state.stockService.ticks);
    const dispatch = useDispatch();
 

  const handleFromDateChange = (date) => {
    setSelectedFromDate(date);
 
  };

  const searchHandler =()=>{

  }
  const handleToDateChange = (date) => {
    setSelectedToDate(date);
  };
  useEffect(()=>{
    dispatch(fetchTicks());   

  },[dispatch]);

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
         </Grid>
        <Grid item xs={12} sm={6} lg={3} >
        <Button type="submit" className={classes.btnClass} variant="contained" color="primary" onClick={searchHandler}>
            Search
          </Button>
          </Grid>
        </Grid>
        </MuiPickersUtilsProvider>
       
            <Grid container spacing={8} m={10} >
            <Grid item lg={12} >
              {ticks && ticks!==undefined && <StockTable data={ticks}/>}  
            </Grid>
            </Grid>
        </div>
    )

}
export default SearchForm;