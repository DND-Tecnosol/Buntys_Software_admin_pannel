import React from 'react'
import { Select, TextField, FormControl, Dialog, MenuItem, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { useSelector } from 'react-redux';
import { Delete, Edit } from '@mui/icons-material';
import { DataGrid } from '@mui/x-data-grid';
import { useState, useCallback } from 'react';

function Product() {
    const product = useSelector(state => state.product.product)
    const updateProduct = () => { }
    return (
        <>
            <Stack direction={"row"} justifyContent={"flex-end"} >
                <Button data-toggle="modal" data-target="#addproducts" variant='contained'>Add Product</Button>
            </Stack>
            <div>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell># No. </TableCell>
                                <TableCell align='justify'>Product Name</TableCell>
                                <TableCell align='justify'>Product Price</TableCell>
                                <TableCell align='justify'>Product Qty</TableCell>
                                <TableCell align='justify' >Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {product && product.map((row, key) => (
                                <TableRow
                                    key={key}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="">{++key}</TableCell>
                                    <TableCell component="th" scope="row">
                                        {row.event_name}
                                    </TableCell>
                                    <TableCell align="">{row.date}</TableCell>
                                    <TableCell align="">{row.date}</TableCell>
                                    <TableCell align="">{row.date}</TableCell>
                                    <TableCell>
                                        <IconButton onClick={() => updateProduct(row, row.id)}>
                                            <Edit color='warning' />
                                            <Delete color='error' />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
            <AddProductModel key="addproducts" />
            <UpdateProductModel />
        </>
    )
}

export default Product

const AddProductModel = ({ key }) => {
    const [proCate, setProCate] = useState("")
    const [proBrand, setProBrand] = useState("")
    const { product_categury, product_brand } = useSelector(state => state.product)
    const brandhandleChange = useCallback((e) => { setProBrand(e.target.value) }, [proCate])
    const categuryhandleChange = useCallback((e) => { setProCate(e.target.value) }, [proBrand])
    console.log(`product Brand id: ${proBrand}`);
    console.log(`product categury id: ${proCate}`);
    return (
        <>
            <div class="modal fade" id="addproducts" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">

                    <div class="modal-content">
                        <div class="modal-header border-0">
                            <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body border-0">
                            <div className="container">
                                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={1} >
                                    <TextField label="Product Name" fullWidth variant="filled" />
                                </Stack>
                                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={1}>
                                    <TextField
                                        select
                                        placeholder='Product Type'
                                        label="Product Type"
                                        variant="filled"
                                        fullWidth >
                                        <MenuItem value="inused">
                                            Insalon
                                        </MenuItem>
                                        <MenuItem value="selling">
                                            Selling
                                        </MenuItem>
                                    </TextField>

                                    <TextField
                                        select
                                        label="Product Categury"
                                        variant="filled"
                                        fullWidth
                                        defaultValue={proCate}
                                        onChange={categuryhandleChange}
                                        shado >
                                        {product_categury.map((e) => (
                                            <MenuItem key={e.id} value={e.id}>
                                                {e.name}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <TextField
                                        select
                                        label="Product Brand"
                                        variant="filled"
                                        fullWidth
                                        defaultValue={proBrand}
                                        onChange={brandhandleChange}
                                        shado >
                                        {product_brand && product_brand.map((e, key) => (
                                                <MenuItem key={e.id} value={e.id}>
                                                    {e.brand_name}
                                                </MenuItem>
                                            ))}
                                    </TextField>
                                </Stack>
                                <Stack direction={"row"} spacing={2} justifyContent={"center"} alignItems={"center"} my={1} >
                                    <TextField label="Product Cost" fullWidth variant="filled" />
                                    <TextField  label="Product Price" fullWidth variant="filled" />
                                    <TextField  label="Special Price" fullWidth variant="filled" />
                                </Stack>
                            </div>
                        </div>
                        <div class="modal-footer border-0">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
const UpdateProductModel = ({ key, data }) => {
    return (
        <>
            <div class="modal fade" id="updateproducts" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}