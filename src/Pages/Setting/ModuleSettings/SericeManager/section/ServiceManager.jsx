import React, { useState } from 'react'
import { IconButton, Button, Switch ,Autocomplete,TextField} from '@mui/material';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import apiRoutes, { appAxios as axios } from '../../../../../Constants/apiRoutes';

import { fetchServices } from '../../../../../Store/Slice/All/serviceSlice';
import { refreshStore } from '../../../../../Store/Slice/refresh';
import { addmsg } from '../../../../../Store/Slice/All/msgSlice';
import { toast } from 'react-toastify';

export default function ServiceManager() {
  const [id, setid] = useState('')
  // var [name, setName] = useState();

  const dispatch = useDispatch();
  const { service } = useSelector(state => state.service)
  const { msg } = useSelector(state => state.msg)
  console.log(service);
  const DelateService = (id) => {
    axios.delete(`${apiRoutes.Service}${id}`).then(e => {
      toast.error(e.data.msg)
      dispatch(fetchServices())
    })
  }
  console.log(msg);
  return (
    <>
      <div>
        
      </div>
      <div className="container d-flex justify-content-between">
        <div className="">
        </div>
        <Button onClick={() => setid(0)} variant='contained' data-toggle="modal" data-target="#services" className='my-3' color='warning'>
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
                  <tr key={index} >
                    <th scope="row">{++index}</th>
                    <td>{service.name}</td>
                    <td>{service.price}</td>
                    <td>{service.status ? <span className='text-success'>Active</span> : <span className='text-danger'>DeActive</span>}</td>
                    <td>
                      <IconButton onClick={() => setid(service.id)} type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                        <MdEdit color='orange' size={20} />
                      </IconButton>
                      <IconButton onClick={() => DelateService(service.id)}>
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
