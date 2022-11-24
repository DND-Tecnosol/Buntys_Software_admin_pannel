import { IconButton, Switch } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import { HiBellAlert } from 'react-icons/hi2';
import { MdAlarm, MdDoorbell, MdEdit } from 'react-icons/md';
import { useSelector } from 'react-redux';
import Page from '../Layouts/Page'


const data=[
    {id:1,name:'Bhautik',no:6358006532,address:'22 Shupushpak'},
    {id:2,name:'Ramesh',no:123456,address:'22 Shupushpak'},
    {id:3,name:'suresh',no:7896541,address:'22 Shupushpak'},
    {id:4,name:'Shumit',no:4256232145,address:'22 Shupushpak'},
    {id:5,name:'Bhumit',no:123546687,address:'22 Shupushpak'}
]

const Appoitment = ({ header }) => {
const [modelActive,setMopdelActive]=useState(false)
const [costomers,setCostomerData]=useState(data)

const {costomer}=useSelector((s)=>s.costomer)
const cetEguryFilter=(id,arr)=>arr.filter((arry)=>arry.id==id)



const clientDetail = (id)=>{
    // alert(id)
    setMopdelActive(true)
    setCostomerData(id)
    // console.log()
}
    return (
        <Page header={header}>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Costomer Name</th>
                        <th scope="col">Service</th>
                        <th scope="col">Staff Name</th>
                        <th scope="col">Time</th>
                        <th scope="col">Status</th>
                        <th scope="col">Reminder By (Stuff)</th>
                        <th scope="col">Reminder By (System)</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {costomer.map((e,k)=><AppoitmentTable clientClick={()=>clientDetail(e.id)} data={e}  />)}
                    {/* <AppoitmentTable /> */}
                </tbody>
            </table>
            {modelActive? 
            <>
            <div class="modal fade show" style={{display: 'block'}} id="hello" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" onClick={()=>setMopdelActive(false)} class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            {cetEguryFilter(costomers,costomer)[0].name || null}
                        </div>
                        <div class="modal-footer">
                            <button type="button" onClick={()=>setMopdelActive(false)} class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            </>
            : null }
        </Page>
    );
}

const AppoitmentTable = ({ clientClick,data }) => {
    const {name}=data
    return (
        <>
            <tr>
                <th scope="row">1</th>
                <td>
                    <span onClick={clientClick} className='text-link' role="button">
                        {name}
                    </span>
                </td>
                <td>Hair Cut</td>
                <td>Ramesh Bhai</td>
                <td>09:23 PM</td>
                <td>
                    <select class="custom-select border-0 bg-transparent" id="validationDefault04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Not Comeing</option>
                        <option>On The Way</option>
                        <option>Canceled</option>
                    </select>
                </td>
                <td><span className='text-success'>11:30 PM</span></td>
                <td tex ><span className='text-danger text-center'>No</span></td>
                <td>
                    <IconButton>
                        <HiBellAlert className='text-warning' size={18} />
                    </IconButton>
                    <IconButton>
                        <MdEdit className='text-danger' size={18} />
                    </IconButton>
                    <IconButton></IconButton>
                </td>
            </tr>
        </>
    )
}

export default Appoitment;
