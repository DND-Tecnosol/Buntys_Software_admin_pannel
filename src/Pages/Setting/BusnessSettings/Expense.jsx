import React, { forwardRef, useState } from 'react'
import Page from '../../../Layouts/Page'
import { FormControl, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { Box } from '@mui/system';
import apiRoutes, { appAxios } from './../../../Constants/apiRoutes';
import { fetchStoreclosingdate } from '../../../Store/Slice/All/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '@mui/icons-material';
import { Edit,ExpandMoreIcon } from '@mui/icons-material';
function Expense() {
  return (
    <>
    <TableContainer elevation={3} component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell># No. </TableCell>
              <TableCell>Day</TableCell>
              <TableCell align='justify'>Opem Time</TableCell>
              <TableCell align='justify'>Close Time</TableCell>
              <TableCell align='justify' >Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow
                
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="">1</TableCell>
                <TableCell component="th" scope="row">
                  {/* {row.event_name} */}
                  Sallery
                </TableCell>
                <TableCell align="">Hello</TableCell>
                <TableCell>
                  <IconButton >
                    <Edit color='warning' />
                  </IconButton>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Expense