import React,{useState,useEffect} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import CircularProgress from '@material-ui/core/CircularProgress';
import Paper from '@material-ui/core/Paper';
import { useStyles } from '../UI/Theme';

const PositionGrid = (props)=>{
   
  
      const data1 =props.data.finance.result[0].portfolios[0].positions;
      console.log(data1);
      const classes = useStyles();
    
      const detail = data1.map(row=>
        <TableRow key={row.name}>
         
         <TableCell >{row.symbol}</TableCell>
         <TableCell >{row.lots[0].tradeDate}</TableCell>
         <TableCell >{row.lots[0].purchasePrice}</TableCell>
         <TableCell >{row.lots[0].quantity}</TableCell>
        </TableRow>
      );
  
      
      
        return (
          <div style={{ height: 400, width: '100%' }}>
             <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            
            <TableCell align="right">Symbol</TableCell>
            <TableCell align="right">Trade Date</TableCell>
            <TableCell align="right">Purchase Price</TableCell>
            <TableCell align="right">Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {detail}
        </TableBody>
      </Table>
    </TableContainer>
          
            </div>
         
        );
}

export default PositionGrid;