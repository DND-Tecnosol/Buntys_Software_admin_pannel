import React, { forwardRef, useState } from 'react'
import Page from '../../../Layouts/Page'
import { FormControl, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { Box } from '@mui/system';
import apiRoutes, { appAxios } from './../../../Constants/apiRoutes';
import { fetchStoreclosingdate } from '../../../Store/Slice/All/storeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Delete } from '@mui/icons-material';
import { Edit,ExpandMoreIcon } from '@mui/icons-material';

function ManageStoreTime() {
  const [date, setDate] = useState();
  const [name, setName] = useState();
  const [alertmsg, setAlertmsg] = useState();
  const dispatch = useDispatch()

  const submit = () => {
    const data = {
      event_name: name,
      date: date,
      detail: alertmsg,
      status: true,
    }
    appAxios.post(apiRoutes.closingdate, data).then(e => {
      dispatch(fetchStoreclosingdate())
    })
  };

  const deleteDate = (id) => {
    appAxios.delete(apiRoutes.closingdate + id).then(() => dispatch(fetchStoreclosingdate()))
  };
  const updateCloseDate = (datas, id) => {
    const data = {
      event_name: datas.name,
      date: datas.date,
      detail: datas.alertmsg,
      status: true,
    }
    appAxios.put(apiRoutes.closingdate + id, data).then(() => dispatch(fetchStoreclosingdate()))
  };

  const time = useSelector(state => state.store.time)
  return (
    <div>
      <Container>
        <Stack
          direction="row"
          justifyContent="flex-end"
          // alignItems="center"
          // spacing={2}
          marginY={1}
        >
          <Button type="button" data-toggle="modal" data-target="#exampleModal" variant='contained'>Add Day</Button>
        </Stack>

      </Container>
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
            {time.map((row, key) => (
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
                  <IconButton onClick={() => updateCloseDate(row, row.id)}>
                    <Edit color='warning' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog border-0">
          <div class="modal-content border-0">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">Add Store Close Day</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body border-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-sm-12 mt-md-0 mt-sm-3">
                    <label>Open Time</label>
                    <TextField value={date} onChange={e => setDate(e.target.value)} variant='filled' type={"time"} title="Add Day" size='small' fullWidth />
                  </div>
                  <div className="col-md-6 col-sm-12 mt-md-0 mt-3">
                    <label>Close Time</label>
                    <TextField value={name} onChange={e => setName(e.target.value)} variant='filled' type={"time"} title="Event Name" fullWidth size='small' placeholder='Event Name' />
                  </div>
                </div>
                {/* <Stack spacing={3} width={"100%"}>
                </Stack> */}
              </div>
            </div>
            <div class="modal-footer border-0">
              <Button type="button" variant='text' onClick={submit} >Save</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStoreTime