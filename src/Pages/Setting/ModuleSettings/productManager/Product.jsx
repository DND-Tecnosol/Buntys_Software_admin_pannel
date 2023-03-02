import React from 'react'
import { FormControl, TextField, Slide, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Stack, Button, Container, InputBase, InputLabel, Input, IconButton, } from '@mui/material'
import { useSelector } from 'react-redux';
import { Delete, Edit } from '@mui/icons-material';

function Product() {
    const product = useSelector(state => state.product.product)
    const updateProduct = () => { }
    return (
        <>
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
            <AddProductModel />
            <UpdateProductModel />
        </>
    )
}

export default Product

const AddProductModel = () => {
    return (
        <>

        </>
    )
}
const UpdateProductModel = () => {
    return (
        <>

        </>
    )
}