import { Grid, Paper, InputLabel, TextField, styled, FormControl, FormHelperText, Input, Button, Link } from '@mui/material'
import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import { FaClipboardList } from "react-icons/fa";
function SmsServiceProvider() {
    const [smsBal, setSmsBal] = useState(0)
    const [smsBalCamp, setSmsCampBal] = useState(0)

    useEffect(() => {
        axios.get('https://api.textlocal.in/balance/?apikey=NTE2YjRhNmYzMTQxNmYzNDU2MzE2YTM1NjgzNjcxNTM=').then(e => {
            setSmsBal(e.data.balance.sms)
        })
        axios.get('https://api.textlocal.in/balance/?apikey=Mzc0YzQ1Njc3MDUwNmY2ZjU2NTI2NzczNzEzNDZhNjI=').then(e => {
            setSmsCampBal(e.data.balance.sms)
        })
    }, [])
    console.log(window.location.host);
    return (
        <>
            <>
                <BsnlDltRegistration />
                <SmsServiceProviderAccount />
                <SmsCampServiceProviderAccount />
                <Button variant="contained" disabled>
                    Disabled
                </Button>
                <Button variant="contained" href="#contained-buttons">
                    Link
                </Button>
            </>
        </>
    )
}

export default SmsServiceProvider

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

/*
<div class="input-group mb-3">
<input type={show ? "text" : "password"} value={"Bunty's Hair Studio"} size='medium' class="form-control" />
<Button size='small' onClick={() => setshow(!show)} >
    {show ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
</Button>
</div>
*/

const BsnlDltRegistration = () => {
    const [show, setshow] = useState(0)

    return (
        <>
            <div className='container-fluid d-flex'>
                <Paper sx={{ width: '100%', margin: 2, padding: 3 }} >
                    <center><p className='my-3 fs-5' >Bsnl DLT Service Account</p></center>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input type="email" class="form-control" value='Bhautik Rathod' id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" value={'buntyhairstudio@gmail.com'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobaile No.</label>
                                <input type="email" class="form-control" value={'buntyhairstudio@gmail.com'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <div class="input-group mb-3">
                                <input type={show ? "text" : "password"} size='medium' value={'@12345@Buntys'} class="form-control" />
                                <Button size='small' onClick={() => setshow(!show)} >
                                    {show ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Account Expiry Date</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" value={'Oct. 19, 2023'} />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Entity ID</label>
                                <input type="email" class="form-control" value={'1401582170000050636'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Entity Name</label>
                            <input type="email" class="form-control" value={"Bunty's Hair Studio"} id="exampleFormControlInput1" />
                        </div>
                        {/* <div className='col-12'>
                                <label for="exampleFormControlInput1" class="form-label">Api Key</label>
                                <TextField multiline type="email" fullWidth id="exampleFormControlInput1" />
                            </div> */}
                    </div>
                    <Link
                        variant='button'
                        href={`http://${window.location.host}/assets/brand/EntityName.pdf`}
                        download="EntityVeryficationCertificate.pdf"
                    >
                        Downlode Certificate
                    </Link>
                </Paper>
            </div>
        </>
    )
}


const SmsServiceProviderAccount = () => {
    const [show, setshow] = useState(0)
    const [smsBal, setSmsBal] = useState(0)
    const [smsBalCamp, setSmsCampBal] = useState(0)

    useEffect(() => {
        axios.get('https://api.textlocal.in/balance/?apikey=NTE2YjRhNmYzMTQxNmYzNDU2MzE2YTM1NjgzNjcxNTM=').then(e => {
            setSmsBal(e.data.balance.sms)
        })
        axios.get('https://api.textlocal.in/balance/?apikey=Mzc0YzQ1Njc3MDUwNmY2ZjU2NTI2NzczNzEzNDZhNjI=').then(e => {
            setSmsCampBal(e.data.balance.sms)
        })
    }, [])
    return (
        <>
            <div className='container-fluid d-flex'>
                <Paper sx={{ width: '100%', margin: 2, padding: 3 }} >
                    <center><p className='my-3 fs-5' >Textlocal Sms Srvice Account</p></center>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input type="email" class="form-control" value='Manish' id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" value={'buntyhairstudio@gmail.com'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobaile No.</label>
                                <input type="email" class="form-control" value={'916358006532'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <div class="input-group mb-3">
                                <input type={show ? "text" : "password"} size='medium' value={'Buntys@1234'} class="form-control" />
                                <Button size='small' onClick={() => setshow(!show)} >
                                    {show ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Entity Name</label>
                            <input type="email" class="form-control" value={"Bunty's Hair Studio"} id="exampleFormControlInput1" />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Balance</label>
                            <input type="email" class="form-control" value={smsBal} id="exampleFormControlInput1" />
                        </div>
                        {/* <div className='col-12'>
                                <label for="exampleFormControlInput1" class="form-label">Api Key</label>
                                <TextField multiline type="email" fullWidth id="exampleFormControlInput1" />
                            </div> */}
                    </div>

                </Paper>
            </div>
        </>
    )
}
const SmsCampServiceProviderAccount = () => {
    const [show, setshow] = useState(0)
    const [smsBal, setSmsBal] = useState(0)
    const [smsBalCamp, setSmsCampBal] = useState(0)

    useEffect(() => {
        axios.get('https://api.textlocal.in/balance/?apikey=NTE2YjRhNmYzMTQxNmYzNDU2MzE2YTM1NjgzNjcxNTM=').then(e => {
            setSmsBal(e.data.balance.sms)
        })
        axios.get('https://api.textlocal.in/balance/?apikey=Mzc0YzQ1Njc3MDUwNmY2ZjU2NTI2NzczNzEzNDZhNjI=').then(e => {
            setSmsCampBal(e.data.balance.sms)
        })
    }, [])
    return (
        <>
            <div className='container-fluid d-flex'>
                <Paper sx={{ width: '100%', margin: 2, padding: 3 }} >
                    <center><p className='my-3 fs-5' >Textlocal Campign Sms Srvice Account</p></center>
                    <div className="row">
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">User Name</label>
                                <input type="email" class="form-control" value="Bunty's Hair & skin Studio" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" value={'dndtecnosol@gmail.com'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Mobaile No.</label>
                                <input type="email" class="form-control" value={'916358006532'} id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Password</label>
                            <div class="input-group mb-3">
                                <input type={show ? "text" : "password"} size='medium' value={'@Bhautik1432g'} class="form-control" />
                                <Button size='small' onClick={() => setshow(!show)} >
                                    {show ? <AiFillEye size={25} /> : <AiFillEyeInvisible size={25} />}
                                </Button>
                            </div>
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Entity Name</label>
                            <input type="email" class="form-control" value={"Bunty's Hair & skin Studio"} id="exampleFormControlInput1" />
                        </div>
                        <div className='col-sm-12 col-md-6 col-lg-4'>
                            <label for="exampleFormControlInput1" class="form-label">Balance</label>
                            <input type="email" class="form-control" value={smsBalCamp} id="exampleFormControlInput1" />
                        </div>
                        {/* <div className='col-12'>
                                <label for="exampleFormControlInput1" class="form-label">Api Key</label>
                                <TextField multiline type="email" fullWidth id="exampleFormControlInput1" />
                            </div> */}
                    </div>
                </Paper>
            </div>
        </>
    )
}