import React from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, IconButton, } from '@mui/material'
import { useSelector } from 'react-redux';
import { Edit } from '@mui/icons-material';

function ProductBrand() {
    const product_brand= useSelector(state => state.product.product_categury)
    const updateProductBrand=()=>{}
    return (
        <>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell># No. </TableCell>
                            <TableCell align='justify'>Brand Name</TableCell>
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
                                    {row.event_name}
                                </TableCell>
                                <TableCell align="">{row.date}</TableCell>
                                <TableCell>
                                    <IconButton onClick={() => updateProductBrand(row, row.id)}>
                                        <Edit color='warning' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default ProductBrand