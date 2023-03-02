import React from 'react'
import { FormControl, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { useSelector } from 'react-redux';
import { Edit } from '@mui/icons-material';

function ProductCategury() {

    const product_categury=useSelector(state=>state.product.product_categury)
const updateProductCategury=()=>{

}
  return (
    <div>
        <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># No. </TableCell>
              <TableCell align='justify'>Categury Name</TableCell>
              <TableCell align='justify' >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {product_categury.map((row, key) => (
              <TableRow
                key={key}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="">{++key}</TableCell>
                <TableCell component="th" scope="row">
                  {row.event_name}
                </TableCell>
                <TableCell align="">{row.date}</TableCell>
                <TableCell>
                  <IconButton onClick={() => updateProductCategury(row, row.id)}>
                    <Edit color='warning' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ProductCategury