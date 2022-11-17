import React,{useState} from 'react'
import { IconButton,Button, Switch } from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import apiRoutes from '../../../../Constants/apiRoutes';
import axios from 'axios';
import { fetchServices } from '../../../../Store/Slice/All/serviceSlice';

export default function ServiceManager() {
  const dispatch = useDispatch();
  const { service } = useSelector(state => state.service)
  console.log(service);
const DelateService=(id)=>{
       axios.delete(`${apiRoutes.Service}/${id}`).then(e=>{
        console.log(e.data.msg)
        dispatch(fetchServices())
      })
    }
  return (
    <>
    <div className="container d-flex justify-content-between">
      <div className="">
      </div>
      <Button variant='contained' data-toggle="modal"
            data-target="#services" className='my-3' color='warning'>
        Add Service
      </Button>
    </div>
      <div className="table-card bg-white rounded-lg m-3">
        <table class="table border-0">
          <thead className='border-0'>
            <tr className='border-0'>
              <th scope="col">#</th>
              <th scope="col">Service Name</th>
              <th scope="col">Price</th>
              <th scope="col">Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {service ?
              service.map((service, index) => {
                // const { name, status } = categury
                return (<>
                  <tr>
                    <th scope="row">{++index}</th>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton>
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton onClick={()=>DelateService(service.id)}>
                        <MdDelete color='red' size={20} />
                      </IconButton>
                    </td>
                  </tr>
                </>)
              }) : null
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

// const SwitchStatus=({status})=>{
// const [staus,setStatus] =useState(status)

//   const chengeStatus=()=>{
//    const newsta= setStatus(!status)

//   }
//   return(
//   <>
//   <Switch onChange={()=>}  />
//   </>
//   )
// }