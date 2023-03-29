import React, { useState, useCallback } from 'react'
import { FormControl, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import { Delete, Edit } from '@mui/icons-material';
import apiRoutes, { appAxios } from './../../../../../Constants/apiRoutes';
import { toast } from 'react-toastify';
import { fetchHairPatchtype } from './../../../../../Store/Slice/All/productSlice';



function ExtentionCategury() {

  const product_categury = useSelector(state => state.product.hairPatchtype)
  const [data, setData] = useState(false)
  const dispatch = useDispatch()
  const product_brand = useSelector(state => state.product.product_brand)
  const saveProductCategury = (names) => {
    appAxios.post(apiRoutes.hairpatchtype, { name: names }).then(e => {
      toast(e.data.msg)
      dispatch(fetchHairPatchtype())
    })
  }
  const updateProductCategury = (name, id) => {
    appAxios.put(apiRoutes.producttype + id, { name: name }).then(e => {
      toast(e.data.msg)
      dispatch(fetchHairPatchtype())
    })
  }

  const deleteProductCategury = (id) => {
    appAxios.delete(apiRoutes.producttype + id).then(e => {
      toast(e.data.msg)
      dispatch(fetchHairPatchtype())
    })
  }
  const update = useCallback((datas) => {
    console.log(data);
    setData(datas)
  }, [data])
  return (
    <>
      <Stack direction={"row"} justifyContent={"flex-end"} >
        <Button data-toggle="modal" data-target="#addproductsCategury" variant='contained'>Add Categury</Button>
      </Stack>
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
                <TableCell align="">{row.name}</TableCell>
                <TableCell>
                  <IconButton onClick={() => update(row)}>
                    <Edit color='warning' />
                  </IconButton>
                  <IconButton onClick={() => deleteProductCategury(row.id)}>
                    <Delete color='error' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <AddProductCateguryModel data={data} setData={setData} save={saveProductCategury} />
      {data && <AddProductCateguryModel setData={setData} data={data} update={updateProductCategury} />}
    </>
  )
}

export default ExtentionCategury

const AddProductCateguryModel = ({ data, save, update, setData }) => {
  const [names,setNames]=useState(data.name)
  return (
    <>
      <div class={`modal fade ${data ? "show" : ''}`} style={{ display: `${data ? "block" : "none"}` }} id="addproductsCategury" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">

          <div class="modal-content">
            <div class="modal-header border-0">
              <h5 class="modal-title" id="exampleModalLabel">Add Categury</h5>
              <button type="button" class="close" data-dismiss="modal" onClick={()=>setData(false)} aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body border-0">
              <div className="container">
                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={1} >
                  <TextField label="Categury Name" value={names} onChange={(e)=>setNames(e.target.value)}  fullWidth variant="filled" />
                </Stack>
              </div>
            </div>
            <div class="modal-footer border-0">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              {data ?
                <>
                  <button type="button" class="btn btn-primary" onClick={() => update(names, data.id)} >
                    Update changes
                  </button>
                </>
                :
                <>
                  <button type="button" class="btn btn-primary" onClick={() => save(names)} >
                    Save changes
                  </button>
                </>}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

