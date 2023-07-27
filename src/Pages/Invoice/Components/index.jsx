import React, { useState } from 'react'
import { TextField, Autocomplete, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { applyOffers, removeOffers, removeVoucher, applyVoucher } from '../../../Store/Slice/All/invoiceItemsSlice'
import apiRoutes, { appAxios } from '../../../Constants/apiRoutes'
import { toast } from 'react-toastify'
import moment from 'moment'

export function Offers() {
    const offersData = useSelector(s => s.campign.offers).map(e => ({ id: e.id, label: e.name, data: e }))
    const {Offers_is ,Vaoucher_is ,Reward_is ,Wish_is ,Discount_is} = useSelector(s => s.invoiceItems.data)
    const [value, setValue] = useState("")
    const dispache = useDispatch() 
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth size='small' sx={{ my: 2 }}
                value={value} //self value
                onChange={(event, newValue) => setValue(newValue)}
                inputValue={value?.label} //input value
                options={offersData || []}
                renderInput={(params) => <TextField {...params} label="Movie" />}
            />

            {Offers_is &&
                <Button fullWidth variant='contained' onClick={() => dispache(removeOffers({ offer: value.data }))} >Remove Offers</Button> ||
                <Button fullWidth variant='contained' onClick={() => dispache(applyOffers({ offer: value.data }))} >Apply</Button>
            }
        </>
    )
}
export function WishOffers() {
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth size='small' sx={{ my: 2 }}

                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
}
export function Discount() {
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth size='small' sx={{ my: 2 }}

                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
}
export function Vaucher() {
    const { Vaoucher_is } = useSelector(s => s.invoiceItems.data)
    const dispache = useDispatch()
    const [code, setCode] = useState('')
    console.log();
    // appAxios.post(apiRoutes.voucherCode+code).then(e=>toast(e.data.msg))
    const checkCode = (code) => {
        appAxios.post(`${apiRoutes.voucherCode}${code}`).then(e => {
            if (e.data.res == 'applyed') {
                dispache(applyVoucher({ vaoucher:e.data.voucher }))  
            } else {
                toast.error(e.data.msg)
            }
        });
    }

    const removeCode = (code) => {
        appAxios.post(`${apiRoutes.voucherCoderemoved}${code}`).then(e => {
            if (e.data.res == 'removed') {
                dispache(removeVoucher({ vaoucher:e.data.voucher }))
            } else {
                toast.error(e.data.msg)
            }
        });
    }

    return (
        <>
            <TextField label="Voucher Code" onChange={e => setCode(e.target.value)} value={code} fullWidth size='small' sx={{ my: 2 }} />
            {Vaoucher_is &&
                <Button fullWidth variant='contained' onClick={() => removeCode(code)} >Remove Voucher</Button> ||
                <Button fullWidth size='small' onClick={() => checkCode(code)} variant='contained' >Apply</Button>
            }

        </>
    )
}
export function RewordPoints() {
    return (
        <>
            <Autocomplete
                disablePortal
                id="combo-box-demo"
                fullWidth size='small' sx={{ my: 2 }}

                renderInput={(params) => <TextField {...params} label="Movie" />}
            />
        </>
    )
}

//674256