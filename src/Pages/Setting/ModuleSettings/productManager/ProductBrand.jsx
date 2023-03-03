import React, { useState } from 'react'
import { FormControl, TextField, Slide, Dialog, MenuItem, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'

import { useSelector, useDispatch } from 'react-redux';
import { Edit, Delete, PlusOne } from '@mui/icons-material';
import apiRoutes, { appAxios } from './../../../../Constants/apiRoutes';
import { toast } from 'react-toastify';
import { fetchProductBrand } from './../../../../Store/Slice/All/productSlice';
import { BsPlus } from 'react-icons/bs';
import { useCallback } from 'react';

function ProductBrand() {
    const [data, setData] = useState(false)
    const dispatch = useDispatch()
    const product_brand = useSelector(state => state.product.product_brand)
    const saveProductBrand = (names) => {
        appAxios.post(apiRoutes.productbrand, { name: names }).then(e => {
            toast(e.data.msg)
            dispatch(fetchProductBrand())
        })
    }
    const updateProductBrand = (name, id) => {
        appAxios.put(apiRoutes.productbrand + id, { name: name }).then(e => {
            toast(e.data.msg)
            dispatch(fetchProductBrand())
        })
    }

    const deleteProductBrand = (id) => {
        appAxios.delete(apiRoutes.productbrand + id).then(e => {
            toast(e.data.msg)
            dispatch(fetchProductBrand())
        })
    }
    const update = useCallback((datas) => {
        setData(datas)
    }, [data])
    return (
        <>
            <Stack direction={"row"} justifyContent={"flex-end"} >
                <Button data-toggle="modal" data-target="#addproductsbrands" variant='contained'>Add Product New Brand</Button>
            </Stack>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell># No. </TableCell>
                            <TableCell align='justify'>Brand Name</TableCell>
                            <TableCell align='justify' >Brand Logo Update</TableCell>
                            <TableCell align='justify' >Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {product_brand.map((row, key) => (
                            <TableRow
                                key={key}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="">{++key}</TableCell>
                                <TableCell component="th" scope="row">
                                    {row.brand_name}
                                </TableCell>
                                <TableCell align="">
                                    <Button variant="contained" component="label">
                                        Update Logo
                                        {/* <input hidden accept="image/*" multiple type="file" /> */}
                                    </Button>
                                </TableCell>
                                <TableCell>
                                    <IconButton>
                                        <input hidden accept="image/*" multiple type="file" />
                                        <BsPlus color='red' />
                                    </IconButton>
                                    <IconButton onClick={() => update(row)}>
                                        <Edit color='warning' />
                                    </IconButton>
                                    <IconButton onClick={() => deleteProductBrand(row.id)}>
                                        <Delete color='warning' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <AddProductModel save={saveProductBrand} data={data} />
            {data && <AddProductModel update={updateProductBrand} data={data} setData={setData} />}
        </>
    )
}

export default ProductBrand



const AddProductModel = ({ data, save, update, setData }) => {
    const [names, setName] = useState(data.brand_name)
console.log(data);
    return (
        <>
            <div class={`modal fade ${data ? "show" : null}`} style={{ display: `${data ? "block" : "none"}` }} id="addproductsbrands" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">

                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLabel">Add Brand</h5>
                            <button type="button" class="close" onClick={() => setData(false)} data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body border-0">
                            <div className="container">
                                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={1} >
                                    <TextField label="Brand Name" value={names} onChange={(e) => setName(e.target.value)} fullWidth variant="filled" />
                                </Stack>
                                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={2}>
                                    <Button variant="contained" fullWidth component="label">
                                        Upload Brand Logo For Web
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>
                                </Stack>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            {data ?
                                <>
                                    <button type="button" class="btn btn-primary" onClick={() => update(names,data.id)} >
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