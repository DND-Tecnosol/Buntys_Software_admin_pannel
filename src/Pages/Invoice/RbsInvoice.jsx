import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

import { useDispatch, useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import { FiPlus } from 'react-icons/fi';
import { addItems, remItems, allItemsRem } from '../../Store/Slice/All/invoiceItemsSlice';
import { width } from '@mui/system';
import { MdRestoreFromTrash } from 'react-icons/md';

const optionsd = ['Option 1', 'Option 2'];


export default function RbsInvoice() {
    // var [totles,setTotale]=useState(0)
    const dispatch = useDispatch()

    const { items, totale } = useSelector((stae) => stae.invoiceItems)
    const serviceData = useSelector((stae) => stae.service.service)
    const staffData = useSelector((stae) => stae.stuff.staff)
    const serVicefind = (id) => serviceData.filter((data) => data.id === id)
    const stafffind = (id) => staffData.filter((data) => data.id === id)

    return (
        <>
        <div className="container-fluide">
        <div className="container">
            <div className="card">
                <div className="card-header">
                    New Costomer
                </div>
                <div className="body">

                </div>
            </div>
        </div>
        </div>
            <Button onClick={() => dispatch(allItemsRem())}>Clear All Items</Button>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Service</th>
                        <th scope="col">Staff</th>
                        <th scope="col">Qty</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        <th scope="col">Totale</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {items ? items.map((e, i) => {
                        // setTotale(e.totale)
                        var ik = ++i
                        return (
                            <tr>
                                <th scope="row">{ik}</th>
                                <td>{serVicefind(e.serviceId)[0].name}</td>
                                <td>{stafffind(e.staffId)[0].name}</td>
                                <td>{e.qty}</td>
                                <td>{e.price}</td>
                                <td>{e.disc}</td>
                                <td>{e.totale}</td>
                                <td>
                                    <IconButton onClick={() => dispatch(remItems({ id: --i, totale: e.totale }))}>
                                        <MdRestoreFromTrash color='red' />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    }) : null}
                    <tr>
                        {/* <th scope="row">3</th> */}
                        <td colspan="6" className='text-right px-5'>Totle</td>
                        <td>{totale}</td>
                        <td>{ }</td>
                    </tr>
                </tbody>
            </table>
            <InvoiceServiceSection />

        </>
    )
}

const InvoiceServiceSection = ({ title, label, plase, onchange, ...props }) => {
    const dispatch = useDispatch()
    const [serviceObj, setServiceObg] = useState({})
    const [staffId, setstaffId] = useState('')
    const [disc, setdisc] = useState(0)
    const [totale, settotale] = useState('')
    const [qty, setqty] = useState(1)
    const [price, setprice] = useState('')

    const serviceData = useSelector((stae) => stae.service.service)
    const staffData = useSelector((stae) => stae.stuff.staff)

    const service = serviceData.map((data) => ({ id: data.id, label: data.name }))
    const staff = staffData.map((data) => ({ id: data.id, label: data.name }))
    const serVicefind = (id) => setServiceObg(serviceData.filter((data) => data.id === id)[0])
    // const stafffind = (id) => setServiceObg(serviceData.filter((data) => data.id === id)[0])
    const getDiscount = (e) => {
        // setTotal(priceTotale)
    }
    function getFinalPrice(prices, discount1) {
        console.log(discount1);
        console.log(prices);
        return;
    }
    const addService = () => {

        const discountCheck = serviceObj.price - (serviceObj.price * (disc / 100)) >= serviceObj.minprice
        if (!discountCheck) {
            setdisc(0)
            return null
        }
        var state = {
            serviceId: serviceObj.id,
            staffId: staffId,
            price: serviceObj.price,
            disc: disc,
            totale: (serviceObj.price - (serviceObj.price * (disc / 100))) * qty,
            qty: qty
        }

        console.log(`${discountCheck} state ${JSON.stringify(state)} service obj ${JSON.stringify(serviceObj)}`);

        dispatch(addItems(state))
        console.log(state);
    }

    return (
        <>
                <div className="row d-flex justify-content-around">
                    <SearchSelect  onChange={(event, id) => serVicefind(id.id)} options={service} label="Add Service" />
                    <SearchSelect onChange={(event, id) => setstaffId(id.id)} options={staff} label="Add Staff" />
                    <div className="col-1">
                        <TextField id="outlined-basic" onChange={(e) => setqty(e.target.value)} value={qty} sx={{ width: '100%' }} label="Qty" variant="outlined" />
                    </div>
                    <div className="col-1">
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="Price" onChange={(e) => setprice(e.target.value)} value={serviceObj.price || ''} variant="outlined" />

                    </div>
                    <div className="col-1">
                        <TextField sx={{ width: '100%' }} id="outlined-basic" onChange={(e) => setdisc(e.target.value)} label="Discount" value={disc} variant="outlined" />

                    </div>
                    <div className="col-1">
                        <TextField sx={{ width: '100%' }} id="outlined-basic" label="totale" value={(serviceObj.price - (serviceObj.price * (disc / 100))) * qty || 0} variant="outlined" />
                    </div>

                    <Button variant='contained' startIcon={<FiPlus />}
                        onClick={addService}
                    >Add Service</Button>
                </div>
        </>
    );
}

const SearchSelect = ({ label,inputchange, ...data }) => {
    return (
        <>
            <div className="col-2">
                <Autocomplete
                    {...data}
                    disablePortal
                    id="combo-box-demo"
                    // sx={{ width: 300 }}
                    noOptionsText={'Nothing'}
                    renderInput={(params) => <TextField {...params} onChange={inputchange} label={label} />}
                />
            </div>
        </>
    )
}