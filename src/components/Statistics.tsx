import { Construction } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { DataGrid, GridColumns } from "@mui/x-data-grid";
import React from "react";
export type statiscticsProps ={
    name: string;
    statDate: {
        id: number,
        minValue: number,
        maxValue: number,
        avgValue: number
    }
}


export const Statistics: React.FC<statiscticsProps> = (statDateInp) => {
  
    const columns = React.useRef<GridColumns> ([
        {field: 'minValue', headerName: 'Minimal Value',
        flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'maxValue', headerName: 'Maximal Value',
        flex: 1, headerAlign: 'center', align: 'center' },
        {field: 'avgValue', headerName: 'Average Value',
        flex: 1, headerAlign: 'center', align: 'center' }
    ])


    return <Box sx={{height: '80vh', width: '80vw'}}>
         <Typography sx={{textAlign: 'center', fontStyle: 'italic', fontWeight:'bold'}}>{statDateInp.name}</Typography> 
    <DataGrid columns={columns.current} rows={[statDateInp.statDate]}/>
      </Box>
}


