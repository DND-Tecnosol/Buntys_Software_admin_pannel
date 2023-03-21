import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import $ from "jquery";
import { display, Stack } from '@mui/system';
import { Button, Modal, Box, Typography, TextField, IconButton } from '@mui/material';
import apiRoutes, { appAxios } from './../../../../Constants/apiRoutes';
import { toast } from 'react-toastify';
import { fetchcostomerCetegury } from '../../../../Store/Slice/types/allCetegurytypesSlice'
import { EditRounded, Delete } from '@mui/icons-material';
import { useCallback } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
};


function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


function Index() {
  const [open, setOpen] = useState(false)
  const [data, setData] = useState(false)
  const [name, setName] = useState(data.name)
  const [minamount, setMinamount] = useState(data.minsale)
  const [maxamount, setMaxamount] = useState(data.maxsale)
  const costomerCategury = useSelector(state => state.categury.costomerCetegury)
  console.log(costomerCategury);
  const handleClose = () => {
    setOpen(!open)
  }
  const disapatch = useDispatch()
  const save = () => {
    appAxios.post(apiRoutes.costomerType, { name: name, minsale: minamount, maxsale: maxamount }).then(e => {
      toast(e.data.msg)
      disapatch(fetchcostomerCetegury())
    })
  }
  const edite = useCallback((row) => {
    setData(row)
    setOpen(!open)
  }, [data])
  const deletes = (id) => {

    appAxios.delete(apiRoutes.costomerType + id).then(
      e => {
        toast(e.data.msg)
        disapatch(fetchcostomerCetegury())
      }
    )

  }

  // modalOn()
  return (
    <>
      <Stack direction={"row"} justifyContent={"flex-end"} spacing={3}>
        <Button onClick={handleClose} >Create New Categury</Button>
      </Stack>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>name</TableCell>
              <TableCell align="right">Min (Amount)</TableCell>
              <TableCell align="right">Max (Amount)</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {costomerCategury && costomerCategury.map((row, key) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell >{++key}</TableCell>
                <TableCell >
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.minsale}</TableCell>
                <TableCell align="right">{row.maxsale}</TableCell>
                {/* <TableCell align="right">{row.carbs}</TableCell> */}
                <TableCell align="right">
                  {/* <IconButton onClick={() => {
                    edite(row)
                  }} >
                    <EditRounded color='warning' />
                  </IconButton> */}
                  <IconButton onClick={() => {
                    deletes(row.id)
                  }} >
                    <Delete color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <CateguryModel open={open} setOpen={setOpen} handleClose={handleClose} save={save} data={data} setData={setData} />
    </>
  )
}

export default Index

const CateguryModel = ({ data, open, handleClose, save, setOpen
  , setData }) => {
  console.log(data);
  const [name, setName] = useState(data.name || '')
  const [minamount, setMinamount] = useState(data.minsale)
  const [maxamount, setMaxamount] = useState(data.maxsale)


  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header border-0">
                <h5 class="modal-title" id="exampleModalLabel">{data ? "Update" : "New"} Categury </h5>
                <button type="button" onClick={() => {
                  setOpen(!open)
                  setData(false)
                }} class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body border-0">
                <input type="text" value={name} />
                <TextField fullWidth size='small' variant='filled' label="Name" value={name} onChange={(e) => setName(e.target.value)} />
                <div className="row mt-2">
                  <div className="col-md-6 col-sm-12 mt-md-0 mt-sm-2">
                    <TextField fullWidth size='small' variant='filled' label="Minimum Amount Of Totale Sale" value={minamount} onChange={(e) => setMinamount(e.target.value)} />
                  </div>
                  <div className="col-md-6 col-sm-12 mt-md-0 mt-sm-2">
                    <TextField fullWidth size='small' variant='filled' label="Maximum Amount Of Totale Sale" value={maxamount} onChange={(e) => setMaxamount(e.target.value)} />
                  </div>
                </div>
              </div>
              <div class="modal-footer border-0">
                <Button onClick={save} >Save</Button>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}