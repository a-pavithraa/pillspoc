import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useDemoData } from '@material-ui/x-grid-data-generator';

const StockTable = (props)=>{
    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 1000,
        maxColumns: 6,
      });
    
      return (
        <div style={{ height: 400, width: '100%' }}>
          <DataGrid pagination {...data} />
        </div>
      );
}

export default StockTable;